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

export default function HopeX() {
  return (
    <SnapPage title="程序化广告">
      {/* === Screen 1 — Hero === */}
      <SnapScreen id="hero">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.6) 80%, #F5F5F7 100%)" }} />
        <ScreenInner>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-5 self-start"
            style={{ background: "rgba(99,102,241,0.1)", color: "hsl(245 60% 35%)", border: "1px solid rgba(124,58,237,0.18)" }}
          >HOPEX · PROGRAMMATIC</motion.div>
          <ScreenTitle size="xl">
            关于 HopeX
          </ScreenTitle>
          <ScreenLead>
            HopeX 是 HopeMobi 旗下的程序化广告平台,致力于为广告主与流量方提供可预测增长的商业化解决方案 —— 在不确定的市场中,提供确定性。
          </ScreenLead>
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
        <ScreenInner>
          <ScreenTitle>规模与基础能力</ScreenTitle>
          <ScreenLead>规模是程序化的前提,HopeX 的请求量与连接数支持稳定可预测的增长。</ScreenLead>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {SCALE.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 glass-card" style={CARD}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(180deg, hsl(245 70% 30%) 0%, hsl(245 60% 50%) 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1,
                  }}><CountUp value={s.v} suffix={s.s} /></div>
                <div className="text-sm" style={{ color: TEXT_MID }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — 全球流量网络 === */}
      <SnapScreen id="network">
        <ScreenInner>
          <ScreenTitle>覆盖全球四大区域</ScreenTitle>
          <ScreenLead>从北美到东南亚,从欧洲到拉美,多区域并行支持业务扩张。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { t: "北美 NA", d: "US / CA,成熟广告市场,适合高预算、强转化投放。" },
              { t: "亚太 APAC", d: "SEA / JP / KR / IN,多语言多市场并行。" },
              { t: "拉美 LATAM", d: "BR / MX 等,高增长市场,适合规模化获取新用户。" },
              { t: "欧洲及中东非 EMEA", d: "覆盖更广的国际化商业投放区域。" },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 glass-card" style={CARD}
              >
                <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 4 — DSP 能力 === */}
      <SnapScreen id="dsp" bg="tint">
        <ScreenInner>
          <ScreenTitle>广告主一站式买量</ScreenTitle>
          <ScreenLead>从 RTB 到联盟、从主流媒体到 OEM,多种买量方式按需组合。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { t: "全渠道", d: "RTB、联盟 CPA/CPL/CPS、主流媒体采购、OEM 等。" },
              { t: "智能受众分群", d: "精准定向,覆盖核心人群与潜客。" },
              { t: "实时策略调整", d: "秒级响应,预算自适应、智能限流。" },
              { t: "人机协同优化", d: "算法 + 投手共同迭代,避免单点失败。" },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-5 glass-card" style={CARD}
              >
                <h3 className="text-base font-semibold mb-1.5" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-2xl p-6 mt-5 glass-card" style={CARD}>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>全球行业覆盖 · 仅展示 Logo</div>
            <div className="flex flex-wrap gap-2">
              {["电商", "游戏", "工具", "短剧", "娱乐内容", "金融科技"].map((t) => (
                <div key={t} className="px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{ background: "rgba(99,102,241,0.08)", color: "hsl(245 60% 35%)" }}>{t}</div>
              ))}
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — SSP 能力 === */}
      <SnapScreen id="ssp">
        <ScreenInner>
          <ScreenTitle>多形式 · 多预算入口</ScreenTitle>
          <ScreenLead>从 Banner 到 CTV,所有主流广告位 + 多元预算源。</ScreenLead>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
            {["Banner", "Video", "Native", "App", "Web", "CTV"].map((t, i) => (
              <motion.div key={t}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl px-4 py-4 text-center text-sm font-semibold glass-card" style={{ ...CARD, color: TEXT_DARK }}>{t}</motion.div>
            ))}
          </div>
          <div className="rounded-2xl p-6 mt-6 glass-card" style={CARD}>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>多元预算接入 · 官方 Logo 展示</div>
            <div className="flex flex-wrap gap-2">
              {["ShareThrough", "RTB House", "Shopee 品牌直客", "Shein 品牌直客"].map((t) => (
                <div key={t} className="px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{ background: "rgba(99,102,241,0.08)", color: "hsl(245 60% 35%)" }}>{t}</div>
              ))}
            </div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 6 — 流量来源 === */}
      <SnapScreen id="traffic" bg="tint">
        <ScreenInner>
          <ScreenTitle>自有 + 外部流量</ScreenTitle>
          <ScreenLead>自有矩阵保证基本盘,外部对接保证规模与多样性。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {[
              { t: "自有 App 矩阵", d: "短剧 / 工具 / 娱乐等自营 App。" },
              { t: "OEM SDK", d: "深度集成主流安卓 OEM 渠道。" },
              { t: "外部开发者体系", d: "持续扩张第三方开发者生态。" },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 glass-card" style={CARD}
              >
                <h3 className="text-lg font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 7 — 合作价值 === */}
      <SnapScreen id="value">
        <ScreenInner>
          <ScreenTitle>一端服务广告主,一端服务流量方</ScreenTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
              className="rounded-2xl p-7 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>For Advertisers</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_DARK }}>广告主</h3>
              <ul className="space-y-2.5 text-sm" style={{ color: TEXT_DARK }}>
                <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />稳定规模化增长</li>
                <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />高 ROI</li>
                <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />全球覆盖</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
              className="rounded-2xl p-7 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>For Publishers</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_DARK }}>流量方</h3>
              <ul className="space-y-2.5 text-sm" style={{ color: TEXT_DARK }}>
                <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />多元预算</li>
                <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />收益最大化</li>
                <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />技术驱动</li>
              </ul>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-sm md:text-base mt-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: TEXT_MID }}>
            HopeX 致力于打通广告主与流量方之间的高效连接,通过技术驱动与全球化资源整合,实现规模、效率与收益的持续增长。
          </motion.p>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
