import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion, AnimatePresence } from "motion/react";
import {
  SnapPage, SnapScreen, ScreenInner,
  ScreenEyebrow, ScreenTitle, ScreenLead,
} from "@/components/SnapPage";
import { CountUp } from "@/components/SubPageLayout";
import { JapanHighlightMap } from "@/components/JapanHighlightMap";
import { WorldMapJapan } from "@/components/WorldMapJapan";
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
import partnerXiaomi from "@/assets/partner-xiaomi.png";
import partnerOppo from "@/assets/partner-oppo.png";
import partnerTranssion from "@/assets/partner-transsion.png";
import partnerVmate from "@/assets/partner-vmate.png";
import partnerSimeji from "@/assets/partner-simeji.png";
import partnerFacemoji from "@/assets/partner-facemoji.png";
import partnerSnaptube from "@/assets/partner-snaptube.png";
import partnerMeitu from "@/assets/partner-meitu.png";
import japanWorldMap from "@/assets/japan-world-map.png";
import partnerUnity from "@/assets/partner-unity.png";
import partnerTapjoy from "@/assets/partner-tapjoy.png";
import partnerAppnext from "@/assets/partner-appnext.png";
import partnerApplovin from "@/assets/partner-applovin.png";
import partnerIronsource from "@/assets/partner-ironsource.png";
import officeEntrance from "@/assets/office-entrance.png";
import officeWorkspace from "@/assets/office-workspace.png";
import officeMeeting from "@/assets/office-meeting.png";
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

type PartnerSlot = { name: string; logo?: string };
const PARTNER_GROUPS: { label: string; slots: PartnerSlot[] }[] = [
  { label: "OEM", slots: [
    { name: "Xiaomi", logo: partnerXiaomi },
    { name: "OPPO", logo: partnerOppo },
    { name: "TRANSSION", logo: partnerTranssion },
  ] },
  { label: "DIRECT APPS", slots: [
    { name: "VMate", logo: partnerVmate },
    { name: "Simeji", logo: partnerSimeji },
    { name: "Facemoji", logo: partnerFacemoji },
    { name: "Snaptube", logo: partnerSnaptube },
    { name: "Meitu", logo: partnerMeitu },
  ] },
  { label: "SSP", slots: [
    { name: "Unity", logo: partnerUnity },
    { name: "Tapjoy", logo: partnerTapjoy },
    { name: "Appnext", logo: partnerAppnext },
    { name: "AppLovin", logo: partnerApplovin },
    { name: "ironSource", logo: partnerIronsource },
  ] },
];

const FRAUD_LOOP = [
  { icon: ScanSearch, t: "检测 Detect", d: "自研机器学习\n实时识别异常流量与虚假点击" },
  { icon: BadgeCheck, t: "验证 Verify", d: "第三方验证机构协同\n复核成效真实性" },
  { icon: SlidersHorizontal, t: "优化 Optimize", d: "动态优化发布商资源\n保障公平透明" },
];

const PROGRAMMATIC = [
  {
    icon: Cpu,
    t: "精准算法",
    items: [
      "多维特征建模",
      "锁定高价值用户",
      "深度学习意图预测",
      "跨设备身份识别",
    ],
  },
  {
    icon: Zap,
    t: "实时优化",
    items: [
      "全链路实时数据",
      "分钟级回流调整",
      "智能出价动态校准",
      "异常流量秒级拦截",
    ],
  },
  {
    icon: SlidersHorizontal,
    t: "定制策略",
    items: [
      "按行业 KPI 自适应",
      "预算智能分配",
      "千人千面创意匹配",
      "全渠道协同投放",
    ],
  },
];

const ADV_SIDE = {
  title: "面向广告主",
  subtitle: "先成果,后付费",
  core: "成果报酬型(CPI / CPA)全球流量采买,覆盖应用安装、会员注册、商品购买等目标",
  items: [
    { icon: Sparkles, t: "零初期费用", d: "完全成果报酬模式,无预付风险。" },
    { icon: Target, t: "灵活 KPI 设计", d: "按转化目标动态调整出价与活动。" },
    { icon: Headphones, t: "本地深度咨询", d: "法规、用户特性、文化适配。" },
    { icon: Network, t: "全球高端流量", d: "直接对接头部媒体与优质长尾流量。" },
  ],
};
const PUB_SIDE = {
  title: "面向媒体",
  subtitle: "一站式变现伙伴",
  core: "一站式变现仪表板,管理高单价联盟项目(CPA / CPI / CPL),支持网站、应用、SNS 流量",
  items: [
    { icon: Trophy, t: "高值项目库", d: "多品类高收益广告主,填充率高。" },
    { icon: Activity, t: "实时数据化运营", d: "小时级报表,支持自主调价。" },
    { icon: Wallet, t: "可靠报酬支付", d: "定期支付,无账期拖延。" },
    { icon: Settings2, t: "定制化广告策略", d: "按媒体用户画像匹配广告,提升 eCPM。" },
  ],
};

const OFFICE_PHOTOS = [
  { title: "东京办公室 · 主入口", caption: "Tokyo Office · Entrance", image: officeEntrance },
  { title: "团队工位区", caption: "Open Workspace", image: officeWorkspace },
  { title: "会议与协作区", caption: "Meeting Room", image: officeMeeting },
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
    <div className="relative rounded-2xl overflow-hidden w-full aspect-[16/9]" style={CARD}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={OFFICE_PHOTOS[idx].image}
            alt={OFFICE_PHOTOS[idx].title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      {/* 标题 */}
      <div className="flex flex-col items-center gap-3 md:gap-4 mb-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold" style={{ color: TEXT_DARK }}>
          {data.subtitle}
        </h3>
      </div>

      {/* 核心目标卡片(独立) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl px-6 md:px-10 py-6 md:py-7 mb-6 mx-auto max-w-4xl text-center glass-card"
        style={{
          ...CARD,
          background:
            "linear-gradient(135deg, hsla(245,60%,45%,0.10) 0%, hsla(0,72%,52%,0.06) 100%)",
          borderColor: "hsla(245,60%,45%,0.22)",
        }}
      >
        <p
          className="text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          {data.core}
        </p>
      </motion.div>

      {/* 4 个小卡 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group flex flex-col gap-3 p-6 rounded-2xl transition-[background,border-color,box-shadow] duration-300 text-left border glass-card hover:bg-[hsla(245,60%,45%,0.07)] hover:border-[hsla(245,60%,45%,0.32)] hover:shadow-[0_18px_40px_-16px_hsla(245,50%,30%,0.22)]"
              style={{
                ...CARD,
                background: "hsla(245, 60%, 45%, 0.04)",
                borderColor: "hsla(245, 60%, 45%, 0.18)",
              }}
            >
              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: JP_RED_SOFT, color: JP_RED }}
              >
                <Icon size={22} />
              </div>
              <div className="min-w-0 text-left">
                <div className="text-base md:text-[17px] font-semibold mb-1.5 text-left" style={{ color: TEXT_DARK }}>
                  {it.t}
                </div>
                <div className="text-sm leading-relaxed text-left" style={{ color: TEXT_MID }}>
                  {it.d}
                </div>
              </div>
            </motion.div>
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
            {(() => {
              const maxCols = Math.max(...PARTNER_GROUPS.map((g) => g.slots.length));
              return PARTNER_GROUPS.map((g, gi) => (
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
                <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${maxCols}, minmax(0,1fr))` }}>
                  {g.slots.map((s) => (
                    <div
                      key={s.name}
                      className="h-16 rounded-xl flex items-center justify-center text-sm font-semibold glass-card px-3"
                      style={{ ...CARD, color: TEXT_MID }}
                      title={s.name}
                    >
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt={s.name}
                          className="max-h-10 max-w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        s.name
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ));
            })()}
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

                        <p className="text-[11px] leading-snug px-2 relative z-10 whitespace-pre-line" style={{ color: TEXT_MID }}>
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
            提升广告主营销效率与媒体方变现效果
          </ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl mx-auto">
            {PROGRAMMATIC.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl p-8 glass-card flex flex-col items-start text-left min-h-[360px] transition-all duration-300 hover:shadow-[0_20px_50px_-12px_hsla(245,60%,45%,0.25)] hover:bg-white/55 hover:backdrop-blur-2xl border border-white/40 hover:border-[hsla(0,72%,55%,0.45)]"
                  style={CARD}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: JP_RED_SOFT, color: JP_RED }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: TEXT_DARK }}>
                    {p.t}
                  </h3>
                  <div className="w-10 h-px mb-5" style={{ background: JP_RED, opacity: 0.5 }} />
                  <ul className="flex flex-col gap-4 w-full">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="text-[15px] leading-7 flex items-start gap-3"
                        style={{ color: TEXT_MID }}
                      >
                        <span
                          className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-2.5"
                          style={{ background: JP_RED, opacity: 0.7 }}
                        />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3a — 广告主核心服务 === */}
      <SnapScreen id="two-sides-adv">
        <ScreenInner>
          <ScreenTitle>广告主核心服务</ScreenTitle>
          <ScreenLead>为出海日本与亚太的广告主提供低门槛、高确定性的合作方式</ScreenLead>
          <div className="mt-8 w-full">
            <SideCard data={ADV_SIDE} dir="l" />
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3b — 媒体方核心服务 === */}
      <SnapScreen id="two-sides-pub" bg="tint">
        <ScreenInner>
          <ScreenTitle>媒体方核心服务</ScreenTitle>
          <ScreenLead>为日本本地媒体提供清晰、可控、可持续的变现方案。</ScreenLead>
          <div className="mt-8 w-full">
            <SideCard data={PUB_SIDE} dir="r" />
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 4 — 全球地图 + 日本特写 === */}
      <SnapScreen id="map" bg="tint">
        <ScreenInner>
          <ScreenTitle>日本核心市场深耕</ScreenTitle>
          
          <div className="flex flex-col gap-8 sm:gap-10 mt-4 flex-1 min-h-0">
            {/* 上:世界地图 + 日本高亮 */}
            <div
              className="rounded-2xl overflow-hidden glass-card flex items-center justify-center mx-auto w-full max-w-5xl h-[50vh] sm:h-[56vh] max-h-[560px]"
              style={CARD}
            >
              <img
                src={japanWorldMap}
                alt="日本核心市场 — 全球连接示意图"
                className="w-full h-full object-cover scale-[1.06]"
                loading="lazy"
              />
            </div>
            {/* 下:4 个简化信息卡 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 shrink-0">
              {[
                { icon: Target, t: "重点布局", d: "聚焦日本核心战略市场" },
                { icon: Users, t: "理解用户", d: "把握本地偏好与习惯" },
                { icon: ShieldCheck, t: "合规运营", d: "遵循日本广告法规" },
                { icon: Handshake, t: "共赢成功", d: "助广告主与媒体共赢" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-2xl p-4 sm:p-5 glass-card text-left flex items-start gap-3"
                    style={CARD}
                  >
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: JP_RED_SOFT, color: JP_RED }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm sm:text-base font-semibold mb-1 break-words"
                        style={{ color: TEXT_DARK }}
                      >
                        {item.t}
                      </h3>
                      <p
                        className="text-xs sm:text-[13px] leading-relaxed break-words"
                        style={{ color: TEXT_MID }}
                      >
                        {item.d}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 本地团队数据 === */}
      <SnapScreen id="local">
        <ScreenInner>
          <ScreenTitle>区域概览</ScreenTitle>
          <ScreenLead>自2019年布局，“本地团队、本地运营、本地融入”</ScreenLead>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5 mt-8 items-stretch w-full max-w-6xl mx-auto">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{ gridTemplateRows: "1fr 1fr" }}
            >
              {/* 员工规模 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
                className="rounded-2xl p-6 glass-card flex flex-col items-center justify-center text-center"
                style={CARD}
              >
                <div className="flex items-baseline gap-1 mb-2 justify-center">
                  <div className="text-5xl font-bold"
                    style={{
                      background: `linear-gradient(180deg, hsl(245 70% 30%) 0%, ${JP_RED} 100%)`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1,
                    }}><CountUp value={47} /></div>
                  <span className="text-base font-medium" style={{ color: JP_RED }}>名</span>
                </div>
                <div className="text-base font-semibold" style={{ color: TEXT_DARK }}>员工规模</div>
                <div className="text-xs mt-1" style={{ color: TEXT_MID }}>商务 / 运营 / 技术 / 合规</div>
              </motion.div>

              {/* 日籍员工占比 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-2xl p-6 glass-card flex flex-col items-center justify-center text-center"
                style={CARD}
              >
                <div className="text-5xl font-bold mb-2"
                  style={{
                    background: `linear-gradient(180deg, hsl(245 70% 30%) 0%, ${JP_RED} 100%)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1,
                  }}><CountUp value={65} suffix="%" /></div>
                <div className="text-base font-semibold" style={{ color: TEXT_DARK }}>日籍员工占比</div>
                <div className="text-xs mt-1 mb-3" style={{ color: TEXT_MID }}>深度融入本地市场</div>
                <div className="h-1.5 w-3/4 rounded-full overflow-hidden" style={{ background: JP_RED_SOFT }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, hsl(245 70% 45%), ${JP_RED})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              {/* 东京办公室 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.16 }}
                className="rounded-2xl p-6 sm:col-span-2 glass-card flex items-center gap-5 text-left"
                style={CARD}
              >
                <Building2
                  size={40}
                  strokeWidth={1.5}
                  style={{ color: JP_RED, flexShrink: 0 }}
                />
                <div className="flex flex-col min-w-0">
                  <h3
                    className="font-semibold mb-1.5"
                    style={{
                      color: TEXT_DARK,
                      fontSize: "1.25rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1.2,
                    }}
                  >
                    东京办公室
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: TEXT_MID,
                      fontSize: "0.9rem",
                      letterSpacing: "0.02em",
                      fontWeight: 400,
                    }}
                  >
                    東京都港区六本木三丁目3番27号 スハラ六本木
                  </p>
                </div>
              </motion.div>
            </div>
            <OfficeCarousel />
          </div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
