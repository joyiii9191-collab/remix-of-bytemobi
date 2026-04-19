import React from "react";
import {
  SubPageLayout,
  PageSection,
  FeatureCard,
  CountUp,
} from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";

const HOPEX_MARKERS = [
  { x: 18, y: 35, highlight: true, label: "NA" },
  { x: 78, y: 50, highlight: true, label: "SEA" },
  { x: 82, y: 36, label: "JP" },
  { x: 75, y: 38, label: "KR" },
  { x: 70, y: 50, label: "IN" },
  { x: 30, y: 70, highlight: true, label: "LATAM" },
  { x: 50, y: 30, highlight: true, label: "EMEA" },
];
const HOPEX_LINES: Array<[number, number]> = [
  [0, 6],
  [0, 5],
  [6, 1],
  [6, 4],
  [1, 2],
  [1, 3],
];

export default function HopeX() {
  return (
    <SubPageLayout
      title="程序化广告"
      eyebrow="HOPEX · PROGRAMMATIC"
      heroTitle="关于 HopeX"
      heroSubtitle="HopeX 是 HopeMobi 旗下的程序化广告平台，致力于为广告主与流量方提供可预测增长的商业化解决方案 — 在不确定的市场中，提供确定性。"
      heroVisual={<ParticleWorldMap markers={HOPEX_MARKERS} lines={HOPEX_LINES} />}
    >
      {/* 1. 平台规模 */}
      <PageSection
        id="scale"
        eyebrow="01 · 平台规模"
        title="规模与基础能力"
        description="规模是程序化的前提，HopeX 的请求量与连接数支持稳定可预测的增长。"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { v: 36, s: " 亿+", l: "每日广告请求量" },
            { v: 133, s: " 百万+", l: "覆盖独立用户" },
            { v: 1000, s: "+", l: "对接移动应用" },
            { v: 300, s: "+", l: "广告主合作伙伴" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(15,20,40,0.06)",
                boxShadow: "0 4px 14px -8px rgba(15,20,40,0.08)",
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(245 70% 30%) 0%, hsl(245 60% 50%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                }}
              >
                <CountUp value={s.v} suffix={s.s} />
              </div>
              <div className="text-sm" style={{ color: "hsl(230 20% 38%)" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* 2. 全球流量网络 */}
      <PageSection
        id="network"
        bg="tint"
        eyebrow="02 · 全球流量网络"
        title="覆盖全球四大区域"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard title="北美 NA" desc="US / CA，成熟广告市场，适合高预算、强转化投放。" />
          <FeatureCard title="亚太 APAC" desc="SEA / JP / KR / IN，多语言多市场并行，适合区域化增长。" />
          <FeatureCard title="拉美 LATAM" desc="BR / MX 等，高增长市场，适合规模化获取新用户。" />
          <FeatureCard title="欧洲及中东非 EMEA" desc="覆盖更广的国际化商业投放区域。" />
        </div>
      </PageSection>

      {/* 3. DSP */}
      <PageSection
        id="dsp"
        eyebrow="03 · DSP 能力"
        title="广告主一站式买量"
        description="从 RTB 到联盟、从主流媒体到 OEM，多种买量方式按需组合。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <FeatureCard title="全渠道" desc="RTB、联盟 CPA/CPL/CPS、主流媒体采购、OEM 等。" />
          <FeatureCard title="智能受众分群" desc="精准定向，覆盖核心人群与潜客。" />
          <FeatureCard title="实时策略调整" desc="秒级响应，预算自适应、智能限流。" />
          <FeatureCard title="人机协同优化" desc="算法 + 投手共同迭代，避免单点失败。" />
        </div>

        <div className="rounded-2xl p-6" style={{ background: "#FFFFFF", border: "1px solid rgba(15,20,40,0.06)" }}>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "hsl(245 60% 45%)" }}>
            全球行业覆盖
          </div>
          <div className="flex flex-wrap gap-3">
            {["电商", "游戏", "工具", "短剧", "娱乐内容", "金融科技"].map((t) => (
              <div
                key={t}
                className="px-4 py-2 rounded-lg text-sm"
                style={{
                  background: "rgba(99,102,241,0.08)",
                  color: "hsl(245 60% 35%)",
                  border: "1px solid rgba(124,58,237,0.12)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div className="text-xs mt-4" style={{ color: "hsl(230 20% 50%)" }}>
            合作品牌 Logo 墙占位 · 上线前接入官方 logo
          </div>
        </div>
      </PageSection>

      {/* 4. SSP */}
      <PageSection
        id="ssp"
        bg="tint"
        eyebrow="04 · SSP 能力"
        title="多形式 · 多预算入口"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {["Banner", "Video", "Native", "App", "Web", "CTV"].map((t) => (
            <div
              key={t}
              className="rounded-xl px-4 py-3 text-center text-sm font-medium"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(15,20,40,0.06)",
                color: "hsl(230 30% 25%)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-6" style={{ background: "#FFFFFF", border: "1px solid rgba(15,20,40,0.06)" }}>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "hsl(245 60% 45%)" }}>
            多元预算接入
          </div>
          <div className="flex flex-wrap gap-3 text-sm" style={{ color: "hsl(230 25% 30%)" }}>
            <span>ShareThrough</span>
            <span>·</span>
            <span>RTB House</span>
            <span>·</span>
            <span>品牌直客 Shopee / Shein</span>
          </div>
          <div className="text-xs mt-4" style={{ color: "hsl(230 20% 50%)" }}>
            官方 logo 墙占位
          </div>
        </div>
      </PageSection>

      {/* 5. 自有 + 外部流量 */}
      <PageSection
        id="traffic"
        eyebrow="05 · 流量来源"
        title="自有 + 外部流量"
        description="自有矩阵保证基本盘，外部对接保证规模与多样性。"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard title="自有 App 矩阵" desc="短剧 / 工具 / 娱乐等自营 App。" />
          <FeatureCard title="OEM SDK" desc="深度集成主流安卓 OEM 渠道。" />
          <FeatureCard title="外部开发者体系" desc="持续扩张第三方开发者生态。" />
        </div>
      </PageSection>

      {/* 6. 合作价值 */}
      <PageSection
        id="value"
        bg="tint"
        eyebrow="06 · 合作价值"
        title="一端服务广告主，一端服务流量方"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard
            title="广告主"
            desc={
              <ul className="list-disc pl-4 space-y-1">
                <li>稳定规模化增长</li>
                <li>高 ROI</li>
                <li>全球覆盖</li>
              </ul>
            }
          />
          <FeatureCard
            title="流量方"
            desc={
              <ul className="list-disc pl-4 space-y-1">
                <li>多元预算</li>
                <li>收益最大化</li>
                <li>技术驱动</li>
              </ul>
            }
          />
        </div>
        <p className="mt-8 text-base md:text-lg" style={{ color: "hsl(230 25% 28%)", lineHeight: 1.8 }}>
          HopeX 致力于打通广告主与流量方之间的高效连接，通过技术驱动与全球化资源整合，实现规模、效率与收益的持续增长。
        </p>
      </PageSection>
    </SubPageLayout>
  );
}
