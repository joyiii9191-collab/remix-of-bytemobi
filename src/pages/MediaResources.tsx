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
                className="rounded-2xl p-7 glass-card" style={CARD}>
                <div className="text-3xl font-bold mb-3" style={{ color: ACCENT }}>0{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MID }}>{c.d}</p>
                <ul className="space-y-3 pt-3 border-t border-white/40">
                  {c.items.map((it) => {
                    const ItemIcon = it.Icon;
                    return (
                      <li key={it.text} className="text-sm flex items-center justify-center gap-2.5" style={{ color: TEXT_MID }}>
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-md flex-shrink-0"
                          style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                          <ItemIcon size={12} strokeWidth={2} />
                        </span>
                        <span>{it.text}</span>
                      </li>
                    );
                  })}
                </ul>
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
                  className="rounded-2xl p-7 glass-card" style={CARD}>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MID }}>{c.d}</p>
                  <ul className="space-y-3 pt-3 border-t border-white/40">
                    {c.items.map((it) => {
                      const ItemIcon = it.Icon;
                      return (
                        <li key={it.text} className="text-sm flex items-center justify-center gap-2.5" style={{ color: TEXT_MID }}>
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md flex-shrink-0"
                            style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                            <ItemIcon size={12} strokeWidth={2} />
                          </span>
                          <span>{it.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 4 — 特色亮点 === */}
      <SnapScreen id="highlight" bg="tint">
        <ScreenInner>
          <ScreenTitle>短剧与品牌出海一站式</ScreenTitle>
          <ScreenLead>从内容形态、本地化创意到投放与复盘的完整链路。</ScreenLead>
          <div className="rounded-2xl p-8 mt-10 glass-card" style={CARD}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { k: "短剧出海", v: "内容 + 投放协同" },
                { k: "品牌出海", v: "整合营销解决方案" },
                { k: "多平台", v: "TikTok / Meta / Google" },
                { k: "本地化", v: "区域素材 + 合规" },
              ].map((x, i) => (
                <motion.div key={x.k}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <div className="text-sm font-semibold mb-1" style={{ color: ACCENT }}>{x.k}</div>
                  <div className="text-sm" style={{ color: TEXT_MID }}>{x.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 合作模式 + 政策支持 === */}
      <SnapScreen id="model">
        <ScreenInner>
          <ScreenTitle>灵活对接 · 共赢增长</ScreenTitle>
          <ScreenLead>覆盖跨境与品牌的多类客户,提供长期稳定的资源与运营支持。</ScreenLead>

          {/* 合作对象 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 w-full">
            {[
              { t: "跨境电商商家", Icon: Store },
              { t: "品牌广告主", Icon: Megaphone },
              { t: "渠道代理商", Icon: Network },
              { t: "出海创业团队", Icon: Globe2 },
            ].map(({ t, Icon }, i) => (
              <motion.div key={t}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl px-4 py-4 flex flex-col items-center gap-2 glass-card"
                style={CARD}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{t}</span>
              </motion.div>
            ))}
          </div>

          {/* 合作流程 — 箭头标签式 */}
          <div className="mt-5 w-full">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-left" style={{ color: ACCENT }}>合作流程</div>
            <div className="flex flex-wrap items-stretch gap-1.5">
              {[
                { s: "STEP 01", t: "咨询沟通", Icon: MessageCircle },
                { s: "STEP 02", t: "需求评估", Icon: ClipboardCheck },
                { s: "STEP 03", t: "签约合作", Icon: FileSignature },
                { s: "STEP 04", t: "账户搭建", Icon: Settings2 },
                { s: "STEP 05", t: "投放优化", Icon: TrendingUp },
                { s: "STEP 06", t: "数据复盘", Icon: PieChart },
              ].map(({ s, t, Icon }, i) => (
                <motion.div key={t}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex-1 min-w-[110px] relative px-3 py-2.5 flex items-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, hsl(${230 + i * 8} 70% ${60 + (i % 2) * 5}%) 0%, hsl(${245 + i * 6} 65% ${52 + (i % 2) * 5}%) 100%)`,
                    color: "white",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
                    paddingLeft: i === 0 ? "12px" : "20px",
                  }}>
                  <Icon size={16} strokeWidth={2} className="flex-shrink-0" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] font-bold opacity-80 tracking-wider">{s}</div>
                    <div className="text-xs font-semibold">{t}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 政策支持 */}
          <div className="mt-5 w-full">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-left" style={{ color: ACCENT }}>政策支持</div>
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
