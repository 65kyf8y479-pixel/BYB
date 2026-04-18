import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-zinc-50 min-h-screen font-sans text-zinc-900 overflow-hidden flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "BYB SHOP AI Room Redesign",
            "description": "Upload a photo of your space and get a fully rendered, stunning interior redesign in seconds. 100% money-back guarantee.",
            "brand": {
              "@type": "Brand",
              "name": "BYB SHOP"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://byb.shop",
              "priceCurrency": "EUR",
              "price": "9.99",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "BYB SHOP"
              }
            }
          }
        `}
      </script>

      {/* NEW HERO - Split Layout */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              One-Time Purchase. Zero Subscriptions.
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Redesign your room with AI.<br/>
              <span className="text-indigo-600">For only €9.99.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 mb-8 leading-relaxed max-w-lg">
              Upload a photo of your space and get a fully rendered, stunning interior redesign in seconds. Complete with a real-world material list.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/design" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                Start your redesign <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-500 font-medium">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=64&h=64" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-600">+10k</div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Trusted by 10,000+ users</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Beautifully redesigned room" 
              className="relative z-10 w-full h-[400px] lg:h-[90%] object-cover rounded-[2rem] shadow-2xl border border-zinc-200"
            />
            
            {/* Floating feature badge */}
            <div className="absolute bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 animate-[translate-y_3s_ease-in-out_infinite] hidden md:flex items-center gap-3">
              <div className="bg-green-100 text-green-600 p-2 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Delivered instantly</p>
                <p className="text-sm font-bold text-zinc-900">4K Render + Material List</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TRUST & BENEFITS */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why choose BYB SHOP?</h2>
            <p className="text-zinc-500 text-lg">Stop paying thousands for interior design concepts. We deliver better results instantly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-indigo-100 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 sm:mx-0 mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">One-Time €9.99 Payment</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">We are radically opposed to subscriptions. Pay exactly once, get your incredible high-resolution design, and keep it forever.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-indigo-100 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 sm:mx-0 mx-auto">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Photorealistic Quality</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">Our advanced multimodal AI strictly analyzes your room's geometric structure and maps luxurious new furnishings perfectly into space.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-indigo-100 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 sm:mx-0 mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Instant Delivery</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">No waiting days for an agency. Within 60 seconds you receive your unwatermarked files and actionable retail material list.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Loved by homeowners</h2>
            <p className="text-zinc-500 text-lg">Real results from real users redesigning their spaces.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
              <div className="flex text-amber-400 mb-4"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-zinc-700 mb-8 leading-relaxed font-medium">"I was quoted €800 just for a moodboard by a local designer. BYB SHOP gave me exactly what I needed for €9.99 in 30 seconds. The material list saved me weeks of sourcing."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">ST</div>
                <div>
                  <div className="font-bold text-sm">Sarah T.</div>
                  <div className="text-xs text-zinc-400">Homeowner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
              <div className="flex text-amber-400 mb-4"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-zinc-700 mb-8 leading-relaxed font-medium">"Finally an AI tool that doesn't force you into a monthly subscription. The single payment was refreshing and the image quality blew my mind. 10/10."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">ML</div>
                <div>
                  <div className="font-bold text-sm">Markus L.</div>
                  <div className="text-xs text-zinc-400">Renovator</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
              <div className="flex text-amber-400 mb-4"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-zinc-700 mb-8 leading-relaxed font-medium">"Used it to redesign my brutalist style home office. Best €9.99 I've ever spent. The lighting simulation is incredibly accurate."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">ER</div>
                <div>
                  <div className="font-bold text-sm">Elena R.</div>
                  <div className="text-xs text-zinc-400">Architect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 bg-zinc-950 text-white text-center px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to see your new room?</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-medium">Get started now. No account required, just €9.99 to unlock your flawless, high-resolution design.</p>
          <Link 
            to="/design" 
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-zinc-900 bg-white rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-300"
          >
            Start your redesign <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <div className="mt-8 flex items-center justify-center gap-2 text-zinc-500 font-medium text-sm">
            <ShieldCheck className="w-4 h-4" /> Secure checkout with Stripe
          </div>
        </div>
      </section>

    </div>
  );
}
