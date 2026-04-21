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
          <ScreenTitle>平台规模与基础能力</ScreenTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 xl:gap-x-14 gap-y-6 mt-6 w-full">
            {SCALE.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex items-center justify-center h-32 md:h-36 min-w-0"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center font-black select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(4.5rem, 6.2vw, 7rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke: "1.5px hsla(230, 20%, 60%, 0.45)",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  <CountUp value={s.v} />
                </div>
                <div className="relative z-10 flex items-center gap-3 max-w-full px-2">
                  <span
                    aria-hidden
                    className="block h-[2px] w-7 rounded-full shrink-0"
                    style={{ background: "hsl(245 70% 55%)" }}
                  />
                  <div className="flex flex-col min-w-0">
                    <div
                      className="text-base md:text-lg font-semibold tracking-wide leading-tight"
                      style={{ color: TEXT_DARK }}
                    >
                      {s.l}
                    </div>
                    <div className="text-xs md:text-sm font-medium mt-0.5" style={{ color: TEXT_MID }}>
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
            className="rounded-2xl glass-card mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 lg:p-6 items-center w-full max-w-[1200px] mx-auto"
            style={CARD}
          >
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
                Global Network
              </div>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-4" style={{ color: TEXT_DARK }}>
                HopeX 已构建全球化流量网络,覆盖:
              </p>
              <ul className="space-y-2.5 text-sm md:text-[15px]" style={{ color: TEXT_MID }}>
                {[
                  { r: "北美", d: "US / CA" },
                  { r: "亚太", d: "SEA / JP / KR / IN" },
                  { r: "拉美", d: "BR / MX 等" },
                  { r: "欧洲及中东非", d: "EMEA" },
                ].map((item) => (
                  <li key={item.r} className="flex items-center gap-3">
                    <span className="block h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
                    <span style={{ color: TEXT_DARK }} className="font-semibold">{item.r}</span>
                    <span>({item.d})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[200px] lg:h-[240px] rounded-xl overflow-hidden">
              <ParticleWorldMap markers={HOPEX_MARKERS} lines={HOPEX_LINES} />
            </div>
          </motion.div>
        </ScreenInner>
      </SnapScreen>


      {/* === Screen 4 — DSP 全渠道增长能力 === */}
      <SnapScreen id="dsp" bg="tint">
        <ScreenInner>
          <GlassTag>DSP 能力</GlassTag>
          <ScreenTitle>全渠道增长能力</ScreenTitle>
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
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-full">
            {[
              {
                t: "智能受众分群与精准定向",
                d: "基于多维行为与画像数据,自动构建高价值人群,精准触达目标用户。",
                icon: "01",
              },
              {
                t: "实时策略调整(秒级响应)",
                d: "毫秒级竞价决策,秒级策略迭代,快速响应流量与市场变化。",
                icon: "02",
              },
              {
                t: "预算自适应与智能限流",
                d: "动态分配预算,智能限流防止超投,确保投放节奏稳定可控。",
                icon: "03",
              },
              {
                t: "人机协同优化策略",
                d: "AI 自动优化 + 资深优化师经验复核,兼顾效率与判断深度。",
                icon: "04",
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 glass-card flex gap-4 items-start"
                style={CARD}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, hsl(245 70% 55%) 0%, hsl(265 65% 60%) 100%)",
                    color: "#fff",
                    letterSpacing: "0.05em",
                  }}
                >
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
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
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-10 w-full">
            {[
              { t: "电商", en: "E-commerce" },
              { t: "游戏", en: "Gaming" },
              { t: "工具", en: "Utility" },
              { t: "短剧", en: "Short Drama" },
              { t: "娱乐内容", en: "Entertainment" },
              { t: "金融科技", en: "FinTech" },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl glass-card aspect-square flex flex-col items-center justify-center gap-2"
                style={CARD}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, hsl(245 70% 55%) 0%, hsl(265 65% 60%) 100%)",
                    color: "#fff",
                  }}
                >
                  {c.t.slice(0, 1)}
                </div>
                <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{c.t}</div>
                <div className="text-[10px] uppercase tracking-[0.15em]" style={{ color: TEXT_MID }}>{c.en}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl h-16 flex items-center justify-center text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  background: "rgba(99,102,241,0.06)",
                  border: "1px dashed rgba(99,102,241,0.25)",
                  color: "hsl(245 30% 50%)",
                }}
              >
                Logo
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5c — 全场景流量变现能力 === */}
      <SnapScreen id="formats" bg="tint">
        <ScreenInner>
          <FormatShowcase />
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5d — 多元预算接入 === */}
      <SnapScreen id="budget">
        <ScreenInner>
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
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
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
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.08 }}
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
          <ScreenTitle>一端服务广告主,一端服务流量方</ScreenTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
              className="rounded-2xl p-7 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>For Advertisers</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_DARK }}>广告主</h3>
              <ul className="space-y-3 text-sm" style={{ color: TEXT_DARK }}>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}1A`, color: ACCENT }}>
                    <TrendingUp size={16} strokeWidth={2.2} />
                  </span>
                  稳定规模化增长
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}1A`, color: ACCENT }}>
                    <Target size={16} strokeWidth={2.2} />
                  </span>
                  高 ROI
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}1A`, color: ACCENT }}>
                    <Globe2 size={16} strokeWidth={2.2} />
                  </span>
                  全球覆盖
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
              className="rounded-2xl p-7 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>For Publishers</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_DARK }}>流量方</h3>
              <ul className="space-y-3 text-sm" style={{ color: TEXT_DARK }}>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}1A`, color: ACCENT }}>
                    <Wallet size={16} strokeWidth={2.2} />
                  </span>
                  多元预算
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}1A`, color: ACCENT }}>
                    <Coins size={16} strokeWidth={2.2} />
                  </span>
                  收益最大化
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}1A`, color: ACCENT }}>
                    <Cpu size={16} strokeWidth={2.2} />
                  </span>
                  技术驱动
                </li>
              </ul>
            </motion.div>
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
