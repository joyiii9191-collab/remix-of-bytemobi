import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import imgLogo from "@/assets/logo-new.png";
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const navItems: Array<{ key: string; to: string }> = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.globalFlow', to: '/global' },
  { key: 'nav.japanFocus', to: '/japan' },
  { key: 'nav.programmaticAds', to: '/hopex' },
  { key: 'nav.mediaResources', to: '/media' },
  { key: 'nav.aboutUs', to: '/about' },
];

const languages: Language[] = ['CN', 'EN', 'JP'];

export function OptimizedHeader() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className="rounded-full px-8 py-3 flex items-center justify-between w-full max-w-6xl"
        style={{
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(28px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.6)',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow:
            '0 8px 32px -4px rgba(79,70,229,0.18), inset 0 1px 0 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(124,58,237,0.05)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={imgLogo} alt="ByteMobi" className="w-9 h-9 object-contain" />
        </Link>
        
        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.key}
                to={item.to}
                className="text-sm transition-all px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  color: active ? 'hsl(245 60% 35%)' : 'hsl(230 30% 25%)',
                  background: active ? 'rgba(99,102,241,0.12)' : 'transparent',
                  fontWeight: active ? 600 : 500,
                }}
                onMouseEnter={(e) => {
                  if (active) return;
                  e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  e.currentTarget.style.color = 'hsl(245 60% 35%)';
                }}
                onMouseLeave={(e) => {
                  if (active) return;
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'hsl(230 30% 25%)';
                }}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher */}
        <div
          className="flex items-center gap-0.5 shrink-0 rounded-full p-1"
          style={{
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(124,58,237,0.12)',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
              style={
                language === lang
                  ? {
                      background:
                        'linear-gradient(135deg, hsl(230 80% 60%) 0%, hsl(245 75% 58%) 50%, hsl(265 70% 60%) 100%)',
                      color: '#fff',
                      boxShadow: '0 2px 8px -1px rgba(99,102,241,0.5)',
                    }
                  : { color: 'hsl(230 25% 35%)' }
              }
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
