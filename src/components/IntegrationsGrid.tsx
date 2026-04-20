import React from "react";
import "../components/LiquidGlassCard.css";

/* ---------- Rich illustrative icons (fill the card) ---------- */
const GlobeIllustration = () => (
  <svg width="76" height="76" viewBox="0 0 100 100" aria-label="Global Japan">
    <defs>
      <radialGradient id="globeFill" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stopColor="hsl(220, 95%, 75%)" />
        <stop offset="50%" stopColor="hsl(245, 80%, 60%)" />
        <stop offset="100%" stopColor="hsl(265, 70%, 38%)" />
      </radialGradient>
      <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsla(245, 90%, 65%, 0.45)" />
        <stop offset="100%" stopColor="hsla(245, 90%, 65%, 0)" />
      </radialGradient>
      <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsla(265, 80%, 70%, 0.9)" />
        <stop offset="100%" stopColor="hsla(220, 90%, 70%, 0.2)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="46" fill="url(#globeGlow)" />
    <ellipse cx="50" cy="50" rx="44" ry="14" fill="none" stroke="url(#orbitGrad)" strokeWidth="1.2" transform="rotate(-20 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="10" fill="none" stroke="url(#orbitGrad)" strokeWidth="0.9" opacity="0.7" transform="rotate(25 50 50)" />
    <circle cx="50" cy="50" r="28" fill="url(#globeFill)" />
    <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="hsla(0,0%,100%,0.35)" strokeWidth="0.8" />
    <ellipse cx="50" cy="50" rx="10" ry="28" fill="none" stroke="hsla(0,0%,100%,0.3)" strokeWidth="0.8" />
    <ellipse cx="50" cy="50" rx="20" ry="28" fill="none" stroke="hsla(0,0%,100%,0.22)" strokeWidth="0.7" />
    <line x1="22" y1="50" x2="78" y2="50" stroke="hsla(0,0%,100%,0.35)" strokeWidth="0.8" />
    <path d="M36 42 Q42 38 48 42 T58 44 Q60 48 56 50 T48 52 Q42 54 38 50 Z" fill="hsla(0,0%,100%,0.28)" />
    <path d="M40 60 Q46 58 52 62 Q54 66 50 68 Q44 68 40 64 Z" fill="hsla(0,0%,100%,0.22)" />
    <circle cx="64" cy="46" r="3.2" fill="hsl(0, 85%, 60%)" />
    <circle cx="64" cy="46" r="6" fill="none" stroke="hsl(0, 85%, 60%)" strokeWidth="1" opacity="0.55" />
    <circle cx="64" cy="46" r="9.5" fill="none" stroke="hsl(0, 85%, 60%)" strokeWidth="0.7" opacity="0.3" />
    <circle cx="22" cy="34" r="1.8" fill="hsl(220, 95%, 80%)" />
    <circle cx="78" cy="68" r="1.8" fill="hsl(265, 90%, 80%)" />
    <circle cx="30" cy="72" r="1.4" fill="hsl(220, 95%, 80%)" opacity="0.8" />
  </svg>
);

const SolutionIllustration = () => (
  <svg width="76" height="76" viewBox="0 0 100 100" aria-label="One-stop solution">
    <defs>
      <linearGradient id="cardA" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(220, 95%, 70%)" />
        <stop offset="100%" stopColor="hsl(245, 85%, 55%)" />
      </linearGradient>
      <linearGradient id="cardB" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(265, 85%, 70%)" />
        <stop offset="100%" stopColor="hsl(285, 75%, 55%)" />
      </linearGradient>
      <linearGradient id="cardC" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(195, 95%, 70%)" />
        <stop offset="100%" stopColor="hsl(220, 90%, 60%)" />
      </linearGradient>
      <radialGradient id="solGlow" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="hsla(260, 90%, 65%, 0.4)" />
        <stop offset="100%" stopColor="hsla(260, 90%, 65%, 0)" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="52" r="46" fill="url(#solGlow)" />
    <rect x="18" y="22" width="54" height="38" rx="8" fill="url(#cardC)" opacity="0.85" transform="rotate(-10 45 41)" />
    <rect x="24" y="30" width="54" height="38" rx="8" fill="url(#cardB)" transform="rotate(-2 51 49)" />
    <rect x="22" y="40" width="56" height="40" rx="9" fill="url(#cardA)" />
    <rect x="30" y="50" width="24" height="3.5" rx="1.75" fill="hsla(0,0%,100%,0.85)" />
    <rect x="30" y="58" width="38" height="2.5" rx="1.25" fill="hsla(0,0%,100%,0.55)" />
    <rect x="30" y="64" width="30" height="2.5" rx="1.25" fill="hsla(0,0%,100%,0.45)" />
    <circle cx="68" cy="52" r="6.5" fill="hsla(0,0%,100%,0.95)" />
    <path d="M65 52 L67.5 54.5 L71.5 50" fill="none" stroke="hsl(245, 85%, 55%)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="84" cy="28" r="1.6" fill="hsl(265, 90%, 75%)" />
    <circle cx="14" cy="70" r="1.4" fill="hsl(220, 95%, 75%)" />
    <circle cx="80" cy="78" r="1.2" fill="hsl(245, 90%, 75%)" opacity="0.8" />
  </svg>
);
import partnerApp1 from "@/assets/partner-app-1.png";
import partnerApp2 from "@/assets/partner-app-2.png";
import partnerApp3 from "@/assets/partner-app-3.png";

const PARTNER_APP_LOGOS: { key: string; src: string; alt: string }[] = [
  { key: "app1", src: partnerApp1, alt: "合作 App 1" },
  { key: "app2", src: partnerApp2, alt: "DramaStar" },
  { key: "app3", src: partnerApp3, alt: "合作 App 3" },
];

/* ---------- Brand logos (inline SVG) ---------- */
const TikTokLogo = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-label="TikTok">
    <path
      fill="#25F4EE"
      d="M33.5 6h-5.6v25.4a4.7 4.7 0 1 1-4.7-4.7c.4 0 .9.1 1.3.2v-5.7a10.4 10.4 0 1 0 9 10.3V17.2a13.5 13.5 0 0 0 7.9 2.5v-5.6a8 8 0 0 1-7.9-8.1Z"
    />
    <path
      fill="#FE2C55"
      d="M35.5 8h-5.6v25.4a4.7 4.7 0 1 1-4.7-4.7c.4 0 .9.1 1.3.2v-5.7a10.4 10.4 0 1 0 9 10.3V19.2a13.5 13.5 0 0 0 7.9 2.5v-5.6a8 8 0 0 1-7.9-8.1Z"
    />
    <path
      fill="#000"
      d="M34.5 7h-5.6v25.4a4.7 4.7 0 1 1-4.7-4.7c.4 0 .9.1 1.3.2v-5.7a10.4 10.4 0 1 0 9 10.3V18.2a13.5 13.5 0 0 0 7.9 2.5v-5.6a8 8 0 0 1-7.9-8.1Z"
    />
  </svg>
);

const GoogleLogo = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Google">
    <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z" />
    <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.7 15.7 19 13 24 13c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
    <path fill="#FBBC05" d="M24 44c5.1 0 9.7-1.9 13.2-5.1l-6.1-5c-2 1.4-4.5 2.2-7.1 2.2-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44Z" />
    <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.1 5C41.1 35.6 44 30.3 44 24c0-1.3-.1-2.4-.4-3.5Z" />
  </svg>
);

const MetaLogo = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Meta">
    <defs>
      <linearGradient id="metaGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0064E1" />
        <stop offset="50%" stopColor="#0082FB" />
        <stop offset="100%" stopColor="#9747FF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#metaGrad)"
      d="M9 30c0 4 2 7 5.4 7 2.6 0 4.5-1.2 7.9-7l2-3.4c1-1.6 1.7-2.9 2.4-4 1.4 1.7 2.6 3.7 4 6.2 2.4 4.4 4 6.5 6.6 6.5 3 0 4.7-2.5 4.7-6.6 0-7.4-4.3-15.7-9.6-15.7-2.6 0-4.8 1.4-7.4 5.2-1.7-2.4-3.6-5.2-6.4-5.2C13.1 13 9 21.1 9 30Zm22.7-3.8c-2.1-3.4-3.4-5.3-4.7-5.3-1.5 0-2.7 1.7-4.5 4.6l-1.8 3c-1.6 2.6-2.4 3.9-3.6 3.9-1.5 0-2.4-1.4-2.4-3.7 0-5.6 2.7-11 5.7-11 1.5 0 2.8 1 4.7 3.5 1.6-2.4 3.3-3.5 5.4-3.5 4.5 0 7.6 6.4 7.6 12 0 1.5-.4 2.5-1.3 2.5-.9 0-1.6-.6-2.6-2.2l-2.5-3.8Z"
    />
  </svg>
);

const BRAND_LOGOS: { key: string; node: React.ReactNode }[] = [
  { key: "tiktok", node: <TikTokLogo /> },
  { key: "google", node: <GoogleLogo /> },
  { key: "meta", node: <MetaLogo /> },
];

function FeatureCard({
  label,
  icon,
  hasPlaceholders,
  brandLogos,
  imageLogos,
}: {
  label: string;
  icon?: React.ReactNode;
  hasPlaceholders?: boolean;
  brandLogos?: { key: string; node: React.ReactNode }[];
  imageLogos?: { key: string; src: string; alt: string }[];
}) {
  return (
    <div
      className="cursor-pointer rounded-[14px] relative overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
      style={{
        background:
          'linear-gradient(155deg, hsla(0,0%,100%,0.55) 0%, hsla(0,0%,100%,0.28) 45%, hsla(0,0%,100%,0.18) 100%)',
        border: '1px solid hsla(0, 0%, 100%, 0.55)',
        boxShadow:
          'inset 0 1.5px 0 0 hsla(0,0%,100%,0.9), inset 1px 0 0 0 hsla(0,0%,100%,0.4), inset 0 -1px 0 0 hsla(230,30%,50%,0.10), inset 0 -10px 24px -12px hsla(0,0%,100%,0.35), 0 10px 30px -10px hsla(230,40%,25%,0.20), 0 2px 6px -2px hsla(230,40%,25%,0.12)',
      }}
    >
      {/* Specular highlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[14px]"
        style={{
          background:
            'radial-gradient(ellipse 120% 50% at 50% -10%, hsla(0,0%,100%,0.55) 0%, hsla(0,0%,100%,0.18) 35%, transparent 65%), linear-gradient(135deg, transparent 30%, hsla(0,0%,100%,0.22) 45%, hsla(0,0%,100%,0.05) 55%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      <div className="relative flex flex-col items-center justify-center gap-3 p-6 aspect-[4/3] z-[1]">
        {brandLogos ? (
          <div className="flex gap-2.5">
            {brandLogos.map((b) => (
              <div
                key={b.key}
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{
                  background: 'hsla(0, 0%, 100%, 0.7)',
                  border: '1px solid hsla(0, 0%, 100%, 0.85)',
                  boxShadow: 'inset 0 1px 0 hsla(0,0%,100%,0.9)',
                }}
              >
                {b.node}
              </div>
            ))}
          </div>
        ) : imageLogos ? (
          <div className="flex gap-2.5">
            {imageLogos.map((logo) => (
              <div
                key={logo.key}
                className="w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                  background: 'hsla(0, 0%, 100%, 0.7)',
                  border: '1px solid hsla(0, 0%, 100%, 0.85)',
                  boxShadow: 'inset 0 1px 0 hsla(0,0%,100%,0.9)',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : hasPlaceholders ? (
          <div className="flex gap-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{
                  background: 'hsla(0, 0%, 100%, 0.45)',
                  border: '1px solid hsla(0, 0%, 100%, 0.7)',
                  boxShadow: 'inset 0 1px 0 hsla(0,0%,100%,0.8)',
                }}
              >
                <div
                  className="w-5 h-5 rounded"
                  style={{ background: 'hsla(230, 30%, 60%, 0.18)' }}
                />
              </div>
            ))}
          </div>
        ) : icon ? (
          <div className="flex items-center justify-center drop-shadow-[0_8px_18px_hsla(260,70%,45%,0.25)]">
            {icon}
          </div>
        ) : null}

        <span
          className="text-[12px] font-medium leading-tight text-center whitespace-nowrap"
          style={{ color: 'hsl(230, 25%, 25%)' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export default function IntegrationsGrid() {
  return (
    <>
      <FeatureCard label="头部媒体及合作伙伴" brandLogos={BRAND_LOGOS} />
      <FeatureCard label="自有程序化流量体系" imageLogos={PARTNER_APP_LOGOS} />
      <FeatureCard label="布局全球，深拓日本" icon={<GlobeIllustration />} />
      <FeatureCard label="一站式解决方案" icon={<SolutionIllustration />} />
    </>
  );
}
