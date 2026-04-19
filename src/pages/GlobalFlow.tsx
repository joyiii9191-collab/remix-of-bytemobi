import React from "react";
import { motion } from "motion/react";
import {
  SubPageLayout,
  PageSection,
  CountUp,
} from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Radio,
  Target,
  Sparkles,
  LineChart,
  Users,
  Repeat,
  ShieldCheck,
  Layers,
  Globe2,
  Gauge,
  Network,
  Zap,
  ArrowRight,
} from "lucide-react";

const HUB_MARKERS = [
  { x: 18, y: 35, highlight: true, label: "NA" },
  { x: 50, y: 30, highlight: true, label: "EU" },
  { x: 75, y: 38, highlight: true, label: "APAC" },
  { x: 30, y: 70, label: "LATAM" },
  { x: 55, y: 55, label: "MEA" },
  { x: 85, y: 68, label: "OCE" },
];
const HUB_LINES: Array<[number, number]> = [
  [0, 1], [1, 2], [0, 2], [2, 5], [1, 4], [0, 3],
];

/* ---------- 通用样式 ---------- */
const CARD_STYLE: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(15,20,40,0.06)",
  boxShadow: "0 4px 14px -8px rgba(15,20,40,0.08)",
};
const TEXT_DARK = "hsl(230 30% 18%)";
const TEXT_MID = "hsl(230 20% 40%)";
const ACCENT = "hsl(245 60% 45%)";

/* ---------- UA 流程步骤 ---------- */
const UA_STEPS = [
  { icon: Radio, title: "RTB 实时竞价", desc: "毫秒级响应全球主流交易市场曝光机会。" },
  { icon: Target, title: "多维定向", desc: "设备、兴趣、地域、时段灵活拼装人群策略。" },
  { icon: Sparkles, title: "创意智能组合", desc: "动态优选高 CTR 版本,素材自动迭代。" },
  { icon: LineChart, title: "全链路归因", desc: "曝光→点击→激活→付费,事件级可追溯。" },
];

/* ---------- RT 漏斗 ---------- */
const RT_FUNNEL = [
  { icon: Users, title: "流失用户分层建模", desc: "按生命周期与价值识别真正值得召回的人群", width: "100%" },
  { icon: Sparkles, title: "高价值召回种子", desc: "结合付费、留存、活跃信号锁定高 LTV 用户", width: "85%" },
  { icon: Repeat, title: "跨媒体频次控制", desc: "多媒体多设备统一频控,避免打扰与浪费", width: "70%" },
  { icon: Target, title: "动态商品 / 内容重定向", desc: "根据最近行为生成创意,所见即所想", width: "55%" },
  { icon: Gauge, title: "ROI 实时优化", desc: "自动调价、自动暂停,预算只投在赚钱位置", width: "40%" },
];

/* ---------- 案例 ---------- */
type Case = {
  tag: string;
  title: string;
  metric: string;
  region: string;
  summary: string;
  highlights: string[];
};
const CASES: Case[] = [
  {
    tag: "电商", title: "东南亚跨境快消", metric: "ROAS +186%", region: "SEA",
    summary: "针对东南亚六国快消品牌,完成从冷启动到规模化的全链路加速。",
    highlights: ["6 国并行投放", "ROAS 60 天提升 186%", "首单 CPA 下降 38%"],
  },
  {
    tag: "金融", title: "拉美信贷 App", metric: "CPA -42%", region: "LATAM",
    summary: "聚焦巴西、墨西哥信贷场景,基于人群分层与风控信号优化获客。",
    highlights: ["授信通过率 +21%", "CPA -42%", "次月留存 +16%"],
  },
  {
    tag: "博彩", title: "欧洲娱乐平台", metric: "FTD +73%", region: "EU",
    summary: "服务欧盟合规娱乐平台,完成从激活到首充的转化深度优化。",
    highlights: ["FTD +73%", "活跃用户 +41%", "合规媒体 100% 直签"],
  },
  {
    tag: "游戏", title: "中重度 SLG 出海", metric: "D7 留存 +28%", region: "Global",
    summary: "面向 SLG 品类设计长周期投放策略,平衡 ROI 与生命周期价值。",
    highlights: ["D7 留存 +28%", "付费 LTV +35%", "买量 ROI 提升 22%"],
  },
  {
    tag: "短视频", title: "中东内容平台", metric: "CPI -35%", region: "MEA",
    summary: "面向中东本地化短视频内容,基于阿语创意优化降低 CPI。",
    highlights: ["CPI -35%", "活跃 DAU +210%", "本地化创意 12 套"],
  },
  {
    tag: "数字服务", title: "全球工具应用", metric: "新增 +220%", region: "Global",
    summary: "面向工具类 App 的全球化扩张,完成 50+ 国家市场快速进入。",
    highlights: ["50+ 国家上线", "新增 +220%", "买量结构多元化"],
  },
];

/* ---------- Web 业务 ---------- */
const WEB_BUSINESS = [
  { icon: Layers, name: "Fintech" },
  { icon: ShieldCheck, name: "Health" },
  { icon: Sparkles, name: "Entertainment" },
  { icon: Network, name: "Digital" },
  { icon: Globe2, name: "Commerce" },
  { icon: Zap, name: "Travel" },
];

export default function GlobalFlow() {
  const [openCase, setOpenCase] = React.useState<Case | null>(null);

  return (
    <SubPageLayout
      title="全球汇流"
      eyebrow="GLOBAL FLOW"
      heroTitle="移动增长引擎"
      heroSubtitle="驱动全球增长,智能汇流每一刻。"
      heroVisual={<ParticleWorldMap markers={HUB_MARKERS} lines={HUB_LINES} />}
    >
      {/* 1. 增长枢纽 */}
      <PageSection
        id="hub"
        eyebrow="01 · 增长枢纽"
        title="全球汇流 · 增长枢纽"
        description="覆盖六大洲核心市场的实时流量与设备网络,每一秒都在为客户的增长目标计算最优路径。"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: "覆盖国家 / 地区", value: 220, suffix: "+" },
            { label: "月均可触达设备", value: 18, suffix: " 亿" },
            { label: "直签全球媒体", value: 1200, suffix: "+" },
            { label: "日均广告请求", value: 32, suffix: " 亿次" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6"
              style={CARD_STYLE}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  background: "linear-gradient(180deg, hsl(245 70% 30%) 0%, hsl(245 60% 50%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                }}
              >
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm" style={{ color: TEXT_MID }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* 2. UA 流程图 */}
      <PageSection
        id="ua"
        bg="tint"
        eyebrow="02 · 用户获取 UA"
        title="程序化获客,全链路可观测"
        description="从竞价响应到归因回流,四个环节毫秒级闭环优化。"
      >
        <div className="relative">
          {/* 桌面流程图 */}
          <div className="hidden md:flex items-stretch gap-3">
            {UA_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <React.Fragment key={s.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex-1 rounded-2xl p-5 relative"
                    style={CARD_STYLE}
                  >
                    <div
                      className="absolute -top-3 left-5 text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: ACCENT, color: "white" }}
                    >
                      0{i + 1}
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>
                      {s.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: TEXT_MID }}>
                      {s.desc}
                    </p>
                  </motion.div>
                  {i < UA_STEPS.length - 1 && (
                    <div className="flex items-center px-1" style={{ color: ACCENT }}>
                      <ArrowRight size={20} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          {/* 移动端纵向 */}
          <div className="md:hidden grid grid-cols-1 gap-3">
            {UA_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl p-5 flex gap-4" style={CARD_STYLE}>
                  <div
                    className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: TEXT_DARK }}>
                      0{i + 1} · {s.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: TEXT_MID }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageSection>

      {/* 3. RT 漏斗 */}
      <PageSection
        id="rt"
        eyebrow="03 · 用户再营销 RT"
        title="把流失用户变成新一轮增长"
        description="基于行为数据的分层重定向漏斗,从识别到 ROI 优化层层收敛。"
      >
        <div className="flex flex-col gap-3">
          {RT_FUNNEL.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mx-auto rounded-2xl p-5 flex items-center gap-4"
                style={{
                  ...CARD_STYLE,
                  width: s.width,
                  maxWidth: "100%",
                  background: `linear-gradient(90deg, rgba(99,102,241,${0.06 + i * 0.02}) 0%, #FFFFFF 100%)`,
                }}
              >
                <div
                  className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.12)", color: ACCENT }}
                >
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-base font-semibold" style={{ color: TEXT_DARK }}>
                    {s.title}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: TEXT_MID }}>
                    {s.desc}
                  </div>
                </div>
                <div
                  className="text-xs font-semibold px-2 py-1 rounded-full hidden sm:block"
                  style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                >
                  STEP {i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* 4. 全球媒体与流量整合 */}
      <PageSection
        id="media"
        bg="tint"
        eyebrow="04 · 媒体与流量"
        title="全球媒体与流量整合"
        description="从直签媒体到反欺诈,统一在一个看板里被衡量。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Globe2, t: "直签媒体", d: "头部 App、广告网络、运营商等一手资源直连。" },
            { icon: Layers, t: "区域流量包", d: "按市场打包的优质流量,快速覆盖目标地区。" },
            { icon: Gauge, t: "预算看板", d: "预算、出价、消耗、转化在一个视图内闭环。" },
            { icon: ShieldCheck, t: "反欺诈", d: "多模型实时识别异常流量,保障投放质量。" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6"
                style={CARD_STYLE}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>
                  {c.t}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>
                  {c.d}
                </p>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* 5. 增长成果精选 - 可点击案例卡 */}
      <PageSection
        id="cases"
        eyebrow="05 · 增长成果精选"
        title="六大行业代表案例"
        description="点击卡片查看案例详情。完整案例库随后接入工作表 2。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <motion.button
              key={c.title}
              type="button"
              onClick={() => setOpenCase(c)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 text-left cursor-pointer"
              style={CARD_STYLE}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                >
                  {c.tag}
                </span>
                <span className="text-xs" style={{ color: TEXT_MID }}>
                  {c.region}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: TEXT_DARK }}>
                {c.title}
              </h3>
              <div className="text-2xl font-bold mb-3" style={{ color: ACCENT }}>
                {c.metric}
              </div>
              <div
                className="text-xs flex items-center gap-1 font-medium"
                style={{ color: ACCENT }}
              >
                查看完整案例 <ArrowRight size={12} />
              </div>
            </motion.button>
          ))}
        </div>

        <Dialog open={!!openCase} onOpenChange={(o) => !o && setOpenCase(null)}>
          <DialogContent className="max-w-lg">
            {openCase && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                    >
                      {openCase.tag}
                    </span>
                    <span className="text-xs" style={{ color: TEXT_MID }}>
                      {openCase.region}
                    </span>
                  </div>
                  <DialogTitle style={{ color: TEXT_DARK }}>{openCase.title}</DialogTitle>
                  <DialogDescription style={{ color: TEXT_MID }}>
                    {openCase.summary}
                  </DialogDescription>
                </DialogHeader>
                <div className="text-3xl font-bold my-2" style={{ color: ACCENT }}>
                  {openCase.metric}
                </div>
                <ul className="space-y-2 mt-2">
                  {openCase.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm flex items-start gap-2"
                      style={{ color: TEXT_DARK }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: ACCENT }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <div
                  className="text-xs mt-4 pt-4 border-t"
                  style={{ color: TEXT_MID, borderColor: "rgba(15,20,40,0.06)" }}
                >
                  完整案例数据将由工作表 2 接入后展示。
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </PageSection>

      {/* 6. Web 端增长宏图 - 双引擎对比 */}
      <PageSection
        id="web"
        bg="tint"
        eyebrow="06 · Web 端"
        title="Web 端增长宏图"
        description="覆盖六大业务方向的 Web 长效增长方案,左侧增长引擎与右侧流量网络协同发力。"
      >
        {/* 业务方向 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {WEB_BUSINESS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl p-4 flex flex-col items-center gap-2"
                style={CARD_STYLE}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                >
                  <Icon size={18} />
                </div>
                <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>
                  {b.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 双引擎 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          {/* 中间连接线 (桌面) */}
          <div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center"
            style={{
              background: "white",
              border: "2px solid rgba(99,102,241,0.3)",
              color: ACCENT,
              boxShadow: "0 4px 14px -4px rgba(99,102,241,0.3)",
            }}
          >
            <Zap size={20} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6"
            style={CARD_STYLE}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
              style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
            >
              <Sparkles size={12} /> 增长引擎(内投团队)
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: TEXT_DARK }}>
              从策略到执行的内部加速
            </h3>
            <ul className="space-y-2.5">
              {["预算出价优化", "创意测试", "转化洞察", "合规与长期增长"].map((x) => (
                <li
                  key={x}
                  className="text-sm flex items-start gap-2"
                  style={{ color: TEXT_DARK }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6"
            style={CARD_STYLE}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
              style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
            >
              <Network size={12} /> 流量网络(网盟 / 联盟)
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: TEXT_DARK }}>
              全球渠道的外部协同
            </h3>
            <ul className="space-y-2.5">
              {["高效对接", "快速启动", "持续增长"].map((x) => (
                <li
                  key={x}
                  className="text-sm flex items-start gap-2"
                  style={{ color: TEXT_DARK }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
