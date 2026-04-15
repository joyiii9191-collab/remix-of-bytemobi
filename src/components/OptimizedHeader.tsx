import React from 'react';
import { motion } from 'motion/react';
import imgLogo from "@/assets/ByteMobiLOGO-02.png";
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const navKeys = [
  'nav.home',
  'nav.globalFlow',
  'nav.japanFocus',
  'nav.programmaticAds',
  'nav.mediaResources',
  'nav.aboutUs',
];

const languages: Language[] = ['CN', 'EN', 'JP'];

export function OptimizedHeader() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div className="backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] rounded-full px-8 py-3 flex items-center justify-between shadow-2xl w-full max-w-6xl">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src={imgLogo} alt="ByteMobi" className="w-9 h-9 object-contain" />
        </a>
        
        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navKeys.map((key) => {
            const navId = key.split('.')[1];
            const href = navId === 'globalFlow' ? '/global-flow' : `#${navId}`;
            return (
              <a 
                key={key} 
                href={href}
                className="text-sm text-white/70 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/[0.08] whitespace-nowrap"
              >
                {t(key)}
              </a>
            );
          })}
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center gap-0.5 shrink-0 bg-white/[0.06] border border-white/[0.08] rounded-full p-1">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                language === lang
                  ? 'bg-white/[0.15] text-white shadow-sm'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
