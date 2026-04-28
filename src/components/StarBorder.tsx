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
        {/* 波浪光层 —— 用 clip-path 画顶端波浪,蓝紫渐变 + 模糊呈光感 */}
        <span aria-hidden="true" className="sb-wave sb-wave-1" />
        {/* 第二层波浪,反向、半透明,做层叠光晕 */}
        <span aria-hidden="true" className="sb-wave sb-wave-2" />
        {/* 波峰高光细线 */}
        <span aria-hidden="true" className="sb-wave-crest" />

        <span className="relative z-[1]">{children}</span>
      </span>

      <style>{`
        .sb-wave-btn .sb-wave {
          pointer-events: none;
          position: absolute;
          left: -10%;
          right: -10%;
          bottom: -120%;
          height: 220%;
          opacity: 0;
          transition: bottom 700ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
          will-change: bottom, transform, opacity;
          clip-path: polygon(
            0% 50%, 5% 47%, 10% 44%, 15% 42%, 20% 41%, 25% 42%, 30% 44%,
            35% 47%, 40% 50%, 45% 52%, 50% 53%, 55% 52%, 60% 50%, 65% 47%,
            70% 44%, 75% 42%, 80% 41%, 85% 42%, 90% 44%, 95% 47%, 100% 50%,
            100% 100%, 0% 100%
          );
        }
        .sb-wave-btn .sb-wave-1 {
          background: radial-gradient(120% 80% at 50% 100%,
            hsla(265, 95%, 72%, 0.85) 0%,
            hsla(245, 95%, 65%, 0.65) 35%,
            hsla(220, 95%, 60%, 0.30) 65%,
            transparent 90%);
          filter: blur(2px);
        }
        .sb-wave-btn .sb-wave-2 {
          background: radial-gradient(120% 80% at 50% 100%,
            hsla(220, 95%, 70%, 0.55) 0%,
            hsla(265, 90%, 65%, 0.30) 50%,
            transparent 85%);
          filter: blur(6px);
          transition-delay: 80ms;
        }
        .sb-wave-btn:hover .sb-wave,
        .sb-wave-btn:focus-visible .sb-wave {
          bottom: -55%;
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

        /* 波峰高光线:贴在光波顶端 */
        .sb-wave-btn .sb-wave-crest {
          pointer-events: none;
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: 0;
          height: 1px;
          opacity: 0;
          background: linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.7) 50%, transparent 100%);
          box-shadow: 0 0 10px hsla(265, 95%, 80%, 0.7);
          transition: bottom 700ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
        }
        .sb-wave-btn:hover .sb-wave-crest,
        .sb-wave-btn:focus-visible .sb-wave-crest {
          bottom: 52%;
          opacity: 1;
        }
      `}</style>
    </Component>
  );
};

export default StarBorder;
