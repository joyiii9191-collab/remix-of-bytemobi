import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion, AnimatePresence } from "motion/react";
import {
  SnapPage, SnapScreen, ScreenInner,
  ScreenEyebrow, ScreenTitle, ScreenLead,
} from "@/components/SnapPage";
import { CountUp } from "@/components/SubPageLayout";
import { JapanHighlightMap } from "@/components/JapanHighlightMap";
import { GlassCategoryIcon } from "@/components/GlassCategoryIcon";
import {
  Globe2, Handshake, ShieldCheck, Database,
  Coins, Sparkles, Target, Users, Headphones, Network,
  LayoutDashboard, Trophy, Activity, Wallet, Settings2,
  ChevronLeft, ChevronRight, Building2, Languages,
  Heart, Gamepad2, Banknote, Music2, ShoppingCart, Newspaper, Sparkle,
  ScanSearch, BadgeCheck, Cpu, Zap, SlidersHorizontal,
} from "lucide-react";

import { GLASS_CARD as CARD, TEXT_DARK, TEXT_MID } from "@/lib/page-styles";
const JP_RED = "hsl(245 60% 45%)";
const JP_RED_SOFT = "hsla(245, 60%, 45%, 0.08)";

const CATEGORIES: { variant: "dating" | "lifestyle" | "game" | "finance" | "entertainment" | "shopping" | "news" | "more"; name: string }[] = [
  { variant: "dating", name: "交友" },
  { variant: "lifestyle", name: "生活" },
  { variant: "game", name: "游戏" },
  { variant: "finance", name: "金融" },
  { variant: "entertainment", name: "娱乐" },
  { variant: "shopping", name: "电商" },
  { variant: "news", name: "新闻" },
  { variant: "more", name: "更多品类" },
];

const PARTNER_GROUPS = [
  { label: "OEM", slots: ["Xiaomi", "OPPO", "TRANSSION"] },
  { label: "DIRECT APPS", slots: ["VMate", "Simeji", "Joyme", "Snaptube", "Meitu"] },
  { label: "SSP", slots: ["Unity", "Tapjoy", "Appnext", "AppLovin", "ironSource"] },
];

const FRAUD_LOOP = [
  { icon: ScanSearch, t: "检测 Detect", d: "自研机器学习实时识别异常流量与虚假点击。" },
  { icon: BadgeCheck, t: "验证 Verify", d: "第三方验证机构协同复核成效真实性。" },
  { icon: SlidersHorizontal, t: "优化 Optimize", d: "动态优化发布商资源,保障公平透明。" },
];

const PROGRAMMATIC = [
  { icon: Cpu, t: "精准算法", d: "多维特征建模,锁定高价值用户。" },
  { icon: Zap, t: "实时优化", d: "全链路实时数据,分钟级回流调整。" },
  { icon: SlidersHorizontal, t: "定制策略", d: "按行业 KPI 与预算自适应分配。" },
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
            background: `linear-gradient(135deg, hsl(${245 + idx * 5} 60% 92%) 0%, hsl(${260 + idx * 8} 50% 88%) 100%)`,
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
      className="rounded-2xl p-6 md:p-7 glass-card"
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
          <ScreenTitle size="xl">
            全球领先的移动广告平台
            <br />
            深度理解本地市场,
            <span style={{ color: JP_RED, WebkitTextFillColor: JP_RED }}>以数据驱动为核心</span>
          </ScreenTitle>
          <ScreenLead>
            聚焦日本市场,同时完成全球多区域布局,助力广告主与媒体方实现高效增长
          </ScreenLead>
          <div className="mt-10 flex items-center gap-6">
            <StarBorder
              speed="5s"
              onClick={() => document.getElementById("strength-categories")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              查看本地能力
            </StarBorder>
            
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2 — 全球项目实绩 (品类网格) === */}
      <SnapScreen id="strength-categories" bg="tint">
        <ScreenInner>
          <ScreenTitle>丰富的全球项目实绩</ScreenTitle>
          <ScreenLead>
            覆盖交友、游戏、金融、娱乐、电商、新闻等全球多品类
            <br />
            结合本地用户行为与文化特点,提供定制化营销优化方案
          </ScreenLead>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 mt-12 w-full">
            {CATEGORIES.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3"
              >
                <GlassCategoryIcon variant={c.variant} size={96} />
                <div className="text-sm font-medium" style={{ color: TEXT_DARK }}>
                  {c.name}
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2b — 全球优质合作伙伴 === */}
      <SnapScreen id="strength-partners">
        <ScreenInner>
          <ScreenTitle>全球优质的合作伙伴</ScreenTitle>
          <ScreenLead>与头部 OEM、Direct Apps 与 SSP 深度对接,资源协同高效</ScreenLead>
          <div className="w-full mt-10 space-y-5">
            {PARTNER_GROUPS.map((g, gi) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="grid grid-cols-[110px_1fr] gap-4 items-center"
              >
                <div
                  className="text-xs font-bold tracking-widest text-left pl-2"
                  style={{ color: JP_RED }}
                >
                  {g.label}
                </div>
                <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${g.slots.length}, minmax(0,1fr))` }}>
                  {g.slots.map((name) => (
                    <div
                      key={name}
                      className="h-16 rounded-xl flex items-center justify-center text-sm font-semibold glass-card"
                      style={{ ...CARD, color: TEXT_MID }}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2c — 严格的全球反欺诈对策 (循环图) === */}
      <SnapScreen id="strength-fraud" bg="tint">
        <ScreenInner>
          <ScreenTitle>严格的全球广告反欺诈对策</ScreenTitle>
          <ScreenLead>
            <span className="whitespace-nowrap inline-block">
              自研机器学习实时检测 + 第三方验证机构协同,及时识别虚假点击与成效,优化发布商资源,保障公平透明
            </span>
          </ScreenLead>
          <div className="relative w-full max-w-[1280px] mx-auto mt-10">
            {/* 循环流程 —— 跑道形连续弧形箭头环绕三张等大卡片 */}
            <div className="relative w-full" style={{ aspectRatio: "1280 / 520" }}>
              {/* SVG: 双层跑道 —— 外圈带箭头(完全包裹卡片) + 内圈细描边 */}
              <svg
                viewBox="0 0 1280 520"
                className="absolute inset-0 w-full h-full pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="outerTop" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(265 80% 70%)" stopOpacity="0.15" />
                    <stop offset="60%" stopColor="hsl(262 75% 60%)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="hsl(262 75% 55%)" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="outerBottom" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="hsl(265 80% 70%)" stopOpacity="0.15" />
                    <stop offset="60%" stopColor="hsl(262 75% 60%)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="hsl(262 75% 55%)" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* 内层细描边跑道(包裹卡片外缘,留呼吸空间) */}
                <path
                  d="M 280 110 L 1000 110 A 150 150 0 0 1 1000 410 L 280 410 A 150 150 0 0 1 280 110 Z"
                  stroke="hsl(262 60% 80%)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.7"
                />

                {/* 外层上半段:左中 -> 左上弧 -> 顶部水平线 -> 终止箭头(顶部偏右) */}
                <path
                  d="M 60 260 A 220 220 0 0 1 280 40 L 1000 40"
                  stroke="url(#outerTop)"
                  strokeWidth="14"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* 上半段三角箭头(水平指向右,贴在末端) */}
                <polygon points="1000,18 1040,40 1000,62" fill="hsl(262 75% 55%)" />

                {/* 外层下半段:右中 -> 右下弧 -> 底部水平线 -> 终止箭头(底部偏左) */}
                <path
                  d="M 1220 260 A 220 220 0 0 1 1000 480 L 280 480"
                  stroke="url(#outerBottom)"
                  strokeWidth="14"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* 下半段三角箭头(水平指向左,贴在末端) */}
                <polygon points="280,458 240,480 280,502" fill="hsl(262 75% 55%)" />

                <text x="950" y="28" textAnchor="middle" fontSize="13" fontWeight="600" fill={JP_RED} letterSpacing="3">
                  实时检测
                </text>
                <text x="330" y="504" textAnchor="middle" fontSize="13" fontWeight="600" fill={JP_RED} letterSpacing="3">
                  持续优化
                </text>
              </svg>

              {/* 三张等大卡片(紫色渐变染色) */}
              <div className="absolute inset-0 flex items-center justify-center gap-6 md:gap-10 px-[16%]">
                {FRAUD_LOOP.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.t}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.55, delay: i * 0.15, ease: "easeOut" }}
                      className="relative flex-shrink-0"
                      style={{ width: 240, height: 240 }}
                    >
                      {/* 用绝对定位包裹,hover 缩放不会撑开布局/影响跑道 */}
                      <div
                        className="group absolute inset-0 rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:scale-[1.06] cursor-pointer"
                        style={{
                          padding: "28px 26px",
                          background:
                            "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55) 0%, rgba(237,233,254,0.28) 55%, rgba(196,181,253,0.18) 100%)",
                          backdropFilter: "blur(14px) saturate(140%)",
                          WebkitBackdropFilter: "blur(14px) saturate(140%)",
                          boxShadow:
                            "0 18px 40px -20px rgba(139,92,246,0.4), inset 0 1px 1px rgba(255,255,255,0.85), inset 0 -2px 8px rgba(139,92,246,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow =
                            "0 30px 60px -20px rgba(139,92,246,0.55), inset 0 1px 1px rgba(255,255,255,0.95), inset 0 -2px 10px rgba(139,92,246,0.12)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow =
                            "0 18px 40px -20px rgba(139,92,246,0.4), inset 0 1px 1px rgba(255,255,255,0.85), inset 0 -2px 8px rgba(139,92,246,0.08)";
                        }}
                      >
                        {/* 顶部高光 */}
                        <div
                          className="absolute pointer-events-none rounded-full"
                          style={{
                            top: "8%",
                            left: "18%",
                            width: "55%",
                            height: "28%",
                            background:
                              "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)",
                            filter: "blur(3px)",
                          }}
                        />

                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-transform duration-500 ease-out group-hover:rotate-[360deg] group-active:scale-95"
                          style={{ background: "rgba(139,92,246,0.18)", color: "hsl(262 75% 55%)" }}
                        >
                          <Icon size={24} />
                        </div>

                        <div className="font-semibold tracking-wider relative z-10" style={{ fontSize: 17, color: TEXT_DARK }}>
                          {s.t.split(" ")[0]}
                        </div>
                        <div className="mt-0.5 tracking-[0.22em] uppercase relative z-10" style={{ fontSize: 9, color: "hsl(262 75% 55%)" }}>
                          {s.t.split(" ")[1]}
                        </div>

                        <div className="my-2 h-px w-8" style={{ background: "rgba(139,92,246,0.3)" }} />

                        <p className="text-[11px] leading-snug px-2 relative z-10" style={{ color: TEXT_MID }}>
                          {s.d}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>


            <div className="flex justify-center mt-6">
              <div
                className="text-xs px-4 py-1.5 rounded-full font-medium"
                style={{ background: JP_RED_SOFT, color: JP_RED }}
              >
                ↻ 检测 → 验证 → 优化 持续闭环
              </div>
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2d — 数据驱动的程序化投放能力 === */}
      <SnapScreen id="strength-programmatic">
        <ScreenInner>
          <ScreenTitle>数据驱动的程序化投放能力</ScreenTitle>
          <ScreenLead>
            依托精准算法与全链路实时数据,自动优化广告投放,
            提升广告主营销效率与媒体方变现效果。
          </ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 w-full">
            {PROGRAMMATIC.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl p-7 glass-card text-left h-full flex flex-col"
                  style={CARD}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: JP_RED_SOFT, color: JP_RED }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>
                    {p.t}
                  </h3>
                  <div className="w-8 h-px mb-3" style={{ background: JP_RED, opacity: 0.5 }} />
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>
                    {p.d}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — 双侧分栏 === */}
      <SnapScreen id="two-sides">
        <ScreenInner>
          <ScreenTitle>一边广告主,一边媒体</ScreenTitle>
          <ScreenLead>两侧能力清晰分栏,让需求方与供给方都能快速找到合作入口。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative mt-8">
            <div
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center"
              style={{
                background: "white",
                border: `2px solid ${JP_RED}`,
                color: JP_RED,
                boxShadow: "0 6px 20px -6px hsla(245, 60%, 45%, 0.4)",
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
          <ScreenTitle>以日本为核心的全球网络</ScreenTitle>
          <ScreenLead>日本核心市场深耕,并向亚太、欧美持续扩张。</ScreenLead>
          <div className="rounded-2xl overflow-hidden mt-6 flex-1 min-h-[320px] glass-card" style={CARD}>
            <JapanHighlightMap height={420} />
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 本地团队数据 === */}
      <SnapScreen id="local">
        <ScreenInner>
          <ScreenTitle>自 2019 起的本地团队</ScreenTitle>
          <ScreenLead>由本地化运营、合规与商务组成的日本办公室,与全球资源协同。</ScreenLead>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
                className="rounded-2xl p-6 glass-card" style={CARD}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: JP_RED_SOFT, color: JP_RED }}><Users size={20} /></div>
                <div className="text-4xl font-bold mb-1"
                  style={{
                    background: `linear-gradient(180deg, hsl(245 70% 30%) 0%, ${JP_RED} 100%)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1,
                  }}><CountUp value={47} /></div>
                <div className="text-sm" style={{ color: TEXT_MID }}>员工规模 · 商务/运营/技术/合规</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-2xl p-6 glass-card" style={CARD}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: JP_RED_SOFT, color: JP_RED }}><Languages size={20} /></div>
                <div className="text-4xl font-bold mb-1"
                  style={{
                    background: `linear-gradient(180deg, hsl(245 70% 30%) 0%, ${JP_RED} 100%)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1,
                  }}><CountUp value={65} suffix="%" /></div>
                <div className="text-sm" style={{ color: TEXT_MID }}>日籍员工占比 · 深度融入本地市场</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.16 }}
                className="rounded-2xl p-6 sm:col-span-2 glass-card" style={CARD}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: JP_RED_SOFT, color: JP_RED }}><Building2 size={20} /></div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>东京办公室</h3>
                <p className="text-sm leading-relaxed mb-2" style={{ color: TEXT_MID }}>
                  自 2019 年起持续深耕,本地团队 / 运营 / 融入,本地化运营、商务与合规一体化协作。
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(230 15% 55%)" }}>
                  地址:以日本聚势表原文为准 · 上线前需业务确认
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
