import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-zinc-100 transition-all">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-sans text-xl font-black tracking-tight text-zinc-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              BYB SHOP
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <div className="flex space-x-6 items-center">
              <Link to="/design" className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">Start Design</Link>
              <Link to="/dashboard" className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">My Content</Link>
            </div>
            <div className="h-6 w-px bg-zinc-200"></div>
            <Link 
              to="/design" 
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 hover:scale-105 transition-all shadow-sm shadow-indigo-600/20"
            >
              Redesign for €9.99
            </Link>
          </div>
          
          {/* Mobile CTA */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/design" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-indigo-700 transition-all shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
