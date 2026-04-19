import React from "react";
import {
  SubPageLayout,
  PageSection,
  FeatureCard,
  CountUp,
} from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";

const HUB_MARKERS = [
  { x: 18, y: 35, highlight: true, label: "NA" },
  { x: 50, y: 30, highlight: true, label: "EU" },
  { x: 75, y: 38, highlight: true, label: "APAC" },
  { x: 30, y: 70, label: "LATAM" },
  { x: 55, y: 55, label: "MEA" },
  { x: 85, y: 68, label: "OCE" },
];

const HUB_LINES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [0, 2],
  [2, 5],
  [1, 4],
  [0, 3],
];

export default function GlobalFlow() {
  return (
    <SubPageLayout
      title="全球汇流"
      eyebrow="GLOBAL FLOW"
      heroTitle="移动增长引擎"
      heroSubtitle="驱动全球增长，智能汇流每一刻。"
      heroVisual={<ParticleWorldMap markers={HUB_MARKERS} lines={HUB_LINES} />}
    >
      {/* 1. 增长枢纽 */}
      <PageSection
        id="hub"
        eyebrow="01 · 增长枢纽"
        title="全球汇流 · 增长枢纽"
        description="覆盖六大洲核心市场的实时流量与设备网络，每一秒都在为客户的增长目标计算最优路径。"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: "覆盖国家 / 地区", value: 220, suffix: "+" },
            { label: "月均可触达设备", value: 18, suffix: " 亿" },
            { label: "直签全球媒体", value: 1200, suffix: "+" },
            { label: "日均广告请求", value: 32, suffix: " 亿次" },
          ].map((s) => (
            <div
              key={s.label}
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
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm" style={{ color: "hsl(230 20% 38%)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* 2. UA */}
      <PageSection
        id="ua"
        bg="tint"
        eyebrow="02 · 用户获取 UA"
        title="程序化获客，全链路可观测"
        description="从竞价响应到归因回流，每个环节都在毫秒级闭环优化。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard title="程序化实时竞价（RTB）" desc="毫秒级响应，参与全球主流交易市场的高质量曝光竞拍。" />
          <FeatureCard title="多维定向" desc="设备型号、兴趣标签、地域、时段，灵活拼装人群策略。" />
          <FeatureCard title="创意素材智能组合" desc="动态优选高点击率版本，素材表现自动迭代。" />
          <FeatureCard title="全链路归因数据" desc="从曝光、点击到激活、付费，事件级数据可追溯。" />
        </div>
      </PageSection>

      {/* 3. RT */}
      <PageSection
        id="rt"
        eyebrow="03 · 用户再营销 RT"
        title="把流失用户变成新一轮增长"
        description="基于行为数据的分层重定向，让每一次再触达都更接近付费转化。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard title="流失用户分层建模" desc="按生命周期与价值分层，识别真正值得召回的人群。" />
          <FeatureCard title="高价值召回人群" desc="结合付费、留存、活跃信号定位高 LTV 召回种子。" />
          <FeatureCard title="跨媒体频次控制" desc="多媒体多设备统一频控，避免打扰与浪费。" />
          <FeatureCard title="动态商品 / 内容重定向" desc="根据用户最近行为动态生成创意，所见即所想。" />
          <FeatureCard title="ROI 实时优化" desc="自动调价、自动暂停，预算只投在赚钱的位置。" />
        </div>
      </PageSection>

      {/* 4. 全球媒体与流量整合 */}
      <PageSection
        id="media"
        bg="tint"
        eyebrow="04 · 媒体与流量"
        title="全球媒体与流量整合"
        description="从直签媒体到反欺诈，统一在一个看板里被衡量。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard title="直签媒体" desc="头部 App、广告网络、运营商等一手资源直连。" />
          <FeatureCard title="区域流量包" desc="按市场打包的优质流量，快速覆盖目标地区。" />
          <FeatureCard title="预算看板" desc="预算、出价、消耗、转化在一个视图内闭环。" />
          <FeatureCard title="反欺诈" desc="多模型实时识别异常流量，保障投放质量。" />
        </div>
      </PageSection>

      {/* 5. 增长成果精选 */}
      <PageSection
        id="cases"
        eyebrow="05 · 增长成果精选"
        title="六大行业代表案例"
        description="从电商到数字服务，每个行业一个代表案例先行展示，完整案例库随后接入。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { tag: "电商", title: "东南亚跨境快消", metric: "ROAS +186%" },
            { tag: "金融", title: "拉美信贷 App", metric: "CPA -42%" },
            { tag: "博彩", title: "欧洲娱乐平台", metric: "FTD +73%" },
            { tag: "游戏", title: "中重度 SLG 出海", metric: "D7 留存 +28%" },
            { tag: "短视频", title: "中东内容平台", metric: "CPI -35%" },
            { tag: "数字服务", title: "全球工具应用", metric: "新增 +220%" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(15,20,40,0.06)",
                boxShadow: "0 4px 14px -8px rgba(15,20,40,0.08)",
              }}
            >
              <div
                className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  color: "hsl(245 60% 35%)",
                }}
              >
                {c.tag}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "hsl(230 30% 18%)" }}>
                {c.title}
              </h3>
              <div className="text-2xl font-bold" style={{ color: "hsl(245 60% 45%)" }}>
                {c.metric}
              </div>
              <div className="text-xs mt-3" style={{ color: "hsl(230 20% 50%)" }}>
                完整案例 →（接入工作表 2）
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* 6. Web 端增长宏图 */}
      <PageSection
        id="web"
        bg="tint"
        eyebrow="06 · Web 端"
        title="Web 端增长宏图"
        description="覆盖 Fintech / Health / Entertainment / Digital / Commerce / Travel 的 Web 长效增长方案，左侧增长引擎、右侧流量网络，市场与全链路一体化。"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {["Fintech", "Health", "Entertainment", "Digital", "Commerce", "Travel"].map((b) => (
            <div
              key={b}
              className="rounded-xl px-5 py-4 text-sm font-medium"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(15,20,40,0.06)",
                color: "hsl(230 30% 25%)",
              }}
            >
              {b}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard
            title="增长引擎（内投团队）"
            desc={
              <ul className="list-disc pl-4 space-y-1">
                <li>预算出价优化</li>
                <li>创意测试</li>
                <li>转化洞察</li>
                <li>合规与长期增长</li>
              </ul>
            }
          />
          <FeatureCard
            title="流量网络（网盟 / 联盟）"
            desc={
              <ul className="list-disc pl-4 space-y-1">
                <li>高效对接</li>
                <li>快速启动</li>
                <li>持续增长</li>
              </ul>
            }
          />
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
