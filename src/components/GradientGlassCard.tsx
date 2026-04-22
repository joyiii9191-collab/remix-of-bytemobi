import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  GRADIENT_GLASS_CARD_CLASS,
  GRADIENT_GLASS_CARD_STYLE,
  GRADIENT_GLASS_OVERLAY_STYLE,
  GRADIENT_GLASS_GLOW_STYLE,
  GRADIENT_TEXT_BLUE_PURPLE,
  GRADIENT_TEXT_BLUE_PURPLE_VIVID,
  TEXT_MID,
  ACCENT,
} from "@/lib/page-styles";

/* =====================================================================
 * 蓝紫渐变玻璃卡 — 标准复用组件
 * ---------------------------------------------------------------------
 * 视觉规范(与 About 页价值观卡片一致):
 *  - 玻璃材质底 + 蓝→紫→粉多层渐变染色
 *  - 标题用蓝紫渐变文字
 *  - 大号半透明装饰图标贴在右下角
 *  - 悬浮时 -3px 上移 + 角落渐变光斑放大
 *
 * 用法 1 — 完整卡片(图标 + 序号 + 标题 + 描述):
 *   <GradientGlassCard
 *     icon={Sparkles}
 *     no="01"
 *     title="长期主义"
 *     desc="以十年视角做今天的选择…"
 *   />
 *
 * 用法 2 — 自定义内容,只用容器外壳:
 *   <GradientGlassCardShell>
 *     {自定义内容}
 *   </GradientGlassCardShell>
 *
 * 用法 3 — 单独提取部件:
 *   <GradientGlassDecoIcon icon={Sparkles} />
 *   <GradientGlassOverlay />
 *   <GradientGlassGlow />
 * ===================================================================== */

/** 卡片底色叠加层 */
export function GradientGlassOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-60 pointer-events-none"
      style={GRADIENT_GLASS_OVERLAY_STYLE}
    />
  );
}

/** 角落悬浮光斑 */
export function GradientGlassGlow({
  position = "top-right",
}: {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}) {
  const pos: Record<string, string> = {
    "top-right": "-top-16 -right-16",
    "top-left": "-top-16 -left-16",
    "bottom-right": "-bottom-16 -right-16",
    "bottom-left": "-bottom-16 -left-16",
  };
  return (
    <div
      aria-hidden
      className={`absolute ${pos[position]} w-44 h-44 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      style={GRADIENT_GLASS_GLOW_STYLE}
    />
  );
}

/** 大号半透明装饰图标(角落贴) */
export function GradientGlassDecoIcon({
  icon: Icon,
  size = 92,
  position = "bottom-right",
  opacity = 0.18,
}: {
  icon: LucideIcon;
  size?: number;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  opacity?: number;
}) {
  const pos: Record<string, string> = {
    "bottom-right": "-bottom-3 -right-3",
    "bottom-left": "-bottom-3 -left-3",
    "top-right": "-top-3 -right-3",
    "top-left": "-top-3 -left-3",
  };
  return (
    <div
      aria-hidden
      className={`absolute ${pos[position]} pointer-events-none`}
      style={{ color: ACCENT, opacity }}
    >
      <Icon
        size={size}
        strokeWidth={1.1}
        style={{
          filter: "drop-shadow(0 2px 6px rgba(99,102,241,0.25))",
        }}
      />
    </div>
  );
}

/** 卡片外壳 — 自带玻璃染色 / overlay / glow / hover 上移,内部内容自定义 */
type ShellProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
  className?: string;
  /** 是否显示底色叠加层(默认 true) */
  withOverlay?: boolean;
  /** 是否显示角落光斑(默认 true) */
  withGlow?: boolean;
  /** 内边距 className(默认紧凑型) */
  padding?: string;
};

export function GradientGlassCardShell({
  children,
  className = "",
  withOverlay = true,
  withGlow = true,
  padding = "px-4 py-3 md:px-5 md:py-3.5",
  style,
  ...rest
}: ShellProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
      className={`${GRADIENT_GLASS_CARD_CLASS} ${padding} ${className}`}
      style={{ ...GRADIENT_GLASS_CARD_STYLE, ...style }}
    >
      {withOverlay && <GradientGlassOverlay />}
      {withGlow && <GradientGlassGlow />}
      {children}
    </motion.div>
  );
}

/** 完整渐变玻璃卡(图标 + 可选序号 + 蓝紫渐变标题 + 描述) */
export function GradientGlassCard({
  icon,
  no,
  title,
  desc,
  className = "",
  padding,
  decoIconSize = 64,
  decoIconPosition = "top-right",
  decoIconOpacity = 0.16,
}: {
  icon: LucideIcon;
  no?: string;
  title: string;
  desc?: string;
  className?: string;
  padding?: string;
  decoIconSize?: number;
  decoIconPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  decoIconOpacity?: number;
}) {
  return (
    <GradientGlassCardShell className={className} padding={padding}>
      <GradientGlassDecoIcon
        icon={icon}
        size={decoIconSize}
        position={decoIconPosition}
        opacity={decoIconOpacity}
      />

      <div className="relative">
        {/* 顶行:序号 + 标题 同一行,紧凑排列 */}
        <div className="flex items-baseline gap-2 mb-1">
          {no && (
            <span
              className="font-bold tabular-nums leading-none shrink-0"
              style={{
                fontSize: "0.95rem",
                fontFamily:
                  "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                ...GRADIENT_TEXT_BLUE_PURPLE_VIVID,
              }}
            >
              {no}
            </span>
          )}
          <h3
            className="text-sm md:text-base font-bold leading-tight truncate"
            style={GRADIENT_TEXT_BLUE_PURPLE}
          >
            {title}
          </h3>
        </div>
        {desc && (
          <p
            className="text-[12px] md:text-[12.5px] leading-snug pr-10"
            style={{ color: TEXT_MID }}
          >
            {desc}
          </p>
        )}
      </div>
    </GradientGlassCardShell>
  );
}
