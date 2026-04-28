import React from "react";

interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  /** @deprecated 保留接口兼容，颜色固定为蓝紫双流光 */
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  speed = "5s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-wrap group relative inline-block rounded-full transition-transform duration-500 ease-out hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer ${className}`}
      style={{ ['--sb-speed' as any]: speed }}
      {...rest}
    >
      {/* Animated conic gradient border */}
      <span className="star-border-glow" aria-hidden="true" />

      {/* Inner pill —— 玻璃底保持，hover 时由下方漫起一束光 */}
      <span
        className="relative z-[1] overflow-hidden block backdrop-blur-xl text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border transition-[border-color,box-shadow] duration-500 ease-out
          bg-white/[0.08] border-white/[0.18] text-white
          group-hover:border-white/35
          shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.35),inset_0_-1px_0_0_hsla(0,0%,100%,0.08)]
          group-hover:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.5),0_12px_32px_-12px_hsla(265,85%,60%,0.55)]"
      >
        {/* 从底部漫起的光波 —— 主体蓝紫渐变 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0 opacity-0 group-hover:h-[180%] group-hover:opacity-100 transition-all duration-[700ms] ease-out"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 100%, hsla(265, 90%, 70%, 0.75) 0%, hsla(225, 95%, 65%, 0.55) 35%, hsla(220, 90%, 60%, 0.18) 65%, transparent 85%)",
            filter: "blur(2px)",
          }}
        />
        {/* 漫光顶端的细亮线 —— 类似水波边缘的高光 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 bottom-0 h-px opacity-0 group-hover:opacity-100 group-hover:bottom-[55%] transition-all duration-[700ms] ease-out"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.65) 50%, transparent 100%)",
            boxShadow: "0 0 8px hsla(265, 90%, 80%, 0.6)",
          }}
        />
        {/* 文案保持在最上层 */}
        <span className="relative z-[1]">{children}</span>
      </span>
    </Component>
  );
};

export default StarBorder;
