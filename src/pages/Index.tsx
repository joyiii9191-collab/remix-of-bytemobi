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
            "linear-gradient(135deg, #E8E6F3 0%, #DCE3F2 45%, #E5DEEF 100%)",
          color: "hsl(250 20% 18%)",
        }}
      >
        {/* Glassmorphism 背景 — 蓝紫双色光球，2 列 3 行均匀分布 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
        >
          {/* 紫色 · 左上 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "320px",
              height: "320px",
              top: "-6%",
              left: "-4%",
              background:
                "radial-gradient(circle at 35% 35%, #C9A8FF 0%, #9B6BF0 45%, #6E3FD9 75%, transparent 100%)",
              filter: "blur(70px)",
              opacity: 0.5,
            }}
          />
          {/* 蓝色 · 右上 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "300px",
              height: "300px",
              top: "-4%",
              right: "-4%",
              background:
                "radial-gradient(circle at 40% 40%, #8FB8FF 0%, #5C92F0 45%, #3D6FD0 75%, transparent 100%)",
              filter: "blur(75px)",
              opacity: 0.5,
            }}
          />
          {/* 蓝色 · 左中 */}
          <div
            className="absolute rounded-full glass-orb-float-3"
            style={{
              width: "260px",
              height: "260px",
              top: "38%",
              left: "-6%",
              background:
                "radial-gradient(circle at 40% 40%, #A8C5FF 0%, #6F9CF0 50%, #3D6FD0 80%, transparent 100%)",
              filter: "blur(70px)",
              opacity: 0.5,
            }}
          />
          {/* 紫色 · 右中 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "280px",
              height: "280px",
              top: "36%",
              right: "-6%",
              background:
                "radial-gradient(circle at 40% 40%, #B9A0FF 0%, #8C5DEC 50%, #6230C8 80%, transparent 100%)",
              filter: "blur(75px)",
              opacity: 0.5,
            }}
          />
          {/* 紫色 · 左下 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "300px",
              height: "300px",
              bottom: "-4%",
              left: "-4%",
              background:
                "radial-gradient(circle at 45% 45%, #C9A8FF 0%, #8E5DF0 50%, #6230C8 80%, transparent 100%)",
              filter: "blur(75px)",
              opacity: 0.5,
            }}
          />
          {/* 蓝色 · 右下 */}
          <div
            className="absolute rounded-full glass-orb-float-3"
            style={{
              width: "320px",
              height: "320px",
              bottom: "-6%",
              right: "-4%",
              background:
                "radial-gradient(circle at 40% 40%, #8FB8FF 0%, #5C92F0 45%, #3D6FD0 75%, transparent 100%)",
              filter: "blur(80px)",
              opacity: 0.5,
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
