import React, { useEffect } from "react";
import { motion } from "motion/react";
import { OptimizedHeader } from "./OptimizedHeader";
import { SiteFooter } from "./SiteFooter";
import { HomeBackground } from "./HomeBackground";

interface SubPageLayoutProps {
  /** 浏览器标题 */
  title: string;
  /** Hero 主标题 */
  heroTitle: React.ReactNode;
  /** Hero 小字 */
  heroSubtitle: React.ReactNode;
  /** Hero 顶部小标签（可选） */
  eyebrow?: React.ReactNode;
  /** Hero 右侧/背景动效 */
  heroVisual?: React.ReactNode;
  /** Hero 下方主体内容 */
  children: React.ReactNode;
}

export function SubPageLayout({
  title,
  heroTitle,
  heroSubtitle,
  eyebrow,
  heroVisual,
  children,
}: SubPageLayoutProps) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} · ByteMobi`;
    window.scrollTo({ top: 0, behavior: "auto" });
    return () => {
      document.title = prev;
    };
  }, [title]);

  // 与 SnapPage 一致的 900ms easeInOutCubic 曲线缓动滚动:
  // 接管 wheel/键盘,按视口高度为单位推进,先慢-加速-缓停,告别匀速线性。
  useEffect(() => {
    let isAnimating = false;
    let rafId = 0;
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateTo = (target: number, duration = 900) => {
      cancelAnimationFrame(rafId);
      const start = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const clamped = Math.max(0, Math.min(maxScroll, target));
      const distance = clamped - start;
      if (Math.abs(distance) < 2) return;
      const startTime = performance.now();
      isAnimating = true;
      const tick = (now: number) => {
        const p = Math.min(1, (now - startTime) / duration);
        window.scrollTo(0, start + distance * ease(p));
        if (p < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          isAnimating = false;
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const step = (dir: 1 | -1) => {
      // 每次推进约 0.85 个视口高度,既保持节奏又避免一次跳太多
      const delta = window.innerHeight * 0.85 * dir;
      animateTo(window.scrollY + delta, 900);
    };

    let wheelLock = 0;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 4) return;
      e.preventDefault();
      const now = performance.now();
      if (isAnimating || now - wheelLock < 750) return;
      wheelLock = now;
      step(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        if (!isAnimating) step(1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        if (!isAnimating) step(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="app-light-theme min-h-screen font-sans relative"
      style={{
        color: "hsl(230 25% 18%)",
      }}
    >
      <HomeBackground />
      <div className="relative z-10">
      <OptimizedHeader />

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "112px", paddingBottom: "32px" }}
      >
        {/* 背景动效层 */}
        {heroVisual && (
          <div className="absolute inset-0 pointer-events-none opacity-60">
            {heroVisual}
          </div>
        )}
        {/* 柔和渐隐遮罩，让 Hero 与主体自然融合（不再形成明显分界） */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,247,0.0) 0%, rgba(245,245,247,0.0) 60%, rgba(245,245,247,0.0) 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{
                background: "hsla(245, 60%, 60%, 0.10)",
                color: "hsl(245 50% 35%)",
                border: "1px solid hsla(245, 60%, 60%, 0.18)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{
              background:
                "linear-gradient(180deg, hsl(245 60% 12%) 0%, hsl(245 45% 30%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
            }}
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-sm md:text-base max-w-3xl mx-auto"
            style={{ color: "hsl(230 20% 40%)", lineHeight: 1.7 }}
          >
            {heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* 主体 */}
      <main className="relative z-10">{children}</main>

      <SiteFooter />
      </div>
    </div>
  );
}

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  bg?: "white" | "tint";
}

export function PageSection({
  id,
  eyebrow,
  title,
  description,
  children,
  bg = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className="w-full py-20 px-6"
      style={{
        background: bg === "tint" ? "hsla(0, 0%, 100%, 0.35)" : "transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <div
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "hsl(245 60% 45%)" }}
              >
                {eyebrow}
              </div>
            )}
            {title && (
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(245 60% 14%) 0%, hsl(245 45% 30%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className="text-base md:text-lg"
                style={{ color: "hsl(230 25% 32%)", lineHeight: 1.7 }}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-3xl p-6 h-full transition-all"
      style={{
        background:
          "linear-gradient(155deg, hsla(0,0%,100%,0.30) 0%, hsla(0,0%,100%,0.15) 45%, hsla(0,0%,100%,0.08) 100%)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        border: "1px solid hsla(0, 0%, 100%, 0.6)",
        boxShadow:
          "inset 0 1.5px 0 0 hsla(0,0%,100%,0.95), 0 24px 60px -18px hsla(25, 40%, 25%, 0.22), 0 4px 12px -3px hsla(25, 40%, 25%, 0.12)",
      }}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "hsl(230 30% 18%)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "hsl(230 20% 38%)" }}
      >
        {desc}
      </p>
    </div>
  );
}

/** 计数动画数字 */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / (duration * 1000));
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
