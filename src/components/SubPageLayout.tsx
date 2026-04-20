import React, { useEffect } from "react";
import { motion } from "motion/react";
import { OptimizedHeader } from "./OptimizedHeader";
import { SiteFooter } from "./SiteFooter";

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

  return (
    <div
      className="app-light-theme min-h-screen font-sans relative"
      style={{
        background: "#F2F0F5",
        color: "hsl(230 25% 18%)",
      }}
    >
      {/* Mica 风彩色丝带光斑背景 */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 75% 60% at 8% 12%, hsla(220, 100%, 70%, 0.85) 0%, transparent 55%),
            radial-gradient(ellipse 70% 55% at 92% 18%, hsla(195, 95%, 72%, 0.70) 0%, transparent 55%),
            radial-gradient(ellipse 80% 65% at 95% 88%, hsla(275, 90%, 70%, 0.85) 0%, transparent 55%),
            radial-gradient(ellipse 70% 60% at 5% 92%, hsla(320, 90%, 78%, 0.75) 0%, transparent 55%),
            radial-gradient(ellipse 50% 45% at 50% 50%, hsla(25, 95%, 78%, 0.45) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 30% 75%, hsla(160, 80%, 75%, 0.40) 0%, transparent 60%),
            linear-gradient(180deg, #F4F2F7 0%, #EEEAF3 50%, #F0EAF5 100%)
          `,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 45% 40% at 35% 60%, hsla(260, 95%, 75%, 0.45) 0%, transparent 70%),
            radial-gradient(ellipse 40% 38% at 70% 30%, hsla(215, 95%, 78%, 0.45) 0%, transparent 70%)
          `,
          filter: 'blur(8px)',
        }}
      />
      <div className="relative z-10">
      <OptimizedHeader />

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "80px" }}
      >
        {/* 背景动效层 */}
        {heroVisual && (
          <div className="absolute inset-0 pointer-events-none opacity-70">
            {heroVisual}
          </div>
        )}
        {/* 渐隐遮罩，让文字更清晰 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,247,0.0) 0%, rgba(245,245,247,0.7) 80%, #F5F5F7 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-5"
              style={{
                background: "rgba(99,102,241,0.1)",
                color: "hsl(245 60% 35%)",
                border: "1px solid rgba(124,58,237,0.18)",
              }}
            >
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-5"
            style={{
              background:
                "linear-gradient(180deg, hsl(245 60% 12%) 0%, hsl(245 45% 30%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.15,
            }}
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-base md:text-xl max-w-3xl"
            style={{ color: "hsl(230 25% 32%)", lineHeight: 1.7 }}
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
        background: bg === "tint" ? "#EDEDF2" : "transparent",
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
      className="rounded-2xl p-6 h-full transition-all"
      style={{
        background:
          "linear-gradient(135deg, hsla(220,95%,75%,0.18) 0%, hsla(232,85%,72%,0.14) 35%, hsla(250,75%,72%,0.12) 70%, hsla(270,75%,75%,0.16) 100%), linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 100%)",
        backdropFilter: "blur(8px) saturate(1.6)",
        WebkitBackdropFilter: "blur(8px) saturate(1.6)",
        border: "1px solid hsla(232, 80%, 70%, 0.22)",
        boxShadow:
          "inset 0 1px 0 0 rgba(255,255,255,0.55), 0 8px 28px -10px hsla(232,85%,55%,0.22), 0 16px 40px -16px hsla(265,75%,58%,0.18)",
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
