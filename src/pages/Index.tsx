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
            "linear-gradient(135deg, #F4F3FA 0%, #EFF2FA 45%, #F2EEF7 100%)",
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
              width: "390px",
              height: "390px",
              top: "-8%",
              left: "-6%",
              background:
                "radial-gradient(circle at 35% 35%, #C9A8FF 0%, #9B6BF0 45%, #6E3FD9 75%, transparent 100%)",
              filter: "blur(220px)",
              opacity: 0.18,
            }}
          />
          {/* 蓝色光球 右中 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "330px",
              height: "330px",
              top: "28%",
              right: "-4%",
              background:
                "radial-gradient(circle at 40% 40%, #8FB8FF 0%, #5C92F0 45%, #3D6FD0 75%, transparent 100%)",
              filter: "blur(230px)",
              opacity: 0.18,
            }}
          />
          {/* 粉色光球 左下 */}
          <div
            className="absolute rounded-full glass-orb-float-3"
            style={{
              width: "285px",
              height: "285px",
              bottom: "6%",
              left: "12%",
              background:
                "radial-gradient(circle at 45% 45%, #FFC4E1 0%, #F285C4 50%, #D85AA0 80%, transparent 100%)",
              filter: "blur(220px)",
              opacity: 0.15,
            }}
          />
          {/* 黄色光球 右下点缀 */}
          <div
            className="absolute rounded-full glass-orb-float-1"
            style={{
              width: "195px",
              height: "195px",
              bottom: "22%",
              right: "26%",
              background:
                "radial-gradient(circle at 40% 40%, #FFE9A8 0%, #FFD05C 55%, #F0A830 85%, transparent 100%)",
              filter: "blur(200px)",
              opacity: 0.13,
            }}
          />
          {/* 青蓝点缀 中部 */}
          <div
            className="absolute rounded-full glass-orb-float-2"
            style={{
              width: "225px",
              height: "225px",
              top: "55%",
              left: "42%",
              background:
                "radial-gradient(circle at 40% 40%, #A8F0E0 0%, #5CD0BC 55%, #3AA89A 85%, transparent 100%)",
              filter: "blur(210px)",
              opacity: 0.12,
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
