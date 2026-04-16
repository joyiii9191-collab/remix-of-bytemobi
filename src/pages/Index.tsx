import React from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import { MouseGlow } from "../components/MouseGlow";
import { Starfield } from "../components/Starfield";
import Grainient from "../components/Grainient";

export default function Index() {
  return (
    <>
      <div
        className="h-full overflow-y-scroll text-white font-sans"
        style={{ userSelect: "none", scrollSnapType: "y mandatory", WebkitOverflowScrolling: "touch" }}
      >
        <OptimizedHeader />
        <MouseGlow />

        {/* Grainient shader background - static, one frame */}
        <div className="fixed inset-0 z-0">
          <Grainient
            timeSpeed={0}
            color1="#B497CF"
            color2="#5227FF"
            color3="#060318"
            contrast={1.1}
            saturation={0.75}
            zoom={0.7}
            warpFrequency={3.0}
            grainAmount={0.08}
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="fixed inset-0 z-[1] pointer-events-none" style={{ background: 'rgba(0,0,0,0.25)' }} />

        <div className="fixed inset-0 pointer-events-none z-[2]">
          <Starfield />
        </div>

        <div className="relative z-10 w-full">
          <ReflectApp />
        </div>

        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm pointer-events-none z-50" />
      </div>
    </>
  );
}
