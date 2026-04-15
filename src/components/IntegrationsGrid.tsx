import React from "react";
import imgLogo from "@/assets/ByteMobiLOGO-02.png";
import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";

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
    <div className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-6 transition-all duration-500 hover:border-purple-500/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] aspect-[4/3]">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/[0.04] group-hover:to-blue-500/[0.04] transition-all duration-500" />

      {hasPlaceholders ? (
        <div className="relative flex gap-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover:border-purple-400/20 group-hover:bg-white/[0.08]"
            >
              <div className="w-5 h-5 rounded bg-gradient-to-br from-white/10 to-white/5" />
            </div>
          ))}
        </div>
      ) : icon ? (
        <div className="relative w-12 h-12 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-110">
          <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain" />
        </div>
      ) : null}

      <span className="relative text-white/50 text-[12px] font-medium leading-tight text-center whitespace-nowrap group-hover:text-white/80 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

export default function IntegrationsGrid() {
  return (
    <>
      {/* Card 1 */}
      <FeatureCard label="头部媒体及合作伙伴" hasPlaceholders />
      {/* Card 2 */}
      <FeatureCard label="自有程序化流量体系" hasPlaceholders />
      {/* Card 3 */}
      <FeatureCard label="布局全球，深拓日本" icon={iconGlobalJapan} />
      {/* Card 4 */}
      <FeatureCard label="一站式解决方案" icon={iconOneStop} />
    </>
  );
}
