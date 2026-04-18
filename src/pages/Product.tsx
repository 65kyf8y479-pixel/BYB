import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Star, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id) || products[0];
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      navigate('/checkout');
    }, 800);
  };

  return (
    <div className="bg-[var(--color-bg)] min-h-screen font-sans text-[var(--color-text)] pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[var(--color-text)]/60 hover:text-[var(--color-primary)] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Focus Zone
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--color-text)]/5"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-white rounded-xl overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-[var(--color-primary)]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              {product.category}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[var(--color-mint)] text-[var(--color-mint)]" />
                <span className="font-bold">{product.rating}</span>
              </div>
              <span className="text-[var(--color-text)]/50 text-sm underline cursor-pointer">
                {product.reviews} Reviews
              </span>
            </div>

            <div className="flex items-end gap-3 mb-8">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.compareAtPrice && (
                <span className="text-xl text-[var(--color-text)]/40 line-through mb-1">${product.compareAtPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="text-[var(--color-text)]/70 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="font-bold text-sm uppercase tracking-widest border-b border-[var(--color-text)]/10 pb-2">Key Benefits</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text)]/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 ${
                isAdded 
                  ? 'bg-[var(--color-mint)] text-[var(--color-primary-dark)]' 
                  : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'
              }`}
            >
              {isAdded ? (
                <><Check className="w-5 h-5" /> Added to Cart</>
              ) : (
                'Add to Cart'
              )}
            </button>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[var(--color-text)]/10">
              <div className="flex items-center gap-3 text-sm text-[var(--color-text)]/70">
                <Truck className="w-5 h-5 text-[var(--color-primary)]" />
                <span>Free Fast Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-text)]/70">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                <span>30-Day Stress-Free Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
