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
      className={`group relative inline-block overflow-hidden rounded-full transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer ${className}`}
      {...rest}
    >
      <div
        className="relative z-[1] backdrop-blur-xl text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border transition-all duration-300 ease-out
          bg-white/[0.08] border-white/[0.18] text-white
          group-hover:bg-gradient-to-r group-hover:from-[hsl(220,90%,62%)] group-hover:to-[hsl(270,85%,65%)]
          group-hover:border-white/40
          shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.35),inset_0_-1px_0_0_hsla(0,0%,100%,0.08)]
          group-hover:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.5),0_10px_28px_-10px_hsla(265,80%,55%,0.6)]"
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
