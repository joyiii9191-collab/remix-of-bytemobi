import React from 'react';
import { motion } from 'motion/react';

export function OptimizedHeader() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
    >
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <span className="text-white font-medium tracking-tight">Reflect</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'Desktop', 'Blog'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm text-white/80 hover:text-white transition-colors">Log in</button>
          <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-all active:scale-95">
            Sign up
          </button>
        </div>
      </div>
    </motion.header>
  );
}
