import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion } from "motion/react";
import {
  Rocket, BarChart3, ShieldCheck, LineChart,
  Store, Megaphone, Network, Globe2,
  MessageCircle, ClipboardCheck, FileSignature, Settings2, TrendingUp, PieChart,
  Gift, Sparkles, GraduationCap,
  KeyRound, Zap, Layers,
  Image as ImageIcon, Activity, ClipboardList,
  Palette, FileSearch, AlertTriangle,
  Film, Globe, Share2, Boxes, GitMerge, ShieldAlert, Clock, Wallet, UserCog,
  PlayCircle, Flag, Target, Repeat,
} from "lucide-react";
import {
  SnapPage, SnapScreen, ScreenInner,
  ScreenEyebrow, ScreenTitle, ScreenLead,
} from "@/components/SnapPage";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";

const MEDIA_MARKERS = [
  { x: 18, y: 35, highlight: true },
  { x: 50, y: 30, highlight: true },
  { x: 78, y: 45, highlight: true },
];
const MEDIA_LINES: Array<[number, number]> = [[0, 1], [1, 2], [0, 2]];

import { GLASS_CARD as CARD, TEXT_DARK, TEXT_MID, ACCENT } from "@/lib/page-styles";

export default function MediaResources() {
  return (
    <SnapPage title="大媒体资源">
      {/* === Screen 1 — Hero === */}
      <SnapScreen id="hero">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.6) 80%, #F5F5F7 100%)" }} />
        <ScreenInner>
          <ScreenTitle size="xl">
            全球主流媒体代理商
            <br />
            一站式增长合作伙伴
          </ScreenTitle>
          <ScreenLead>
            覆盖 TikTok、Facebook、Google 等全球主流媒体
            <br />
            提供从开户、投放、优化到合规风控与代运营的一站式服务
          </ScreenLead>
          <div className="mt-10 flex items-center gap-5 flex-wrap">
            <StarBorder
              speed="5s"
              onClick={() => document.getElementById("value")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              开启出海合作
            </StarBorder>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2 — 价值主张 === */}
      <SnapScreen id="value" bg="tint">
        <ScreenInner>
          <ScreenTitle>核心价值</ScreenTitle>
          <ScreenLead>为出海团队提供端到端增长杠杆</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {[
              {
                t: "全链路赋能",
                d: "短剧 + 品牌 + 多平台,覆盖营销全流程。",
                items: [
                  { text: "短剧内容制作与发行", Icon: Film },
                  { text: "品牌全球推广", Icon: Globe },
                  { text: "多平台协同投放", Icon: Share2 },
                ],
              },
              {
                t: "稳定高效增长",
                d: "账户健康度与素材效率持续监控,避免起量断档。",
                items: [
                  { text: "多平台资源整合", Icon: Boxes },
                  { text: "策略协同优化", Icon: GitMerge },
                  { text: "全流程合规风控", Icon: ShieldAlert },
                ],
              },
              {
                t: "快速出海启动",
                d: "从合规到上线,按周交付而不是按月。",
                items: [
                  { text: "1–3 个工作日开户", Icon: Clock },
                  { text: "多主体 / 多币种支持", Icon: Wallet },
                  { text: "账户代投代运营", Icon: UserCog },
                ],
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-7 glass-card transition-all duration-300 hover:bg-white/60 hover:shadow-xl" style={CARD}>
                <div className="text-3xl font-bold mb-3" style={{ color: ACCENT }}>0{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MID }}>{c.d}</p>
                <div className="pt-3 border-t border-white/40 flex justify-center">
                  <ul className="space-y-3 inline-block text-left">
                    {c.items.map((it) => {
                      const ItemIcon = it.Icon;
                      return (
                        <li key={it.text} className="text-sm flex items-center gap-2.5" style={{ color: TEXT_MID }}>
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md flex-shrink-0"
                            style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                            <ItemIcon size={12} strokeWidth={2} />
                          </span>
                          <span>{it.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — 服务入口 === */}
      <SnapScreen id="services">
        <ScreenInner>
          <ScreenTitle>核心业务</ScreenTitle>
          <ScreenLead>从开户到复盘的端到端能力,一个团队覆盖全部环节。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              {
                t: "账户与投放启动",
                d: "完成账号开设、账户准备与投放上线前配置",
                Icon: Rocket,
                items: [
                  { text: "TikTok / Facebook / Google 快速开户", Icon: KeyRound },
                  { text: "1–3 工作日启动投放", Icon: Zap },
                  { text: "多主体、多币种、多账户体系", Icon: Layers },
                ],
              },
              {
                t: "数据驱动优化",
                d: "根据投放目标进行日常优化、素材迭代与预算调整",
                Icon: BarChart3,
                items: [
                  { text: "多平台素材策略与本地化适配", Icon: ImageIcon },
                  { text: "实时数据监测与跨平台优化", Icon: Activity },
                  { text: "全案运营(策略 + 执行 + 复盘)", Icon: ClipboardList },
                ],
              },
              {
                t: "创意与合规护航",
                d: "检查素材、定向和投放方式是否符合平台规则",
                Icon: ShieldCheck,
                items: [
                  { text: "素材规范适配与创意指导", Icon: Palette },
                  { text: "广告预审与合规审核", Icon: FileSearch },
                  { text: "风控监测 + 封禁预警 + 快速申诉", Icon: AlertTriangle },
                ],
              },
            ].map((c, i) => {
              const Icon = c.Icon;
              return (
                <motion.div key={c.t}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-7 glass-card transition-all duration-300 hover:bg-white/60 hover:shadow-xl" style={CARD}>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MID }}>{c.d}</p>
                  <div className="pt-3 border-t border-white/40 flex justify-center">
                    <ul className="space-y-3 inline-block text-left">
                      {c.items.map((it) => {
                        const ItemIcon = it.Icon;
                        return (
                          <li key={it.text} className="text-sm flex items-center gap-2.5" style={{ color: TEXT_MID }}>
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-md flex-shrink-0"
                              style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                              <ItemIcon size={12} strokeWidth={2} />
                            </span>
                            <span>{it.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 4 — 特色亮点 (循环图) === */}
      <SnapScreen id="highlight" bg="tint">
        <ScreenInner>
          <ScreenTitle>短剧与品牌出海一站式解决方案</ScreenTitle>
          <ScreenLead>从内容生产到商业转化的完整闭环</ScreenLead>

          <div className="mt-6 w-full flex items-center justify-center">
            <div className="relative aspect-square mx-auto" style={{ width: "min(460px, 70vh)" }}>
              {/* 外圈渐变环 */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, rgba(99,102,241,0.28), rgba(168,85,247,0.2), rgba(236,72,153,0.2), rgba(59,130,246,0.24), rgba(99,102,241,0.28))",
                  filter: "blur(3px)",
                  opacity: 0.5,
                }} />
              <div className="absolute inset-[8%] rounded-full bg-white/30 backdrop-blur-sm border border-white/50" />

              {/* 中心圆 — 更清透 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-[156px] aspect-square rounded-full flex flex-col items-center justify-center text-center cursor-default"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.85) 0%, rgba(139,92,246,0.8) 100%)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 10px 40px -8px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -4px 12px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(255,255,255,0.35)",
                  }}>
                  <Repeat size={22} className="text-white/95 mb-1" strokeWidth={1.6} />
                  <div className="text-white text-base font-bold tracking-wide">闭环增长</div>
                  <div className="text-white/80 text-[9px] mt-0.5 tracking-wider">CONTENT → COMMERCE</div>
                </motion.div>
              </div>

              {/* 循环箭头 SVG — 半径要小于节点环半径，落在节点和中心之间 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                    <path d="M0,0 L5,2.5 L0,5 z" fill={ACCENT} opacity="0.65" />
                  </marker>
                </defs>
                {[
                  { from: -90, to: 0 },
                  { from: 0, to: 90 },
                  { from: 90, to: 180 },
                  { from: 180, to: 270 },
                ].map((arc, i) => {
                  const r = 38;
                  const startRad = ((arc.from + 18) * Math.PI) / 180;
                  const endRad = ((arc.to - 18) * Math.PI) / 180;
                  const x1 = 50 + r * Math.cos(startRad);
                  const y1 = 50 + r * Math.sin(startRad);
                  const x2 = 50 + r * Math.cos(endRad);
                  const y2 = 50 + r * Math.sin(endRad);
                  return (
                    <path key={i}
                      d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                      stroke={ACCENT}
                      strokeWidth="0.4"
                      strokeDasharray="1.2 1"
                      fill="none"
                      opacity="0.55"
                      markerEnd="url(#arrowhead)" />
                  );
                })}
              </svg>

              {/* 4个节点 — 中心点落在外环上 (radius=42%, 即 inset[8%] 圆环线上) */}
              {[
                { angle: -90, k: "内容生产", v: "短剧创作 + 品牌内容", Icon: PlayCircle, color: "#6366f1" },
                { angle: 0, k: "媒体投放", v: "TikTok / Meta / Google", Icon: Share2, color: "#8b5cf6" },
                { angle: 90, k: "本地转化", v: "区域素材 + 合规落地", Icon: Flag, color: "#ec4899" },
                { angle: 180, k: "商业回流", v: "数据复盘 + 持续优化", Icon: Target, color: "#3b82f6" },
              ].map((node, i) => {
                const Icon = node.Icon;
                const rad = (node.angle * Math.PI) / 180;
                const radius = 38;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                return (
                  <div
                    key={node.k}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ left: `${x}%`, top: `${y}%` }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="w-[88px] h-[88px] rounded-full bg-white/90 backdrop-blur-md flex flex-col items-center justify-center text-center px-2 shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
                      style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderColor: `${node.color}40`,
                        boxShadow: `0 8px 24px -8px ${node.color}30`,
                      }}>
                      <Icon size={18} style={{ color: node.color }} strokeWidth={1.8} />
                      <div className="text-[11px] font-bold mt-1" style={{ color: TEXT_DARK }}>{node.k}</div>
                      <div className="text-[9px] leading-tight mt-0.5" style={{ color: TEXT_MID }}>{node.v}</div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 底部一句话 */}
          <div className="mt-4 text-center text-sm" style={{ color: TEXT_MID }}>
            <span className="inline-block px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/70 transition-all duration-300 hover:bg-white/80 hover:shadow-md">
              短剧吸引流量 · 品牌承接转化 · 数据驱动复投 — 可持续的出海增长飞轮
            </span>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 合作模式 + 政策支持 === */}
      <SnapScreen id="model">
        <ScreenInner>
          <ScreenTitle>灵活对接 · 共赢增长</ScreenTitle>
          <ScreenLead>覆盖跨境与品牌的多类客户,提供长期稳定的资源与运营支持</ScreenLead>

          {/* 合作对象 */}
          <div className="mt-8 w-full">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-center" style={{ color: ACCENT }}>合作对象</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {[
                { t: "跨境电商商家", Icon: Store },
                { t: "品牌广告主", Icon: Megaphone },
                { t: "渠道代理商", Icon: Network },
                { t: "出海创业团队", Icon: Globe2 },
              ].map(({ t, Icon }, i) => (
                <motion.div key={t}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl px-4 py-4 flex flex-col items-center gap-2 glass-card text-center"
                  style={CARD}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 合作流程 — 连贯紫蓝时间轴,步骤标题在轴上方 */}
          <div className="mt-10 w-full">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-center" style={{ color: ACCENT }}>合作流程</div>
            <div className="relative pt-12">
              {/* 贯穿时间轴 */}
              <div className="absolute left-0 right-0 h-[2px]" style={{
                top: "44px",
                background: "linear-gradient(90deg, hsl(245 80% 68%) 0%, hsl(225 85% 60%) 50%, hsl(265 75% 62%) 100%)",
                opacity: 0.9,
                boxShadow: "0 2px 12px hsla(235, 80%, 60%, 0.25)",
              }} />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5">
                {[
                  { s: "步骤一", t: "咨询沟通", d: "明确合作目标与初步方向,梳理客户核心诉求与市场预期。" },
                  { s: "步骤二", t: "需求评估", d: "诊断市场与产品匹配度,评估投放可行性与增长空间。" },
                  { s: "步骤三", t: "签约合作", d: "确定服务方案与合作范围,完成合同签署与资源对接。" },
                  { s: "步骤四", t: "账户搭建", d: "完成媒介账户开户、素材准备与投放结构搭建。" },
                  { s: "步骤五", t: "投放优化", d: "持续测试与策略迭代,优化投放表现与转化效率。" },
                  { s: "步骤六", t: "数据复盘", d: "周期性效果分析与复盘,沉淀方法论助力长期增长。" },
                ].map(({ s, t, d }, i, arr) => {
                  const ratio = i / (arr.length - 1);
                  const hue = 245 + (ratio - 0.5) * 40;
                  const dotColor = `hsl(${hue}, 78%, 60%)`;
                  return (
                    <motion.div key={t}
                      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="relative text-left">
                      {/* 步骤标题(轴上方) */}
                      <div className="absolute -top-[40px] left-0 text-[15px] font-semibold" style={{ color: TEXT_DARK }}>{s}</div>
                      {/* 圆点 */}
                      <div className="absolute -top-[10px] left-0 h-[14px] w-[14px] rounded-full ring-[3px] ring-white"
                        style={{
                          background: dotColor,
                          boxShadow: `0 2px 10px hsla(${hue}, 78%, 55%, 0.55)`,
                        }} />
                      {/* 子标题与描述 */}
                      <div className="pt-3 text-[12px] font-bold mb-1.5" style={{ color: TEXT_DARK }}>{t}</div>
                      <div className="text-[11px] leading-relaxed" style={{ color: TEXT_MID }}>{d}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 政策支持 */}
          <div className="mt-10 w-full">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-center" style={{ color: ACCENT }}>政策支持</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { t: "平台资源支持与返点政策", d: "结合平台政策为合作伙伴争取更优条件。", Icon: Gift },
                { t: "流量扶持与投放策略支持", d: "新客户起量与冷启动阶段的策略陪跑。", Icon: Sparkles },
                { t: "专业培训与长期运营指导", d: "持续输出方法论,帮助团队自我成长。", Icon: GraduationCap },
              ].map(({ t, d, Icon }, i) => (
                <motion.div key={t}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl p-4 glass-card text-left" style={CARD}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{t}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: TEXT_MID }}>{d}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs mt-3 italic text-center" style={{ color: TEXT_MID }}>帮助合作伙伴快速起量,实现稳定增长。</p>
          </div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
