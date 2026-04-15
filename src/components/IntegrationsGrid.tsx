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
      backgroundColor="#120F17"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={['#c084fc', '#f472b6', '#38bdf8']}
    >
      <div className="flex flex-col items-center justify-center gap-3 p-6 aspect-[4/3]">
        {hasPlaceholders ? (
          <div className="flex gap-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"
              >
                <div className="w-5 h-5 rounded bg-gradient-to-br from-white/10 to-white/5" />
              </div>
            ))}
          </div>
        ) : icon ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain" />
          </div>
        ) : null}

        <span className="text-white/50 text-[12px] font-medium leading-tight text-center whitespace-nowrap">
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
