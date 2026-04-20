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
          background: "#F4F3F7",
          color: "hsl(250 20% 18%)",
        }}
      >
        {/* 灰白底色 */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(135deg, #F6F5F9 0%, #F0EEF6 50%, #ECEAF3 100%)",
          }}
        />

        {/* 动画 mesh gradient — 多个色块独立缓慢漂浮,营造高级弥散感 */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden
        >
          <div className="mesh-blob mesh-blob--1" />
          <div className="mesh-blob mesh-blob--2" />
          <div className="mesh-blob mesh-blob--3" />
          <div className="mesh-blob mesh-blob--4" />
          <div className="mesh-blob mesh-blob--5" />
        </div>

        <div className="relative z-10">
          <OptimizedHeader />
          <ReflectApp />
        </div>
      </div>
    </>
  );
}
