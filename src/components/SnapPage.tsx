import React, { useEffect } from "react";
import { motion } from "motion/react";
import { OptimizedHeader } from "./OptimizedHeader";
import { SiteFooter } from "./SiteFooter";
import { HomeBackground } from "./HomeBackground";

/**
 * SnapPage —— 子页面统一容器
 * - 整页 scroll-snap 吸附式滑动
 * - Header 固定浮动,Footer 作为最后一屏
 * - 共用首页 home-bg 背景
 */
interface SnapPageProps {
  /** 浏览器标题 */
  title: string;
  children: React.ReactNode;
}

// 暴露滚动容器,供子组件 (e.g. useScroll) 使用
export const SnapScrollContext = React.createContext<React.RefObject<HTMLDivElement> | null>(null);

export function SnapPage({ title, children }: SnapPageProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = `${title} · ByteMobi`;
    return () => {
      document.title = prev;
    };
  }, [title]);

  // 自定义带曲线缓动的吸附式滚动:接管 wheel / 键盘,
  // 用 requestAnimationFrame + easeInOutCubic 让进出场有节奏感(先慢-加速-再缓停)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isAnimating = false;
    let rafId = 0;
    // easeInOutSine:两端更绵长,整体更柔,无急促中段
    const ease = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    const getScreens = () =>
      Array.from(el.querySelectorAll<HTMLElement>("section[style*='scroll-snap-align']"));

    const animateTo = (target: number, duration = 2200) => {
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
      const current = el.scrollTop;
      const vh = el.clientHeight;
      let idx = 0;
      for (let i = 0; i < screens.length; i++) {
        if (screens[i].offsetTop <= current + vh / 3) idx = i;
      }
      const nextIdx = Math.max(0, Math.min(screens.length - 1, idx + dir));
      if (dir === 1 && nextIdx === idx) {
        const maxScroll = el.scrollHeight - vh;
        if (current < maxScroll - 4) animateTo(maxScroll, 2200);
        return;
      }
      animateTo(screens[nextIdx].offsetTop, 2200);
    };

    // 统一滚轮 / 触控板手感:
    // - 鼠标滚轮:单次 deltaY 通常很大(100+),需要更高阈值 + 更长冷却,避免一格就跳
    // - 触控板:连续小 delta 流(惯性),累积达阈值才触发
    let wheelLock = 0;
    let lastWheelTs = 0;
    let accumDelta = 0;
    let lastDir: 1 | -1 = 1;
    const COOLDOWN = 2400;     // 略长于动画时长,期间忽略所有 wheel
    const TRIGGER = 220;       // 累积阈值:鼠标滚轮约需 2 格,触控板需推一段
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = performance.now();
      if (isAnimating || now - wheelLock < COOLDOWN) {
        // 冷却期内仍在持续输入,重置累积避免冷却结束瞬间立刻再触发
        accumDelta = 0;
        lastWheelTs = now;
        return;
      }

      const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;
      // 方向反转或停顿 >220ms,重置累积
      if (dir !== lastDir || now - lastWheelTs > 220) accumDelta = 0;
      lastDir = dir;
      lastWheelTs = now;
      // 单次 delta 截顶,削弱鼠标滚轮的"暴力一格"
      accumDelta += Math.min(Math.abs(e.deltaY), 60);

      if (accumDelta < TRIGGER) return;
      accumDelta = 0;
      wheelLock = now;
      snapToNext(dir);
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
    <SnapScrollContext.Provider value={scrollRef}>
      <div
        ref={scrollRef}
        className="app-light-theme font-sans relative"
        style={{
          color: "hsl(230 25% 18%)",
          height: "100vh",
          overflowY: "auto",
          // 关闭原生 snap,改用 JS 缓动接管,避免与浏览器吸附冲突
          scrollSnapType: "none",
        }}
      >
        <HomeBackground />
        <div className="relative z-10">
          <OptimizedHeader />
          {children}
          {/* Footer 不参与 snap,作为页面自然末尾,避免遮挡上一屏内容 */}
          <div style={{ scrollSnapAlign: "none" }}>
            <SiteFooter />
          </div>
        </div>
      </div>
    </SnapScrollContext.Provider>
  );
}

/**
 * SnapScreen —— 单个吸附式屏
 * - 默认 100vh + scroll-snap-align: start
 * - 提供 padding-top 给 fixed header 留位
 */
interface SnapScreenProps {
  id?: string;
  /** 背景: 'white' | 'tint' | 'dark' | 自定义 CSS */
  bg?: "white" | "tint" | "dark" | string;
  /** 是否需要 hero 顶部留白(默认 true,首屏需要) */
  pad?: boolean;
  /**
   * 是否参与 scroll-snap 吸附(默认 true)。
   * 设为 false 后该屏不再吸附,高度按内容自适应,允许长内容自由滚动;
   * 用户滚出该屏后会重新进入下一屏的吸附。
   */
  snap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function SnapScreen({
  id,
  bg = "white",
  pad = true,
  snap = true,
  className = "",
  style,
  children,
}: SnapScreenProps) {
  const bgStyle: React.CSSProperties = (() => {
    if (bg === "white") return { background: "transparent" };
    if (bg === "tint") return { background: "hsla(0, 0%, 100%, 0.35)" };
    if (bg === "dark")
      return {
        background:
          "linear-gradient(180deg, hsl(245 50% 14%) 0%, hsl(260 45% 20%) 100%)",
        color: "white",
      };
    return { background: bg };
  })();

  const snapStyle: React.CSSProperties = snap
    ? {
        minHeight: "100vh",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      }
    : {
        // 长内容屏:仅在顶部设置吸附点,内容可超过一屏自由滚动,
        // 直至用户滚到下一屏的吸附点。
        minHeight: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "normal",
      };

  return (
    <section
      id={id}
      className={`relative w-full ${snap ? "overflow-hidden" : ""} ${className}`}
      style={{
        ...snapStyle,
        paddingTop: pad ? "96px" : 0,
        paddingBottom: "32px",
        display: "flex",
        flexDirection: "column",
        ...bgStyle,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/**
 * 屏内通用栅格 —— 居中、最大宽度
 */
export function ScreenInner({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative z-10 w-full max-w-[1200px] mx-auto px-6 flex-1 flex flex-col justify-center items-center text-center ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * Eyebrow / Section title 套件
 */
export function ScreenEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
      style={{ color: "hsl(245 60% 45%)" }}
    >
      {children}
    </motion.div>
  );
}

export function ScreenTitle({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={
        (size === "xl"
          ? "text-4xl md:text-6xl font-bold tracking-tight mb-5"
          : "text-3xl md:text-5xl font-bold tracking-tight mb-5") +
        (className ? " " + className : "")
      }
      style={{
        background:
          "linear-gradient(180deg, hsl(245 60% 12%) 0%, hsl(245 45% 32%) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        lineHeight: 1.15,
      }}
    >
      {children}
    </motion.h2>
  );
}

export function ScreenLead({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="text-base md:text-lg max-w-3xl mx-auto"
      style={{ color: "hsl(230 25% 32%)", lineHeight: 1.7 }}
    >
      {children}
    </motion.p>
  );
}
