import React, { useRef, useEffect, useCallback } from 'react';

interface LightRaysProps {
  raysOrigin?: 'top-center' | 'top-left' | 'top-right' | 'center';
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
}

export default function LightRays({
  raysOrigin = 'top-center',
  raysColor = '#A855F7',
  raysSpeed = 1,
  lightSpread = 0.5,
  rayLength = 3,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0,
  distortion = 0,
  className = '',
  pulsating = false,
  fadeDistance = 1.6,
  saturation = 1,
}: LightRaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number>(0);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
      : { r: 168, g: 85, b: 247 };
  };

  const getOrigin = useCallback(() => {
    switch (raysOrigin) {
      case 'top-left': return { x: 0.2, y: 0 };
      case 'top-right': return { x: 0.8, y: 0 };
      case 'center': return { x: 0.5, y: 0.5 };
      default: return { x: 0.5, y: 0 };
    }
  }, [raysOrigin]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    if (followMouse) window.addEventListener('mousemove', handleMouseMove);

    const color = hexToRgb(raysColor);
    const rayCount = 12;
    let time = 0;

    const draw = () => {
      time += 0.005 * raysSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const origin = getOrigin();
      const ox = (origin.x + (followMouse ? (mouseRef.current.x - 0.5) * mouseInfluence : 0)) * canvas.width;
      const oy = (origin.y + (followMouse ? (mouseRef.current.y - 0.5) * mouseInfluence * 0.5 : 0)) * canvas.height;

      for (let i = 0; i < rayCount; i++) {
        const baseAngle = (i / rayCount) * Math.PI * 2 * lightSpread + Math.PI * 0.5 * (1 - lightSpread);
        const angle = baseAngle + Math.sin(time * 2 + i * 0.7) * 0.15 * (1 + distortion);
        const noise = noiseAmount > 0 ? Math.sin(time * 3 + i * 1.3) * noiseAmount * 20 : 0;
        const len = (canvas.height * 0.6 * rayLength) + noise;
        const pulse = pulsating ? 0.5 + Math.sin(time * 3 + i * 0.5) * 0.5 : 1;
        const alpha = (0.03 + Math.sin(time + i * 0.8) * 0.015) * pulse * saturation;

        const endX = ox + Math.cos(angle) * len;
        const endY = oy + Math.sin(angle) * len;

        const gradient = ctx.createLinearGradient(ox, oy, endX, endY);
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 1.5})`);
        gradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`);
        gradient.addColorStop(1 / fadeDistance, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        ctx.moveTo(ox, oy);

        const spread = 30 + i * 5;
        ctx.lineTo(endX - spread, endY);
        ctx.lineTo(endX + spread, endY);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      if (followMouse) window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [raysColor, raysSpeed, lightSpread, rayLength, followMouse, mouseInfluence, noiseAmount, distortion, pulsating, fadeDistance, saturation, getOrigin]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
