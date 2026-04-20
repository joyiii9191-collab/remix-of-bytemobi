import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion, useScroll, useTransform } from "motion/react";
import {
  SnapPage, SnapScreen, ScreenInner,
  ScreenEyebrow, ScreenTitle, ScreenLead,
} from "@/components/SnapPage";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import {
  Building2, MapPin, Users, Calendar, Sparkles,
  Globe2, Award, Rocket, Star, TrendingUp, type LucideIcon,
} from "lucide-react";

type Office = {
  x: number; y: number; name: string; city: string; country: string;
  addr: string; established: string; team: string; focus: string;
  highlight?: boolean;
};

const OFFICES: Office[] = [
  { x: 70, y: 42, name: "西安(总部)", city: "Xi'an", country: "China",
    addr: "中国陕西省西安市高新技术产业开发区科技路旺座现代城 B 座 23 层",
    established: "2016", team: "150+",
    focus: "全球总部 · 技术研发 · 商务运营 · 数据中台", highlight: true },
  { x: 78, y: 52, name: "新加坡", city: "Singapore", country: "Singapore",
    addr: "Singapore Office", established: "2018", team: "20+",
    focus: "东南亚区域中心 · 跨境支付与合规" },
  { x: 82, y: 36, name: "东京", city: "Tokyo", country: "Japan",
    addr: "Tokyo Office", established: "2019", team: "47",
    focus: "日本本地化运营 · 商务 / 媒体合作" },
  { x: 50, y: 30, name: "杜塞尔多夫", city: "Düsseldorf", country: "Germany",
    addr: "Düsseldorf Office", established: "2022", team: "10+",
    focus: "欧洲市场拓展 · GDPR 合规中心" },
  { x: 14, y: 38, name: "洛杉矶", city: "Los Angeles", country: "USA",
    addr: "Los Angeles Office", established: "2024", team: "10+",
    focus: "北美客户服务 · 头部广告主对接" },
];
const MAP_MARKERS = OFFICES.map((o) => ({ x: o.x, y: o.y, highlight: o.highlight }));
const MAP_LINES: Array<[number, number]> = [[0, 1], [0, 2], [0, 3], [0, 4]];

type Milestone = { year: string; title: string; desc: string; icon: LucideIcon };
const TIMELINE: Milestone[] = [
  { year: "2016", title: "深圳总部成立", desc: "公司诞生", icon: Rocket },
  { year: "2018", title: "新加坡办公室", desc: "东南亚中心", icon: Globe2 },
  { year: "2019", title: "东京办公室", desc: "深耕日本本地化", icon: MapPin },
  { year: "2020", title: "高新技术企业", desc: "国家高新认定", icon: Award },
  { year: "2022", title: "欧洲 + ISO27001", desc: "信息安全体系", icon: Star },
  { year: "2023", title: "员工 150+", desc: "全球团队扩张", icon: Users },
  { year: "2024", title: "洛杉矶 + 600+", desc: "覆盖北美里程碑", icon: TrendingUp },
  { year: "2025", title: "员工 200+", desc: "持续投入", icon: Sparkles },
];

const EVENTS = ["IAB", "GDC", "Japan IT Week", "ChinaJoy", "TGS", "中东峰会", "IVS Kyoto"];

import { GLASS_CARD as CARD, TEXT_DARK, TEXT_MID, ACCENT } from "@/lib/page-styles";

function HorizontalTimeline() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="hidden md:block relative">
        <div className="absolute left-0 right-0 top-[58px] h-[2px] rounded-full"
          style={{ background: "rgba(99,102,241,0.15)" }} />
        <motion.div className="absolute left-0 top-[58px] h-[2px] rounded-full"
          style={{
            width: lineWidth,
            background: `linear-gradient(90deg, ${ACCENT} 0%, hsl(265 70% 60%) 100%)`,
          }} />
        <div className="grid grid-cols-8 gap-2 relative">
          {TIMELINE.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.year}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col items-center text-center">
                <div className="text-sm font-bold mb-2" style={{ color: ACCENT }}>{m.year}</div>
                <motion.div whileHover={{ scale: 1.15 }}
                  className="relative w-10 h-10 rounded-full flex items-center justify-center mb-3 z-10"
                  style={{
                    background: "white", border: `2px solid ${ACCENT}`, color: ACCENT,
                    boxShadow: "0 4px 12px -4px rgba(99,102,241,0.4)",
                  }}><Icon size={16} /></motion.div>
                <div className="rounded-xl p-3 w-full"
                  style={{ background: "white", border: "1px solid rgba(15,20,40,0.06)" }}>
                  <div className="text-xs font-semibold mb-1" style={{ color: TEXT_DARK }}>{m.title}</div>
                  <div className="text-[11px] leading-snug" style={{ color: TEXT_MID }}>{m.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="md:hidden relative pl-6 border-l-2" style={{ borderColor: "rgba(99,102,241,0.25)" }}>
        {TIMELINE.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div key={m.year}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pb-4 last:pb-0">
              <div className="absolute -left-[34px] top-0 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "white", border: `2px solid ${ACCENT}`, color: ACCENT }}>
                <Icon size={12} />
              </div>
              <div className="text-xs font-bold" style={{ color: ACCENT }}>{m.year}</div>
              <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>{m.title}</div>
              <div className="text-[11px]" style={{ color: TEXT_MID }}>{m.desc}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  const [openOffice, setOpenOffice] = React.useState<Office | null>(null);
  const [hoverIdx, setHoverIdx] = React.useState<number | null>(null);

  return (
    <SnapPage title="关于我们">
      {/* === Screen 1 — Hero === */}
      <SnapScreen id="hero">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <ParticleWorldMap markers={MAP_MARKERS} lines={MAP_LINES} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.6) 80%, #F5F5F7 100%)" }} />
        <ScreenInner>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-5 self-start"
            style={{ background: "rgba(99,102,241,0.1)", color: "hsl(245 60% 35%)", border: "1px solid rgba(124,58,237,0.18)" }}
          >ABOUT US · 关于我们</motion.div>
          <ScreenTitle size="xl">
            让数字连接
            <br />
            更有价值
          </ScreenTitle>
          <ScreenLead>
            成立于 2016 年,全球 5 个办公点、200+ 员工,致力于成为全球数字生态中值得信赖的桥梁。
          </ScreenLead>
          <div className="mt-10 flex items-center gap-6">
            <StarBorder
              speed="5s"
              onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              了解 ByteMobi
            </StarBorder>
            
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 2 — 公司简介 === */}
      <SnapScreen id="intro" bg="tint">
        <ScreenInner>
          <ScreenTitle>可信、协同、长期</ScreenTitle>
          <ScreenLead>近十年行业积累,全球协同的技术与商务团队。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              { t: "2016 年成立", d: "深耕行业近十年,具备较长的行业积累。" },
              { t: "总部西安 · 全球 5 办公点", d: "多地协同覆盖关键市场。" },
              { t: "200+ 员工", d: "技术、产品、商务、运营一体化团队。" },
              { t: "ISO 27001 + 高新技术企业", d: "可信的合规与技术基础。" },
            ].map((c, i) => (
              <motion.div key={c.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 glass-card" style={CARD}>
                <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_DARK }}>{c.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID }}>{c.d}</p>
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — 全球办公点 === */}
      <SnapScreen id="offices">
        <ScreenInner>
          <ScreenTitle>覆盖关键市场的五个办公点</ScreenTitle>
          <ScreenLead>悬停查看地图节点,点击查看详细信息。</ScreenLead>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-6 flex-1 min-h-[320px]">
            <div className="lg:col-span-3 rounded-2xl overflow-hidden relative glass-card" style={CARD}>
              <ParticleWorldMap markers={MAP_MARKERS} lines={MAP_LINES} />
              {hoverIdx !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${OFFICES[hoverIdx].x}%`,
                    top: `${OFFICES[hoverIdx].y}%`,
                    transform: "translate(-50%, -50%)",
                  }}>
                  <div className="w-12 h-12 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
                      opacity: 0.5,
                    }} />
                </motion.div>
              )}
            </div>
            <div className="lg:col-span-2 flex flex-col gap-2 overflow-y-auto">
              {OFFICES.map((o, i) => (
                <motion.button
                  key={o.name} type="button"
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                  onClick={() => setOpenOffice(o)}
                  whileHover={{ x: 4 }}
                  className="rounded-xl p-3 text-left transition-all"
                  style={{
                    background: "white",
                    border: hoverIdx === i ? `1px solid ${ACCENT}` : "1px solid rgba(15,20,40,0.06)",
                    boxShadow: hoverIdx === i
                      ? "0 6px 18px -8px rgba(99,102,241,0.4)"
                      : "0 2px 8px -4px rgba(15,20,40,0.05)",
                  }}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={13} style={{ color: ACCENT }} />
                        <div className="font-semibold text-sm" style={{ color: TEXT_DARK }}>{o.name}</div>
                        {o.highlight && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                            style={{ background: ACCENT, color: "white" }}>HQ</span>
                        )}
                      </div>
                      <div className="text-[11px]" style={{ color: TEXT_MID }}>
                        {o.city}, {o.country} · 自 {o.established} 起
                      </div>
                    </div>
                    <div className="text-xs font-medium shrink-0" style={{ color: ACCENT }}>详情 →</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </ScreenInner>

        <Dialog open={!!openOffice} onOpenChange={(o) => !o && setOpenOffice(null)}>
          <DialogContent className="max-w-md">
            {openOffice && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(99,102,241,0.1)", color: ACCENT }}><Building2 size={18} /></div>
                    {openOffice.highlight && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded"
                        style={{ background: ACCENT, color: "white" }}>HEADQUARTERS</span>
                    )}
                  </div>
                  <DialogTitle style={{ color: TEXT_DARK }}>{openOffice.name}</DialogTitle>
                  <DialogDescription style={{ color: TEXT_MID }}>
                    {openOffice.city}, {openOffice.country}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 mt-2">
                  <div className="flex gap-3">
                    <Calendar size={16} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                    <div>
                      <div className="text-xs font-semibold" style={{ color: TEXT_MID }}>成立时间</div>
                      <div className="text-sm" style={{ color: TEXT_DARK }}>{openOffice.established} 年</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users size={16} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                    <div>
                      <div className="text-xs font-semibold" style={{ color: TEXT_MID }}>团队规模</div>
                      <div className="text-sm" style={{ color: TEXT_DARK }}>{openOffice.team} 人</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Sparkles size={16} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                    <div>
                      <div className="text-xs font-semibold" style={{ color: TEXT_MID }}>业务方向</div>
                      <div className="text-sm" style={{ color: TEXT_DARK }}>{openOffice.focus}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                    <div>
                      <div className="text-xs font-semibold" style={{ color: TEXT_MID }}>办公地址</div>
                      <div className="text-sm" style={{ color: TEXT_DARK }}>{openOffice.addr}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </SnapScreen>

      {/* === Screen 4 — 发展历程 === */}
      <SnapScreen id="timeline" bg="tint">
        <ScreenInner>
          <ScreenTitle>十年路径</ScreenTitle>
          <ScreenLead>从 2016 到 2025,八个里程碑串起公司的全球化轨迹。</ScreenLead>
          <div className="mt-10">
            <HorizontalTimeline />
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5 — 企业文化 === */}
      <SnapScreen id="culture">
        <ScreenInner>
          <ScreenTitle>使命 · 愿景 · 价值观</ScreenTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
              className="rounded-2xl p-7 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Mission</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: TEXT_DARK }}>使命</h3>
              <p className="text-sm" style={{ color: TEXT_MID }}>让数字连接更有价值。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-7 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Vision</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: TEXT_DARK }}>愿景</h3>
              <p className="text-sm" style={{ color: TEXT_MID }}>成为全球数字生态中值得信赖的桥梁。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-7 glass-card" style={CARD}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Values</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: TEXT_DARK }}>价值观</h3>
              <ul className="text-sm space-y-1.5" style={{ color: TEXT_MID }}>
                <li>· 长期主义</li>
                <li>· 开放协作</li>
                <li>· 客户导向</li>
                <li>· 持续创新</li>
              </ul>
            </motion.div>
          </div>
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 6 — 全球活动 === */}
      <SnapScreen id="events" bg="tint">
        <ScreenInner>
          <ScreenTitle>持续参与全球行业活动</ScreenTitle>
          <ScreenLead>覆盖游戏、广告、出海等多个行业的国际峰会与展会。</ScreenLead>
          <div className="flex flex-wrap gap-3 mt-10">
            {EVENTS.map((e, i) => (
              <motion.div key={e}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full text-sm flex items-center gap-2 font-medium"
                style={{ ...CARD, color: TEXT_DARK }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                {e}
              </motion.div>
            ))}
          </div>
        </ScreenInner>
      </SnapScreen>
    </SnapPage>
  );
}
