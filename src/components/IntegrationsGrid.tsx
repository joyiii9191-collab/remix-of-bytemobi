import React from "react";
import { Globe, Layers } from "lucide-react";
import "../components/LiquidGlassCard.css";

function FeatureCard({
  label,
  icon,
  hasPlaceholders,
}: {
  label: string;
  icon?: React.ReactNode;
  hasPlaceholders?: boolean;
}) {
  return (
    <div className="cursor-pointer rounded-[14px] transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
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
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'hsla(0, 0%, 100%, 0.06)' }}>
            {icon}
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
      <FeatureCard label="布局全球，深拓日本" icon={<Globe size={24} strokeWidth={1.5} style={{ color: 'hsla(0, 0%, 100%, 0.45)' }} />} />
      <FeatureCard label="一站式解决方案" icon={<Layers size={24} strokeWidth={1.5} style={{ color: 'hsla(0, 0%, 100%, 0.45)' }} />} />
    </>
  );
}
