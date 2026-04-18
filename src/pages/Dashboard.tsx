import { Link } from 'react-router-dom';
import { Package, Download, Image as ImageIcon, Lock, Plus } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-zinc-50 min-h-screen font-sans text-zinc-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <div>
            <h1 className="font-sans text-3xl font-black tracking-tight mb-2">My Content</h1>
            <p className="text-zinc-500 font-medium text-sm">Manage your AI-generated spaces and material lists.</p>
          </div>
          <Link 
            to="/design" 
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-4 h-4 mr-2" /> New Redesign
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 - Unlocked */}
          <div className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all group">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" alt="Living Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-green-500/90 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm border border-green-400">
                Unlocked
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-1 tracking-tight">Modern Living Room</h3>
              <p className="text-xs text-zinc-400 font-medium mb-6">Generated Oct 12, 2023</p>
              <div className="flex gap-3">
                <button className="flex-1 bg-zinc-50 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-zinc-200 text-zinc-700 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                  <Download className="w-4 h-4" /> 4K Render
                </button>
                <button className="flex-1 bg-zinc-50 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-zinc-200 text-zinc-700 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                  <Package className="w-4 h-4" /> Materials
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Locked */}
          <div className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all group">
            <div className="aspect-[4/3] relative bg-zinc-900 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800" alt="Kitchen" className="w-full h-full object-cover opacity-60 blur-md group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center shadow-lg border border-white">
                  <Lock className="w-3.5 h-3.5 mr-2 text-zinc-400" /> Preview Saved
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-1 tracking-tight">Industrial Kitchen</h3>
              <p className="text-xs text-zinc-400 font-medium mb-6">Generated Oct 15, 2023</p>
              <Link to="/checkout" className="block w-full bg-indigo-600 text-white text-center py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-0.5">
                Unlock Content — €9.99
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
