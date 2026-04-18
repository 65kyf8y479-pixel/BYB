import { motion } from 'motion/react';
import { ArrowRight, Heart, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen font-sans text-[var(--color-text)] pt-10 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Why We Fidget.</h1>
          <p className="text-xl text-[var(--color-text)]/70 max-w-2xl mx-auto leading-relaxed">
            We believe that keeping your hands busy is the secret to keeping your mind clear. Welcome to BYB SHOP.
          </p>
        </motion.div>

        <div className="aspect-video bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--color-text)]/5 mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt="Team working together" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/10 mix-blend-multiply"></div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-[var(--color-text)]/80">
              <p>
                It started in a boring meeting. You know the kind—fluorescent lights, endless slides, and that overwhelming urge to just <em>do something</em> with your hands. We were clicking pens, peeling labels, and tapping our feet, driving everyone (including ourselves) crazy.
              </p>
              <p>
                We realized that this restless energy wasn't a distraction; it was our brain's way of trying to focus. But the tools we had were either noisy, flimsy, or just plain embarrassing to use in a professional setting.
              </p>
              <p>
                That's when BYB SHOP was born. We set out to create premium, satisfying, and silent fidget tools designed for adults who need to lock in, lower anxiety, and banish boredom.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-text)]/5 text-center">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold mb-2">Boost Focus</h3>
              <p className="text-sm text-[var(--color-text)]/70">Channel restless energy into tactile feedback, helping your brain stay on task.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-text)]/5 text-center">
              <div className="w-12 h-12 bg-[var(--color-mint)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-[var(--color-mint)]" />
              </div>
              <h3 className="font-bold mb-2">Lower Anxiety</h3>
              <p className="text-sm text-[var(--color-text)]/70">Rhythmic, repetitive motions are scientifically proven to calm the nervous system.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-text)]/5 text-center">
              <div className="w-12 h-12 bg-[#FFB6C1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-[#FFB6C1]" />
              </div>
              <h3 className="font-bold mb-2">Premium Quality</h3>
              <p className="text-sm text-[var(--color-text)]/70">Built with aerospace-grade metals and durable silicones. No cheap plastic here.</p>
            </div>
          </section>

          <section className="bg-[var(--color-primary)] text-white p-12 rounded-3xl text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Ready to find your focus?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Join thousands of professionals, students, and everyday fidgeters who have upgraded their focus game.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-[var(--color-mint)] hover:text-[var(--color-primary-dark)] transition-colors"
            >
              Shop The Collection <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </section>
        </div>

      </div>
    </div>
  );
}
