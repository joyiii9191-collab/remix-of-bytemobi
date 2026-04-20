import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion } from "motion/react";
import {
  SnapPage,
  SnapScreen,
  ScreenInner,
  ScreenEyebrow,
  ScreenTitle,
  ScreenLead,
} from "@/components/SnapPage";
import { CountUp } from "@/components/SubPageLayout";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Radio, Target, Sparkles, LineChart, Users, Repeat,
  ShieldCheck, Layers, Globe2, Gauge, Network, Zap, ArrowRight,
  ShoppingBag, Landmark, Dice5, Gamepad2, Video, Cloud,
  type LucideIcon,
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

import { GLASS_CARD as CARD, TEXT_DARK, TEXT_MID, ACCENT } from "@/lib/page-styles";

const STATS = [
  { label: "覆盖国家 / 地区", value: 220, suffix: "+" },
  { label: "月均可触达设备", value: 18, suffix: " 亿" },
  { label: "直签全球媒体", value: 1200, suffix: "+" },
  { label: "日均广告请求", value: 32, suffix: " 亿次" },
];

const UA_STEPS = [
  { icon: Radio, title: "RTB 实时竞价", desc: "毫秒级响应全球主流交易市场曝光机会" },
  { icon: Target, title: "多维定向", desc: "设备、兴趣、地域、时段灵活拼装人群策略" },
  { icon: Sparkles, title: "创意智能组合", desc: "动态优选高 CTR 版本,素材自动迭代" },
  { icon: LineChart, title: "全链路归因", desc: "曝光→点击→激活→付费,事件级可追溯" },
];

const RT_FUNNEL = [
  { icon: Users, title: "流失用户分层建模", desc: "按生命周期与价值识别真正值得召回的人群", width: "100%" },
  { icon: Sparkles, title: "高价值召回种子", desc: "结合付费、留存、活跃信号锁定高 LTV 用户", width: "85%" },
  { icon: Repeat, title: "跨媒体频次控制", desc: "多媒体多设备统一频控,避免打扰与浪费", width: "70%" },
  { icon: Target, title: "动态商品 / 内容重定向", desc: "根据最近行为生成创意,所见即所想", width: "55%" },
  { icon: Gauge, title: "ROI 实时优化", desc: "自动调价、自动暂停,预算只投在赚钱位置", width: "40%" },
];

type Case = {
  tag: string; title: string; metric: string; region: string;
  summary: string; highlights: string[];
  icon: LucideIcon;
  color: string;
};
const CASES: Case[] = [
  { tag: "电商", title: "电商类", metric: "ROAS +186%", region: "SEA",
    summary: "针对东南亚六国快消品牌,完成从冷启动到规模化的全链路加速。",
    highlights: ["6 国并行投放", "ROAS 60 天提升 186%", "首单 CPA 下降 38%"],
    icon: ShoppingBag, color: "hsl(14 90% 58%)" },
  { tag: "金融", title: "金融类", metric: "CPA -42%", region: "LATAM",
    summary: "聚焦巴西、墨西哥信贷场景,基于人群分层与风控信号优化获客。",
    highlights: ["授信通过率 +21%", "CPA -42%", "次月留存 +16%"],
    icon: Landmark, color: "hsl(160 70% 42%)" },
  { tag: "博彩", title: "博彩类", metric: "FTD +73%", region: "EU",
    summary: "服务欧盟合规娱乐平台,完成从激活到首充的转化深度优化。",
    highlights: ["FTD +73%", "活跃用户 +41%", "合规媒体 100% 直签"],
    icon: Dice5, color: "hsl(340 75% 55%)" },
  { tag: "游戏", title: "游戏类", metric: "D7 留存 +28%", region: "Global",
    summary: "面向 SLG 品类设计长周期投放策略,平衡 ROI 与生命周期价值。",
    highlights: ["D7 留存 +28%", "付费 LTV +35%", "买量 ROI 提升 22%"],
    icon: Gamepad2, color: "hsl(255 75% 62%)" },
  { tag: "短视频", title: "短视频类", metric: "CPI -35%", region: "MEA",
    summary: "面向中东本地化短视频内容,基于阿语创意优化降低 CPI。",
    highlights: ["CPI -35%", "活跃 DAU +210%", "本地化创意 12 套"],
    icon: Video, color: "hsl(195 85% 50%)" },
  { tag: "数字服务", title: "数字服务", metric: "新增 +220%", region: "Global",
    summary: "面向工具类 App 的全球化扩张,完成 50+ 国家市场快速进入。",
    highlights: ["50+ 国家上线", "新增 +220%", "买量结构多元化"],
    icon: Cloud, color: "hsl(40 90% 55%)" },
];

const MEDIA_BLOCKS = [
  { icon: Globe2, t: "直签媒体", d: "头部 App、广告网络、运营商等一手资源直连", tag: "RESOURCE" },
  { icon: Layers, t: "区域流量包", d: "按市场打包的优质流量,快速覆盖目标地区", tag: "COVERAGE" },
  { icon: Gauge, t: "预算看板", d: "预算、出价、消耗、转化在一个视图内闭环", tag: "CONTROL" },
  { icon: ShieldCheck, t: "反欺诈", d: "多模型实时识别异常流量,保障投放质量", tag: "QUALITY" },
];

export default function GlobalFlow() {
  const [openCase, setOpenCase] = React.useState<Case | null>(null);
  const [activeCase, setActiveCase] = React.useState(0);
  const [pauseCases, setPauseCases] = React.useState(false);

  React.useEffect(() => {
    if (pauseCases) return;
    const id = setInterval(() => {
      setActiveCase((p) => (p + 1) % CASES.length);
    }, 4500);
    return () => clearInterval(id);
  }, [pauseCases]);

  return (
    <SnapPage title="全球汇流">
      {/* === Screen 1 — Hero === */}
      <SnapScreen id="hero">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <ParticleWorldMap markers={HUB_MARKERS} lines={HUB_LINES} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.6) 80%, #F5F5F7 100%)",
          }}
        />
        <ScreenInner>
          {/* removed: GLOBAL FLOW badge */}
          <ScreenTitle size="xl">
            移动增长引擎
          </ScreenTitle>
          <ScreenLead>
            驱动全球增长,智能汇流每一刻
          </ScreenLead>
          <div className="mt-10 flex items-center gap-6">
            <StarBorder
              speed="5s"
              onClick={() => document.getElementById("hub")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              探索全球能力
            </StarBorder>
            
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2 — 增长枢纽数据 === */}
      <SnapScreen id="hub" bg="tint">
        <ScreenInner>
          <ScreenTitle>全球汇流 · 增长枢纽</ScreenTitle>
          <ScreenLead>覆盖六大洲核心市场的实时流量与设备网络。</ScreenLead>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="stat-number text-5xl md:text-6xl mb-3">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-number-label text-sm uppercase" style={{ color: TEXT_MID }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — UA 流程 === */}
      <SnapScreen id="ua">
        <ScreenInner>
          <ScreenTitle>程序化获客,全链路可观测</ScreenTitle>
          <ScreenLead>从竞价响应到归因回流,四个环节毫秒级闭环优化。</ScreenLead>
          <div className="hidden md:flex items-stretch gap-3 mt-10">
            {UA_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <React.Fragment key={s.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: i * 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-2xl p-6 relative glass-card flex flex-col items-center text-center"
                    style={{
                      ...CARD,
                      background: `linear-gradient(180deg, rgba(59,130,246,${0.08 + i * 0.025}) 0%, rgba(255,255,255,0.95) 100%)`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(59,130,246,0.12)", color: "#3B82F6" }}
                    ><Icon size={24} /></div>
                    <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_DARK }}>{s.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: TEXT_MID }}>{s.desc}</p>
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
          <div className="md:hidden grid grid-cols-1 gap-3 mt-8">
            {UA_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl p-4 flex gap-3 glass-card" style={CARD}>
                  <div
                    className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                  ><Icon size={18} /></div>
                  <div>
                    <h3 className="text-sm font-semibold" style={{ color: TEXT_DARK }}>0{i + 1} · {s.title}</h3>
                    <p className="text-xs mt-1" style={{ color: TEXT_MID }}>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 4 — RT 漏斗 === */}
      <SnapScreen id="rt" bg="tint">
        <ScreenInner>
          <ScreenTitle>把流失用户变成新一轮增长</ScreenTitle>
          <ScreenLead>基于行为数据的分层重定向漏斗,从识别到 ROI 优化层层收敛。</ScreenLead>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10 w-full">
            {RT_FUNNEL.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-5 flex flex-col items-center text-center glass-card relative"
                  style={{
                    ...CARD,
                    background: `linear-gradient(180deg, rgba(99,102,241,${0.08 + i * 0.025}) 0%, rgba(255,255,255,0.95) 100%)`,
                  }}
                >
                  <div
                    className="text-[10px] font-bold tracking-wider mb-3"
                    style={{ color: ACCENT }}
                  >STEP {String(i + 1).padStart(2, "0")}</div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(99,102,241,0.12)", color: ACCENT }}
                  ><Icon size={22} /></div>
                  <div className="text-sm font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{s.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: TEXT_MID }}>{s.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 媒体与流量 === */}
      <SnapScreen id="media">
        <ScreenInner>
          <ScreenTitle>全球媒体与流量整合</ScreenTitle>
          <ScreenLead>从直签媒体到反欺诈,统一在一个看板里被衡量。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {MEDIA_BLOCKS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 40, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-6 glass-card flex flex-col items-center text-center"
                  style={{
                    ...CARD,
                    background: `linear-gradient(180deg, rgba(249,115,22,${0.08 + i * 0.025}) 0%, rgba(255,255,255,0.95) 100%)`,
                  }}
                >
                  <div
                    className="text-[10px] font-bold tracking-wider mb-3"
                    style={{ color: "#F97316" }}
                  >{c.tag}</div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(249,115,22,0.12)", color: "#F97316" }}
                  ><Icon size={24} /></div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 6 — 案例(参考 efunad works 三栏布局) === */}
      <SnapScreen id="cases" bg="tint">
        <ScreenInner className="!justify-start">
          <ScreenTitle>增长成果精选</ScreenTitle>
          

          <div
            className="w-full grid grid-cols-12 gap-8 mt-10 items-center"
            onMouseEnter={() => setPauseCases(true)}
            onMouseLeave={() => setPauseCases(false)}
          >
            {/* 左:Tab 列表 */}
            <div className="col-span-12 md:col-span-3 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
              {CASES.map((c, i) => {
                const active = activeCase === i;
                const Icon = c.icon;
                return (
                  <button
                    key={c.title}
                    type="button"
                    onClick={() => setActiveCase(i)}
                    className="relative text-left px-4 py-4 transition-all shrink-0 md:shrink flex items-center gap-3"
                    style={{
                      borderLeft: active
                        ? `3px solid ${c.color}`
                        : "3px solid transparent",
                      background: active ? "hsla(0,0%,100%,0.55)" : "transparent",
                    }}
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{
                        background: active ? c.color : `${c.color.replace("hsl(", "hsla(").replace(")", " / 0.12)")}`,
                        color: active ? "#fff" : c.color,
                      }}
                    >
                      <Icon size={18} />
                    </span>
                    <div
                      className="text-base md:text-lg font-bold leading-tight"
                      style={{ color: active ? c.color : TEXT_DARK }}
                    >
                      {c.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 中:海报卡片 + 错位灰色占位卡 */}
            <div className="col-span-12 md:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[360px] aspect-square">
                {/* 背后灰色占位卡 */}
                <motion.div
                  key={`bg-${activeCase}`}
                  initial={{ opacity: 0, x: -20, y: -20, rotate: -8 }}
                  animate={{ opacity: 1, x: 24, y: -24, rotate: -6 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, hsl(220 10% 75%) 0 8px, hsl(220 10% 82%) 8px 16px)",
                    boxShadow: "0 20px 50px -20px hsla(220, 10%, 40%, 0.35)",
                  }}
                />
                {/* 前置主卡 */}
                <motion.div
                  key={`fg-${activeCase}`}
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 rounded-2xl glass-card flex flex-col items-center justify-center p-6 text-center"
                  style={CARD}
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                    style={{ background: CASES[activeCase].color, color: "#fff" }}
                  >
                    {React.createElement(CASES[activeCase].icon, { size: 28 })}
                  </div>
                  <div
                    className="text-3xl md:text-4xl font-extrabold mb-3"
                    style={{ color: CASES[activeCase].color, lineHeight: 1.1 }}
                  >
                    {CASES[activeCase].metric}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>
                    {CASES[activeCase].title}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 右:标题 + 描述 + CTA */}
            <div className="col-span-12 md:col-span-4">
              <motion.div
                key={`txt-${activeCase}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-left"
              >
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: TEXT_DARK, lineHeight: 1.25 }}
                >
                  {CASES[activeCase].title}
                  <span
                    className="block text-sm font-medium mt-1"
                    style={{ color: TEXT_MID }}
                  >
                    ({CASES[activeCase].tag} · {CASES[activeCase].region})
                  </span>
                </h3>
                <p
                  className="text-sm md:text-base mb-6"
                  style={{ color: TEXT_MID, lineHeight: 1.7 }}
                >
                  {CASES[activeCase].summary}
                </p>
                <StarBorder speed="5s" onClick={() => setOpenCase(CASES[activeCase])}>
                  了解更多
                </StarBorder>
              </motion.div>
            </div>
          </div>
          <p
            className="w-full text-center text-xs mt-8"
            style={{ color: "hsl(220 9% 60%)" }}
          >
            免责声明:部分客户为历史合作或渠道服务案例,数据为综合表现参考
          </p>
        </ScreenInner>

        <Dialog open={!!openCase} onOpenChange={(o) => !o && setOpenCase(null)}>
          <DialogContent className="max-w-lg">
            {openCase && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                    >{openCase.tag}</span>
                    <span className="text-xs" style={{ color: TEXT_MID }}>{openCase.region}</span>
                  </div>
                  <DialogTitle style={{ color: TEXT_DARK }}>{openCase.title}</DialogTitle>
                  <DialogDescription style={{ color: TEXT_MID }}>{openCase.summary}</DialogDescription>
                </DialogHeader>
                <div className="text-3xl font-bold my-2" style={{ color: ACCENT }}>{openCase.metric}</div>
                <ul className="space-y-2 mt-2">
                  {openCase.highlights.map((h) => (
                    <li key={h} className="text-sm flex items-start gap-2" style={{ color: TEXT_DARK }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </DialogContent>
        </Dialog>
      </SnapScreen>

      {/* === Screen 7 — Web 端长效增长 === */}
      <SnapScreen id="web">
        <ScreenInner className="!justify-start">
          <ScreenTitle>Web 端长效增长</ScreenTitle>
          <ScreenLead>
            Web 端效果广告与用户增长业务核心 · 流量供给侧资源 · 双引擎流量供给模型 · 业务覆盖市场及全链路能力
          </ScreenLead>

          {/* 业务类型 */}
          <div className="w-full mt-8">
            <div className="flex items-baseline justify-between mb-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                业务类型
              </div>
              <div className="text-[11px]" style={{ color: TEXT_MID }}>
                鼠标悬停查看示例 · 完整资料以压缩档传送
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { icon: Landmark, name: "Fintech", cn: "金融科技", color: "hsl(160 70% 42%)" },
                { icon: ShieldCheck, name: "Health", cn: "健康", color: "hsl(180 60% 45%)" },
                { icon: Sparkles, name: "Entertainment", cn: "娱乐", color: "hsl(340 75% 55%)" },
                { icon: Cloud, name: "Digital", cn: "数字服务", color: "hsl(40 90% 55%)" },
                { icon: ShoppingBag, name: "Commerce", cn: "电商", color: "hsl(14 90% 58%)" },
                { icon: Globe2, name: "Travel", cn: "旅行", color: "hsl(210 85% 55%)" },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-xl p-3 flex flex-col items-center text-center glass-card cursor-pointer overflow-hidden"
                    style={CARD}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-colors"
                      style={{ background: `${b.color.replace("hsl(", "hsla(").replace(")", " / 0.12)")}`, color: b.color }}
                    ><Icon size={18} /></div>
                    <div className="text-xs font-semibold" style={{ color: TEXT_DARK }}>{b.name}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: TEXT_MID }}>{b.cn}</div>

                    {/* Hover 浮层 — 影片占位 */}
                    <div
                      className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                      style={{ background: `${b.color.replace("hsl(", "hsla(").replace(")", " / 0.92)")}` }}
                    >
                      <Video size={20} className="text-white mb-1" />
                      <div className="text-[10px] text-white font-semibold tracking-wider">查看示例影片</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 8 — 双引擎能力 === */}
      <SnapScreen id="web-engines" bg="tint">
        <ScreenInner className="!justify-start">
          <ScreenTitle>双引擎流量供给模型</ScreenTitle>
          <ScreenLead>
            内投团队 + 流量网络,覆盖增长能力与媒体资源,实现 Web 端长效增长。
          </ScreenLead>

          {/* 增长引擎(内投团队) */}
          <div className="w-full mt-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
              我们的增长引擎 · 内投团队
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Gauge, t: "预算与出价动态优化", d: "实时调价 · ROI 守护" },
                { icon: Sparkles, t: "创意测试与持续迭代", d: "AB 测试 · 高 CTR 沉淀" },
                { icon: LineChart, t: "全链路转化洞察", d: "事件级归因与诊断" },
                { icon: ShieldCheck, t: "合规与长期增长", d: "政策合规 · 长尾价值" },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.t}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="rounded-xl p-4 glass-card"
                    style={CARD}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                    ><Icon size={18} /></div>
                    <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{c.t}</div>
                    <div className="text-[11px] mt-1" style={{ color: TEXT_MID }}>{c.d}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 流量网络(网盟 / 联盟) */}
          <div className="w-full mt-8">
            <div className="flex items-baseline justify-between mb-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                我们的流量网络 · 网盟 / 联盟
              </div>
              <div className="text-[11px] font-semibold" style={{ color: TEXT_DARK }}>
                高效对接 · 快速启动 · 持续增长
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 广告主合作流程 */}
              <motion.div
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
                className="rounded-2xl p-5 glass-card" style={CARD}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} style={{ color: ACCENT }} />
                  <h3 className="text-sm font-semibold" style={{ color: TEXT_DARK }}>广告主合作流程</h3>
                </div>
                <ol className="space-y-2">
                  {[
                    "需求沟通与目标对齐",
                    "媒体策略与流量匹配",
                    "投放上线与素材测试",
                    "数据复盘与放量优化",
                  ].map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-xs" style={{ color: TEXT_DARK }}>
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{ background: ACCENT, color: "#fff" }}
                      >{i + 1}</span>
                      <span style={{ color: TEXT_MID, lineHeight: 1.7 }}>{s}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* 发布商合作流程 */}
              <motion.div
                initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl p-5 glass-card" style={CARD}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Network size={16} style={{ color: ACCENT }} />
                  <h3 className="text-sm font-semibold" style={{ color: TEXT_DARK }}>发布商合作流程</h3>
                </div>
                <ol className="space-y-2">
                  {[
                    "资质审核与流量评估",
                    "对接 SDK / API 接入",
                    "广告策略与填充优化",
                    "结算透明与长期分润",
                  ].map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-xs" style={{ color: TEXT_DARK }}>
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{ background: ACCENT, color: "#fff" }}
                      >{i + 1}</span>
                      <span style={{ color: TEXT_MID, lineHeight: 1.7 }}>{s}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
