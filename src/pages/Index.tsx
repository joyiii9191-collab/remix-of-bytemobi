import React from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";

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
        {/* 弥散风背景 — 灰白底,中心紫色主光晕 + 周围辅助色斑,凸显玻璃质感 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 65% 55% at 50% 45%, hsla(278, 80%, 76%, 0.55) 0%, hsla(265, 70%, 80%, 0.30) 35%, transparent 70%),
              radial-gradient(ellipse 45% 40% at 18% 22%, hsla(295, 75%, 80%, 0.42) 0%, transparent 65%),
              radial-gradient(ellipse 42% 38% at 85% 18%, hsla(220, 80%, 82%, 0.38) 0%, transparent 65%),
              radial-gradient(ellipse 50% 42% at 88% 85%, hsla(285, 75%, 78%, 0.45) 0%, transparent 65%),
              radial-gradient(ellipse 45% 40% at 12% 88%, hsla(245, 75%, 82%, 0.35) 0%, transparent 65%),
              linear-gradient(180deg, #F6F5F9 0%, #F2F1F6 50%, #EEEDF3 100%)
            `,
          }}
        />
        {/* 中央呼吸光斑 + 漂浮辅助光斑 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 38% 32% at 50% 50%, hsla(280, 85%, 78%, 0.32) 0%, transparent 70%),
              radial-gradient(ellipse 28% 25% at 35% 38%, hsla(255, 80%, 80%, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 28% 25% at 68% 62%, hsla(300, 75%, 80%, 0.22) 0%, transparent 70%)
            `,
            filter: "blur(40px)",
            animation: "float-slow 22s ease-in-out infinite",
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
