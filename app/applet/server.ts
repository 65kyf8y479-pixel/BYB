import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import { GoogleGenAI, Type } from "@google/genai";
import Stripe from "stripe";
import fs from "fs";

// Initialize AI and Stripe
// Notice we use lazy initialization later if keys are not universally required,
// but for the backend, we typically check when processing.
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-02-24.acacia' as any }) : null;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory store for design generations (in a real app, use Postgres/Redis)
const designsStore = new Map();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON middleware for API routes except webhooks which need raw body
  app.use((req, res, next) => {
    if (req.originalUrl === '/api/webhooks/stripe') {
      next();
    } else {
      express.json()(req, res, next);
    }
  });

  const upload = multer({ storage: multer.memoryStorage() });

  // Health route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "BYB SHOP Platform Active" });
  });

  // Stripe Webhook (Dummy implementation placeholder)
  app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
    // Process payment and unlock the design
    const sig = req.headers['stripe-signature'];
    console.log("Received webhook");
    res.json({ received: true });
  });

  // Create checkout session
  app.post("/api/checkout", async (req, res) => {
    const { designId } = req.body;
    let amount = 999;
    
    if (!stripe) {
      // Mock flow if no stripe
      console.warn("No Stripe Key. Mocking payment success.");
      setTimeout(() => {
        const design = designsStore.get(designId);
        if (design) { design.unlocked = true; designsStore.set(designId, design); }
      }, 1000);
      return res.json({ url: `/dashboard` });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'eur',
            product_data: { name: `BYB SHOP Room Redesign` },
            unit_amount: amount,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: `http://localhost:3000/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/checkout?cancelled=true`,
        client_reference_id: designId
      });
      res.json({ url: session.url });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // AI Pipeline Route
  app.post("/api/design/generate", upload.single('image'), async (req, res) => {
    try {
      const file = req.file;
      const { style } = req.body;

      if (!file) return res.status(400).json({ error: "Image file required" });
      if (!style) return res.status(400).json({ error: "Style required" });
      if (!ai) return res.status(500).json({ error: "GEMINI_API_KEY environment variable is required" });

      const base64Image = file.buffer.toString("base64");
      const mimeType = file.mimetype;

      const designId = `design_${Date.now()}`;
      
      // We respond early and do the generation in the background to avoid timeouts
      res.json({ designId, status: "processing" });

      // -- BACKGROUND PIPELINE --
      try {
        // Stage 1 & 2: Image Understanding and Design Planning
        console.log(`[${designId}] Stage 1 & 2: Architectural extraction and planning...`);
        const planningResponse = await ai.models.generateContent({
          model: "gemini-3.1-pro-preview",
          contents: {
            parts: [
              { inlineData: { data: base64Image, mimeType: mimeType } },
              { text: `Analyze this room. The user wants to redesign it in a '${style}' style. 
              Output a JSON describing:
              1. A detailed image generation prompt we can give to a diffusion model to render the redesigned room, strictly following the ${style} aesthetic but keeping the same structural boundaries.
              2. A list of 4-6 key furniture pieces or materials (e.g. 'Calacatta Marble Coffee Table', 'Bouclé Sofa') that fit this aesthetic. Include an estimated luxury price point in EUR and a category.` }
            ]
          },
          config: {
            responseMimeType: "application/json",
            responseSchema: {
               type: Type.OBJECT,
               properties: {
                 imageGenerationPrompt: { type: Type.STRING },
                 materials: {
                   type: Type.ARRAY,
                   items: {
                     type: Type.OBJECT,
                     properties: {
                       name: { type: Type.STRING },
                       category: { type: Type.STRING },
                       estimatedPriceEur: { type: Type.NUMBER }
                     }
                   }
                 }
               }
            }
          }
        });
        
        const plan = JSON.parse(planningResponse.text || "{}");

        // Stage 3: Image Generation
        console.log(`[${designId}] Stage 3: Generative render...`);
        const imageResponse = await ai.models.generateContent({
          model: 'gemini-3.1-flash-image-preview',
          contents: {
            parts: [
              { inlineData: { data: base64Image, mimeType: mimeType } },
              { text: plan.imageGenerationPrompt || `Redesign this room entirely in ${style} aesthetic, photorealistic, architectural digest, luxury interior.` }
            ]
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
              imageSize: "1K"
            }
          }
        });

        let generatedImageBase64 = null;
        if (imageResponse.candidates && imageResponse.candidates[0].content.parts) {
            for (const part of imageResponse.candidates[0].content.parts) {
              if (part.inlineData) {
                generatedImageBase64 = part.inlineData.data;
                break;
              }
            }
        }
        
        const finalImageUrl = generatedImageBase64 ? `data:image/png;base64,${generatedImageBase64}` : null;

        // Save successfully
        designsStore.set(designId, {
          id: designId,
          status: "complete",
          style,
          imageUrl: finalImageUrl,
          materials: plan.materials,
          unlocked: false,
          createdAt: Date.now()
        });
        console.log(`[${designId}] Design complete.`);
        
      } catch(err: any) {
        console.error(`[${designId}] Pipeline error:`, err);
        designsStore.set(designId, { status: "error", error: err.message });
      }

    } catch (err: any) {
      console.error(err);
      if (!res.headersSent) res.status(500).json({ error: err.message });
    }
  });
  
  // Polling route to check design status
  app.get("/api/design/status/:id", (req, res) => {
    const design = designsStore.get(req.params.id);
    if (!design) return res.status(404).json({ error: "Not found" });
    res.json(design);
  });

  // Get all designs
  app.get("/api/designs", (req, res) => {
    res.json(Array.from(designsStore.values()));
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('/*', (req, res, next) => {
        if (req.path.startsWith('/api')) return next();
        res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
