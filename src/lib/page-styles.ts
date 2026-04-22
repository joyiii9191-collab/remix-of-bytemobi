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

/* =====================================================================
 * 蓝紫渐变玻璃卡 (Blue-Purple Gradient Glass Card)
 * ---------------------------------------------------------------------
 * 与 About 页"价值观"卡片一致的视觉:
 *  - 玻璃材质底 (.glass-card) + 蓝→紫→粉的多层渐变染色
 *  - 悬浮时角落渐变光斑放大
 *  - 标题用 GRADIENT_TEXT_BLUE_PURPLE 染色
 *  - 大号半透明装饰图标贴在角落
 *
 * 推荐用法: 直接使用 <GradientGlassCard> 组件
 *   import { GradientGlassCard } from "@/components/GradientGlassCard";
 *   <GradientGlassCard icon={Sparkles} title="标题" desc="一句话描述…" />
 *
 * 自定义结构时,组合下面的 token:
 *   <div className={GRADIENT_GLASS_CARD_CLASS} style={GRADIENT_GLASS_CARD_STYLE}>
 *     <div className="absolute inset-0 opacity-60 pointer-events-none"
 *          style={GRADIENT_GLASS_OVERLAY_STYLE} />
 *     ...
 *   </div>
 * ===================================================================== */

/** 蓝紫渐变玻璃卡 — 卡片容器 className(配合 .glass-card) */
export const GRADIENT_GLASS_CARD_CLASS =
  "group relative rounded-2xl overflow-hidden glass-card";

/** 蓝紫渐变玻璃卡 — 卡片容器 inline style(叠加在 .glass-card 之上做染色) */
export const GRADIENT_GLASS_CARD_STYLE: React.CSSProperties = {
  borderRadius: 22,
  backgroundImage:
    "linear-gradient(135deg, rgba(99,102,241,0.10) 0%, rgba(168,85,247,0.08) 50%, rgba(236,72,153,0.06) 100%)",
};

/** 蓝紫渐变文字(标准) — 用于标题 */
export const GRADIENT_TEXT_BLUE_PURPLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, hsl(220 90% 50%) 0%, hsl(260 85% 55%) 50%, hsl(290 80% 58%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

/** 蓝紫渐变文字(更亮版本) — 用于序号 / 大字 */
export const GRADIENT_TEXT_BLUE_PURPLE_VIVID: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, hsl(220 90% 58%) 0%, hsl(280 80% 60%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

/** 卡片底部高光叠加层 — absolute inset-0,放在卡片内最底 */
export const GRADIENT_GLASS_OVERLAY_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(135deg, hsl(220 90% 70% / 0.12) 0%, hsl(260 85% 70% / 0.10) 50%, hsl(290 80% 72% / 0.08) 100%)",
};

/** 卡片角落悬浮光斑 — 配合 group / group-hover 使用 */
export const GRADIENT_GLASS_GLOW_STYLE: React.CSSProperties = {
  background:
    "radial-gradient(circle, hsl(260 90% 70% / 0.45) 0%, transparent 70%)",
  filter: "blur(22px)",
};
