import React from "react";

/**
 * GlassCategoryIcon
 * - 透明玻璃球容器(高光、内阴影、磨砂底)
 * - 内嵌彩色渐变图标(填充式,半透明)
 * 参考样式:浅蓝玻璃、柔和高光、Fluent UI 风格的填充图标
 */

type Variant =
  | "dating"
  | "lifestyle"
  | "game"
  | "finance"
  | "entertainment"
  | "shopping"
  | "news"
  | "more";

interface Props {
  variant: Variant;
  size?: number;
}

const ACCENT_FROM = "hsl(230 95% 70%)"; // 主蓝
const ACCENT_TO = "hsl(245 80% 55%)";   // 深紫蓝

// —— 单个图标的内部 SVG paths(填充式,半透明)——
function IconArt({ variant }: { variant: Variant }) {
  const gradId = `g-${variant}`;
  const gradLight = `gl-${variant}`;
  const common = (
    <defs>
      <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={ACCENT_FROM} stopOpacity="0.95" />
        <stop offset="100%" stopColor={ACCENT_TO} stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id={gradLight} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.35" />
      </linearGradient>
    </defs>
  );

  switch (variant) {
    case "dating":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <path
            d="M32 56 C18 46 8 38 8 26 A12 12 0 0 1 32 22 A12 12 0 0 1 56 26 C56 38 46 46 32 56 Z"
            fill={`url(#${gradId})`}
          />
          <path
            d="M22 22 A8 8 0 0 1 32 22 A8 8 0 0 1 42 22 C42 28 36 32 32 36 C28 32 22 28 22 22 Z"
            fill={`url(#${gradLight})`}
          />
        </svg>
      );
    case "lifestyle":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <path
            d="M14 14 H50 A4 4 0 0 1 54 18 V46 A4 4 0 0 1 50 50 H32 L20 56 V50 H14 A4 4 0 0 1 10 46 V18 A4 4 0 0 1 14 14 Z"
            fill={`url(#${gradId})`}
          />
          <circle cx="32" cy="28" r="6" fill={`url(#${gradLight})`} />
          <circle cx="32" cy="28" r="2.5" fill={ACCENT_TO} opacity="0.7" />
        </svg>
      );
    case "game":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <rect x="8" y="20" width="48" height="28" rx="10" fill={`url(#${gradId})`} />
          <rect x="14" y="28" width="10" height="3" rx="1.5" fill={`url(#${gradLight})`} />
          <rect x="17.5" y="24.5" width="3" height="10" rx="1.5" fill={`url(#${gradLight})`} />
          <circle cx="42" cy="30" r="2.5" fill={`url(#${gradLight})`} />
          <circle cx="48" cy="36" r="2.5" fill={`url(#${gradLight})`} />
        </svg>
      );
    case "finance":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <path
            d="M22 14 L30 22 H34 L42 14 C44 12 46 14 44.5 16 L38 22 C46 22 52 28 52 38 C52 48 44 56 32 56 C20 56 12 48 12 38 C12 28 18 22 26 22 L19.5 16 C18 14 20 12 22 14 Z"
            fill={`url(#${gradId})`}
          />
          <text x="32" y="44" textAnchor="middle" fontSize="18" fontWeight="700" fill={`url(#${gradLight})`}>¥</text>
        </svg>
      );
    case "entertainment":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <path
            d="M28 12 L46 8 V40 A8 8 0 1 1 38 32 V20 L28 22 V46 A8 8 0 1 1 20 38 V18 A4 4 0 0 1 24 14 Z"
            fill={`url(#${gradId})`}
          />
          <ellipse cx="22" cy="42" rx="3" ry="2" fill={`url(#${gradLight})`} />
        </svg>
      );
    case "shopping":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <path
            d="M10 14 H18 L22 20 H52 A2 2 0 0 1 54 22.5 L48 40 A4 4 0 0 1 44 43 H24 L22 48 H50 V52 H22 A4 4 0 0 1 18 47 L14 18 H10 Z"
            fill={`url(#${gradId})`}
          />
          <circle cx="26" cy="56" r="3" fill={`url(#${gradId})`} />
          <circle cx="44" cy="56" r="3" fill={`url(#${gradId})`} />
          <path d="M26 26 H46 L42 36 H28 Z" fill={`url(#${gradLight})`} opacity="0.7" />
        </svg>
      );
    case "news":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <rect x="10" y="12" width="36" height="44" rx="4" fill={`url(#${gradId})`} />
          <rect x="46" y="22" width="10" height="34" rx="3" fill={`url(#${gradId})`} opacity="0.85" />
          <rect x="16" y="20" width="24" height="3" rx="1.5" fill={`url(#${gradLight})`} />
          <rect x="16" y="28" width="24" height="2" rx="1" fill={`url(#${gradLight})`} opacity="0.7" />
          <rect x="16" y="34" width="24" height="2" rx="1" fill={`url(#${gradLight})`} opacity="0.7" />
          <rect x="16" y="40" width="16" height="2" rx="1" fill={`url(#${gradLight})`} opacity="0.7" />
        </svg>
      );
    case "more":
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          {common}
          <circle cx="32" cy="32" r="22" fill={`url(#${gradId})`} />
          <circle cx="22" cy="32" r="3" fill={`url(#${gradLight})`} />
          <circle cx="32" cy="32" r="3" fill={`url(#${gradLight})`} />
          <circle cx="42" cy="32" r="3" fill={`url(#${gradLight})`} />
        </svg>
      );
  }
}

export function GlassCategoryIcon({ variant, size = 96 }: Props) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        borderRadius: "50%",
        // 透明玻璃球底:浅蓝渐变 + 玻璃模糊感
        background:
          "radial-gradient(circle at 30% 25%, hsla(220,100%,98%,0.95) 0%, hsla(225,90%,92%,0.55) 45%, hsla(235,70%,82%,0.35) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow:
          "inset 0 1px 2px hsla(0,0%,100%,0.9), inset 0 -2px 6px hsla(230,60%,60%,0.15), 0 10px 24px -12px hsla(230,80%,50%,0.35)",
        border: "1px solid hsla(0,0%,100%,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* 顶部高光 */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "18%",
          width: "55%",
          height: "30%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, hsla(0,0%,100%,0.7) 0%, hsla(0,0%,100%,0) 70%)",
          pointerEvents: "none",
        }}
      />
      {/* 内嵌图标 */}
      <div style={{ width: "55%", height: "55%", position: "relative", zIndex: 2 }}>
        <IconArt variant={variant} />
      </div>
    </div>
  );
}
