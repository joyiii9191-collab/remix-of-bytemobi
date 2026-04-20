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
    <div
      className="cursor-pointer rounded-[14px] relative overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
      style={{
        background:
          'linear-gradient(155deg, hsla(0,0%,100%,0.55) 0%, hsla(0,0%,100%,0.28) 45%, hsla(0,0%,100%,0.18) 100%)',
        backdropFilter: 'blur(8px) saturate(1.6)',
        WebkitBackdropFilter: 'blur(8px) saturate(1.6)',
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
        {hasPlaceholders ? (
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
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: 'hsla(0, 0%, 100%, 0.5)',
              border: '1px solid hsla(0, 0%, 100%, 0.7)',
              boxShadow: 'inset 0 1px 0 hsla(0,0%,100%,0.8)',
            }}
          >
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
      <FeatureCard label="头部媒体及合作伙伴" hasPlaceholders />
      <FeatureCard label="自有程序化流量体系" hasPlaceholders />
      <FeatureCard
        label="布局全球，深拓日本"
        icon={<Globe size={24} strokeWidth={1.5} style={{ color: 'hsl(260, 60%, 50%)' }} />}
      />
      <FeatureCard
        label="一站式解决方案"
        icon={<Layers size={24} strokeWidth={1.5} style={{ color: 'hsl(260, 60%, 50%)' }} />}
      />
    </>
  );
}
