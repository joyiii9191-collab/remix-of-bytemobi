import React from "react";

interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  /** @deprecated 保留接口兼容，颜色固定为蓝紫双流光 */
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

const BLUE = "hsl(220, 100%, 70%)";
const PURPLE = "hsl(270, 90%, 72%)";

const makeStreak = (c: string) =>
  `linear-gradient(90deg, transparent 0%, transparent 30%, ${c} 45%, ${c} 55%, transparent 70%, transparent 100%)`;

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`group relative inline-block overflow-hidden rounded-full transition-transform duration-300 ease-out hover:-translate-y-0.5 ${className}`}
      {...rest}
    >
      <div className="relative z-[1] backdrop-blur-xl bg-white/[0.08] group-hover:bg-white/[0.16] text-white text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border border-white/[0.18] group-hover:border-white/[0.32] shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.35),inset_0_-1px_0_0_hsla(0,0%,100%,0.08)] group-hover:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.5),inset_0_-1px_0_0_hsla(0,0%,100%,0.12),0_8px_24px_-12px_hsla(265,70%,55%,0.45)] transition-all duration-300 ease-out">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
