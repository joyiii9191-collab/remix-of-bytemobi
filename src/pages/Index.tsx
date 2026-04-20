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
          background:
            "linear-gradient(135deg, #EFE7F5 0%, #E5DCEF 35%, #E3DEF2 65%, #E8E0F0 100%)",
          color: "hsl(250 20% 18%)",
        }}
      >
        {/* Glassmorphism 背景 — 多色漂浮光球（紫色为主，蓝粉点缀） */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
        >
          {/* 主紫色大球 左上 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "560px",
              height: "560px",
              top: "-10%",
              left: "-8%",
              background:
                "radial-gradient(circle at 35% 35%, #C9A8FF 0%, #9B6FE8 40%, #7B4FD4 70%, transparent 100%)",
              filter: "blur(70px)",
              opacity: 0.65,
            }}
          />
          {/* 紫色大球 右中 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "480px",
              height: "480px",
              top: "28%",
              right: "-6%",
              background:
                "radial-gradient(circle at 40% 40%, #BFA0F5 0%, #8E5FE0 45%, #6B3FC8 75%, transparent 100%)",
              filter: "blur(80px)",
              opacity: 0.6,
            }}
          />
          {/* 蓝色球 左下 */}
          <div
            className="absolute rounded-full glass-orb-float-3"
            style={{
              width: "380px",
              height: "380px",
              bottom: "6%",
              left: "16%",
              background:
                "radial-gradient(circle at 45% 45%, #A8C5FF 0%, #6F9CF0 50%, #4A78D8 80%, transparent 100%)",
              filter: "blur(75px)",
              opacity: 0.5,
            }}
          />
          {/* 粉色球 右下 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "320px",
              height: "320px",
              bottom: "14%",
              right: "20%",
              background:
                "radial-gradient(circle at 40% 40%, #FFC8E0 0%, #F592C0 50%, #E06AA8 80%, transparent 100%)",
              filter: "blur(70px)",
              opacity: 0.5,
            }}
          />
          {/* 紫色点缀小球 中部 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "260px",
              height: "260px",
              top: "55%",
              left: "42%",
              background:
                "radial-gradient(circle at 40% 40%, #D4B8FF 0%, #A07CE8 60%, transparent 100%)",
              filter: "blur(65px)",
              opacity: 0.45,
            }}
          />
        </div>

        <div className="relative z-10">
          <OptimizedHeader />
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
