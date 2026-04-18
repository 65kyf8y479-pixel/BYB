import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Science of Fidgeting: Why We Can't Sit Still",
    excerpt: "Discover the neurological reasons behind why clicking, spinning, and tapping actually help you focus better.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    category: "Science",
    date: "Oct 12, 2023"
  },
  {
    id: 2,
    title: "5 Desk Stretches to Relieve Workday Tension",
    excerpt: "Pair your fidget breaks with these simple stretches to completely reset your posture and mind.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
    category: "Wellness",
    date: "Oct 28, 2023"
  },
  {
    id: 3,
    title: "How to Build a 'Focus Zone' at Home",
    excerpt: "Tips for optimizing your workspace for maximum productivity and minimal anxiety.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000",
    category: "Productivity",
    date: "Nov 05, 2023"
  }
];

export default function Blog() {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen font-sans text-[var(--color-text)] pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">The Chill Blog.</h1>
          <p className="text-xl text-[var(--color-text)]/70 max-w-2xl mx-auto leading-relaxed">
            Tips, tricks, and science-backed strategies for managing stress and finding your focus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--color-text)]/5 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">{post.category}</span>
                  <span className="text-xs text-[var(--color-text)]/50">{post.date}</span>
                </div>
                <h2 className="font-display text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-[var(--color-text)]/70 text-sm mb-6 flex-grow">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
