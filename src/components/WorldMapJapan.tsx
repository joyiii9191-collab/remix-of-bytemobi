import React from "react";
import { motion } from "motion/react";

interface WorldMapJapanProps {
  /** Accent color for Japan highlight */
  accent?: string;
  /** Base land color */
  land?: string;
  /** Container className */
  className?: string;
}

/**
 * 世界地图(简化大陆轮廓 SVG) + 日本区域高亮动效
 * - 大陆为半透明 land 色块
 * - 日本(本州/北海道/九州/四国)用 accent 色填充并加脉冲光晕
 * - 东京标记点带涟漪动画
 *
 * SVG viewBox: 0 0 1000 500 (经典等距投影简化)
 */
export function WorldMapJapan({
  accent = "hsl(355 75% 55%)",
  land = "hsl(230 25% 70%)",
  className = "",
}: WorldMapJapanProps) {
  // 简化大陆轮廓 (手绘近似 path，保持轻量)
  // 北美 / 南美 / 欧洲 / 非洲 / 亚洲 / 大洋洲
  const continents: Array<{ id: string; d: string }> = [
    {
      id: "na",
      // 北美
      d: "M 80 110 L 130 90 L 200 95 L 250 110 L 290 130 L 305 165 L 285 195 L 250 215 L 220 235 L 200 255 L 175 260 L 155 245 L 140 220 L 120 200 L 95 175 L 75 145 Z",
    },
    {
      id: "ca",
      // 中美
      d: "M 220 245 L 245 250 L 260 265 L 250 280 L 235 280 L 220 270 Z",
    },
    {
      id: "sa",
      // 南美
      d: "M 270 285 L 305 280 L 330 295 L 340 325 L 335 365 L 320 395 L 300 420 L 285 410 L 275 380 L 270 345 L 268 315 Z",
    },
    {
      id: "eu",
      // 欧洲
      d: "M 470 130 L 510 120 L 545 125 L 570 140 L 575 160 L 560 175 L 530 180 L 500 175 L 480 165 L 470 150 Z",
    },
    {
      id: "af",
      // 非洲
      d: "M 490 200 L 540 195 L 580 210 L 600 240 L 610 280 L 600 320 L 575 360 L 545 380 L 515 370 L 495 340 L 485 305 L 480 270 L 482 235 Z",
    },
    {
      id: "as",
      // 亚洲(主体,不含日本)
      d: "M 580 110 L 650 95 L 720 100 L 790 115 L 830 135 L 850 165 L 845 195 L 820 220 L 780 235 L 740 240 L 700 235 L 660 225 L 625 210 L 600 190 L 585 165 L 580 140 Z",
    },
    {
      id: "sea",
      // 东南亚 + 印尼
      d: "M 770 250 L 810 245 L 845 255 L 860 275 L 845 290 L 815 295 L 785 285 L 770 270 Z",
    },
    {
      id: "oc",
      // 大洋洲 (澳洲)
      d: "M 820 320 L 880 315 L 920 325 L 935 350 L 920 375 L 880 385 L 840 380 L 820 360 L 815 340 Z",
    },
  ];

  // 日本列岛 (4 个主要岛)
  const japanIslands = [
    {
      // 北海道
      d: "M 868 152 Q 880 145 890 152 Q 895 162 888 170 Q 875 173 866 167 Q 862 158 868 152 Z",
      delay: 0,
    },
    {
      // 本州 (主岛)
      d: "M 850 175 Q 865 172 880 178 Q 895 184 905 192 Q 912 200 905 207 Q 890 210 870 205 Q 855 198 845 188 Z",
      delay: 0.1,
    },
    {
      // 四国
      d: "M 858 215 Q 868 213 875 218 Q 877 224 870 227 Q 860 226 856 221 Z",
      delay: 0.2,
    },
    {
      // 九州
      d: "M 838 222 Q 848 219 854 226 Q 856 234 849 238 Q 838 238 834 230 Z",
      delay: 0.3,
    },
  ];

  // 东京坐标(在本州上)
  const tokyo = { x: 892, y: 195 };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        {/* defs: 海洋渐变 + 高亮发光 */}
        <defs>
          <radialGradient id="ocean" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="hsla(220, 60%, 95%, 0.4)" />
            <stop offset="100%" stopColor="hsla(220, 40%, 88%, 0.1)" />
          </radialGradient>
          <radialGradient id="japanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
            <stop offset="60%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 海洋背景 */}
        <rect x="0" y="0" width="1000" height="500" fill="url(#ocean)" rx="12" />

        {/* 经纬度参考线 */}
        <g opacity="0.08" stroke={land} strokeWidth="0.5">
          {[100, 200, 300, 400].map((y) => (
            <line key={`h-${y}`} x1="0" y1={y} x2="1000" y2={y} />
          ))}
          {[200, 400, 600, 800].map((x) => (
            <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="500" />
          ))}
        </g>

        {/* 大陆 */}
        <g>
          {continents.map((c) => (
            <motion.path
              key={c.id}
              d={c.d}
              fill={land}
              fillOpacity={0.32}
              stroke={land}
              strokeOpacity={0.5}
              strokeWidth={0.8}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </g>

        {/* 日本周边光晕 */}
        <motion.circle
          cx={880}
          cy={195}
          r={70}
          fill="url(#japanGlow)"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 日本列岛(高亮) */}
        <g>
          {japanIslands.map((isl, i) => (
            <motion.path
              key={`jp-${i}`}
              d={isl.d}
              fill={accent}
              fillOpacity={0.92}
              stroke={accent}
              strokeWidth={0.6}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + isl.delay }}
              style={{ filter: `drop-shadow(0 0 4px ${accent})` }}
            />
          ))}
        </g>

        {/* 东京标记点 + 涟漪 */}
        <g>
          {[0, 0.8, 1.6].map((delay, i) => (
            <motion.circle
              key={`ripple-${i}`}
              cx={tokyo.x}
              cy={tokyo.y}
              r={3}
              fill="none"
              stroke={accent}
              strokeWidth={1.2}
              initial={{ r: 3, opacity: 0.8 }}
              animate={{ r: 22, opacity: 0 }}
              transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeOut" }}
            />
          ))}
          <motion.circle
            cx={tokyo.x}
            cy={tokyo.y}
            r={4.5}
            fill="white"
            stroke={accent}
            strokeWidth={2}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2, type: "spring" }}
            style={{ filter: `drop-shadow(0 0 6px ${accent})` }}
          />
          <motion.text
            x={tokyo.x + 10}
            y={tokyo.y + 3}
            fontSize="14"
            fontWeight={700}
            fill={accent}
            initial={{ opacity: 0, x: tokyo.x + 4 }}
            animate={{ opacity: 1, x: tokyo.x + 10 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            style={{ filter: "drop-shadow(0 1px 2px hsla(0,0%,100%,0.8))" }}
          >
            Tokyo
          </motion.text>
        </g>

        {/* JAPAN 标签胶囊 */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <rect
            x={838}
            y={258}
            width={92}
            height={22}
            rx={11}
            fill={accent}
            style={{ filter: `drop-shadow(0 4px 10px ${accent})` }}
          />
          <text
            x={884}
            y={273}
            fontSize="11"
            fontWeight={700}
            fill="white"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            JAPAN · 核心市场
          </text>
        </motion.g>

        {/* 从日本到其他大陆的连线(脉冲) */}
        <g opacity={0.55}>
          {[
            { x: 200, y: 170 }, // NA
            { x: 530, y: 150 }, // EU
            { x: 545, y: 280 }, // AF
            { x: 870, y: 350 }, // OC
            { x: 305, y: 350 }, // SA
          ].map((dest, i) => {
            const d = `M ${tokyo.x} ${tokyo.y} Q ${(tokyo.x + dest.x) / 2} ${
              Math.min(tokyo.y, dest.y) - 60
            } ${dest.x} ${dest.y}`;
            return (
              <g key={`line-${i}`}>
                <path
                  d={d}
                  fill="none"
                  stroke={accent}
                  strokeWidth={0.8}
                  strokeDasharray="3 4"
                  opacity={0.45}
                />
                <motion.circle
                  r={2}
                  fill={accent}
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{
                    duration: 3.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2 + i * 0.4,
                  }}
                  style={{
                    offsetPath: `path('${d}')`,
                    filter: `drop-shadow(0 0 3px ${accent})`,
                  }}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default WorldMapJapan;
