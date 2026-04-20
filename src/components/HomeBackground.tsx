import homeBg from "@/assets/home-bg.jpg";

/**
 * 全站统一的首页风格背景:
 *   1. 底层 home-bg.jpg (cover, fixed)
 *   2. 中层超模糊副本,营造柔和色彩弥散
 *   3. 顶层 78% 白色蒙层,让前景保持轻盈
 *
 * 首页 (Index.tsx) 与所有子页面 (SubPageLayout) 共用同一份背景。
 */
export function HomeBackground() {
  return (
    <>
      {/* 主背景图(fixed,跟随滚动稳定) */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* 模糊 + 提亮副本 */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(80px) saturate(0.6) brightness(1.05)",
          transform: "scale(1.3)",
          opacity: 0.18,
        }}
      />
      {/* 78% 白蒙层 */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "hsla(0, 0%, 100%, 0.78)" }}
      />
    </>
  );
}
