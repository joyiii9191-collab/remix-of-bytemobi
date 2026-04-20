import React from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import { HomeBackground } from "../components/HomeBackground";

export default function Index() {
  return (
    <div
      className="app-light-theme h-full overflow-y-scroll font-sans relative"
      style={{
        userSelect: "none",
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
        color: "hsl(250 20% 18%)",
      }}
    >
      {/* 与子页面完全一致的统一背景 */}
      <HomeBackground />

      <div className="relative z-10">
        <OptimizedHeader />
        <ReflectApp />
      </div>
    </div>
  );
}
