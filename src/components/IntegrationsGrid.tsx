import React from "react";
import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";
import BorderGlow from "./BorderGlow";
import "./BorderGlow.css";

function FeatureCard({
  label,
  icon,
  hasPlaceholders,
}: {
  label: string;
  icon?: string;
  hasPlaceholders?: boolean;
}) {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="rgba(255,255,255,0.03)"
      borderRadius={24}
      glowRadius={45}
      glowIntensity={0.8}
      coneSpread={25}
      animated={false}
      colors={['#c084fc', '#f472b6', '#38bdf8']}
    >
      <div
        className="flex flex-col items-center justify-center gap-3 p-6 aspect-[4/3] rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(24px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(255,255,255,0.03), 0 8px 32px -8px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {hasPlaceholders ? (
          <div className="flex gap-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="w-5 h-5 rounded bg-gradient-to-br from-white/15 to-white/5" />
              </div>
            ))}
          </div>
        ) : icon ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain drop-shadow-lg" />
          </div>
        ) : null}

        <span className="text-white/60 text-[12px] font-medium leading-tight text-center whitespace-nowrap">
          {label}
        </span>
      </div>
    </BorderGlow>
  );
}

export default function IntegrationsGrid() {
  return (
    <>
      <FeatureCard label="头部媒体及合作伙伴" hasPlaceholders />
      <FeatureCard label="自有程序化流量体系" hasPlaceholders />
      <FeatureCard label="布局全球，深拓日本" icon={iconGlobalJapan} />
      <FeatureCard label="一站式解决方案" icon={iconOneStop} />
    </>
  );
}
