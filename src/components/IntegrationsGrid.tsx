import React from "react";
import imgLogo from "@/assets/ByteMobiLOGO-02.png";
import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";

interface IntegrationCardProps {
  icon?: string;
  title: string;
  iconSize?: number;
  iconBg?: string;
  placeholders?: number;
}

function IntegrationCard({ icon, title, iconSize = 44, iconBg, placeholders }: IntegrationCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-2.5 group cursor-pointer">
      <div className="relative">
        {/* Hover glow */}
        <div className="absolute inset-[-10px] rounded-2xl bg-purple-500/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {placeholders ? (
          <div className="relative flex gap-2">
            {Array.from({ length: placeholders }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg bg-white/10 border border-white/10 flex items-center justify-center"
                style={{ width: iconSize, height: iconSize }}
              >
                <div className="w-6 h-6 rounded bg-white/20" />
              </div>
            ))}
          </div>
        ) : icon ? (
          <div
            className={`relative rounded-xl overflow-hidden ${iconBg || ''}`}
            style={{ width: iconSize, height: iconSize }}
          >
            <img
              src={icon}
              alt={title}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        ) : null}
      </div>
      <h3 className="text-white/90 font-medium text-[13px] leading-tight">{title}</h3>
    </div>
  );
}

export default function IntegrationsGrid() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="relative grid grid-cols-2 gap-x-[120px] gap-y-[28px] items-start max-w-[600px]">
        {/* Top row */}
        <IntegrationCard
          title="头部媒体及合作伙伴"
          placeholders={3}
          iconSize={40}
        />
        <IntegrationCard
          title="自有程序化流量体系"
          placeholders={3}
          iconSize={40}
        />

        {/* Center logo with glow animation */}
        <div className="col-span-2 flex justify-center py-1">
          <div className="relative group">
            <div className="absolute inset-[-14px] rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
            <div className="absolute inset-[-6px] rounded-full bg-purple-400/15 blur-lg" />
            <img
              src={imgLogo}
              alt="ByteMobi Logo"
              loading="lazy"
              width={56}
              height={56}
              className="relative drop-shadow-[0_0_16px_rgba(168,85,247,0.5)] rounded-full"
            />
          </div>
        </div>

        {/* Bottom row */}
        <IntegrationCard
          icon={iconGlobalJapan}
          title="布局全球，深拓日本"
          iconSize={44}
        />
        <IntegrationCard
          icon={iconOneStop}
          title="一站式解决方案"
          iconSize={44}
        />
      </div>
    </div>
  );
}
