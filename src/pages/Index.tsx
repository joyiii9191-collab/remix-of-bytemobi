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
          background: "#F2F0F5",
          color: "hsl(230 25% 18%)",
        }}
      >
        <OptimizedHeader />
        <ReflectApp />
      </div>
    </>
  );
}
