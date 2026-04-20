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
          background: "#F6F5FA",
          color: "hsl(230 25% 18%)",
        }}
      >
        {/* Copilot-style atmospheric gradient background — soft luminous color clouds */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 8% 10%, hsla(220, 100%, 78%, 0.55) 0%, transparent 60%),
              radial-gradient(ellipse 65% 50% at 95% 12%, hsla(195, 95%, 78%, 0.45) 0%, transparent 60%),
              radial-gradient(ellipse 75% 60% at 92% 90%, hsla(275, 90%, 78%, 0.50) 0%, transparent 60%),
              radial-gradient(ellipse 65% 55% at 5% 92%, hsla(320, 90%, 82%, 0.45) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 50% 50%, hsla(25, 95%, 84%, 0.28) 0%, transparent 70%),
              radial-gradient(ellipse 55% 45% at 32% 72%, hsla(160, 80%, 80%, 0.25) 0%, transparent 65%),
              linear-gradient(180deg, #F6F5FA 0%, #EFEDF6 50%, #F2EEF7 100%)
            `,
          }}
        />
        {/* Slow-drifting accent clouds */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 42% 38% at 36% 58%, hsla(260, 95%, 80%, 0.28) 0%, transparent 70%),
              radial-gradient(ellipse 38% 36% at 70% 32%, hsla(215, 95%, 82%, 0.32) 0%, transparent 70%)
            `,
            filter: "blur(24px)",
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
