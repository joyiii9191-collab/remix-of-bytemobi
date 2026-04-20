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

export function SnapPage({ title, children }: SnapPageProps) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} · ByteMobi`;
    return () => {
      document.title = prev;
    };
  }, [title]);

  return (
    <div
      className="app-light-theme font-sans relative"
      style={{
        color: "hsl(230 25% 18%)",
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <HomeBackground />
      <div className="relative z-10">
        <OptimizedHeader />
        {children}
        {/* Footer 单独占一屏(自适应内容高度,但参与 snap) */}
        <div
          style={{
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
          }}
        >
          <SiteFooter />
        </div>
      </div>
    </div>
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
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function SnapScreen({
  id,
  bg = "white",
  pad = true,
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

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        minHeight: "100vh",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
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
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={
        size === "xl"
          ? "text-4xl md:text-6xl font-bold tracking-tight mb-5"
          : "text-3xl md:text-5xl font-bold tracking-tight mb-5"
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
      className="text-base md:text-lg max-w-3xl"
      style={{ color: "hsl(230 25% 32%)", lineHeight: 1.7 }}
    >
      {children}
    </motion.p>
  );
}
