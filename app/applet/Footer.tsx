import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="col-span-1 border-r-0 md:border-r border-zinc-800/50 pr-8">
            <Link to="/" className="font-sans text-xl font-black tracking-tight text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white text-zinc-950 flex items-center justify-center rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              BYB SHOP
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Get an incredible AI-powered room redesign. Just €9.99 plain and simple. No subscriptions or hidden fees.
            </p>
          </div>
          <div className="md:pl-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">Menu</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Home</Link></li>
              <li><Link to="/design" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Redesign Room</Link></li>
              <li><Link to="/dashboard" className="hover:text-white hover:translate-x-1 inline-block transition-transform">My Designs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} BYB SHOP. All rights reserved.
          </p>
          <div className="text-sm text-zinc-600 font-medium">
            100% Secure Payment via Stripe
          </div>
        </div>
      </div>
    </footer>
  );
}
