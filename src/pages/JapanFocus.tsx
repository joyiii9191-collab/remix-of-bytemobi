import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  SnapPage, SnapScreen, ScreenInner,
  ScreenEyebrow, ScreenTitle, ScreenLead,
} from "@/components/SnapPage";
import { CountUp } from "@/components/SubPageLayout";
import { JapanHighlightMap } from "@/components/JapanHighlightMap";
import {
  Globe2, Handshake, ShieldCheck, Database,
  Coins, Sparkles, Target, Users, Headphones, Network,
  LayoutDashboard, Trophy, Activity, Wallet, Settings2,
  ChevronLeft, ChevronRight, Building2, Languages,
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

const STRENGTHS = [
  { icon: Globe2, title: "全球项目实绩", desc: "覆盖交友、游戏、金融、娱乐、电商、新闻等多品类。" },
  { icon: Handshake, title: "全球优质合作伙伴", desc: "Unity、Tapjoy 等头部网络与 OEM 厂商深度对接。" },
  { icon: ShieldCheck, title: "严格的反欺诈对策", desc: "自研机器学习实时检测 + 第三方验证机构协同。" },
  { icon: Database, title: "数据驱动的程序化能力", desc: "精准算法 + 全链路实时数据,每一次出价有据。" },
];

const ADV_SIDE = {
  title: "面向广告主", subtitle: "先成果,后付费",
  desc: "为出海日本与亚太的广告主提供低门槛、高确定性的合作方式。",
  items: [
    { icon: Coins, t: "成果报酬型 CPI / CPA", d: "按真实激活与转化付费。" },
    { icon: Sparkles, t: "零初期费用", d: "无平台接入与启动费。" },
    { icon: Target, t: "灵活 KPI", d: "按行业自定义考核口径。" },
    { icon: Headphones, t: "本地咨询", d: "日籍团队提供本地建议。" },
    { icon: Network, t: "全球流量", d: "同账户对接全球资源。" },
  ],
};
const PUB_SIDE = {
  title: "面向媒体", subtitle: "一站式变现伙伴",
  desc: "为日本本地媒体提供清晰、可控、可持续的变现方案。",
  items: [
    { icon: LayoutDashboard, t: "一站式变现仪表板", d: "收益与填充全指标可视化。" },
    { icon: Trophy, t: "高值项目库", d: "持续接入头部广告主项目。" },
    { icon: Activity, t: "实时数据", d: "分钟级回流便于策略调整。" },
    { icon: Wallet, t: "可靠支付", d: "按时结算,多币种支持。" },
    { icon: Settings2, t: "定制策略", d: "为头部媒体提供专属方案。" },
  ],
};

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
    <div className="relative rounded-2xl overflow-hidden w-full" style={{ ...CARD, height: 360 }}>
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
            <div className="text-xs opacity-80 mt-1">{OFFICE_PHOTOS[idx].caption}</div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button type="button" onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.85)", color: TEXT_DARK }}><ChevronLeft size={18} /></button>
      <button type="button" onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.85)", color: TEXT_DARK }}><ChevronRight size={18} /></button>
      <div className="absolute top-3 right-3 flex gap-1.5">
        {OFFICE_PHOTOS.map((_, i) => (
          <button key={i} type="button" onClick={() => setIdx(i)}
            className="h-1.5 rounded-full transition-all"
            style={{ width: i === idx ? 20 : 6, background: i === idx ? JP_RED : "rgba(255,255,255,0.7)" }} />
        ))}
      </div>
    </div>
  );
}

function SideCard({ data, dir }: { data: typeof ADV_SIDE; dir: "l" | "r" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: dir === "l" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-6 md:p-7"
      style={CARD}
    >
      <div
        className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
        style={{ background: JP_RED_SOFT, color: JP_RED }}
      >{data.title}</div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: TEXT_DARK }}>{data.subtitle}</h3>
      <p className="text-sm mb-5" style={{ color: TEXT_MID }}>{data.desc}</p>
      <div className="space-y-2.5">
        {data.items.map((it) => {
          const Icon = it.icon;
          return (
            <div key={it.t} className="flex gap-3">
              <div className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center"
                style={{ background: JP_RED_SOFT, color: JP_RED }}><Icon size={15} /></div>
              <div className="min-w-0">
                <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{it.t}</div>
                <div className="text-xs mt-0.5" style={{ color: TEXT_MID }}>{it.d}</div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function JapanFocus() {
  return (
    <SnapPage title="日本聚势">
      {/* === Screen 1 — Hero === */}
      <SnapScreen id="hero">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <JapanHighlightMap height={600} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.6) 80%, #F5F5F7 100%)" }} />
        <ScreenInner>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-5 self-start"
            style={{ background: JP_RED_SOFT, color: JP_RED, border: `1px solid ${JP_RED_SOFT}` }}
          >JAPAN FOCUS · 日本聚势</motion.div>
          <ScreenTitle size="xl">
            深度理解本地市场
            <br />
            <span style={{ color: JP_RED, WebkitTextFillColor: JP_RED }}>以数据驱动为核心</span>
          </ScreenTitle>
          <ScreenLead>
            聚焦日本市场,同时完成全球多区域布局,助力广告主与媒体方实现高效增长。
          </ScreenLead>
          <div className="mt-10 text-xs uppercase tracking-[0.3em]" style={{ color: TEXT_MID }}>↓ 滑动查看本地能力</div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2 — 平台核心优势 === */}
      <SnapScreen id="strengths" bg="tint">
        <ScreenInner>
          <ScreenEyebrow>01 · 平台核心优势</ScreenEyebrow>
          <ScreenTitle>数据驱动 + 本地洞察</ScreenTitle>
          <ScreenLead>从全球项目实绩到反欺诈对策,技术与运营双轮驱动。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {STRENGTHS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl p-6 h-full"
                  style={CARD}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: JP_RED_SOFT, color: JP_RED }}><Icon size={20} /></div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — 双侧分栏 === */}
      <SnapScreen id="two-sides">
        <ScreenInner>
          <ScreenEyebrow>02 · 双边平台</ScreenEyebrow>
          <ScreenTitle>一边广告主,一边媒体</ScreenTitle>
          <ScreenLead>两侧能力清晰分栏,让需求方与供给方都能快速找到合作入口。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative mt-8">
            <div
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center"
              style={{
                background: "white",
                border: `2px solid ${JP_RED}`,
                color: JP_RED,
                boxShadow: "0 6px 20px -6px rgba(220,38,38,0.4)",
              }}
            ><Sparkles size={18} /></div>
            <SideCard data={ADV_SIDE} dir="l" />
            <SideCard data={PUB_SIDE} dir="r" />
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 4 — 全球地图 + 日本特写 === */}
      <SnapScreen id="map" bg="tint">
        <ScreenInner>
          <ScreenEyebrow>03 · 全球布局</ScreenEyebrow>
          <ScreenTitle>以日本为核心的全球网络</ScreenTitle>
          <ScreenLead>日本核心市场深耕,并向亚太、欧美持续扩张。</ScreenLead>
          <div className="rounded-2xl overflow-hidden mt-6 flex-1 min-h-[320px]" style={CARD}>
            <JapanHighlightMap height={420} />
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 本地团队数据 === */}
      <SnapScreen id="local">
        <ScreenInner>
          <ScreenEyebrow>04 · 日本深耕</ScreenEyebrow>
          <ScreenTitle>自 2019 起的本地团队</ScreenTitle>
          <ScreenLead>由本地化运营、合规与商务组成的日本办公室,与全球资源协同。</ScreenLead>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
                className="rounded-2xl p-6" style={CARD}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: JP_RED_SOFT, color: JP_RED }}><Users size={20} /></div>
                <div className="text-4xl font-bold mb-1"
                  style={{
                    background: `linear-gradient(180deg, hsl(355 70% 35%) 0%, ${JP_RED} 100%)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1,
                  }}><CountUp value={47} /></div>
                <div className="text-sm" style={{ color: TEXT_MID }}>员工规模 · 商务/运营/技术/合规</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-2xl p-6" style={CARD}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: JP_RED_SOFT, color: JP_RED }}><Languages size={20} /></div>
                <div className="text-4xl font-bold mb-1"
                  style={{
                    background: `linear-gradient(180deg, hsl(355 70% 35%) 0%, ${JP_RED} 100%)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1,
                  }}><CountUp value={65} suffix="%" /></div>
                <div className="text-sm" style={{ color: TEXT_MID }}>日籍员工占比 · 深度融入本地市场</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.16 }}
                className="rounded-2xl p-6 sm:col-span-2" style={CARD}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: JP_RED_SOFT, color: JP_RED }}><Building2 size={20} /></div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>日本办公室</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>
                  自 2019 年起持续深耕,本地化运营、商务与合规一体化协作。
                </p>
              </motion.div>
            </div>
            <OfficeCarousel />
          </div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
