import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'CN' | 'EN' | 'JP';

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Nav
  'nav.home': { CN: '首页', EN: 'Home', JP: 'ホーム' },
  'nav.globalFlow': { CN: '全球汇流', EN: 'Global Flow', JP: 'グローバルフロー' },
  'nav.japanFocus': { CN: '日本聚势', EN: 'Japan Focus', JP: '日本フォーカス' },
  'nav.programmaticAds': { CN: '程序化广告', EN: 'Programmatic Ads', JP: 'プログラマティック広告' },
  'nav.mediaResources': { CN: '大媒体资源', EN: 'Media Resources', JP: 'メディアリソース' },
  'nav.aboutUs': { CN: '关于我们', EN: 'About Us', JP: '私たちについて' },
  // Hero
  'hero.title': { CN: '连接全球流量', EN: 'Connect Global Traffic', JP: 'グローバルトラフィックを接続' },
  'hero.subtitle': { CN: '智能广告解决方案，助力品牌出海', EN: 'Smart advertising solutions for global brands', JP: 'スマート広告ソリューション' },
  'hero.cta': { CN: '立即咨询', EN: 'Get Started', JP: '今すぐ相談' },
  'hero.learnMore': { CN: '了解更多', EN: 'Learn More', JP: '詳細を見る' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('CN');

  const t = useCallback((key: string) => {
    return translations[key]?.[language] ?? key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
