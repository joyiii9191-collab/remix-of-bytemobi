import React, { useEffect, useRef } from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import { HomeBackground } from "../components/HomeBackground";

export default function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 与 SnapPage 一致的曲线缓动吸附:接管 wheel/键盘,
  // requestAnimationFrame + easeInOutCubic,先慢-加速-缓停。
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isAnimating = false;
    let rafId = 0;
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const getScreens = () =>
      Array.from(
        el.querySelectorAll<HTMLElement>("section[style*='scroll-snap-align'], section[data-snap='true']")
      );

    const animateTo = (target: number, duration = 900) => {
      cancelAnimationFrame(rafId);
      const start = el.scrollTop;
      const distance = target - start;
      if (Math.abs(distance) < 2) return;
      const startTime = performance.now();
      isAnimating = true;
      const tick = (now: number) => {
        const p = Math.min(1, (now - startTime) / duration);
        el.scrollTop = start + distance * ease(p);
        if (p < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          isAnimating = false;
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const snapToNext = (dir: 1 | -1) => {
      const screens = getScreens();
      if (screens.length === 0) return;
      const current = el.scrollTop;
      const vh = el.clientHeight;
      let idx = 0;
      for (let i = 0; i < screens.length; i++) {
        if (screens[i].offsetTop <= current + vh / 3) idx = i;
      }
      const nextIdx = Math.max(0, Math.min(screens.length - 1, idx + dir));
      if (dir === 1 && nextIdx === idx) {
        const maxScroll = el.scrollHeight - vh;
        if (current < maxScroll - 4) animateTo(maxScroll, 900);
        return;
      }
      animateTo(screens[nextIdx].offsetTop, 900);
    };

    let wheelLock = 0;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 4) return;
      e.preventDefault();
      const now = performance.now();
      if (isAnimating || now - wheelLock < 750) return;
      wheelLock = now;
      snapToNext(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        if (!isAnimating) snapToNext(1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        if (!isAnimating) snapToNext(-1);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="app-light-theme h-full overflow-y-scroll font-sans relative"
      style={{
        userSelect: "none",
        // 关闭原生 snap,改用 JS 缓动接管
        scrollSnapType: "none",
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
