import React, { useEffect, useRef } from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import { HomeBackground } from "../components/HomeBackground";

export default function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 与 SnapPage 一致的带曲线缓动的吸附式滚动:
  // 接管 wheel / 键盘,用 requestAnimationFrame + easeInOutCubic
  // 让进出场有节奏感(先慢-加速-再缓停),与子页面保持一致。
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isAnimating = false;
    let rafId = 0;
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // 首页屏是 .snap-start 的 div,按视口高度的整数倍计算吸附点
    const getSnapPoints = () => {
      const vh = el.clientHeight;
      const maxScroll = el.scrollHeight - vh;
      const points: number[] = [];
      const screens = Array.from(
        el.querySelectorAll<HTMLElement>(".snap-start")
      );
      if (screens.length) {
        for (const s of screens) {
          // 用元素相对滚动容器的 offsetTop
          let top = 0;
          let node: HTMLElement | null = s;
          while (node && node !== el) {
            top += node.offsetTop;
            node = node.offsetParent as HTMLElement | null;
          }
          points.push(Math.min(top, maxScroll));
        }
      } else {
        // 兜底:按 vh 切
        for (let y = 0; y <= maxScroll; y += vh) points.push(y);
      }
      // 末尾允许滚到 footer
      if (points[points.length - 1] < maxScroll - 4) points.push(maxScroll);
      return Array.from(new Set(points)).sort((a, b) => a - b);
    };

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
        if (p < 1) rafId = requestAnimationFrame(tick);
        else isAnimating = false;
      };
      rafId = requestAnimationFrame(tick);
    };

    const snapToNext = (dir: 1 | -1) => {
      const points = getSnapPoints();
      const current = el.scrollTop;
      const vh = el.clientHeight;
      let idx = 0;
      for (let i = 0; i < points.length; i++) {
        if (points[i] <= current + vh / 3) idx = i;
      }
      const nextIdx = Math.max(0, Math.min(points.length - 1, idx + dir));
      if (nextIdx === idx) return;
      animateTo(points[nextIdx], 900);
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
        // 关闭原生 snap,改用 JS 缓动接管,与子页面一致
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
