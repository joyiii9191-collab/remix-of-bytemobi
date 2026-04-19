import React from "react";
import {
  SubPageLayout,
  PageSection,
  FeatureCard,
} from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";

const MEDIA_MARKERS = [
  { x: 18, y: 35, highlight: true },
  { x: 50, y: 30, highlight: true },
  { x: 78, y: 45, highlight: true },
];
const MEDIA_LINES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [0, 2],
];

export default function MediaResources() {
  return (
    <SubPageLayout
      title="大媒体资源"
      eyebrow="MEDIA RESOURCES"
      heroTitle="全球主流媒体代理商 · 一站式增长合作伙伴"
      heroSubtitle="覆盖 TikTok、Facebook、Google 等全球主流媒体，提供从开户、投放、优化到合规风控与代运营的一站式服务。"
      heroVisual={<ParticleWorldMap markers={MEDIA_MARKERS} lines={MEDIA_LINES} />}
    >
      {/* 1. 价值主张 */}
      <PageSection
        id="value"
        eyebrow="01 · 价值主张"
        title="为出海团队提供端到端增长杠杆"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard title="全链路赋能" desc="短剧 + 品牌 + 多平台，覆盖营销全流程。" />
          <FeatureCard title="稳定高效增长" desc="账户健康度与素材效率持续监控，避免起量断档。" />
          <FeatureCard title="快速出海启动" desc="从合规到上线，按周交付而不是按月。" />
        </div>
      </PageSection>

      {/* 2. 服务入口 */}
      <PageSection
        id="services"
        bg="tint"
        eyebrow="02 · 服务入口"
        title="四大服务能力"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            title="开户与投放启动"
            desc="为广告主完成账号开设、账户准备与投放上线前配置。"
          />
          <FeatureCard
            title="代投与优化"
            desc="根据投放目标进行日常优化、素材迭代与预算调整。"
          />
          <FeatureCard
            title="风控与合规"
            desc="检查素材、定向和投放方式是否符合平台规则。"
          />
          <FeatureCard
            title="数据与复盘"
            desc="整理投放结果、做效果分析与下一轮优化建议。"
          />
        </div>
      </PageSection>

      {/* 3. 特色亮点 */}
      <PageSection
        id="highlight"
        eyebrow="03 · 特色亮点"
        title="短剧与品牌出海一站式"
        description="从内容形态、本地化创意到投放与复盘的完整链路。"
      >
        <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "1px solid rgba(15,20,40,0.06)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "短剧出海", v: "内容 + 投放协同" },
              { k: "品牌出海", v: "整合营销解决方案" },
              { k: "多平台", v: "TikTok / Meta / Google" },
              { k: "本地化", v: "区域素材 + 合规" },
            ].map((x) => (
              <div key={x.k}>
                <div className="text-sm font-semibold mb-1" style={{ color: "hsl(245 60% 35%)" }}>{x.k}</div>
                <div className="text-sm" style={{ color: "hsl(230 25% 35%)" }}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* 4. 合作模式 */}
      <PageSection
        id="model"
        bg="tint"
        eyebrow="04 · 合作模式"
        title="覆盖跨境与品牌的多类客户"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {["跨境商家", "品牌广告主", "渠道代理", "出海团队"].map((t) => (
            <div
              key={t}
              className="rounded-xl px-4 py-4 text-center text-sm font-medium"
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
          <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(245 60% 45%)" }}>
            合作流程
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm" style={{ color: "hsl(230 25% 28%)" }}>
            {["咨询", "评估", "签约", "搭建", "优化", "复盘"].map((s, i, arr) => (
              <React.Fragment key={s}>
                <span
                  className="px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "hsl(245 60% 35%)",
                  }}
                >
                  {s}
                </span>
                {i < arr.length - 1 && <span style={{ color: "hsl(230 15% 60%)" }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </PageSection>

      {/* 5. 政策支持 */}
      <PageSection
        id="policy"
        eyebrow="05 · 政策支持"
        title="平台资源与长期运营支持"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard title="平台资源支持与返点政策" desc="结合平台政策为合作伙伴争取更优条件。" />
          <FeatureCard title="流量扶持与投放策略支持" desc="新客户起量与冷启动阶段的策略陪跑。" />
          <FeatureCard title="专业培训与长期运营指导" desc="持续输出方法论，帮助团队自我成长。" />
        </div>
        <p className="mt-8 text-base md:text-lg" style={{ color: "hsl(230 25% 28%)", lineHeight: 1.8 }}>
          帮助合作伙伴快速起量，实现稳定增长。
        </p>
      </PageSection>
    </SubPageLayout>
  );
}
