import React from "react";
import "../components/LiquidGlassCard.css";

/* ---------- Liquid Glass (WWDC25 style) icons ---------- */
const GlobeIllustration = () => (
  <svg width="84" height="84" viewBox="0 0 100 100" aria-label="Global Japan">
    <defs>
      <linearGradient id="lgGlobeBody" x1="0.2" y1="0.1" x2="0.8" y2="0.95">
        <stop offset="0%" stopColor="hsla(0, 0%, 100%, 0.95)" />
        <stop offset="55%" stopColor="hsla(210, 60%, 96%, 0.78)" />
        <stop offset="100%" stopColor="hsla(215, 55%, 88%, 0.55)" />
      </linearGradient>
      <radialGradient id="lgGlobeAccent" cx="35%" cy="35%" r="75%">
        <stop offset="0%" stopColor="hsla(0, 95%, 88%, 0.95)" />
        <stop offset="60%" stopColor="hsla(0, 80%, 68%, 0.85)" />
        <stop offset="100%" stopColor="hsla(0, 75%, 55%, 0.75)" />
      </radialGradient>
      <linearGradient id="lgGlobeSpec" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsla(0, 0%, 100%, 0.85)" />
        <stop offset="60%" stopColor="hsla(0, 0%, 100%, 0)" />
      </linearGradient>
      <radialGradient id="lgGlobeHalo" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="hsla(210, 80%, 75%, 0.25)" />
        <stop offset="100%" stopColor="hsla(210, 80%, 75%, 0)" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="52" r="46" fill="url(#lgGlobeHalo)" />
    <circle cx="50" cy="50" r="34" fill="url(#lgGlobeBody)" stroke="hsla(0,0%,100%,0.9)" strokeWidth="0.8" />
    <circle cx="50" cy="50" r="29" fill="none" stroke="hsla(210, 50%, 80%, 0.35)" strokeWidth="0.6" />
    <ellipse cx="50" cy="50" rx="28" ry="9" fill="none" stroke="hsla(210, 40%, 70%, 0.35)" strokeWidth="0.7" />
    <ellipse cx="50" cy="50" rx="9" ry="28" fill="none" stroke="hsla(210, 40%, 70%, 0.3)" strokeWidth="0.7" />
    <ellipse cx="50" cy="50" rx="20" ry="28" fill="none" stroke="hsla(210, 40%, 70%, 0.22)" strokeWidth="0.6" />
    <circle cx="64" cy="46" r="7" fill="url(#lgGlobeAccent)" />
    <circle cx="62" cy="44" r="2" fill="hsla(0,0%,100%,0.7)" />
    <ellipse cx="50" cy="34" rx="22" ry="8" fill="url(#lgGlobeSpec)" opacity="0.85" />
    <circle cx="78" cy="72" r="4.5" fill="hsla(0,0%,100%,0.85)" stroke="hsla(210,40%,80%,0.5)" strokeWidth="0.5" />
    <circle cx="76.5" cy="70.5" r="1.2" fill="hsla(0,0%,100%,0.95)" />
  </svg>
);

const SolutionIllustration = () => (
  <svg width="84" height="84" viewBox="0 0 100 100" aria-label="One-stop solution">
    <defs>
      <linearGradient id="lgPetalA" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsla(0, 0%, 100%, 0.95)" />
        <stop offset="100%" stopColor="hsla(210, 70%, 88%, 0.6)" />
      </linearGradient>
      <linearGradient id="lgPetalB" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsla(0, 0%, 100%, 0.95)" />
        <stop offset="100%" stopColor="hsla(265, 60%, 90%, 0.6)" />
      </linearGradient>
      <linearGradient id="lgPetalC" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsla(0, 0%, 100%, 0.95)" />
        <stop offset="100%" stopColor="hsla(195, 70%, 88%, 0.6)" />
      </linearGradient>
      <radialGradient id="lgCenter" cx="35%" cy="35%" r="75%">
        <stop offset="0%" stopColor="hsla(195, 90%, 92%, 0.95)" />
        <stop offset="100%" stopColor="hsla(220, 80%, 70%, 0.75)" />
      </radialGradient>
      <radialGradient id="lgSolHalo" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="hsla(220, 80%, 80%, 0.22)" />
        <stop offset="100%" stopColor="hsla(220, 80%, 80%, 0)" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="52" r="46" fill="url(#lgSolHalo)" />
    <g stroke="hsla(0,0%,100%,0.9)" strokeWidth="0.8">
      <rect x="38" y="14" width="24" height="38" rx="12" fill="url(#lgPetalA)" transform="rotate(-30 50 33)" />
      <rect x="38" y="14" width="24" height="38" rx="12" fill="url(#lgPetalB)" transform="rotate(90 50 33)" />
      <rect x="38" y="14" width="24" height="38" rx="12" fill="url(#lgPetalC)" transform="rotate(210 50 33)" />
    </g>
    <g fill="hsla(0,0%,100%,0.55)">
      <ellipse cx="36" cy="40" rx="5" ry="1.6" transform="rotate(-30 36 40)" />
      <ellipse cx="68" cy="44" rx="5" ry="1.6" transform="rotate(60 68 44)" />
      <ellipse cx="50" cy="72" rx="5" ry="1.6" />
    </g>
    <circle cx="50" cy="50" r="8" fill="url(#lgCenter)" stroke="hsla(0,0%,100%,0.9)" strokeWidth="0.7" />
    <circle cx="48" cy="48" r="2.2" fill="hsla(0,0%,100%,0.85)" />
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
      className="group cursor-pointer rounded-[14px] relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:shadow-[0_22px_55px_-15px_hsla(245,60%,40%,0.38),0_6px_18px_-6px_hsla(230,40%,25%,0.18)]"
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
      {/* Sweeping shine on hover */}
      <div
        className="absolute -inset-y-2 -left-1/2 w-1/2 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-x-[400%] transition-all duration-[900ms] ease-out"
        style={{
          background:
            'linear-gradient(115deg, transparent 0%, hsla(0,0%,100%,0.55) 50%, transparent 100%)',
          filter: 'blur(6px)',
        }}
      />
      {/* Soft color halo on hover */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(ellipse 85% 65% at 50% 100%, hsla(245, 90%, 68%, 0.22) 0%, transparent 70%)',
        }}
      />
      <div className="relative flex flex-col items-center justify-center gap-3 p-6 aspect-[4/3] z-[1] [&_>_div:first-child]:transition-transform [&_>_div:first-child]:duration-500 [&_>_div:first-child]:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[&_>_div:first-child]:scale-110">
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
