import React, { useMemo } from "react";
import { motion } from "motion/react";

/**
 * 轻量 SVG 世界地图 + 粒子连线 + 高亮标记
 * - 用稀疏点阵勾勒大陆轮廓（避免引入大文件）
 * - markers: [{ x, y, label }]，x/y 为 0-100 百分比
 * - lines: [[fromIdx, toIdx]] 在 markers 之间连线
 */
export interface MapMarker {
  x: number; // 0-100
  y: number; // 0-100
  label?: string;
  highlight?: boolean;
}

interface ParticleWorldMapProps {
  markers?: MapMarker[];
  lines?: Array<[number, number]>;
  accent?: string; // hsl color
  className?: string;
}

// 粗略的大陆点阵（手工挑的近似坐标，0-100%）
const CONTINENT_DOTS: Array<[number, number]> = [
  // 北美
  [12, 28], [15, 30], [18, 28], [20, 32], [16, 35], [22, 38], [25, 35], [19, 40],
  [14, 33], [11, 35], [23, 42], [27, 40], [17, 25], [21, 28],
  // 南美
  [28, 60], [30, 65], [32, 70], [29, 75], [31, 80], [33, 68], [27, 55],
  // 欧洲
  [48, 28], [50, 26], [52, 30], [49, 32], [46, 30], [51, 24], [53, 28],
  // 非洲
  [50, 45], [52, 50], [54, 55], [51, 60], [53, 65], [49, 50], [55, 48], [50, 70],
  // 亚洲
  [60, 30], [63, 28], [66, 32], [70, 30], [73, 35], [68, 38], [76, 33],
  [72, 40], [78, 38], [80, 42], [75, 28], [77, 26], [82, 36],
  // 东南亚
  [78, 50], [80, 52], [82, 55], [76, 48],
  // 大洋洲
  [85, 65], [88, 68], [83, 70], [86, 72],
];

export function ParticleWorldMap({
  markers = [],
  lines = [],
  accent = "hsl(245 75% 58%)",
  className = "",
}: ParticleWorldMapProps) {
  const dotPaths = useMemo(() => CONTINENT_DOTS, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* 大陆点阵 */}
        {dotPaths.map(([x, y], i) => (
          <circle
            key={`dot-${i}`}
            cx={x}
            cy={y}
            r={0.35}
            fill={accent}
            opacity={0.35}
          />
        ))}

        {/* 连线 */}
        {lines.map(([from, to], i) => {
          const a = markers[from];
          const b = markers[to];
          if (!a || !b) return null;
          const mx = (a.x + b.x) / 2;
          const my = Math.min(a.y, b.y) - 8;
          const d = `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
          return (
            <g key={`line-${i}`}>
              <path
                d={d}
                fill="none"
                stroke={accent}
                strokeWidth={0.18}
                opacity={0.35}
              />
              <motion.circle
                r={0.5}
                fill={accent}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                style={{
                  offsetPath: `path('${d}')`,
                  filter: `drop-shadow(0 0 1px ${accent})`,
                }}
              />
            </g>
          );
        })}

        {/* 标记 */}
        {markers.map((m, i) => (
          <g key={`m-${i}`}>
            {/* 高亮节点的额外发光光晕 */}
            {m.highlight && (
              <>
                <motion.circle
                  cx={m.x}
                  cy={m.y}
                  r={2.5}
                  fill={accent}
                  opacity={0.25}
                  animate={{ r: [2.5, 3.2, 2.5], opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: `drop-shadow(0 0 2px ${accent})` }}
                />
                <motion.circle
                  cx={m.x}
                  cy={m.y}
                  r={1.4}
                  fill="none"
                  stroke={accent}
                  strokeWidth={0.25}
                  initial={{ r: 1.4, opacity: 0.9 }}
                  animate={{ r: 5.5, opacity: 0 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                  cx={m.x}
                  cy={m.y}
                  r={1.4}
                  fill="none"
                  stroke={accent}
                  strokeWidth={0.2}
                  initial={{ r: 1.4, opacity: 0.7 }}
                  animate={{ r: 7, opacity: 0 }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                />
              </>
            )}
            <motion.circle
              cx={m.x}
              cy={m.y}
              r={m.highlight ? 1.6 : 0.9}
              fill={accent}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: m.highlight ? [0.85, 1, 0.85] : [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              style={m.highlight ? { filter: `drop-shadow(0 0 1.5px ${accent})` } : undefined}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default ParticleWorldMap;
