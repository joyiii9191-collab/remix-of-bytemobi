import React from 'react';
import { motion } from 'motion/react';
import imgLogo from "@/assets/6cd6160d50ff71e9df1fcad0f48149dce2e9b97b.png";

export function OptimizedHeader() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div className="backdrop-blur-xl bg-[rgba(3,0,20,0.4)] border border-white/[0.08] rounded-full px-8 py-3 flex items-center justify-between shadow-2xl w-full max-w-5xl">
        {/* Logo */}
        <a href="https://reflect.app/home/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 shrink-0">
          <img src={imgLogo} alt="Reflect" className="w-9 h-9" />
          <span className="text-white font-medium text-base tracking-tight">Reflect</span>
        </a>
        
        {/* Nav Links */}
        <nav className="hidden md:flex items-center bg-white/[0.02] border border-white/[0.08] rounded-full px-4 py-2.5 gap-1">
          {['Product', 'Pricing', 'Company', 'Blog', 'Changelog'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm text-white/70 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/5"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5 shrink-0">
          <a href="https://reflect.app/auth" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-medium hover:text-white/80 transition-colors">
            Login
          </a>
          <a 
            href="https://reflect.app/auth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-sm text-[#f4f0ff] font-medium px-4 py-2 rounded-lg backdrop-blur-sm overflow-hidden transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(180deg, rgba(60,8,126,0) 0%, rgba(60,8,126,0.32) 100%), linear-gradient(90deg, rgba(113,47,255,0.12) 0%, rgba(113,47,255,0.12) 100%)',
              boxShadow: 'inset 0 0 12px rgba(191,151,255,0.24)',
            }}
          >
            <div 
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(207,184,255,0.24) 0%, rgba(207,184,255,0) 100%), linear-gradient(90deg, rgba(207,184,255,0.32) 0%, rgba(207,184,255,0.32) 100%)',
                maskImage: 'linear-gradient(to right, white 0%, transparent 100%)',
              }}
            />
            Start free trial
          </a>
        </div>
      </div>
    </motion.header>
  );
}
