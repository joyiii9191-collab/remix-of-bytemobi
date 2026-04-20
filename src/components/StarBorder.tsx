import React from "react";


interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "4s",
  children,
  ...rest
}) => {
  // Elongated streak gradient — looks like a flowing light beam, not a dot
  const streak = `linear-gradient(90deg, transparent 0%, transparent 35%, ${color} 50%, transparent 65%, transparent 100%)`;

  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-full ${className}`}
      {...rest}
    >
      {/* Bottom flowing streak — moves right to left */}
      <div
        className="absolute bottom-0 left-0 w-[200%] h-[2px] animate-star-movement-bottom z-0"
        style={{
          background: streak,
          animationDuration: speed,
          filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 12px ${color})`,
          opacity: 0.9,
        }}
      />
      {/* Top flowing streak — moves left to right */}
      <div
        className="absolute top-0 left-[-100%] w-[200%] h-[2px] animate-star-movement-top z-0"
        style={{
          background: streak,
          animationDuration: speed,
          filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 12px ${color})`,
          opacity: 0.9,
        }}
      />
      <div className="relative z-[1] backdrop-blur-xl bg-white/[0.08] text-white text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border border-white/[0.12]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
