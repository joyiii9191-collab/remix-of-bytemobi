import homeBg from "@/assets/home-bg.jpg";

/**
 * 全站统一的首页风格背景:
 *   1. 极淡的浅紫/浅蓝渐变基底(与首页 Index.tsx 一致)
 *   2. home-bg.jpg 作为弱光晕(大模糊 + 低不透明度)
 *   3. 顶层 88% 白色蒙层,让光球更隐约,前景更轻盈
 */
export function HomeBackground() {
  return (
    <>
      {/* 浅色基底渐变(与 Index.tsx 一致) */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(135deg, #F4F3FA 0%, #EFF2FA 45%, #F2EEF7 100%)",
        }}
      />
      {/* home-bg 极弱光晕 */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(160px) saturate(0.55) brightness(1.08)",
          transform: "scale(1.3)",
          opacity: 0.08,
        }}
      />
      {/* 88% 白蒙层,把光球压成极隐约的环境色 */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "hsla(0, 0%, 100%, 0.88)" }}
      />
    </>
  );
}
