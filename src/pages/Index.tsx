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

        {/* Pure solid background */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{ background: "#F5F5F7" }}
        />

        <div className="relative z-10 w-full">
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
