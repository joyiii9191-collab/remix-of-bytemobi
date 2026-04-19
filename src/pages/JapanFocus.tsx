import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  SubPageLayout,
  PageSection,
  CountUp,
} from "@/components/SubPageLayout";
import { JapanHighlightMap } from "@/components/JapanHighlightMap";
import {
  Globe2,
  Handshake,
  ShieldCheck,
  Database,
  Coins,
  Sparkles,
  Target,
  Users,
  Headphones,
  Network,
  LayoutDashboard,
  Trophy,
  Activity,
  Wallet,
  Settings2,
  ChevronLeft,
  ChevronRight,
  Building2,
  Languages,
} from "lucide-react";

const CARD: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(15,20,40,0.06)",
  boxShadow: "0 4px 14px -8px rgba(15,20,40,0.08)",
};
const TEXT_DARK = "hsl(230 30% 18%)";
const TEXT_MID = "hsl(230 20% 40%)";
const JP_RED = "hsl(355 75% 55%)";
const JP_RED_SOFT = "rgba(220,38,38,0.08)";

/* ---------- 平台核心优势 ---------- */
const STRENGTHS = [
  {
    icon: Globe2, title: "全球项目实绩",
    desc: "覆盖交友、游戏、金融、娱乐、电商、新闻等多品类,跨地域跑通的成熟方法论。",
  },
  {
    icon: Handshake, title: "全球优质合作伙伴",
    desc: "Unity、Tapjoy 等头部网络,以及小米、OPPO 等 OEM 厂商深度对接。",
  },
  {
    icon: ShieldCheck, title: "严格的反欺诈对策",
    desc: "自研机器学习实时检测 + 第三方验证机构协同,端到端守护投放质量。",
  },
  {
    icon: Database, title: "数据驱动的程序化能力",
    desc: "精准算法 + 全链路实时数据,每一次出价都有数据支撑。",
  },
];

/* ---------- 广告主 / 媒体 双侧 ---------- */
const ADV_SIDE = {
  title: "面向广告主",
  subtitle: "先成果,后付费",
  desc: "为出海日本与亚太的广告主提供低门槛、高确定性的合作方式。",
  items: [
    { icon: Coins, t: "成果报酬型 CPI / CPA", d: "按真实激活与转化付费,结果导向。" },
    { icon: Sparkles, t: "零初期费用", d: "无平台接入与启动费,降低试投风险。" },
    { icon: Target, t: "灵活 KPI", d: "按行业与目标自定义考核口径。" },
    { icon: Headphones, t: "本地咨询", d: "日籍团队提供市场、合规与创意建议。" },
    { icon: Network, t: "全球流量", d: "同账户对接全球资源,便于跨区放量。" },
  ],
};
const PUB_SIDE = {
  title: "面向媒体",
  subtitle: "一站式变现伙伴",
  desc: "为日本本地媒体提供清晰、可控、可持续的变现方案。",
  items: [
    { icon: LayoutDashboard, t: "一站式变现仪表板", d: "收益、填充、eCPM 全指标可视化。" },
    { icon: Trophy, t: "高值项目库", d: "持续接入头部广告主项目,优先派发。" },
    { icon: Activity, t: "实时数据", d: "分钟级数据回流,便于策略调整。" },
    { icon: Wallet, t: "可靠支付", d: "按时结算,多币种与多通道支持。" },
    { icon: Settings2, t: "定制策略", d: "为头部媒体提供专属变现方案。" },
  ],
};

/* ---------- 办公室照片轮播(占位) ---------- */
const OFFICE_PHOTOS = [
  { title: "东京办公室 · 主入口", caption: "Tokyo Office · Entrance" },
  { title: "团队工位区", caption: "Open Workspace" },
  { title: "会议与协作区", caption: "Meeting Room" },
  { title: "本地团队合影", caption: "Local Team" },
];

function OfficeCarousel() {
  const [idx, setIdx] = React.useState(0);
  const total = OFFICE_PHOTOS.length;

  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 4500);
    return () => clearInterval(t);
  }, [total]);

  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ ...CARD, height: 360 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, hsl(${355 + idx * 5} 60% 92%) 0%, hsl(${20 + idx * 8} 50% 88%) 100%)`,
          }}
        >
          {/* 占位日式装饰图形 */}
          <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-40">
            <circle cx="100" cy="100" r="60" fill={JP_RED} fillOpacity="0.5" />
            <circle cx="100" cy="100" r="40" fill="white" fillOpacity="0.6" />
          </svg>
          <div
            className="absolute bottom-0 left-0 right-0 px-6 py-5"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(15,20,40,0.7) 100%)",
              color: "white",
            }}
          >
            <div className="text-base font-semibold">{OFFICE_PHOTOS[idx].title}</div>
            <div className="text-xs opacity-80 mt-1">{OFFICE_PHOTOS[idx].caption} · 占位待替换</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 控制 */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.85)", color: TEXT_DARK }}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.85)", color: TEXT_DARK }}
      >
        <ChevronRight size={18} />
      </button>

      {/* 指示器 */}
      <div className="absolute top-3 right-3 flex gap-1.5">
        {OFFICE_PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === idx ? 20 : 6,
              background: i === idx ? JP_RED : "rgba(255,255,255,0.7)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function JapanFocus() {
  return (
    <SubPageLayout
      title="日本聚势"
      eyebrow="JAPAN FOCUS"
      heroTitle={
        <>
          深度理解本地市场
          <br />
          <span style={{ color: JP_RED, WebkitTextFillColor: JP_RED }}>以数据驱动为核心</span>
        </>
      }
      heroSubtitle="聚焦日本市场,同时完成全球多区域布局,助力广告主与媒体方实现高效增长。"
      heroVisual={<JapanHighlightMap height={520} />}
    >
      {/* 1. 平台核心优势 */}
      <PageSection
        id="strengths"
        eyebrow="01 · 平台核心优势"
        title="数据驱动 + 本地洞察"
        description="从全球项目实绩到反欺诈对策,技术与运营双轮驱动。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STRENGTHS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 h-full"
                style={CARD}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: JP_RED_SOFT, color: JP_RED }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* 2. 广告主 / 媒体 双侧对比 */}
      <PageSection
        id="two-sides"
        bg="tint"
        eyebrow="02 · 双边平台"
        title="一边广告主,一边媒体"
        description="两侧能力清晰分栏,让需求方与供给方都能快速找到合作入口。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          {/* 中央分隔节点 */}
          <div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full items-center justify-center"
            style={{
              background: "white",
              border: `2px solid ${JP_RED}`,
              color: JP_RED,
              boxShadow: "0 6px 20px -6px rgba(220,38,38,0.4)",
            }}
          >
            <Sparkles size={20} />
          </div>

          {/* 广告主 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 md:p-7"
            style={CARD}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{ background: JP_RED_SOFT, color: JP_RED }}
            >
              <Users size={12} /> {ADV_SIDE.title}
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: TEXT_DARK }}>
              {ADV_SIDE.subtitle}
            </h3>
            <p className="text-sm mb-5" style={{ color: TEXT_MID }}>
              {ADV_SIDE.desc}
            </p>
            <div className="space-y-3">
              {ADV_SIDE.items.map((it) => {
                const Icon = it.icon;
                return (
                  <div key={it.t} className="flex gap-3">
                    <div
                      className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center"
                      style={{ background: JP_RED_SOFT, color: JP_RED }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>
                        {it.t}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: TEXT_MID }}>
                        {it.d}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 媒体 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 md:p-7"
            style={CARD}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{ background: JP_RED_SOFT, color: JP_RED }}
            >
              <LayoutDashboard size={12} /> {PUB_SIDE.title}
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: TEXT_DARK }}>
              {PUB_SIDE.subtitle}
            </h3>
            <p className="text-sm mb-5" style={{ color: TEXT_MID }}>
              {PUB_SIDE.desc}
            </p>
            <div className="space-y-3">
              {PUB_SIDE.items.map((it) => {
                const Icon = it.icon;
                return (
                  <div key={it.t} className="flex gap-3">
                    <div
                      className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center"
                      style={{ background: JP_RED_SOFT, color: JP_RED }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>
                        {it.t}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: TEXT_MID }}>
                        {it.d}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </PageSection>

      {/* 3. 全球布局 - 日本高亮 */}
      <PageSection
        id="map"
        eyebrow="03 · 全球布局"
        title="以日本为核心的全球网络"
        description="日本核心市场深耕,并向亚太、欧美持续扩张。右上方为日本列岛特写。"
      >
        <div
          className="rounded-2xl overflow-hidden p-4"
          style={{ ...CARD, minHeight: 440 }}
        >
          <JapanHighlightMap height={420} />
        </div>
      </PageSection>

      {/* 4. 日本深耕 */}
      <PageSection
        id="local"
        bg="tint"
        eyebrow="04 · 日本深耕"
        title="自 2019 起的本地团队"
        description="由本地化运营、合规与商务组成的日本办公室,与全球资源协同。"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          {/* 数据卡 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6"
              style={CARD}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: JP_RED_SOFT, color: JP_RED }}
              >
                <Users size={20} />
              </div>
              <div
                className="text-4xl font-bold mb-1"
                style={{
                  background: `linear-gradient(180deg, hsl(355 70% 35%) 0%, ${JP_RED} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                }}
              >
                <CountUp value={47} />
              </div>
              <div className="text-sm" style={{ color: TEXT_MID }}>
                员工规模 · 商务 / 运营 / 技术 / 合规
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl p-6"
              style={CARD}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: JP_RED_SOFT, color: JP_RED }}
              >
                <Languages size={20} />
              </div>
              <div
                className="text-4xl font-bold mb-1"
                style={{
                  background: `linear-gradient(180deg, hsl(355 70% 35%) 0%, ${JP_RED} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                }}
              >
                <CountUp value={65} suffix="%" />
              </div>
              <div className="text-sm" style={{ color: TEXT_MID }}>
                日籍员工占比 · 深度融入本地市场
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="rounded-2xl p-6 sm:col-span-2"
              style={CARD}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: JP_RED_SOFT, color: JP_RED }}
              >
                <Building2 size={20} />
              </div>
              <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>
                日本办公室
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>
                详细地址以工作表「日本聚势」原文为准,将在上线前由业务确认。
                自 2019 年起持续深耕,本地化运营、商务与合规一体化协作。
              </p>
            </motion.div>
          </div>

          {/* 办公室照片轮播 */}
          <OfficeCarousel />
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
