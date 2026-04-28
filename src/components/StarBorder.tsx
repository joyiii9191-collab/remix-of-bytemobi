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
        .sb-wave-btn .sb-wave {
          pointer-events: none;
          position: absolute;
          left: -10%;
          right: -10%;
          bottom: -120%;
          height: 200%;
          opacity: 0;
          transition: bottom 700ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
          will-change: bottom, transform, opacity;
          /* 振幅压扁:波峰波谷只在 48%~52% 之间,波浪更低更细 */
          clip-path: polygon(
            0% 52%, 5% 51%, 10% 49.5%, 15% 48.6%, 20% 48.2%, 25% 48.6%, 30% 49.5%,
            35% 51%, 40% 52%, 45% 52.6%, 50% 52.8%, 55% 52.6%, 60% 52%, 65% 51%,
            70% 49.5%, 75% 48.6%, 80% 48.2%, 85% 48.6%, 90% 49.5%, 95% 51%, 100% 52%,
            100% 100%, 0% 100%
          );
        }
        .sb-wave-btn .sb-wave-1 {
          background: radial-gradient(120% 80% at 50% 100%,
            hsl(270, 100%, 78%) 0%,
            hsl(245, 100%, 72%) 35%,
            hsl(220, 100%, 70%) 65%,
            hsla(220, 100%, 70%, 0.3) 85%,
            transparent 100%);
          filter: blur(1px) saturate(1.2);
        }
        .sb-wave-btn .sb-wave-2 {
          background: radial-gradient(120% 80% at 50% 100%,
            hsl(220, 100%, 75%) 0%,
            hsl(265, 100%, 75%) 50%,
            hsla(270, 95%, 72%, 0.3) 80%,
            transparent 100%);
          filter: blur(5px) saturate(1.3);
          transition-delay: 80ms;
          mix-blend-mode: screen;
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
        .sb-wave-btn:hover .sb-wave,
        .sb-wave-btn:focus-visible .sb-wave {
          /* 上涌停在更低位置,波浪高度更小 */
          bottom: -75%;
          opacity: 1;
          animation: sb-wave-flow 3.6s ease-in-out 700ms infinite alternate;
        }
        .sb-wave-btn:hover .sb-wave-2 {
          animation-direction: alternate-reverse;
          animation-duration: 4.2s;
        }
        @keyframes sb-wave-flow {
          0%   { transform: translateX(-4%); }
          100% { transform: translateX(4%); }
        }

      `}</style>
    </Component>
  );
};

export default StarBorder;
