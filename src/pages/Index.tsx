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
        {/* 弥散风蓝紫色块 — 灰白主底,几团柔和的紫色与蓝色光斑漂浮 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 50% 42% at 12% 18%, hsla(275, 75%, 78%, 0.42) 0%, transparent 65%),
              radial-gradient(ellipse 45% 38% at 92% 12%, hsla(258, 70%, 80%, 0.32) 0%, transparent 65%),
              radial-gradient(ellipse 55% 45% at 88% 92%, hsla(285, 70%, 80%, 0.38) 0%, transparent 65%),
              radial-gradient(ellipse 48% 40% at 8% 88%, hsla(220, 75%, 82%, 0.28) 0%, transparent 65%),
              linear-gradient(180deg, #F6F5F9 0%, #F2F1F6 50%, #EEEDF3 100%)
            `,
          }}
        />
        {/* 缓慢漂浮的弥散光斑 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 32% 28% at 38% 62%, hsla(280, 80%, 80%, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 28% 25% at 70% 38%, hsla(225, 80%, 82%, 0.20) 0%, transparent 70%)
            `,
            filter: "blur(32px)",
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
