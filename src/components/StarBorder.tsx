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
        className="relative z-[1] overflow-hidden backdrop-blur-xl text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border transition-all duration-300 ease-out
          bg-white/[0.08] border-white/[0.18] text-white
          group-hover:bg-gradient-to-r group-hover:from-[hsl(220,90%,62%)] group-hover:to-[hsl(270,85%,65%)]
          group-hover:border-white/40
          shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.35),inset_0_-1px_0_0_hsla(0,0%,100%,0.08)]
          group-hover:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.5),0_10px_28px_-10px_hsla(265,80%,55%,0.6)]"
      >
        {/* Ambient idle shimmer — slow, always-on, visible on light backgrounds */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-80 group-hover:opacity-0 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(115deg, transparent 35%, hsla(220,100%,72%,0.55) 47%, hsla(0,0%,100%,0.9) 50%, hsla(270,90%,75%,0.55) 53%, transparent 65%)',
            backgroundSize: '250% 100%',
            animation: 'starborder-shimmer 3s linear infinite',
            mixBlendMode: 'screen',
            filter: 'blur(1px)',
          }}
        />
        {/* Hover sweep — fast, single pass, high contrast */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-y-1 -left-1/3 w-1/3 opacity-0 group-hover:opacity-100 group-hover:translate-x-[450%] transition-all duration-[800ms] ease-out"
          style={{
            background:
              'linear-gradient(110deg, transparent 0%, hsla(0,0%,100%,0.95) 50%, transparent 100%)',
            filter: 'blur(4px)',
            mixBlendMode: 'screen',
          }}
        />
        <span className="relative z-[1]">{children}</span>
      </div>
      <style>{`
        @keyframes starborder-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </Component>
  );
};

export default StarBorder;
