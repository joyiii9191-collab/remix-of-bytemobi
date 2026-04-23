import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion } from "motion/react";
import {
  SnapPage, SnapScreen, ScreenInner,
  ScreenEyebrow, ScreenTitle, ScreenLead,
} from "@/components/SnapPage";
import { CountUp } from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";
import { GLASS_CARD as CARD, TEXT_DARK, TEXT_MID, ACCENT } from "@/lib/page-styles";
import { FormatShowcase } from "@/components/FormatShowcase";
import { TrendingUp, Target, Globe2, Wallet, Coins, Cpu } from "lucide-react";
import hopexWorldMap from "@/assets/hopex-world-map.png";

// 案例品牌 logo (来源:全球汇流 cases 子页面)
import caseEcommerceImg from "@/assets/case-ecommerce-aliexpress.png";
import caseTaobaoLogo from "@/assets/case-taobao-logo.png";
import caseTemuLogo from "@/assets/case-temu-logo.png";
import caseShopeeLogo from "@/assets/case-shopee-logo.png";
import caseLazadaLogo from "@/assets/case-lazada-logo.png";
import caseBinanceImg from "@/assets/case-binance.png";
import caseExnessLogo from "@/assets/case-exness-logo.png";
import caseVantageLogo from "@/assets/case-vantage-logo.png";
import caseVtmarketsLogo from "@/assets/case-vtmarkets-logo.png";
import caseCryptocomLogo from "@/assets/case-cryptocom-logo.png";
import casePaybisLogo from "@/assets/case-paybis-logo.png";
import caseBet365Logo from "@/assets/case-bet365-logo.png";
import case1xbetLogo from "@/assets/case-1xbet-logo.png";
import caseMelbetLogo from "@/assets/case-melbet-logo.png";
import caseGgvegasLogo from "@/assets/case-ggvegas-logo.png";
import casePrimepartnersLogo from "@/assets/case-primepartners-logo.png";
import caseHungryImg from "@/assets/case-hungry-studio.png";
import caseSaygamesLogo from "@/assets/case-saygames-logo.png";
import caseSupersonicLogo from "@/assets/case-supersonic-logo.png";
import caseLilithLogo from "@/assets/case-lilith-logo.png";
import caseIggLogo from "@/assets/case-igg-logo.jpg";
import caseFunplusLogo from "@/assets/case-funplus-logo.png";
import caseTiktokLogo from "@/assets/case-tiktok-logo.png";
import caseKwaiLogo from "@/assets/case-kwai-logo.png";
import caseLikeeLogo from "@/assets/case-likee-logo.png";
import caseBigoLogo from "@/assets/case-bigo-logo.png";
import caseNordvpnLogo from "@/assets/case-nordvpn-logo.png";
import casePurevpnLogo from "@/assets/case-purevpn-logo.png";
import caseSailyLogo from "@/assets/case-saily-logo.png";
import caseFacetuneLogo from "@/assets/case-facetune-logo.png";
import caseAicleanerLogo from "@/assets/case-aicleaner-logo.png";

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
  [0, 6], [0, 5], [6, 1], [6, 4], [1, 2], [1, 3],
];

const CARD_CLASS = "glass-card";

const SCALE = [
  { v: 36, s: " 亿+", l: "每日广告请求量" },
  { v: 133, s: " 百万+", l: "覆盖独立用户" },
  { v: 1000, s: "+", l: "对接移动应用" },
  { v: 300, s: "+", l: "广告主合作伙伴" },
];

function GlassTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md border"
      style={{
        background: "rgba(255,255,255,0.55)",
        borderColor: `${ACCENT}33`,
        color: ACCENT,
        boxShadow: "0 4px 18px -8px rgba(60, 60, 120, 0.25), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
      {children}
    </motion.div>
  );
}

export default function HopeX() {
  return (
    <SnapPage title="程序化广告">
      {/* === Screen 1 — Hero === */}
      <SnapScreen id="hero">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.6) 80%, #F5F5F7 100%)" }} />
        <ScreenInner>
          <ScreenTitle size="xl">
            关于 HopeX
          </ScreenTitle>
          <p className="text-base md:text-lg whitespace-nowrap" style={{ color: "hsl(230 25% 32%)", lineHeight: 1.7 }}>
            HopeX 是 HopeMobi 旗下的程序化广告平台,致力于为广告主与流量方提供可预测增长的商业化解决方案
          </p>
          <p className="mt-4 text-sm md:text-[15px] whitespace-nowrap" style={{ color: "hsl(220 10% 45%)", letterSpacing: "0.01em", lineHeight: 1.7 }}>
            在充满不确定性的全球市场环境中,HopeX 通过数据驱动与智能算法,将投放决策、流量分发与效果优化系统化,让每一次增长都有据可依
          </p>
          <div className="mt-10 flex items-center gap-6">
            <StarBorder
              speed="5s"
              onClick={() => document.getElementById("scale")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              查看平台能力
            </StarBorder>
            
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2 — 平台规模 === */}
      <SnapScreen id="scale" bg="tint">
        <ScreenInner className="max-w-[1440px] px-8 xl:px-10">
          <ScreenTitle className="text-center">平台规模与基础能力</ScreenTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-4 xl:gap-x-5 gap-y-4 mt-4 w-full max-w-[1100px] mx-auto">
            {SCALE.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex items-center justify-center h-24 md:h-28 min-w-0"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center font-black select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(3.6rem, 5vw, 5.6rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke: "1.2px hsla(230, 20%, 60%, 0.45)",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  <CountUp value={s.v} />
                </div>
                <div className="relative z-10 flex items-center gap-2 max-w-full px-2">
                  <span
                    aria-hidden
                    className="block h-[2px] w-5 rounded-full shrink-0"
                    style={{ background: "hsl(245 70% 55%)" }}
                  />
                  <div className="flex flex-col min-w-0">
                    <div
                      className="text-xs md:text-sm font-semibold tracking-wide leading-tight"
                      style={{ color: TEXT_DARK }}
                    >
                      {s.l}
                    </div>
                    <div className="text-[11px] font-medium mt-0.5" style={{ color: TEXT_MID }}>
                      <CountUp value={s.v} suffix={s.s} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 w-full max-w-[1100px] mx-auto"
          >

            {/* 世界地图 + 区域标签卡叠加 */}
            <div className="relative w-full rounded-xl overflow-hidden aspect-[16/7] max-h-[420px] mx-auto">
              <img
                src={hopexWorldMap}
                alt="HopeX 全球流量网络覆盖图"
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ transformOrigin: "center 55%" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 35%)" }}
              />

              {/* 区域标签卡 - 紧贴各大洲主节点 */}
              {[
                // 北美主节点 ~ x:20% y:45% → 卡片放节点上方
                { r: "北美", d: "US / CA", color: "hsl(220 90% 58%)", pos: "top-[18%] left-[10%]" },
                // 欧洲主节点 ~ x:50% y:38% → 卡片放节点上方
                { r: "欧洲及中东非", d: "EMEA", color: "hsl(265 70% 60%)", pos: "top-[22%] left-[44%]" },
                // 亚太主节点 ~ x:72% y:47% → 卡片放节点右上
                { r: "亚太", d: "SEA / JP / KR / IN", color: "hsl(195 85% 55%)", pos: "top-[34%] right-[12%]" },
                // 南美主节点 ~ x:27% y:68% → 卡片放节点左下
                { r: "拉美", d: "BR / MX 等", color: "hsl(245 75% 62%)", pos: "bottom-[20%] left-[14%]" },
              ].map((item) => (
                <motion.div
                  key={item.r}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className={`absolute ${item.pos} rounded-lg px-3 py-2 backdrop-blur-md border min-w-[120px]`}
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    borderColor: "rgba(255,255,255,0.9)",
                    boxShadow: "0 6px 20px -8px rgba(60,80,160,0.35), 0 2px 4px -2px rgba(60,80,160,0.15)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.color }} />
                    <span className="text-xs md:text-sm font-bold" style={{ color: TEXT_DARK }}>
                      {item.r}
                    </span>
                  </div>
                  <div className="text-[11px] md:text-xs font-medium" style={{ color: TEXT_MID, letterSpacing: "0.02em" }}>
                    {item.d}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScreenInner>
      </SnapScreen>


      {/* === Screen 4 — DSP 全渠道增长能力 === */}
      <SnapScreen id="dsp" bg="tint">
        <ScreenInner>
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <ScreenTitle>全渠道增长能力</ScreenTitle>
            <div className="mb-5">
              <GlassTag>DSP 能力</GlassTag>
            </div>
          </div>
          <ScreenLead>HopeX DSP 聚合多元流量来源</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 w-full">
            {[
              {
                t: "程序化广告",
                sub: "RTB",
                d: "实时竞价,毫秒级响应,智能算法精准触达海量曝光。",
                logos: ["Google ADX", "OpenX", "PubMatic", "Magnite"],
                gradient: "linear-gradient(135deg, hsl(245 70% 35%) 0%, hsl(260 65% 45%) 100%)",
              },
              {
                t: "联盟营销",
                sub: "CPA / CPL / CPS",
                d: "结果导向计费,深度衡量转化效果,高 ROI 增长。",
                logos: ["Admitad", "Awin", "Impact", "Rakuten"],
                gradient: "linear-gradient(135deg, hsl(220 70% 35%) 0%, hsl(245 70% 50%) 100%)",
              },
              {
                t: "主流媒体",
                sub: "Google · TikTok · Meta",
                d: "对接全球头部媒体平台,覆盖核心用户场景。",
                logos: ["Google", "TikTok", "Meta", "YouTube"],
                gradient: "linear-gradient(135deg, hsl(265 65% 40%) 0%, hsl(290 60% 50%) 100%)",
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer h-[340px]"
                style={CARD}
              >
                {/* 默认状态:序号 + 标题 */}
                <div className="absolute inset-0 z-10 flex flex-col p-6 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                  <div className="text-xs font-bold tracking-[0.3em] mb-auto" style={{ color: ACCENT }}>
                    0{i + 1}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                      {c.sub}
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  </div>
                </div>

                {/* Hover:占位图(渐变) + 文案 + Logos */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* 占位图:渐变背景 + 网格图案 */}
                  <div className="absolute inset-0" style={{ background: c.gradient }} />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  {/* 占位图标识 */}
                  <div className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Placeholder
                  </div>
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(180deg, rgba(15,12,40,0.25) 0%, rgba(15,12,40,0.85) 100%)"
                  }} />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-2 text-white/80">
                      {c.sub}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{c.t}</h3>
                    <p className="text-sm leading-relaxed mb-4 text-white/85">{c.d}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.logos.map((l) => (
                        <span key={l} className="px-2.5 py-1 rounded-md text-xs font-medium backdrop-blur-md"
                          style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)" }}>
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — SSP 能力 === */}
      <SnapScreen id="ssp">
        <ScreenInner>
          <GlassTag>DSP 能力</GlassTag>
          <ScreenTitle>智能投放与优化能力</ScreenTitle>
          <ScreenLead>以算法 + 数据 + 人工经验,持续放大投放效率与 ROI。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full">
            {[
              {
                t: "智能受众分群与精准定向",
                sub: "Audience Targeting",
                d: "基于多维行为与画像数据,自动构建高价值人群,精准触达目标用户。",
                tags: ["多维画像", "高价值人群", "精准触达"],
                icon: "01",
              },
              {
                t: "实时策略调整",
                sub: "Real-time Optimization",
                d: "毫秒级竞价决策,秒级策略迭代,快速响应流量与市场变化。",
                tags: ["毫秒竞价", "秒级迭代", "动态响应"],
                icon: "02",
              },
              {
                t: "预算自适应与智能限流",
                sub: "Smart Budget Control",
                d: "动态分配预算,智能限流防止超投,确保投放节奏稳定可控。",
                tags: ["动态分配", "防超投", "节奏可控"],
                icon: "03",
              },
              {
                t: "人机协同优化策略",
                sub: "Human + AI Collaboration",
                d: "AI 自动优化 + 资深优化师经验复核,兼顾效率与判断深度。",
                tags: ["AI 优化", "人工复核", "效率与深度"],
                icon: "04",
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-6 glass-card flex flex-col items-stretch overflow-hidden group"
                style={CARD}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1.5" style={{ color: "hsl(245 50% 55%)" }}>
                    {c.sub}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_MID }}>{c.d}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium"
                        style={{
                          background: "hsl(245 60% 96%)",
                          color: "hsl(245 50% 45%)",
                          border: "1px solid hsl(245 50% 90%)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5b — 全球行业覆盖 === */}
      <SnapScreen id="industries">
        <ScreenInner>
          <GlassTag>DSP 能力</GlassTag>
          <ScreenTitle>全球行业覆盖</ScreenTitle>
          <ScreenLead>跨越多元行业,服务全球头部客户。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full">
            {[
              {
                t: "电商",
                en: "E-commerce",
                logos: [
                  { name: "AliExpress", src: caseEcommerceImg },
                  { name: "Taobao", src: caseTaobaoLogo },
                  { name: "Temu", src: caseTemuLogo },
                  { name: "Shopee", src: caseShopeeLogo },
                  { name: "Lazada", src: caseLazadaLogo },
                ],
              },
              {
                t: "金融科技",
                en: "FinTech",
                logos: [
                  { name: "Binance", src: caseBinanceImg },
                  { name: "Exness", src: caseExnessLogo },
                  { name: "Vantage", src: caseVantageLogo },
                  { name: "VT Markets", src: caseVtmarketsLogo },
                  { name: "Crypto.com", src: caseCryptocomLogo },
                  { name: "Paybis", src: casePaybisLogo },
                ],
              },
              {
                t: "博彩",
                en: "iGaming",
                logos: [
                  { name: "Bet365", src: caseBet365Logo },
                  { name: "1xBet", src: case1xbetLogo },
                  { name: "Melbet", src: caseMelbetLogo },
                  { name: "GGVegas", src: caseGgvegasLogo },
                  { name: "Prime Partners", src: casePrimepartnersLogo },
                ],
              },
              {
                t: "游戏",
                en: "Gaming",
                logos: [
                  { name: "Hungry Studio", src: caseHungryImg },
                  { name: "SayGames", src: caseSaygamesLogo },
                  { name: "Supersonic", src: caseSupersonicLogo },
                  { name: "Lilith", src: caseLilithLogo },
                  { name: "IGG", src: caseIggLogo },
                  { name: "FunPlus", src: caseFunplusLogo },
                ],
              },
              {
                t: "娱乐内容",
                en: "Entertainment",
                logos: [
                  { name: "TikTok", src: caseTiktokLogo },
                  { name: "Kwai", src: caseKwaiLogo },
                  { name: "Likee", src: caseLikeeLogo },
                  { name: "Bigo", src: caseBigoLogo },
                ],
              },
              {
                t: "工具",
                en: "Utility",
                logos: [
                  { name: "NordVPN", src: caseNordvpnLogo },
                  { name: "PureVPN", src: casePurevpnLogo },
                  { name: "Saily", src: caseSailyLogo },
                  { name: "Facetune", src: caseFacetuneLogo },
                  { name: "AI Cleaner", src: caseAicleanerLogo },
                ],
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="rounded-2xl glass-card p-5 flex flex-col gap-4"
                style={CARD}
              >
                {/* 类目头部 */}
                <div className="flex items-baseline justify-between border-b pb-3" style={{ borderColor: "hsl(245 30% 92%)" }}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-base font-semibold" style={{ color: TEXT_DARK }}>{c.t}</h3>
                    <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: TEXT_MID }}>{c.en}</span>
                  </div>
                  <span className="text-[11px] font-semibold" style={{ color: "hsl(245 50% 55%)" }}>
                    {c.logos.length} 家
                  </span>
                </div>
                {/* logo 网格 */}
                <div className="grid grid-cols-3 gap-2.5">
                  {c.logos.map((l) => (
                    <div
                      key={l.name}
                      title={l.name}
                      className="aspect-[4/3] rounded-lg flex items-center justify-center p-2 transition-all duration-300 hover:scale-105"
                      style={{
                        background: "hsl(0 0% 100%)",
                        border: "1px solid hsl(245 30% 92%)",
                        boxShadow: "0 1px 2px hsl(245 30% 50% / 0.04)",
                      }}
                    >
                      <img
                        src={l.src}
                        alt={l.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5c — 全场景流量变现能力 === */}
      <SnapScreen id="formats" bg="tint">
        <ScreenInner>
          <GlassTag>SSP 能力</GlassTag>
          <ScreenTitle>全场景流量变现能力</ScreenTitle>
          <ScreenLead>支持多种广告形式 · 全端覆盖</ScreenLead>
          <FormatShowcase />
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5d — 多元预算接入 === */}
      <SnapScreen id="budget">
        <ScreenInner>
          <GlassTag>SSP 能力</GlassTag>
          <ScreenTitle>多元预算接入</ScreenTitle>
          <ScreenLead>HopeX SSP 已对接多类型预算,稳定覆盖效果与品牌双目标。</ScreenLead>

          {/* Budget sources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-full">
            {[
              {
                tag: "头部 DSP",
                t: "程序化广告预算",
                d: "对接全球头部 DSP 平台,稳定承接程序化预算流入。",
                logos: ["ShareThrough", "RTB House", "Criteo", "The Trade Desk"],
              },
              {
                tag: "品牌直客",
                t: "品牌广告主预算",
                d: "服务全球头部品牌客户,直连预算源,降低中间损耗。",
                logos: ["Shopee", "SHEIN", "Binance", "Lazada"],
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 glass-card flex flex-col gap-4"
                style={CARD}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-md"
                    style={{
                      background: "linear-gradient(135deg, hsl(245 70% 55%) 0%, hsl(265 65% 60%) 100%)",
                      color: "#fff",
                    }}
                  >
                    {c.tag}
                  </span>
                  <h3 className="text-lg font-semibold" style={{ color: TEXT_DARK }}>{c.t}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {c.logos.map((l) => (
                    <span
                      key={l}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: "rgba(99,102,241,0.08)",
                        color: "hsl(245 60% 35%)",
                        border: "1px solid rgba(99,102,241,0.18)",
                      }}
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Budget characteristics footnote */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px] w-full max-w-[900px]" style={{ color: TEXT_MID }}>
            <div className="flex items-center gap-2">
              <span className="block w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
              电商大促及节日预算
            </div>
            <div className="flex items-center gap-2">
              <span className="block w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
              长周期品牌预算(最长 12 个月)
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-5 flex flex-wrap items-center gap-3 w-full">
            <span className="text-[12px] font-semibold tracking-[0.15em]" style={{ color: ACCENT }}>★ 特点</span>
            {[
              { t: "预算稳定", d: "持续可预期的预算来源" },
              { t: "覆盖全域", d: "效果 + 品牌全场景覆盖" },
              { t: "效果 + 品牌双目标", d: "支持多元投放策略" },
            ].map((f, i) => (
              <motion.div key={f.t}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-3 py-1.5 rounded-full text-[12px] font-medium glass-card"
                style={{ ...CARD, color: TEXT_DARK }}
              >
                {f.t}
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 6 — 流量来源 === */}
      <SnapScreen id="traffic" bg="tint">
        <ScreenInner>
          <GlassTag>SSP 能力</GlassTag>
          <ScreenTitle>全域流量矩阵</ScreenTitle>
          <ScreenLead>自有矩阵保证基本盘,外部对接保证规模与多样性。</ScreenLead>
          <div className="flex flex-col gap-6 mt-10 w-full">
            {[
              {
                tag: "OWNED",
                t: "自有核心流量",
                d: "短剧 / 工具 / 娱乐等自营 App。",
                apps: [
                  "ShortMax", "DramaBox", "ReelShort", "FlexTV",
                  "GoodNovel", "TopShort", "MyDrama", "FunStory",
                  "PlayLet", "MiniMax",
                ],
                direction: "left" as const,
              },
              {
                tag: "OEM",
                t: "OEM SDK",
                d: "深度集成主流安卓 OEM 渠道。",
                apps: [
                  "Xiaomi", "OPPO", "vivo", "Honor",
                  "Realme", "Transsion", "Tecno", "Infinix",
                  "Samsung",
                ],
                direction: "right" as const,
              },
              {
                tag: "PARTNERS",
                t: "外部开发者体系",
                d: "持续扩张第三方开发者生态。",
                apps: [
                  "Partner A", "Partner B", "Partner C", "Partner D",
                  "Partner E", "Partner F", "Partner G", "Partner H",
                  "Partner I", "Partner J",
                ],
                direction: "left" as const,
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-6 w-full"
              >
                {/* Left: label */}
                <div className="shrink-0 w-[200px] flex flex-col gap-1.5 text-left">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: ACCENT }}
                  >
                    {c.tag}
                  </span>
                  <h3 className="text-base font-semibold leading-tight" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  <p className="text-[12px] leading-snug" style={{ color: TEXT_MID }}>{c.d}</p>
                </div>

                {/* Right: marquee row */}
                <div
                  className="relative flex-1 min-w-0 overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
                  }}
                >
                  <div
                    className="flex gap-3 w-max"
                    style={{
                      animation: `${c.direction === "left" ? "logo-marquee" : "logo-marquee-reverse"} 32s linear infinite`,
                    }}
                  >
                    {[...c.apps, ...c.apps].map((name, idx) => (
                      <div
                        key={`${name}-${idx}`}
                        className="shrink-0 w-[68px] h-[68px] rounded-xl flex flex-col items-center justify-center gap-1"
                        style={{
                          background: "rgba(255,255,255,0.6)",
                          border: "1px dashed rgba(99,102,241,0.3)",
                          backdropFilter: "blur(6px)",
                        }}
                        title={name}
                      >
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center text-[12px] font-bold"
                          style={{
                            background:
                              "linear-gradient(135deg, hsl(245 70% 55%) 0%, hsl(265 65% 60%) 100%)",
                            color: "#fff",
                          }}
                        >
                          {name.slice(0, 1).toUpperCase()}
                        </div>
                        <div
                          className="text-[9px] font-medium leading-none truncate w-full text-center px-1"
                          style={{ color: TEXT_MID }}
                        >
                          {name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 7 — 合作价值 === */}
      <SnapScreen id="value">
        <ScreenInner>
          <ScreenTitle>合作价值总结</ScreenTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full">
            {[
              {
                title: "对广告主（DSP）",
                items: [
                  { icon: TrendingUp, label: "稳定规模化增长", desc: "持续放量,平稳爬坡,长周期增长可预期。" },
                  { icon: Target, label: "高 ROI", desc: "算法 + 数据驱动,精准触达高价值用户。" },
                  { icon: Globe2, label: "全球覆盖", desc: "多区域多渠道一站式触达全球受众。" },
                ],
                from: -20,
              },
              {
                title: "对流量方（SSP）",
                items: [
                  { icon: Wallet, label: "多元预算", desc: "DSP、品牌直客、节日大促预算稳定接入。" },
                  { icon: Coins, label: "收益最大化", desc: "智能竞价 + 流量分层,提升每一次曝光价值。" },
                  { icon: Cpu, label: "技术驱动", desc: "底层投放与变现引擎,持续迭代优化。" },
                ],
                from: 20,
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: card.from }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
                className="relative rounded-[24px]"
                style={{
                  border: "1px solid hsla(0, 0%, 100%, 0.6)",
                  boxShadow:
                    "inset 0 1.5px 0 0 hsla(0,0%,100%,0.95), inset 1px 0 0 0 hsla(0,0%,100%,0.5), inset 0 -1px 0 0 hsla(230,30%,50%,0.10), inset 0 -12px 28px -12px hsla(0,0%,100%,0.4), 0 24px 60px -18px hsla(230,40%,25%,0.22), 0 4px 12px -3px hsla(230,40%,25%,0.12)",
                }}
              >
                {/* Glass fill */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[24px]"
                  style={{
                    background:
                      "linear-gradient(155deg, hsla(0,0%,100%,0.30) 0%, hsla(0,0%,100%,0.15) 45%, hsla(0,0%,100%,0.08) 100%)",
                  }}
                />
                {/* Top specular highlight */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[24px] overflow-hidden"
                  style={{ mixBlendMode: "screen" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 110% 45% at 50% -8%, hsla(0,0%,100%,0.55) 0%, hsla(0,0%,100%,0.15) 35%, transparent 65%), linear-gradient(135deg, transparent 30%, hsla(0,0%,100%,0.20) 45%, hsla(0,0%,100%,0.04) 55%, transparent 70%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-[1] p-7">
                  <h3 className="text-2xl font-bold mb-5 text-center" style={{ color: TEXT_DARK }}>
                    {card.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {card.items.map(({ icon: Icon, label, desc }) => (
                      <div
                        key={label}
                        className="relative rounded-2xl p-4 flex items-start gap-3 text-left transition-transform duration-300 hover:-translate-y-0.5"
                        style={{
                          border: "1px solid hsla(0, 0%, 100%, 0.7)",
                          background:
                            "linear-gradient(155deg, hsla(0,0%,100%,0.55) 0%, hsla(0,0%,100%,0.30) 60%, hsla(0,0%,100%,0.18) 100%)",
                          boxShadow:
                            "inset 0 1px 0 hsla(0,0%,100%,0.85), 0 8px 22px -12px hsla(230,40%,25%,0.18)",
                        }}
                      >
                        <span
                          className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                          style={{ background: `${ACCENT}1A`, color: ACCENT }}
                        >
                          <Icon size={16} strokeWidth={2.2} />
                        </span>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-[15px] font-semibold" style={{ color: TEXT_DARK }}>
                            {label}
                          </span>
                          <span className="text-[13px] leading-relaxed" style={{ color: TEXT_MID }}>
                            {desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto text-center flex flex-col items-center gap-5"
          >
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: TEXT_MID }}
            >
              HopeX 致力于打通广告主与流量方之间的高效连接,通过技术驱动与全球化资源整合,实现规模、效率与收益的持续增长。
            </p>
            <div className="flex items-center gap-4 w-full max-w-md">
              <span className="h-px flex-1" style={{ background: `${ACCENT}33` }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              <span className="h-px flex-1" style={{ background: `${ACCENT}33` }} />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${TEXT_DARK}, ${ACCENT})`,
              }}
            >
              Empowering the Future of Ads with HopeX
            </h3>
          </motion.div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
