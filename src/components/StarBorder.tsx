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
      className={`group relative inline-flex items-center justify-center rounded-full cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] ${className}`}
      style={{ willChange: "transform" }}
      {...rest}
    >
      {/* Soft pulsing outer glow — opacity only, GPU-cheap */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "0 0 0 1px hsla(230,40%,80%,0.25), 0 8px 24px -8px hsla(245,80%,55%,0.45)",
          animation: "starborder-pulse 2.4s ease-in-out infinite",
        }}
      />

      {/* Solid gradient pill surface */}
      <span
        className="relative z-[1] inline-flex items-center justify-center overflow-hidden rounded-full text-[14px] font-medium text-white py-[12px] px-[32px] transition-shadow duration-300 ease-out"
        style={{
          background:
            "linear-gradient(135deg, hsl(220,90%,58%) 0%, hsl(255,85%,62%) 50%, hsl(280,80%,62%) 100%)",
          boxShadow:
            "inset 0 1px 0 0 hsla(0,0%,100%,0.35), inset 0 -1px 0 0 hsla(230,60%,20%,0.25), 0 4px 14px -4px hsla(245,80%,45%,0.4)",
        }}
      >
        {/* Hover sheen — clean transform sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 h-full w-1/3 -translate-x-full -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[400%] transition-all duration-[700ms] ease-out"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.55) 50%, transparent 100%)",
            willChange: "transform, opacity",
          }}
        />
        <span className="relative z-[1] whitespace-nowrap">{children}</span>
      </span>

      <style>{`
        @keyframes starborder-pulse {
          0%, 100% {
            box-shadow: 0 0 0 1px hsla(230,40%,80%,0.20), 0 8px 22px -8px hsla(245,80%,55%,0.35);
          }
          50% {
            box-shadow: 0 0 0 1px hsla(230,40%,90%,0.45), 0 14px 32px -8px hsla(265,85%,60%,0.6);
          }
        }
      `}</style>
    </Component>
  );
};

export default StarBorder;
