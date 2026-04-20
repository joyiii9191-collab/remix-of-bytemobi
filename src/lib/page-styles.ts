import type React from "react";

/**
 * 全站统一的玻璃卡片样式（蓝紫磨砂玻璃，logo 蓝 70% / 紫 30%）
 * 与首页 ReflectApp 的卡片质感保持一致。
 *
 * 使用方式：
 *   <div className="rounded-2xl p-6 glass-card" style={GLASS_CARD}>
 *
 * `glass-card` class 提供动态高光、shimmer 和 hover 抬升效果，
 * 已在 src/index.css 中全局定义。
 */
export const GLASS_CARD: React.CSSProperties = {
  background:
    "linear-gradient(135deg, hsla(220,95%,75%,0.18) 0%, hsla(232,85%,72%,0.14) 35%, hsla(250,75%,72%,0.12) 70%, hsla(270,75%,75%,0.16) 100%), linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 100%)",
  border: "1px solid hsla(232, 80%, 70%, 0.22)",
  boxShadow:
    "inset 0 1.5px 0 0 rgba(255,255,255,0.85), inset 1px 0 0 0 rgba(255,255,255,0.4), inset 0 -1px 0 0 hsla(230,30%,50%,0.12), inset 0 -10px 24px -12px rgba(255,255,255,0.4), 0 10px 30px -10px hsla(232,85%,40%,0.25), 0 2px 6px -2px hsla(232,85%,40%,0.15)",
};

/** 页面统一文字色 */
export const TEXT_DARK = "hsl(230 30% 18%)";
export const TEXT_MID = "hsl(230 20% 40%)";
export const ACCENT = "hsl(245 60% 45%)";

/** 顶部小徽章统一样式 */
export const EYEBROW_PILL: React.CSSProperties = {
  background: "rgba(99,102,241,0.1)",
  color: "hsl(245 60% 35%)",
  border: "1px solid rgba(124,58,237,0.18)",
};
