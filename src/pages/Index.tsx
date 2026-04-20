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
        {/* Glassmorphism 背景 — 漂浮的蓝色模糊光球 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
        >
          {/* 大蓝球 左上 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "520px",
              height: "520px",
              top: "-8%",
              left: "-6%",
              background:
                "radial-gradient(circle at 35% 35%, #6FA8FF 0%, #4A85F0 40%, #3B6FD9 70%, transparent 100%)",
              filter: "blur(70px)",
              opacity: 0.55,
            }}
          />
          {/* 中蓝球 右中 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "440px",
              height: "440px",
              top: "30%",
              right: "-4%",
              background:
                "radial-gradient(circle at 40% 40%, #8FB8FF 0%, #5C92F0 45%, #4178D8 75%, transparent 100%)",
              filter: "blur(80px)",
              opacity: 0.5,
            }}
          />
          {/* 小蓝球 左下 */}
          <div
            className="absolute rounded-full glass-orb-float-3"
            style={{
              width: "360px",
              height: "360px",
              bottom: "8%",
              left: "18%",
              background:
                "radial-gradient(circle at 45% 45%, #A8C5FF 0%, #6F9CF0 50%, transparent 100%)",
              filter: "blur(75px)",
              opacity: 0.45,
            }}
          />
          {/* 点缀小球 右下 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "240px",
              height: "240px",
              bottom: "20%",
              right: "28%",
              background:
                "radial-gradient(circle at 40% 40%, #B5D0FF 0%, #7AA4F0 60%, transparent 100%)",
              filter: "blur(60px)",
              opacity: 0.4,
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
