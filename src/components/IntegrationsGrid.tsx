import React from "react";
import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";
import "../components/LiquidGlassCard.css";

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
    <div className="liquid-glass liquid-glass--inner liquid-glass--glow cursor-pointer">
      <div className="flex flex-col items-center justify-center gap-3 p-6 aspect-[4/3]">
        {hasPlaceholders ? (
          <div className="flex gap-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{
                  background: 'hsla(0, 0%, 100%, 0.03)',
                  border: '1px solid hsla(0, 0%, 100%, 0.06)',
                }}
              >
                <div className="w-5 h-5 rounded" style={{ background: 'hsla(0, 0%, 100%, 0.04)' }} />
              </div>
            ))}
          </div>
        ) : icon ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain" />
          </div>
        ) : null}

        <span className="text-[12px] font-medium leading-tight text-center whitespace-nowrap"
          style={{ color: 'hsla(0, 0%, 100%, 0.5)' }}
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
      <FeatureCard label="头部媒体及合作伙伴" hasPlaceholders />
      <FeatureCard label="自有程序化流量体系" hasPlaceholders />
      <FeatureCard label="布局全球，深拓日本" icon={iconGlobalJapan} />
      <FeatureCard label="一站式解决方案" icon={iconOneStop} />
    </>
  );
}
