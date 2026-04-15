import React from "react";
import imgLogo from "@/assets/ByteMobiLOGO-02.png";
import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";

const features = [
  {
    label: "头部媒体及合作伙伴",
    hasPlaceholders: true,
    gridArea: "a",
  },
  {
    label: "自有程序化流量体系",
    hasPlaceholders: true,
    gridArea: "b",
  },
  {
    label: "布局全球，深拓日本",
    icon: iconGlobalJapan,
    gridArea: "c",
  },
  {
    label: "一站式解决方案",
    icon: iconOneStop,
    gridArea: "d",
  },
];

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
    <div className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-5 transition-all duration-500 hover:border-purple-500/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/[0.04] group-hover:to-blue-500/[0.04] transition-all duration-500" />

      {hasPlaceholders ? (
        <div className="relative flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover:border-purple-400/20 group-hover:bg-white/[0.08]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-5 h-5 rounded bg-gradient-to-br from-white/10 to-white/5" />
            </div>
          ))}
        </div>
      ) : icon ? (
        <div className="relative w-11 h-11 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-110">
          <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain" />
        </div>
      ) : null}

      <span className="relative text-white/50 text-[11px] font-medium leading-tight text-center whitespace-nowrap group-hover:text-white/80 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

export default function IntegrationsGrid() {
  return (
    <div className="relative w-full max-w-[420px]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-600/[0.06] blur-[100px] pointer-events-none" />

      {/* Bento grid */}
      <div className="relative grid grid-cols-2 gap-3">
        {/* Top left */}
        <FeatureCard {...features[0]} />
        {/* Top right */}
        <FeatureCard {...features[1]} />

        {/* Center logo — spanning full width */}
        <div className="col-span-2 flex items-center justify-center py-4 relative">
          {/* Connecting lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
          </div>
          {/* Diagonal lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(168,85,247,0.06)" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(168,85,247,0.06)" strokeWidth="1" />
          </svg>

          <div className="relative z-10">
            <div className="absolute inset-[-24px] rounded-full bg-purple-500/15 blur-2xl animate-pulse" />
            <div className="absolute inset-[-12px] rounded-full bg-purple-400/10 blur-lg" />
            <div className="absolute inset-[-2px] rounded-full bg-gradient-to-br from-purple-500/25 to-blue-500/25" />
            <img
              src={imgLogo}
              alt="ByteMobi"
              loading="lazy"
              width={64}
              height={64}
              className="relative rounded-full drop-shadow-[0_0_24px_rgba(168,85,247,0.5)]"
            />
          </div>
        </div>

        {/* Bottom left */}
        <FeatureCard {...features[2]} />
        {/* Bottom right */}
        <FeatureCard {...features[3]} />
      </div>
    </div>
  );
}
