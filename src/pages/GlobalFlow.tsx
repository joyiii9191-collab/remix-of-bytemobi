import React from "react";
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

// 蓝紫磨砂玻璃卡片 (logo 蓝 70% / 紫 30%)
const CARD: React.CSSProperties = {
  background:
    "linear-gradient(135deg, hsla(220,95%,75%,0.18) 0%, hsla(232,85%,72%,0.14) 35%, hsla(250,75%,72%,0.12) 70%, hsla(270,75%,75%,0.16) 100%), linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 100%)",
  
  
  border: "1px solid hsla(232, 80%, 70%, 0.22)",
  boxShadow:
    "inset 0 1px 0 0 rgba(255,255,255,0.55), 0 8px 28px -10px hsla(232,85%,55%,0.22), 0 16px 40px -16px hsla(265,75%,58%,0.18)",
};
const TEXT_DARK = "hsl(230 30% 18%)";
const TEXT_MID = "hsl(230 20% 40%)";
const ACCENT = "hsl(245 60% 45%)";

const STATS = [
  { label: "覆盖国家 / 地区", value: 220, suffix: "+" },
  { label: "月均可触达设备", value: 18, suffix: " 亿" },
  { label: "直签全球媒体", value: 1200, suffix: "+" },
  { label: "日均广告请求", value: 32, suffix: " 亿次" },
];

const UA_STEPS = [
  { icon: Radio, title: "RTB 实时竞价", desc: "毫秒级响应全球主流交易市场曝光机会。" },
  { icon: Target, title: "多维定向", desc: "设备、兴趣、地域、时段灵活拼装人群策略。" },
  { icon: Sparkles, title: "创意智能组合", desc: "动态优选高 CTR 版本,素材自动迭代。" },
  { icon: LineChart, title: "全链路归因", desc: "曝光→点击→激活→付费,事件级可追溯。" },
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
};
const CASES: Case[] = [
  { tag: "电商", title: "东南亚跨境快消", metric: "ROAS +186%", region: "SEA",
    summary: "针对东南亚六国快消品牌,完成从冷启动到规模化的全链路加速。",
    highlights: ["6 国并行投放", "ROAS 60 天提升 186%", "首单 CPA 下降 38%"] },
  { tag: "金融", title: "拉美信贷 App", metric: "CPA -42%", region: "LATAM",
    summary: "聚焦巴西、墨西哥信贷场景,基于人群分层与风控信号优化获客。",
    highlights: ["授信通过率 +21%", "CPA -42%", "次月留存 +16%"] },
  { tag: "博彩", title: "欧洲娱乐平台", metric: "FTD +73%", region: "EU",
    summary: "服务欧盟合规娱乐平台,完成从激活到首充的转化深度优化。",
    highlights: ["FTD +73%", "活跃用户 +41%", "合规媒体 100% 直签"] },
  { tag: "游戏", title: "中重度 SLG 出海", metric: "D7 留存 +28%", region: "Global",
    summary: "面向 SLG 品类设计长周期投放策略,平衡 ROI 与生命周期价值。",
    highlights: ["D7 留存 +28%", "付费 LTV +35%", "买量 ROI 提升 22%"] },
  { tag: "短视频", title: "中东内容平台", metric: "CPI -35%", region: "MEA",
    summary: "面向中东本地化短视频内容,基于阿语创意优化降低 CPI。",
    highlights: ["CPI -35%", "活跃 DAU +210%", "本地化创意 12 套"] },
  { tag: "数字服务", title: "全球工具应用", metric: "新增 +220%", region: "Global",
    summary: "面向工具类 App 的全球化扩张,完成 50+ 国家市场快速进入。",
    highlights: ["50+ 国家上线", "新增 +220%", "买量结构多元化"] },
];

const MEDIA_BLOCKS = [
  { icon: Globe2, t: "直签媒体", d: "头部 App、广告网络、运营商等一手资源直连。" },
  { icon: Layers, t: "区域流量包", d: "按市场打包的优质流量,快速覆盖目标地区。" },
  { icon: Gauge, t: "预算看板", d: "预算、出价、消耗、转化在一个视图内闭环。" },
  { icon: ShieldCheck, t: "反欺诈", d: "多模型实时识别异常流量,保障投放质量。" },
];

export default function GlobalFlow() {
  const [openCase, setOpenCase] = React.useState<Case | null>(null);

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
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-5 self-start"
            style={{
              background: "rgba(99,102,241,0.1)",
              color: "hsl(245 60% 35%)",
              border: "1px solid rgba(124,58,237,0.18)",
            }}
          >
            GLOBAL FLOW · 全球汇流
          </motion.div>
          <ScreenTitle size="xl">
            移动增长引擎
          </ScreenTitle>
          <ScreenLead>
            驱动全球增长,智能汇流每一刻。覆盖六大洲核心市场的实时流量与设备网络,为每一个增长目标计算最优路径。
          </ScreenLead>
          <div className="mt-10 text-xs uppercase tracking-[0.3em]" style={{ color: TEXT_MID }}>
            ↓ 滑动浏览全部能力
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2 — 增长枢纽数据 === */}
      <SnapScreen id="hub" bg="tint">
        <ScreenInner>
          <ScreenEyebrow>01 · 增长枢纽</ScreenEyebrow>
          <ScreenTitle>全球汇流 · 增长枢纽</ScreenTitle>
          <ScreenLead>覆盖六大洲核心市场的实时流量与设备网络。</ScreenLead>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, hsla(220,100%,98%,0.55) 0%, hsla(232,90%,92%,0.35) 50%, hsla(265,80%,94%,0.4) 100%)",
                  
                  
                  border: "1px solid hsla(0,0%,100%,0.6)",
                  boxShadow:
                    "inset 0 1px 0 0 hsla(0,0%,100%,0.9), inset 0 -1px 0 0 hsla(232,60%,80%,0.3), 0 12px 40px -12px hsla(232,85%,55%,0.28), 0 24px 60px -20px hsla(265,75%,58%,0.22)",
                }}
              >
                {/* 顶部高光描边 */}
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsla(0,0%,100%,0.95), transparent)",
                  }}
                />
                {/* 角部光晕 */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, hsla(232,95%,70%,0.55), transparent 70%)" }}
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                  style={{ background: "radial-gradient(circle, hsla(265,90%,72%,0.45), transparent 70%)" }}
                />
                {/* hover 时移动的扫光 */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 30%, hsla(0,0%,100%,0.35) 50%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 group-hover:scale-105 origin-left"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(232 90% 45%) 0%, hsl(250 80% 55%) 50%, hsl(270 75% 60%) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1.1,
                      filter: "drop-shadow(0 2px 8px hsla(245,80%,60%,0.25))",
                    }}
                  >
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: "hsl(232 35% 30%)" }}
                  >
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — UA 流程 === */}
      <SnapScreen id="ua">
        <ScreenInner>
          <ScreenEyebrow>02 · 用户获取 UA</ScreenEyebrow>
          <ScreenTitle>程序化获客,全链路可观测</ScreenTitle>
          <ScreenLead>从竞价响应到归因回流,四个环节毫秒级闭环优化。</ScreenLead>
          <div className="hidden md:flex items-stretch gap-3 mt-10">
            {UA_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <React.Fragment key={s.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex-1 rounded-2xl p-5 relative glass-card"
                    style={CARD}
                  >
                    <div
                      className="absolute -top-3 left-5 text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: ACCENT, color: "white" }}
                    >0{i + 1}</div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                    ><Icon size={20} /></div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{s.title}</h3>
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
          <ScreenEyebrow>03 · 用户再营销 RT</ScreenEyebrow>
          <ScreenTitle>把流失用户变成新一轮增长</ScreenTitle>
          <ScreenLead>基于行为数据的分层重定向漏斗,从识别到 ROI 优化层层收敛。</ScreenLead>
          <div className="flex flex-col gap-2.5 mt-8">
            {RT_FUNNEL.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="mx-auto rounded-2xl p-4 flex items-center gap-4"
                  style={{
                    ...CARD,
                    width: s.width,
                    maxWidth: "100%",
                    background: `linear-gradient(90deg, rgba(99,102,241,${0.06 + i * 0.02}) 0%, #FFFFFF 100%)`,
                  }}
                >
                  <div
                    className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.12)", color: ACCENT }}
                  ><Icon size={18} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{s.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: TEXT_MID }}>{s.desc}</div>
                  </div>
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:block"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                  >STEP {i + 1}</div>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 媒体与流量 === */}
      <SnapScreen id="media">
        <ScreenInner>
          <ScreenEyebrow>04 · 媒体与流量</ScreenEyebrow>
          <ScreenTitle>全球媒体与流量整合</ScreenTitle>
          <ScreenLead>从直签媒体到反欺诈,统一在一个看板里被衡量。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {MEDIA_BLOCKS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl p-6 glass-card"
                  style={CARD}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                  ><Icon size={20} /></div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 6 — 案例 === */}
      <SnapScreen id="cases" bg="tint">
        <ScreenInner>
          <ScreenEyebrow>05 · 增长成果精选</ScreenEyebrow>
          <ScreenTitle>六大行业代表案例</ScreenTitle>
          <ScreenLead>点击卡片查看案例详情。</ScreenLead>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {CASES.map((c, i) => (
              <motion.button
                key={c.title}
                type="button"
                onClick={() => setOpenCase(c)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-4 text-left cursor-pointer glass-card"
                style={CARD}
              >
                <span
                  className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2"
                  style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                >{c.tag}</span>
                <h3 className="text-sm font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.title}</h3>
                <div className="text-lg font-bold mb-2" style={{ color: ACCENT }}>{c.metric}</div>
                <div className="text-[10px]" style={{ color: TEXT_MID }}>{c.region}</div>
              </motion.button>
            ))}
          </div>
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

      {/* === Screen 7 — Web 业务 === */}
      <SnapScreen id="web">
        <ScreenInner>
          <ScreenEyebrow>06 · Web 端增长宏图</ScreenEyebrow>
          <ScreenTitle>Web 长效增长 · 流量供给 · 双引擎 · 全链路</ScreenTitle>
          <ScreenLead>
            以流量供给侧为基础,通过内投团队与流量网络的双引擎模式,覆盖市场与全链路,实现 Web 端的长效增长。
          </ScreenLead>

          {/* 业务类型 */}
          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>业务类型</div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { icon: Layers, name: "Fintech" },
                { icon: ShieldCheck, name: "Health" },
                { icon: Sparkles, name: "Entertainment" },
                { icon: Network, name: "Digital" },
                { icon: Globe2, name: "Commerce" },
                { icon: Zap, name: "Travel" },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-xl p-3 flex flex-col items-center text-center glass-card"
                    style={CARD}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}
                    ><Icon size={16} /></div>
                    <div className="text-xs font-semibold" style={{ color: TEXT_DARK }}>{b.name}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 双引擎 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
              className="rounded-2xl p-5 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Engine 01</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_DARK }}>增长引擎 · 内投团队</h3>
              <ul className="text-xs leading-relaxed space-y-1" style={{ color: TEXT_MID }}>
                <li>· 预算出价优化</li>
                <li>· 创意测试</li>
                <li>· 转化洞察</li>
                <li>· 合规与长期增长</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-5 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Engine 02</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_DARK }}>流量网络 · 网盟 / 联盟</h3>
              <ul className="text-xs leading-relaxed space-y-1" style={{ color: TEXT_MID }}>
                <li>· 高效对接</li>
                <li>· 快速启动</li>
                <li>· 持续增长</li>
              </ul>
            </motion.div>
          </div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
