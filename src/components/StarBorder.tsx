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
  speed = "3s",
  children,
  ...rest
}) => {
  const blueStreak = makeStreak(BLUE);
  const purpleStreak = makeStreak(PURPLE);

  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-full ${className}`}
      {...rest}
    >
      {/* 底部蓝色流光 — 从右向左 */}
      <div
        className="absolute bottom-0 left-0 w-[200%] h-[2px] animate-star-movement-bottom z-0 will-change-transform"
        style={{
          background: blueStreak,
          animationDuration: speed,
          animationTimingFunction: "linear",
          filter: `drop-shadow(0 0 4px ${BLUE}) drop-shadow(0 0 10px ${BLUE}) drop-shadow(0 0 18px ${BLUE})`,
        }}
      />
      {/* 顶部紫色流光 — 从左向右 */}
      <div
        className="absolute top-0 left-[-100%] w-[200%] h-[2px] animate-star-movement-top z-0 will-change-transform"
        style={{
          background: purpleStreak,
          animationDuration: speed,
          animationTimingFunction: "linear",
          filter: `drop-shadow(0 0 4px ${PURPLE}) drop-shadow(0 0 10px ${PURPLE}) drop-shadow(0 0 18px ${PURPLE})`,
        }}
      />
      <div className="relative z-[1] backdrop-blur-xl bg-white/[0.08] text-white text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border border-white/[0.12]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
