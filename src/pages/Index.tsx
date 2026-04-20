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
          background: "#EFE9FA",
          color: "hsl(250 30% 18%)",
        }}
      >
        {/* 蓝紫色氛围背景 — 紫色为主,蓝色点缀,取自 logo 渐变 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 75% 60% at 10% 15%, hsla(275, 90%, 75%, 0.55) 0%, transparent 60%),
              radial-gradient(ellipse 70% 55% at 95% 10%, hsla(260, 85%, 78%, 0.50) 0%, transparent 60%),
              radial-gradient(ellipse 80% 65% at 90% 95%, hsla(285, 85%, 76%, 0.52) 0%, transparent 60%),
              radial-gradient(ellipse 70% 55% at 5% 90%, hsla(250, 85%, 80%, 0.45) 0%, transparent 60%),
              radial-gradient(ellipse 55% 45% at 65% 50%, hsla(220, 90%, 80%, 0.32) 0%, transparent 70%),
              radial-gradient(ellipse 50% 42% at 30% 55%, hsla(295, 80%, 82%, 0.30) 0%, transparent 70%),
              linear-gradient(180deg, #F1EAFB 0%, #E9DFF7 50%, #E1D4F2 100%)
            `,
          }}
        />
        {/* 缓慢漂移的紫色光云 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 45% 40% at 35% 60%, hsla(280, 90%, 78%, 0.32) 0%, transparent 70%),
              radial-gradient(ellipse 40% 38% at 72% 35%, hsla(265, 85%, 80%, 0.30) 0%, transparent 70%)
            `,
            filter: "blur(28px)",
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
