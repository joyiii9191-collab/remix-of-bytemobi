import React, { useRef, useEffect } from "react";

interface FlowingBorderGlowProps {
  children: React.ReactNode;
  colors?: string[];
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  speed?: number; // seconds per revolution
  delay?: number; // seconds delay before starting
  backgroundColor?: string;
}

export default function FlowingBorderGlow({
  children,
  colors = ["#c084fc", "#f472b6", "#38bdf8"],
  borderRadius = 16,
  glowRadius = 40,
  glowIntensity = 1,
  speed = 3,
  delay = 0,
  backgroundColor = "#120F17",
}: FlowingBorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const draw = (time: number) => {
      if (startTime.current === null) startTime.current = time;
      const elapsed = (time - startTime.current) / 1000;

      // Delay handling
      if (elapsed < delay) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      const t = elapsed - delay;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Calculate angle based on time
      const angle = ((t / speed) * 360) % 360;
      const rad = (angle * Math.PI) / 180;

      // Position on the border perimeter
      const cx = w / 2;
      const cy = h / 2;

      // Trace along the rounded rectangle perimeter
      const perim = 2 * (w + h) - 8 * borderRadius + 2 * Math.PI * borderRadius;
      const pos = ((t / speed) % 1) * perim;

      let px: number, py: number;
      const straight = {
        top: w - 2 * borderRadius,
        right: h - 2 * borderRadius,
        bottom: w - 2 * borderRadius,
        left: h - 2 * borderRadius,
      };
      const cornerArc = (Math.PI / 2) * borderRadius;

      let remaining = pos;

      if (remaining < straight.top) {
        // Top edge
        px = borderRadius + remaining;
        py = 0;
      } else {
        remaining -= straight.top;
        if (remaining < cornerArc) {
          // Top-right corner
          const a = remaining / borderRadius;
          px = w - borderRadius + Math.sin(a) * borderRadius;
          py = borderRadius - Math.cos(a) * borderRadius;
        } else {
          remaining -= cornerArc;
          if (remaining < straight.right) {
            // Right edge
            px = w;
            py = borderRadius + remaining;
          } else {
            remaining -= straight.right;
            if (remaining < cornerArc) {
              // Bottom-right corner
              const a = remaining / borderRadius;
              px = w - borderRadius + Math.cos(a) * borderRadius;
              py = h - borderRadius + Math.sin(a) * borderRadius;
            } else {
              remaining -= cornerArc;
              if (remaining < straight.bottom) {
                // Bottom edge
                px = w - borderRadius - remaining;
                py = h;
              } else {
                remaining -= straight.bottom;
                if (remaining < cornerArc) {
                  // Bottom-left corner
                  const a = remaining / borderRadius;
                  px = borderRadius - Math.sin(a) * borderRadius;
                  py = h - borderRadius + Math.cos(a) * borderRadius;
                } else {
                  remaining -= cornerArc;
                  if (remaining < straight.left) {
                    // Left edge
                    px = 0;
                    py = h - borderRadius - remaining;
                  } else {
                    remaining -= straight.left;
                    // Top-left corner
                    const a = remaining / borderRadius;
                    px = borderRadius - Math.cos(a) * borderRadius;
                    py = borderRadius - Math.sin(a) * borderRadius;
                  }
                }
              }
            }
          }
        }
      }

      // Draw glow at the calculated position
      const gradient = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
      
      colors.forEach((color, i) => {
        const stop = i / (colors.length - 1);
        const alpha = glowIntensity * (1 - stop * 0.7);
        gradient.addColorStop(stop * 0.6, color + Math.round(alpha * 255).toString(16).padStart(2, "0"));
      });
      gradient.addColorStop(1, "transparent");

      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Draw a second trailing glow
      const trailPos = ((t / speed - 0.08) % 1 + 1) % 1 * perim;
      let tx: number, ty: number;
      let trem = trailPos;

      if (trem < straight.top) {
        tx = borderRadius + trem; ty = 0;
      } else {
        trem -= straight.top;
        if (trem < cornerArc) {
          const a = trem / borderRadius;
          tx = w - borderRadius + Math.sin(a) * borderRadius;
          ty = borderRadius - Math.cos(a) * borderRadius;
        } else {
          trem -= cornerArc;
          if (trem < straight.right) {
            tx = w; ty = borderRadius + trem;
          } else {
            trem -= straight.right;
            if (trem < cornerArc) {
              const a = trem / borderRadius;
              tx = w - borderRadius + Math.cos(a) * borderRadius;
              ty = h - borderRadius + Math.sin(a) * borderRadius;
            } else {
              trem -= cornerArc;
              if (trem < straight.bottom) {
                tx = w - borderRadius - trem; ty = h;
              } else {
                trem -= straight.bottom;
                if (trem < cornerArc) {
                  const a = trem / borderRadius;
                  tx = borderRadius - Math.sin(a) * borderRadius;
                  ty = h - borderRadius + Math.cos(a) * borderRadius;
                } else {
                  trem -= cornerArc;
                  if (trem < straight.left) {
                    tx = 0; ty = h - borderRadius - trem;
                  } else {
                    trem -= straight.left;
                    const a = trem / borderRadius;
                    tx = borderRadius - Math.cos(a) * borderRadius;
                    ty = borderRadius - Math.sin(a) * borderRadius;
                  }
                }
              }
            }
          }
        }
      }

      const trailGrad = ctx.createRadialGradient(tx, ty, 0, tx, ty, glowRadius * 0.6);
      colors.forEach((color, i) => {
        const stop = i / (colors.length - 1);
        const alpha = glowIntensity * 0.4 * (1 - stop);
        trailGrad.addColorStop(stop * 0.6, color + Math.round(alpha * 255).toString(16).padStart(2, "0"));
      });
      trailGrad.addColorStop(1, "transparent");
      ctx.fillStyle = trailGrad;
      ctx.fillRect(0, 0, w, h);

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [colors, borderRadius, glowRadius, glowIntensity, speed, delay]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ borderRadius, background: backgroundColor }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ borderRadius }}
      />
      {/* Border overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 border border-white/[0.06]"
        style={{ borderRadius }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
}
