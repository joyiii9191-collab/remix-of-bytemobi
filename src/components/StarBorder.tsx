import React from "react";

interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  /** @deprecated 保留接口兼容 */
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`group relative inline-block rounded-full cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] ${className}`}
      style={{ willChange: "transform" }}
      {...rest}
    >
      {/* Animated conic gradient border glow — GPU-only rotation */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-[1.5px] rounded-full opacity-90"
        style={{
          background:
            "conic-gradient(from 0deg, hsl(220,100%,70%), hsl(270,90%,72%), hsl(195,100%,72%), hsl(220,100%,70%))",
          animation: "starborder-spin 4s linear infinite",
          willChange: "transform",
          filter: "blur(0.5px)",
        }}
      />

      {/* Inner button surface */}
      <div
        className="relative z-[1] text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full transition-colors duration-300 ease-out
          bg-[hsl(230,40%,12%)] text-white
          group-hover:bg-gradient-to-r group-hover:from-[hsl(220,90%,58%)] group-hover:to-[hsl(270,85%,62%)]
          shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25),inset_0_-1px_0_0_hsla(0,0%,0%,0.2)]
          group-hover:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.45),0_10px_28px_-10px_hsla(265,80%,55%,0.55)]"
      >
        {/* Hover sheen — single transform pass, no blur, no blend */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
        >
          <span
            className="absolute top-0 -left-1/3 h-full w-1/3 -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[450%] transition-all duration-700 ease-out"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.55) 50%, transparent 100%)",
              willChange: "transform, opacity",
            }}
          />
        </span>
        <span className="relative z-[1]">{children}</span>
      </div>

      <style>{`
        @keyframes starborder-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Component>
  );
};

export default StarBorder;
