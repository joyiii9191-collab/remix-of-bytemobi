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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-black/[0.06] shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src={imgLogo} alt="ByteMobi" className="w-9 h-9 object-contain" />
        </a>
        
        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navKeys.map((key) => (
            <a 
              key={key} 
              href={`#${key.split('.')[1]}`} 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-black/[0.04] font-medium"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center gap-1 shrink-0 bg-gray-100 rounded-full p-1">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                language === lang
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
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
