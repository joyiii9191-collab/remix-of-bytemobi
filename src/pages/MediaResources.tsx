import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion } from "motion/react";
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
            覆盖 TikTok、Facebook、Google 等全球主流媒体,提供从开户、投放、优化到合规风控与代运营的一站式服务。
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
                items: ["短剧内容制作与发行", "品牌全球推广", "多平台协同投放"],
              },
              {
                t: "稳定高效增长",
                d: "账户健康度与素材效率持续监控,避免起量断档。",
                items: ["多平台资源整合", "策略协同优化", "全流程合规风控"],
              },
              {
                t: "快速出海启动",
                d: "从合规到上线,按周交付而不是按月。",
                items: ["1–3 个工作日开户", "多主体 / 多币种支持", "账户代投代运营"],
              },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 glass-card" style={CARD}>
                <div className="text-3xl font-bold mb-3" style={{ color: ACCENT }}>0{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MID }}>{c.d}</p>
                <ul className="space-y-1.5 pt-3 border-t border-white/40">
                  {c.items.map((it) => (
                    <li key={it} className="text-sm flex items-start gap-2" style={{ color: TEXT_MID }}>
                      <span className="mt-2 h-1 w-1 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      <span>{it}</span>
                    </li>
                  ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { t: "开户与投放启动", d: "为广告主完成账号开设、账户准备与投放上线前配置。" },
              { t: "代投与优化", d: "根据投放目标进行日常优化、素材迭代与预算调整。" },
              { t: "风控与合规", d: "检查素材、定向和投放方式是否符合平台规则。" },
              { t: "数据与复盘", d: "整理投放结果、做效果分析与下一轮优化建议。" },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 glass-card" style={CARD}>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
              </motion.div>
            ))}
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

      {/* === Screen 5 — 合作模式 === */}
      <SnapScreen id="model">
        <ScreenInner>
          <ScreenTitle>覆盖跨境与品牌的多类客户</ScreenTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-8">
            {["跨境商家", "品牌广告主", "渠道代理", "出海团队"].map((t, i) => (
              <motion.div key={t}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl px-4 py-5 text-center text-sm font-semibold"
                style={{ ...CARD, color: TEXT_DARK }}>{t}</motion.div>
            ))}
          </div>
          <div className="rounded-2xl p-6 glass-card" style={CARD}>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>合作流程</div>
            <div className="flex flex-wrap items-center gap-2 text-sm" style={{ color: TEXT_DARK }}>
              {["咨询", "评估", "签约", "搭建", "优化", "复盘"].map((s, i, arr) => (
                <React.Fragment key={s}>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}>{s}</motion.span>
                  {i < arr.length - 1 && <span style={{ color: "hsl(230 15% 60%)" }}>→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 6 — 政策支持 === */}
      <SnapScreen id="policy" bg="tint">
        <ScreenInner>
          <ScreenTitle>平台资源与长期运营支持</ScreenTitle>
          <ScreenLead>帮助合作伙伴快速起量,实现稳定增长。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {[
              { t: "平台资源支持与返点政策", d: "结合平台政策为合作伙伴争取更优条件。" },
              { t: "流量扶持与投放策略支持", d: "新客户起量与冷启动阶段的策略陪跑。" },
              { t: "专业培训与长期运营指导", d: "持续输出方法论,帮助团队自我成长。" },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 glass-card" style={CARD}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
