import React from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import heroBg from "@/assets/hero-bg.jpg";

export default function Index() {
  return (
    <>
      <div
        className="app-light-theme h-full overflow-y-scroll font-sans relative"
        style={{
          userSelect: "none",
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          background: "#F4F3F7",
          color: "hsl(250 20% 18%)",
        }}
      >
        {/* 背景图 — 弥散色彩球 + 缓慢 ken-burns 流动 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
        >
          <div
            className="absolute inset-0 hero-bg-kenburns"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* 柔白蒙层 — 降低饱和度,让薄玻璃卡片在上方依然清晰可读 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(135deg, hsla(250, 35%, 93%, 0.65) 0%, hsla(260, 32%, 91%, 0.62) 50%, hsla(270, 28%, 92%, 0.65) 100%)",
            backdropFilter: "saturate(82%) brightness(97%)",
            WebkitBackdropFilter: "saturate(82%) brightness(97%)",
          }}
        />

        <div className="relative z-10">
          <OptimizedHeader />
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
