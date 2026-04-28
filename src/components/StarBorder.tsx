import React from "react";

interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  /** @deprecated 保留接口兼容，颜色固定为蓝紫双流光 */
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

/**
 * StarBorder —— 首页主 CTA 按钮
 *
 * Hover 效果:从底部漫起一道带「波浪曲线顶端」的蓝紫光,
 * 玻璃底保持透明,光波缓缓上涌、波峰持续左右起伏,符合官网科技玻璃卡片风格。
 * 参考: oxxostudio CSS hover wave (clip-path polygon + keyframes)
 */
const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  speed = "5s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`sb-wave-btn star-border-wrap group relative inline-block rounded-full transition-transform duration-500 ease-out hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer ${className}`}
      style={{ ['--sb-speed' as any]: speed }}
      {...rest}
    >
      {/* 外层流光边框(已存在样式) */}
      <span className="star-border-glow" aria-hidden="true" />

      {/* 玻璃 pill —— 底色保持透明玻璃,hover 不再整体填充 */}
      <span
        className="sb-pill relative z-[1] overflow-hidden block backdrop-blur-xl text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border transition-[border-color,box-shadow] duration-500 ease-out
          bg-white/[0.08] border-white/[0.18] text-white
          group-hover:border-white/35
          shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.35),inset_0_-1px_0_0_hsla(0,0%,100%,0.08)]
          group-hover:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.5),0_14px_36px_-14px_hsla(265,85%,60%,0.55)]"
      >
        {/* 底部光晕层 —— 从按钮下方柔和亮起的蓝紫光,无波浪边缘 */}
        <span aria-hidden="true" className="sb-glow sb-glow-1" />
        {/* 第二层光晕,更宽更柔,做层叠扩散 */}
        <span aria-hidden="true" className="sb-glow sb-glow-2" />
        {/* 底部细光带,模拟光源贴边 */}
        <span aria-hidden="true" className="sb-glow-line" />
        {/* 玻璃高光反射:顶部细弧 + 斜向扫光 */}
        <span aria-hidden="true" className="sb-gloss" />
        <span aria-hidden="true" className="sb-sheen" />

        <span className="relative z-[1]">{children}</span>
      </span>

      <style>{`
        /* 底部光晕:无边缘的柔光,从按钮下方升起并扩散 */
        .sb-wave-btn .sb-glow {
          pointer-events: none;
          position: absolute;
          left: -10%;
          right: -10%;
          bottom: 0;
          height: 100%;
          opacity: 0;
          transform: translateY(35%) scaleY(0.7);
          transform-origin: 50% 100%;
          transition: opacity 700ms ease-out, transform 900ms cubic-bezier(.22,.9,.3,1);
          will-change: opacity, transform;
          mix-blend-mode: screen;
        }
        .sb-wave-btn .sb-glow-1 {
          background: radial-gradient(80% 110% at 50% 115%,
            hsl(275, 100%, 82%) 0%,
            hsl(250, 100%, 72%) 25%,
            hsla(225, 100%, 68%, 0.7) 50%,
            hsla(225, 100%, 68%, 0.25) 72%,
            transparent 88%);
          filter: blur(2px) saturate(1.4) brightness(1.1);
        }
        .sb-wave-btn .sb-glow-2 {
          background: radial-gradient(95% 130% at 50% 120%,
            hsl(220, 100%, 78%) 0%,
            hsl(265, 100%, 74%) 40%,
            hsla(270, 95%, 70%, 0.35) 70%,
            transparent 92%);
          filter: blur(10px) saturate(1.4) brightness(1.15);
          transition-delay: 80ms;
        }
        /* 底部贴边细光带,强化"光源在下方"的暗示 */
        .sb-wave-btn .sb-glow-line {
          pointer-events: none;
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: 0;
          height: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg,
            transparent 0%,
            hsla(245, 100%, 85%, 0.9) 30%,
            hsla(270, 100%, 90%, 1) 50%,
            hsla(245, 100%, 85%, 0.9) 70%,
            transparent 100%);
          filter: blur(0.6px);
          opacity: 0;
          mix-blend-mode: screen;
          transition: opacity 600ms ease-out;
          box-shadow: 0 0 14px hsla(260, 100%, 75%, 0.85);
        }

        /* 玻璃高光:顶部贴合 pill 弧度的细高光 */
        .sb-wave-btn .sb-gloss {
          pointer-events: none;
          position: absolute;
          left: 6%;
          right: 6%;
          top: 1px;
          height: 42%;
          border-radius: 9999px 9999px 50% 50% / 9999px 9999px 100% 100%;
          background: linear-gradient(
            180deg,
            hsla(0, 0%, 100%, 0.32) 0%,
            hsla(0, 0%, 100%, 0.08) 55%,
            transparent 100%
          );
          opacity: 0.55;
          mix-blend-mode: screen;
          transition: opacity 500ms ease-out;
        }
        .sb-wave-btn:hover .sb-gloss,
        .sb-wave-btn:focus-visible .sb-gloss {
          opacity: 0.95;
        }

        /* 斜向扫光:hover 时从左到右滑过,模拟玻璃反射 */
        .sb-wave-btn .sb-sheen {
          pointer-events: none;
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            115deg,
            transparent 30%,
            hsla(0, 0%, 100%, 0.18) 46%,
            hsla(245, 100%, 92%, 0.42) 50%,
            hsla(0, 0%, 100%, 0.18) 54%,
            transparent 70%
          );
          background-size: 180% 100%;
          background-position: 60% 0;
          opacity: 0;
          mix-blend-mode: screen;
          transition: opacity 600ms ease-out, background-position 900ms cubic-bezier(.22,.9,.3,1);
        }
        .sb-wave-btn:hover .sb-sheen,
        .sb-wave-btn:focus-visible .sb-sheen {
          opacity: 1;
          background-position: 40% 0;
        }
        .sb-wave-btn:hover .sb-glow,
        .sb-wave-btn:focus-visible .sb-glow {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }
        .sb-wave-btn:hover .sb-glow-2 {
          opacity: 0.9;
        }
        .sb-wave-btn:hover .sb-glow-line,
        .sb-wave-btn:focus-visible .sb-glow-line {
          opacity: 1;
        }

      `}</style>
    </Component>
  );
};

export default StarBorder;
