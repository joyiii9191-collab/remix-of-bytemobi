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
          background: "#F5F5F7",
          color: "hsl(230 25% 18%)",
        }}
      >
        <OptimizedHeader />

        {/* 灰白底 + 蓝紫渐变光斑 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 15% 20%, hsla(225, 95%, 70%, 0.35) 0%, transparent 60%),
              radial-gradient(ellipse 70% 55% at 85% 80%, hsla(270, 85%, 72%, 0.32) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 70% 15%, hsla(250, 90%, 75%, 0.22) 0%, transparent 55%),
              linear-gradient(180deg, #F5F5F7 0%, #EEEEF2 100%)
            `,
          }}
        />

        <div className="relative z-10 w-full">
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
