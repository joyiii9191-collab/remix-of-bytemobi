import React from "react";
import {
  SubPageLayout,
  PageSection,
  FeatureCard,
} from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";

const JP_MARKERS = [
  { x: 82, y: 36, highlight: true, label: "Tokyo" },
  { x: 50, y: 30, label: "EU" },
  { x: 18, y: 35, label: "NA" },
  { x: 78, y: 50, label: "SEA" },
  { x: 75, y: 38, label: "KR" },
];

const JP_LINES: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
];

export default function JapanFocus() {
  return (
    <SubPageLayout
      title="日本聚势"
      eyebrow="JAPAN FOCUS"
      heroTitle="全球领先的移动广告平台，深度理解本地市场，以数据驱动为核心"
      heroSubtitle="聚焦日本市场，同时完成全球多区域布局，助力广告主与媒体方实现高效增长。"
      heroVisual={<ParticleWorldMap markers={JP_MARKERS} lines={JP_LINES} accent="hsl(355 75% 55%)" />}
    >
      {/* 1. 平台核心优势 */}
      <PageSection
        id="strengths"
        eyebrow="01 · 平台核心优势"
        title="数据驱动 + 本地洞察"
        description="从全球项目实绩到反欺诈对策，技术与运营双轮驱动。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard
            title="全球项目实绩"
            desc="覆盖交友、游戏、金融、娱乐、电商、新闻等多品类，跨地域跑通的成熟方法论。"
          />
          <FeatureCard
            title="全球优质合作伙伴"
            desc="Unity、Tapjoy 等头部网络，以及小米、OPPO 等 OEM 厂商深度对接。"
          />
          <FeatureCard
            title="严格的反欺诈对策"
            desc="自研机器学习实时检测 + 第三方验证机构协同，端到端守护投放质量。"
          />
          <FeatureCard
            title="数据驱动的程序化能力"
            desc="精准算法 + 全链路实时数据，每一次出价都有数据支撑。"
          />
        </div>
      </PageSection>

      {/* 2. 面向广告主 */}
      <PageSection
        id="advertisers"
        bg="tint"
        eyebrow="02 · 面向广告主"
        title="先成果，后付费"
        description="为出海日本与亚太的广告主提供低门槛、高确定性的合作方式。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard title="成果报酬型 CPI / CPA" desc="按真实激活与转化付费，结果导向。" />
          <FeatureCard title="零初期费用" desc="无平台接入与启动费，降低试投风险。" />
          <FeatureCard title="灵活 KPI" desc="按行业与目标自定义考核口径。" />
          <FeatureCard title="本地咨询" desc="日籍团队提供市场、合规与创意建议。" />
          <FeatureCard title="全球流量" desc="同账户对接全球资源，便于跨区放量。" />
        </div>
      </PageSection>

      {/* 3. 面向媒体 */}
      <PageSection
        id="publishers"
        eyebrow="03 · 面向媒体"
        title="一站式变现伙伴"
        description="为日本本地媒体提供清晰、可控、可持续的变现方案。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard title="一站式变现仪表板" desc="收益、填充、eCPM 全指标可视化。" />
          <FeatureCard title="高值项目库" desc="持续接入头部广告主项目，优先派发。" />
          <FeatureCard title="实时数据" desc="分钟级数据回流，便于策略调整。" />
          <FeatureCard title="可靠支付" desc="按时结算，多币种与多通道支持。" />
          <FeatureCard title="定制策略" desc="为头部媒体提供专属变现方案。" />
        </div>
      </PageSection>

      {/* 4. 全球布局 */}
      <PageSection
        id="map"
        bg="tint"
        eyebrow="04 · 全球布局"
        title="以日本为核心的全球网络"
        description="日本核心市场深耕，并向亚太、欧美持续扩张。"
      >
        <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid rgba(15,20,40,0.06)", height: 380 }}>
          <ParticleWorldMap markers={JP_MARKERS} lines={JP_LINES} accent="hsl(355 75% 55%)" />
        </div>
      </PageSection>

      {/* 5. 日本深耕 */}
      <PageSection
        id="local"
        eyebrow="05 · 日本深耕"
        title="自 2019 起的本地团队"
        description="由本地化运营、合规与商务组成的日本办公室，与全球资源协同。"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard title="员工规模" desc="共 47 名员工，覆盖商务、运营、技术与合规。" />
          <FeatureCard title="本地化构成" desc="日籍员工占比 65%，深度融入本地市场。" />
          <FeatureCard
            title="日本办公室"
            desc="详细地址以工作表「日本聚势」原文为准，将在上线前由业务确认。"
          />
        </div>
        <div className="mt-6 rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid rgba(15,20,40,0.06)" }}>
          <div className="text-sm" style={{ color: "hsl(230 20% 45%)" }}>
            办公室照片占位 · 待提供
          </div>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
