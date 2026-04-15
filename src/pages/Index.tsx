import React, { useEffect, useState } from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import { MouseGlow } from "../components/MouseGlow";
import { Starfield } from "../components/Starfield";

export default function Index() {
  return (
    <div
      className="h-screen overflow-y-auto bg-[#030014] text-white font-sans snap-y snap-mandatory"
      style={{ userSelect: "none" }}
    >
      <OptimizedHeader />
      <MouseGlow />

      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield />
      </div>

      <div className="relative z-10 w-full">
        <ReflectApp />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm pointer-events-none z-50" />
    </div>
  );
}
