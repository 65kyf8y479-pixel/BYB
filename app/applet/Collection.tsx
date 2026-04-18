import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Metal Fidgets', 'Stress Balls', 'Spinners'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[var(--color-bg)] min-h-screen font-sans text-[var(--color-text)] pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Shop All Fidgets.</h1>
          <p className="text-xl text-[var(--color-text)]/70 max-w-2xl mx-auto leading-relaxed">
            Find the perfect tool to keep your hands busy and your mind sharp.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                activeCategory === category
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-white text-[var(--color-text)] border border-[var(--color-text)]/10 hover:border-[var(--color-primary)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square bg-white rounded-3xl overflow-hidden mb-6 relative border border-[var(--color-text)]/5 shadow-sm group-hover:shadow-md transition-all">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {product.compareAtPrice && (
                    <div className="absolute top-4 left-4 bg-[var(--color-mint)] text-[var(--color-primary-dark)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      Sale
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">
                    {product.category}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                    {product.compareAtPrice && (
                      <span className="text-sm text-[var(--color-text)]/40 line-through">${product.compareAtPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
