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

        {/* 科技弥散风：蓝紫主调 + 青/粉点缀，多层柔和光斑 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 65% 55% at 12% 18%, hsla(225, 100%, 72%, 0.45) 0%, transparent 62%),
              radial-gradient(ellipse 55% 50% at 88% 78%, hsla(275, 90%, 74%, 0.42) 0%, transparent 62%),
              radial-gradient(ellipse 50% 45% at 78% 10%, hsla(195, 95%, 78%, 0.30) 0%, transparent 60%),
              radial-gradient(ellipse 45% 40% at 8% 88%, hsla(320, 85%, 82%, 0.28) 0%, transparent 60%),
              radial-gradient(ellipse 70% 60% at 50% 50%, hsla(245, 80%, 80%, 0.18) 0%, transparent 70%),
              linear-gradient(180deg, #F8F9FC 0%, #EFF0F8 50%, #F4EEFA 100%)
            `,
          }}
        />
        {/* 顶层柔光层 - 增加弥散质感 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse 35% 30% at 32% 65%, hsla(260, 95%, 76%, 0.22) 0%, transparent 70%),
              radial-gradient(ellipse 30% 28% at 68% 35%, hsla(220, 95%, 78%, 0.24) 0%, transparent 70%)
            `,
            filter: 'blur(30px)',
          }}
        />

        <div className="relative z-10 w-full">
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
