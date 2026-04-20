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
          {/* 紫色光球 左上 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "520px",
              height: "520px",
              top: "-8%",
              left: "-6%",
              background:
                "radial-gradient(circle at 35% 35%, #C9A8FF 0%, #9B6BF0 45%, #6E3FD9 75%, transparent 100%)",
              filter: "blur(70px)",
              opacity: 0.55,
            }}
          />
          {/* 蓝色光球 右中 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "440px",
              height: "440px",
              top: "28%",
              right: "-4%",
              background:
                "radial-gradient(circle at 40% 40%, #8FB8FF 0%, #5C92F0 45%, #3D6FD0 75%, transparent 100%)",
              filter: "blur(80px)",
              opacity: 0.55,
            }}
          />
          {/* 粉色光球 左下 */}
          <div
            className="absolute rounded-full glass-orb-float-3"
            style={{
              width: "380px",
              height: "380px",
              bottom: "6%",
              left: "12%",
              background:
                "radial-gradient(circle at 45% 45%, #FFC4E1 0%, #F285C4 50%, #D85AA0 80%, transparent 100%)",
              filter: "blur(75px)",
              opacity: 0.5,
            }}
          />
          {/* 黄色光球 右下点缀 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "260px",
              height: "260px",
              bottom: "22%",
              right: "26%",
              background:
                "radial-gradient(circle at 40% 40%, #FFE9A8 0%, #FFD05C 55%, #F0A830 85%, transparent 100%)",
              filter: "blur(60px)",
              opacity: 0.45,
            }}
          />
          {/* 青蓝点缀 中部 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "300px",
              height: "300px",
              top: "55%",
              left: "42%",
              background:
                "radial-gradient(circle at 40% 40%, #A8F0E0 0%, #5CD0BC 55%, #3AA89A 85%, transparent 100%)",
              filter: "blur(70px)",
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
