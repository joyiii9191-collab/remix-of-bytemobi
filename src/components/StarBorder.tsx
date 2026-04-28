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
          bg-white/[0.06] border-white/[0.16] text-white
          group-hover:border-white/30
          shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.18)]
          group-hover:shadow-[0_18px_42px_-18px_hsla(265,90%,60%,0.5)]"
      >
        {/* 底部光晕层 —— 从按钮下方柔和亮起的蓝紫光,无波浪边缘 */}
        <span aria-hidden="true" className="sb-glow sb-glow-1" />
        {/* 第二层光晕,更宽更柔,做层叠扩散 */}
        <span aria-hidden="true" className="sb-glow sb-glow-2" />

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
          background: radial-gradient(85% 120% at 50% 118%,
            hsl(265, 95%, 62%) 0%,
            hsl(245, 95%, 55%) 30%,
            hsla(225, 95%, 50%, 0.75) 55%,
            hsla(225, 90%, 48%, 0.28) 75%,
            transparent 92%);
          filter: blur(3px) saturate(1.5);
        }
        .sb-wave-btn .sb-glow-2 {
          background: radial-gradient(100% 140% at 50% 125%,
            hsl(225, 95%, 58%) 0%,
            hsl(265, 95%, 56%) 40%,
            hsla(275, 90%, 55%, 0.4) 72%,
            transparent 94%);
          filter: blur(14px) saturate(1.5);
          transition-delay: 80ms;
        }

        .sb-wave-btn:hover .sb-glow,
        .sb-wave-btn:focus-visible .sb-glow {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }
        .sb-wave-btn:hover .sb-glow-2 {
          opacity: 0.95;
        }

      `}</style>
    </Component>
  );
};

export default StarBorder;
