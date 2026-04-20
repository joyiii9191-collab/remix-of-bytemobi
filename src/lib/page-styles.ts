import type React from "react";

/**
 * 全站统一的玻璃卡片 style 兜底（与首页"核心业务板块" MagicBento 一致）。
 * 真实的玻璃质感（背景、shimmer、hover）都在 `.glass-card` 类里（src/index.css），
 * 这里仅保留 inline border-radius 作为兜底，便于不知情的旧代码直接 `style={CARD}` 不出错。
 *
 * 推荐写法：
 *   <div className="rounded-2xl p-6 glass-card">…</div>
 *
 * 兼容旧写法：
 *   <div className="rounded-2xl p-6 glass-card" style={GLASS_CARD}>…</div>
 */
export const GLASS_CARD: React.CSSProperties = {
  // 让旧的 style={CARD} 不再覆盖 .glass-card 的关键属性，
  // 仅保留 borderRadius 作为视觉兜底。
  borderRadius: 22,
};

/** 页面统一文字色 */
export const TEXT_DARK = "hsl(230 30% 18%)";
export const TEXT_MID = "hsl(230 20% 40%)";
export const ACCENT = "hsl(245 60% 45%)";

/** 顶部小徽章统一样式 */
export const EYEBROW_PILL: React.CSSProperties = {
  background: "hsla(0, 0%, 100%, 0.45)",
  color: "hsl(260 60% 40%)",
  border: "1px solid hsla(0, 0%, 100%, 0.7)",
  boxShadow: "inset 0 1px 0 hsla(0, 0%, 100%, 0.8)",
};
