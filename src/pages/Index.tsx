import React from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import { MouseGlow } from "../components/MouseGlow";

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
        <MouseGlow />

        {/* Immersive blue-purple gradient layers (extracted from logo) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Base wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.10) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 100% 30%, rgba(139,92,246,0.08) 0%, transparent 65%), radial-gradient(ellipse 90% 60% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 60%), linear-gradient(180deg, #F5F5F7 0%, #F3F2FA 50%, #F5F2FB 100%)",
            }}
          />
          {/* Floating orbs */}
          <div
            className="absolute rounded-full blur-3xl opacity-20 animate-float-slow"
            style={{
              width: 520,
              height: 520,
              left: "-10%",
              top: "10%",
              background: "radial-gradient(circle, rgba(79,70,229,0.25), transparent 70%)",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl opacity-18 animate-float-slower"
            style={{
              width: 600,
              height: 600,
              right: "-12%",
              top: "40%",
              background: "radial-gradient(circle, rgba(168,85,247,0.22), transparent 70%)",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl opacity-15 animate-float-slow"
            style={{
              width: 480,
              height: 480,
              left: "30%",
              bottom: "-15%",
              background: "radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%)",
            }}
          />
          {/* Grain / shimmer overlay */}
          <div
            className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
        </div>

        <div className="relative z-10 w-full">
          <ReflectApp />
        </div>

        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent blur-sm pointer-events-none z-50" />
      </div>
    </>
  );
}
