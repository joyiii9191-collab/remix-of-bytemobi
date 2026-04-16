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
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-full ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] bottom-[-11%] right-[-250%] rounded-full animate-star-movement-bottom z-0 opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] top-[-10%] left-[-250%] rounded-full animate-star-movement-top z-0 opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-[1] bg-gradient-to-b from-[rgba(20,15,35,0.9)] to-[rgba(10,8,20,0.95)] text-white text-center text-[14px] font-medium py-[12px] px-[32px] rounded-full border border-white/[0.08]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
