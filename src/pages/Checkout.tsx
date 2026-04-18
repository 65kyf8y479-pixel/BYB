import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, LockKeyhole } from 'lucide-react';

export default function Checkout() {
  const location = useLocation();
  const designId = location.state?.designId;

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ designId })
      });
      const data = await res.json();
      if (data.url && data.url.startsWith('/')) {
        window.location.href = data.url; // Mock fallback
      } else if (data.url) {
        window.location.href = data.url; // Stripe
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-zinc-50 min-h-screen font-sans text-zinc-900 pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-6">
        
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT SIDE - Value Reinforcement */}
          <div className="bg-zinc-950 text-white p-10 md:p-14 md:w-5/12 flex flex-col justify-between relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-black mb-2">BYB SHOP</h2>
              <p className="text-zinc-400 font-medium mb-12">One secure payment. Forever yours.</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500/20 p-1.5 rounded-full text-indigo-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">4K Resolution Render</h4>
                    <p className="text-xs text-zinc-400 mt-1">Watermark strictly removed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500/20 p-1.5 rounded-full text-indigo-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Retail Material List</h4>
                    <p className="text-xs text-zinc-400 mt-1">Links to furnishings and decor.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500/20 p-1.5 rounded-full text-indigo-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Instant Access</h4>
                    <p className="text-xs text-zinc-400 mt-1">Download your files immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-indigo-400" />
                <div>
                  <div className="font-bold text-sm">100% Guarantee</div>
                  <div className="text-xs text-zinc-400">Risk-free secure transaction.</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Checkout Action */}
          <div className="p-10 md:p-14 md:w-7/12 flex flex-col justify-center">
            <h1 className="text-3xl font-black mb-2 tracking-tight">Unlock Design</h1>
            <p className="text-zinc-500 font-medium text-sm mb-10">Complete your secure payment to instantly access your AI-generated redesign.</p>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-8 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-zinc-900">One-Time Access</h3>
                <p className="text-xs text-zinc-500 font-medium mt-1">No subscriptions. Ever.</p>
              </div>
              <div className="text-3xl font-black text-indigo-600">€9.99</div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-indigo-600 text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              Pay securely via Stripe <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-zinc-400 font-medium text-xs">
              <LockKeyhole className="w-3.5 h-3.5" /> 256-bit encryption. Safe & secure.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
