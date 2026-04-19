import React from "react";
import {
  SubPageLayout,
  PageSection,
  FeatureCard,
} from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";

const OFFICES = [
  { x: 70, y: 42, name: "西安（总部）", addr: "中国陕西省西安市高新技术产业开发区科技路旺座现代城B座23层", highlight: true },
  { x: 78, y: 52, name: "新加坡", addr: "Singapore Office · 待业务确认" },
  { x: 82, y: 36, name: "东京", addr: "Tokyo Office · 待业务确认" },
  { x: 50, y: 30, name: "杜塞尔多夫", addr: "Düsseldorf Office · 待业务确认" },
  { x: 14, y: 38, name: "洛杉矶", addr: "Los Angeles Office · 待业务确认" },
];

const MAP_MARKERS = OFFICES.map((o) => ({ x: o.x, y: o.y, highlight: o.highlight }));
const MAP_LINES: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
];

const TIMELINE = [
  { y: "2016", t: "深圳总部成立" },
  { y: "2018", t: "新加坡办公室设立" },
  { y: "2019", t: "东京办公室设立" },
  { y: "2020", t: "高新技术企业认定" },
  { y: "2022", t: "杜塞尔多夫 + ISO 27001" },
  { y: "2023", t: "员工规模 150+" },
  { y: "2024", t: "洛杉矶 + 600+ 广告主合作" },
  { y: "2025", t: "员工规模 200+" },
];

const EVENTS = ["IAB", "GDC", "Japan IT Week", "ChinaJoy", "TGS", "中东峰会", "IVS Kyoto"];

export default function About() {
  const [hover, setHover] = React.useState<number | null>(null);
  return (
    <SubPageLayout
      title="关于我们"
      eyebrow="ABOUT US"
      heroTitle="让数字连接更有价值"
      heroSubtitle="成立于 2016 年，全球 5 个办公点、200+ 员工，致力于成为全球数字生态中值得信赖的桥梁。"
      heroVisual={<ParticleWorldMap markers={MAP_MARKERS} lines={MAP_LINES} />}
    >
      {/* 1. 公司简介 */}
      <PageSection
        id="intro"
        eyebrow="01 · 公司简介"
        title="可信、协同、长期"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard title="2016 年成立" desc="深耕行业近十年，具备较长的行业积累。" />
          <FeatureCard title="总部深圳 · 全球 5 办公点" desc="多地协同覆盖关键市场。" />
          <FeatureCard title="200+ 员工" desc="技术、产品、商务、运营一体化团队。" />
          <FeatureCard title="ISO 27001 + 高新技术企业" desc="可信的合规与技术基础。" />
        </div>
      </PageSection>

      {/* 2. 全球布局 */}
      <PageSection
        id="offices"
        bg="tint"
        eyebrow="02 · 全球布局"
        title="覆盖关键市场的五个办公点"
        description="鼠标悬停查看详细地址。"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(15,20,40,0.06)",
              minHeight: 360,
            }}
          >
            <ParticleWorldMap markers={MAP_MARKERS} lines={MAP_LINES} />
          </div>
          <div className="flex flex-col gap-3">
            {OFFICES.map((o, i) => (
              <div
                key={o.name}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="rounded-xl p-4 transition-all cursor-default"
                style={{
                  background: "#FFFFFF",
                  border:
                    hover === i
                      ? "1px solid rgba(99,102,241,0.4)"
                      : "1px solid rgba(15,20,40,0.06)",
                  boxShadow: hover === i ? "0 4px 14px -8px rgba(99,102,241,0.3)" : "none",
                }}
              >
                <div className="font-semibold text-sm" style={{ color: "hsl(230 30% 18%)" }}>
                  {o.name}
                </div>
                <div className="text-xs mt-1" style={{ color: "hsl(230 20% 45%)" }}>
                  {o.addr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* 3. 发展历程 */}
      <PageSection
        id="timeline"
        eyebrow="03 · 发展历程"
        title="十年路径"
      >
        <div className="relative pl-6 border-l" style={{ borderColor: "rgba(99,102,241,0.25)" }}>
          {TIMELINE.map((t, i) => (
            <div key={t.y} className="relative pb-6">
              <div
                className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(230 80% 60%), hsl(265 70% 60%))",
                  boxShadow: "0 0 0 4px rgba(99,102,241,0.12)",
                }}
              />
              <div className="text-sm font-semibold" style={{ color: "hsl(245 60% 35%)" }}>
                {t.y}
              </div>
              <div className="text-base" style={{ color: "hsl(230 25% 25%)" }}>
                {t.t}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* 4. 企业文化 */}
      <PageSection
        id="culture"
        bg="tint"
        eyebrow="04 · 企业文化"
        title="使命 · 愿景 · 价值观"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard title="使命" desc="让数字连接更有价值。" />
          <FeatureCard title="愿景" desc="成为全球数字生态中值得信赖的桥梁。" />
          <FeatureCard
            title="价值观"
            desc={
              <ul className="list-disc pl-4 space-y-1">
                <li>长期主义</li>
                <li>开放协作</li>
                <li>客户导向</li>
                <li>持续创新</li>
              </ul>
            }
          />
        </div>
      </PageSection>

      {/* 5. 全球近期活动 */}
      <PageSection
        id="events"
        eyebrow="05 · 全球近期活动"
        title="持续参与全球行业活动"
        description="完整资料请跳转工作表 6 查看，避免活动信息失真或漏项。"
      >
        <div className="flex flex-wrap gap-3">
          {EVENTS.map((e) => (
            <div
              key={e}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(15,20,40,0.06)",
                color: "hsl(230 30% 25%)",
              }}
            >
              {e}
            </div>
          ))}
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
