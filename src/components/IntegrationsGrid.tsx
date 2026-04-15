import React from "react";
import imgLogo from "@/assets/ByteMobiLOGO-02.png";
import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";

const nodes = [
  { label: "头部媒体及合作伙伴", placeholders: 3, angle: -45 },
  { label: "自有程序化流量体系", placeholders: 3, angle: 45 },
  { label: "布局全球，深拓日本", icon: iconGlobalJapan, angle: -135 },
  { label: "一站式解决方案", icon: iconOneStop, angle: 135 },
];

function OrbitNode({ label, icon, placeholders, x, y }: { label: string; icon?: string; placeholders?: number; x: number; y: number }) {
  return (
    <div
      className="absolute flex flex-col items-center gap-2 group cursor-pointer"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-[-16px] rounded-2xl bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
      
      {placeholders ? (
        <div className="relative flex gap-1.5">
          {Array.from({ length: placeholders }).map((_, i) => (
            <div
              key={i}
              className="w-[42px] h-[42px] rounded-lg bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-white/[0.1]"
            >
              <div className="w-5 h-5 rounded bg-white/15" />
            </div>
          ))}
        </div>
      ) : icon ? (
        <div className="relative w-[52px] h-[52px] rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110">
          <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain" />
        </div>
      ) : null}
      
      <span className="text-white/70 text-[12px] font-medium leading-tight text-center whitespace-nowrap group-hover:text-white/90 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

export default function IntegrationsGrid() {
  const cx = 240, cy = 210;
  const rx = 180, ry = 150;

  return (
    <div className="relative w-[480px] h-[420px] mx-auto">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-purple-600/[0.04] blur-[80px] pointer-events-none" />

      {/* Orbit ring */}
      <div
        className="absolute border border-white/[0.04] rounded-full pointer-events-none"
        style={{ left: cx - rx, top: cy - ry, width: rx * 2, height: ry * 2 }}
      />
      {/* Inner ring */}
      <div
        className="absolute border border-white/[0.03] rounded-full pointer-events-none"
        style={{ left: cx - rx * 0.55, top: cy - ry * 0.55, width: rx * 1.1, height: ry * 1.1 }}
      />

      {/* Connecting lines from center to each node */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + rx * Math.cos(rad);
          const ny = cy + ry * Math.sin(rad);
          return (
            <line
              key={i}
              x1={cx} y1={cy} x2={nx} y2={ny}
              stroke="rgba(168,85,247,0.08)"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>

      {/* Center logo */}
      <div
        className="absolute"
        style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}
      >
        <div className="relative">
          <div className="absolute inset-[-20px] rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
          <div className="absolute inset-[-10px] rounded-full bg-purple-400/10 blur-lg" />
          <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
          <img
            src={imgLogo}
            alt="ByteMobi"
            loading="lazy"
            width={68}
            height={68}
            className="relative rounded-full drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          />
        </div>
      </div>

      {/* Orbit nodes */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const nx = cx + rx * Math.cos(rad);
        const ny = cy + ry * Math.sin(rad);
        return (
          <OrbitNode
            key={i}
            label={node.label}
            icon={node.icon}
            placeholders={node.placeholders}
            x={nx}
            y={ny}
          />
        );
      })}
    </div>
  );
}
