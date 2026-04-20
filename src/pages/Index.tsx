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
          background: "#F6EDDF",
          color: "hsl(25 30% 18%)",
        }}
      >
        {/* Warm amber atmospheric background — inspired by reference image */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 75% 60% at 10% 15%, hsla(28, 95%, 72%, 0.55) 0%, transparent 60%),
              radial-gradient(ellipse 70% 55% at 95% 10%, hsla(35, 100%, 78%, 0.50) 0%, transparent 60%),
              radial-gradient(ellipse 80% 65% at 90% 95%, hsla(20, 90%, 75%, 0.48) 0%, transparent 60%),
              radial-gradient(ellipse 70% 55% at 5% 90%, hsla(38, 95%, 80%, 0.45) 0%, transparent 60%),
              radial-gradient(ellipse 55% 45% at 50% 50%, hsla(30, 100%, 85%, 0.35) 0%, transparent 70%),
              linear-gradient(180deg, #F8E8D0 0%, #F2DDC0 50%, #EED5B5 100%)
            `,
          }}
        />
        {/* Slow-drifting warm accent clouds */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 45% 40% at 35% 60%, hsla(25, 100%, 75%, 0.30) 0%, transparent 70%),
              radial-gradient(ellipse 40% 38% at 72% 35%, hsla(40, 100%, 80%, 0.32) 0%, transparent 70%)
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
