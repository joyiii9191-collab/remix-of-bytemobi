import React from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";

export default function Index() {
  return (
    <>
      <div
        className="app-light-theme h-full overflow-y-scroll font-sans"
        style={{
          userSelect: "none",
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          background: "#F2F0F5",
          color: "hsl(230 25% 18%)",
        }}
      >
        <OptimizedHeader />

        {/* Mica 风彩色丝带光斑：高饱和、大尺寸、多色团块 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 75% 60% at 8% 12%, hsla(220, 100%, 70%, 0.85) 0%, transparent 55%),
              radial-gradient(ellipse 70% 55% at 92% 18%, hsla(195, 95%, 72%, 0.70) 0%, transparent 55%),
              radial-gradient(ellipse 80% 65% at 95% 88%, hsla(275, 90%, 70%, 0.85) 0%, transparent 55%),
              radial-gradient(ellipse 70% 60% at 5% 92%, hsla(320, 90%, 78%, 0.75) 0%, transparent 55%),
              radial-gradient(ellipse 50% 45% at 50% 50%, hsla(25, 95%, 78%, 0.45) 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at 30% 75%, hsla(160, 80%, 75%, 0.40) 0%, transparent 60%),
              linear-gradient(180deg, #F4F2F7 0%, #EEEAF3 50%, #F0EAF5 100%)
            `,
          }}
        />
        {/* 柔光弥散层 - 模糊融合所有色块 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse 45% 40% at 35% 60%, hsla(260, 95%, 75%, 0.45) 0%, transparent 70%),
              radial-gradient(ellipse 40% 38% at 70% 30%, hsla(215, 95%, 78%, 0.45) 0%, transparent 70%),
              radial-gradient(ellipse 35% 32% at 60% 80%, hsla(290, 85%, 78%, 0.35) 0%, transparent 70%)
            `,
            filter: 'blur(40px)',
          }}
        />
        {/* 细颗粒噪点纹理 - 增强玻璃质感 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
          }}
        />

        <div className="relative z-10 w-full">
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
