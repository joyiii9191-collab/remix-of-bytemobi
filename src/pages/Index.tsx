import React from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import Grainient from "../components/Grainient";

export default function Index() {
  return (
    <>
      <div
        className="app-light-theme h-full overflow-y-scroll font-sans"
        style={{
          userSelect: "none",
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          background: "#F2F0F5",
          color: "hsl(230 25% 18%)",
        }}
      >
        <OptimizedHeader />

        {/* Grainient 渐变背景：覆盖所有屏 */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Grainient
            color1="#a47bec"
            color2="#f7f7f7"
            color3="#9395f1"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={-9}
            blendSoftness={0}
            rotationAmount={390}
            noiseScale={2}
            grainAmount={0.06}
            grainScale={1}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 w-full">
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
