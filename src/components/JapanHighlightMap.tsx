import React from "react";
import { motion } from "motion/react";
import { ParticleWorldMap } from "./ParticleWorldMap";

interface JapanHighlightMapProps {
  /** 是否显示放大镜效果(开启会在地图右上角显示日本列岛特写) */
  showZoom?: boolean;
  /** 高度 */
  height?: number;
}

/**
 * 世界地图 + 日本列岛高亮放大动效
 * - 主图:全球粒子地图,日本节点用红色脉冲
 * - 浮层:日本列岛 SVG 特写圆形放大镜,带缩放动画
 */
export function JapanHighlightMap({ showZoom = true, height = 420 }: JapanHighlightMapProps) {
  // 全球节点,Tokyo 为高亮主节点
  const markers = [
    { x: 82, y: 36, highlight: true, label: "Tokyo" },
    { x: 50, y: 30, label: "EU" },
    { x: 18, y: 35, label: "NA" },
    { x: 78, y: 50, label: "SEA" },
    { x: 75, y: 38, label: "KR" },
    { x: 30, y: 70, label: "LATAM" },
  ];
  const lines: Array<[number, number]> = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  ];

  return (
    <div className="relative w-full" style={{ height }}>
      <ParticleWorldMap markers={markers} lines={lines} accent="hsl(355 75% 55%)" />

      {/* 日本特写浮层 */}
      {showZoom && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="absolute pointer-events-none"
          style={{
            right: "6%",
            top: "10%",
            width: 180,
            height: 180,
          }}
        >
          {/* 连接线 - 从日本节点到放大圆 */}
          <svg
            className="absolute"
            style={{ left: -60, top: 80, width: 80, height: 60, overflow: "visible" }}
          >
            <motion.line
              x1="0" y1="60" x2="60" y2="0"
              stroke="hsl(355 75% 55%)"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />
          </svg>

          {/* 放大圆 */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,240,240,0.85) 100%)",
              border: "2px solid hsl(355 75% 55%)",
              boxShadow:
                "0 0 0 6px rgba(220,38,38,0.08), 0 12px 32px -8px rgba(220,38,38,0.35)",
            }}
          >
            {/* 日本列岛 SVG (简化) */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full"
              style={{ padding: 24 }}
            >
              {/* 北海道 */}
              <motion.path
                d="M 120 40 Q 140 35 150 50 Q 155 65 145 75 Q 130 78 115 70 Q 110 55 120 40 Z"
                fill="hsl(355 75% 55%)"
                fillOpacity="0.85"
                stroke="hsl(355 70% 40%)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              />
              {/* 本州 (主岛) */}
              <motion.path
                d="M 50 90 Q 70 80 95 88 Q 115 92 130 100 Q 142 108 138 120 Q 130 128 110 125 Q 90 122 75 115 Q 58 108 50 100 Z"
                fill="hsl(355 75% 55%)"
                fillOpacity="0.9"
                stroke="hsl(355 70% 40%)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3 }}
              />
              {/* 四国 */}
              <motion.path
                d="M 75 135 Q 90 132 100 138 Q 102 145 92 148 Q 78 148 72 142 Z"
                fill="hsl(355 75% 55%)"
                fillOpacity="0.85"
                stroke="hsl(355 70% 40%)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              />
              {/* 九州 */}
              <motion.path
                d="M 45 145 Q 60 140 70 150 Q 72 162 62 168 Q 48 168 42 158 Z"
                fill="hsl(355 75% 55%)"
                fillOpacity="0.85"
                stroke="hsl(355 70% 40%)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
              />

              {/* 东京标记点 */}
              <motion.circle
                cx="115" cy="105" r="3"
                fill="hsl(0 0% 100%)"
                stroke="hsl(355 80% 50%)"
                strokeWidth="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.7, type: "spring" }}
              />
              <motion.circle
                cx="115" cy="105" r="6"
                fill="none"
                stroke="hsl(355 80% 50%)"
                strokeWidth="1"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, delay: 1.7, repeat: Infinity }}
              />
              <text
                x="125" y="108"
                fontSize="10"
                fill="hsl(355 70% 35%)"
                fontWeight="600"
              >
                Tokyo
              </text>
            </svg>
          </div>

          {/* 标签 */}
          <div
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
            style={{
              background: "hsl(355 75% 55%)",
              color: "white",
              boxShadow: "0 4px 12px -2px rgba(220,38,38,0.4)",
            }}
          >
            JAPAN · 日本核心市场
          </div>
        </motion.div>
      )}
    </div>
  );
}
