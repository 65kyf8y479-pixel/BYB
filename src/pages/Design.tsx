import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

export default function Design() {
  const [step, setStep] = useState(1);
  const [loadingText, setLoadingText] = useState("Analyzing spatial structure...");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [designId, setDesignId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setTimeout(() => setStep(2), 500);
    }
  };

  const handleStyleSelect = async (style: string) => {
    setStep(3);
    if (!imageFile) return;

    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('style', style);
      
      const res = await fetch('/api/design/generate', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.designId) {
        setDesignId(data.designId);
      } else {
         console.error(data.error);
         // Fallback timeout if server error
         setTimeout(() => setStep(4), 5000);
      }
    } catch (err) {
      console.error(err);
      setTimeout(() => setStep(4), 5000);
    }
  };

  useEffect(() => {
    if (step === 3) {
      const texts = [
        "Extracting architectural constraints...",
        "Orchestrating light and shadow...",
        "Curating material palette...",
        "Refining photorealism..."
      ];
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % texts.length;
        setLoadingText(texts[i]);
      }, 2000);

      // Polling logic
      let pollInterval: NodeJS.Timeout;
      if (designId) {
         pollInterval = setInterval(async () => {
            try {
              const res = await fetch(`/api/design/status/${designId}`);
              const data = await res.json();
              if (data.status === 'complete' || data.status === 'error') {
                 clearInterval(pollInterval);
                 setStep(4);
              }
            } catch (e) {}
         }, 3000);
      }

      return () => {
        clearInterval(interval);
        if (pollInterval) clearInterval(pollInterval);
      };
    }
  }, [step, designId]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-black flex flex-col pt-32 pb-24">
      
      <div className="max-w-2xl mx-auto w-full px-6 flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: UPLOAD */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl mb-3">Upload the Canvas</h2>
              <p className="text-black/50 text-sm tracking-wide mb-12">Submit an image of the space you wish to transform.</p>
              
              <div 
                className="border border-black/10 bg-white p-20 hover:border-black/30 transition-all duration-500 cursor-pointer group flex flex-col items-center justify-center relative"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-12 h-[1px] bg-black/20 mb-6 group-hover:w-16 group-hover:bg-black transition-all duration-500"></div>
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-black">Select Image</h3>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                />
              </div>
            </motion.div>
          )}

          {/* STEP 2: STYLE SELECTION */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl mb-3">Select the Aesthetic</h2>
              <p className="text-black/50 text-sm tracking-wide mb-12">Choose the architectural language for your space.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {['Parisian Elite', 'Minimalist Wabi-Sabi', 'Brutalist Elegance', 'Neo-Classical'].map((style, i) => (
                  <button 
                    key={style}
                    onClick={() => handleStyleSelect(style)}
                    className="p-8 border border-black/5 bg-white hover:border-black/20 transition-all duration-500 text-center group"
                  >
                    <span className="font-serif text-xl block text-black/80 group-hover:text-black transition-colors">{style}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: LOADING */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center flex flex-col items-center justify-center py-20"
            >
              <div className="w-[1px] h-16 bg-black/20 mb-8 overflow-hidden relative">
                <div className="w-full h-full bg-black absolute top-0 left-0 animate-[translate-y_1s_ease-in-out_infinite]"></div>
              </div>
              <h2 className="font-serif text-2xl mb-4 italic text-black/80">{loadingText}</h2>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">Powered by BYB SHOP</p>
            </motion.div>
          )}

          {/* STEP 4: REVEAL */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl mb-10">Your design is ready to be revealed.</h2>
              
              <div className="relative aspect-[16/9] mb-12 bg-black overflow-hidden border border-black/5">
                <img 
                  // Fallback if no imagePreview, though in a real flow we'd show the processed blurred one. We'll use the original or generic for the tease.
                  src={imagePreview || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600"} 
                  alt="Generated Room" 
                  className="w-full h-full object-cover opacity-30 blur-md grayscale scale-105" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center mb-4">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white text-xs tracking-[0.2em] uppercase">Awaiting Unlock</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout', { state: { designId } })} 
                className="inline-block px-12 py-4 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-black/80 transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
