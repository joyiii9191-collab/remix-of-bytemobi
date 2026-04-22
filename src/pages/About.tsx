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
  Globe2, Award, Rocket, Star, TrendingUp, ShieldCheck, Cpu,
  Network, Languages, Code2, FileBadge, BadgeCheck,
  Lock, ServerCog, HeartHandshake,
  type LucideIcon,
} from "lucide-react";

type Office = {
  x: number; y: number; name: string; city: string; country: string;
  addr: string; established: string; team: string; focus: string;
  highlight?: boolean;
};

const OFFICES: Office[] = [
  { x: 73, y: 40, name: "西安(总部)", city: "Xi'an", country: "China",
    addr: "西安市高新技术产业开发区科技路旺座现代城B座23层",
    established: "2016", team: "150+",
    focus: "全球总部 · 技术研发 · 商务运营 · 数据中台", highlight: true },
  { x: 78, y: 58, name: "新加坡", city: "Singapore", country: "Singapore",
    addr: "The Corporate Tower - 10 Anson Road, #28-12, Singapore 079903",
    established: "2018", team: "20+",
    focus: "亚太商务 · 跨境支付与合规" },
  { x: 84, y: 38, name: "东京", city: "Tokyo", country: "Japan",
    addr: "東京都港区六本木三丁目3番2 7号スハラ六本木",
    established: "2019", team: "47",
    focus: "日本运营 · 商务 / 媒体合作" },
  { x: 50, y: 30, name: "杜塞尔多夫", city: "Düsseldorf", country: "Germany",
    addr: "Königsallee 14, 3rd Floor, 40212 Düsseldorf, Germany",
    established: "2022", team: "10+",
    focus: "欧洲商务 · GDPR 合规中心" },
  { x: 14, y: 40, name: "洛杉矶", city: "Los Angeles", country: "USA",
    addr: "Figueroa Center - 611 S Figueroa St, Suite 1750, Los Angeles, CA 90017",
    established: "2024", team: "10+",
    focus: "北美运营 · 头部广告主对接" },
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

type PillarPoint = { icon: LucideIcon; text: string };
type Pillar = {
  key: string;
  icon: LucideIcon;
  label: string;
  en: string;
  desc: string;
  points: PillarPoint[];
};

const PILLARS: Pillar[] = [
  {
    key: "global",
    icon: Globe2,
    label: "全球",
    en: "Global",
    desc: "5 个办公点协同,服务覆盖全球关键市场",
    points: [
      { icon: MapPin, text: "西安 / 新加坡 / 东京" },
      { icon: MapPin, text: "杜塞尔多夫 / 洛杉矶" },
      { icon: Languages, text: "10+ 国家本地化商务" },
    ],
  },
  {
    key: "tech",
    icon: Cpu,
    label: "技术",
    en: "Technology",
    desc: "工程与算法驱动,持续投入数字连接基础设施",
    points: [
      { icon: Code2, text: "工程与算法占比 50%+" },
      { icon: FileBadge, text: "多项软件著作权与发明专利" },
      { icon: BadgeCheck, text: "国家高新技术企业" },
    ],
  },
  {
    key: "trust",
    icon: ShieldCheck,
    label: "可信赖",
    en: "Trustworthy",
    desc: "近十年稳健交付,与客户与生态长期共赢",
    points: [
      { icon: Lock, text: "ISO 27001 信息安全认证" },
      { icon: ServerCog, text: "数据合规、交付稳定可靠" },
      { icon: HeartHandshake, text: "与客户长期共同成长" },
    ],
  },
];

const STATS: { value: string; unit: string; label: string }[] = [
  { value: "2016", unit: "", label: "深圳总部成立" },
  { value: "5", unit: "个", label: "全球办公点" },
  { value: "200", unit: "+", label: "全球员工" },
  { value: "10", unit: "+", label: "覆盖国家与地区" },
];

function AnimatedNumber({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const numericMatch = value.match(/^(\d+)/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
          } else {
            setStarted(false);
            setDisplay(0);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!started) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return <span ref={ref}>{display}</span>;
}

function CompanyIntro() {
  return (
    <div className="mt-8 lg:mt-10 flex flex-col gap-8 lg:gap-10">
      {/* 关键数字条 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 pb-8 lg:pb-10"
        style={{ borderBottom: "1px solid rgba(15,20,40,0.08)" }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="text-center"
          >
            <div className="flex items-baseline justify-center gap-0.5">
              <span
                className="text-4xl md:text-5xl font-bold leading-none tracking-tight tabular-nums"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, hsl(265 70% 60%) 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedNumber value={s.value} duration={s.value.length >= 4 ? 2 : 1.4} />
              </span>
              {s.unit && (
                <span
                  className="text-xl md:text-2xl font-semibold"
                  style={{ color: ACCENT }}
                >
                  {s.unit}
                </span>
              )}
            </div>
            <div className="mt-2 text-xs md:text-sm text-center" style={{ color: TEXT_MID }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 三大支柱:全球 · 技术 · 可信赖 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
        {PILLARS.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative md:px-2 flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-4 backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(99,102,241,0.18) 100%)",
                  color: ACCENT,
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow:
                    "0 8px 24px -12px rgba(99,102,241,0.35), inset 0 1px 0 rgba(255,255,255,0.7)",
                }}
              >
                <Icon size={26} strokeWidth={1.6} />
              </div>

              <div className="flex flex-col items-center mb-2">
                <h3
                  className="text-2xl md:text-3xl font-bold leading-tight"
                  style={{ color: TEXT_DARK }}
                >
                  {p.label}
                </h3>
              </div>

              <p
                className="text-sm md:text-[15px] leading-relaxed mb-5 max-w-xs"
                style={{ color: TEXT_MID }}
              >
                {p.desc}
              </p>

              <ul className="space-y-2.5 inline-flex flex-col items-start text-left mx-auto">
                {p.points.map((pt) => {
                  const PtIcon = pt.icon;
                  return (
                    <li
                      key={pt.text}
                      className="text-xs md:text-sm leading-relaxed flex items-center gap-2"
                      style={{ color: TEXT_MID }}
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(99,102,241,0.10)",
                          color: ACCENT,
                        }}
                      >
                        <PtIcon size={13} strokeWidth={2.2} />
                      </span>
                      <span>{pt.text}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* 理念落款 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pt-6 lg:pt-8 flex flex-col items-center justify-center gap-2 text-center"
        style={{ borderTop: "1px solid rgba(15,20,40,0.08)" }}
      >
        <div className="flex items-center gap-3">
          <Sparkles size={18} style={{ color: ACCENT }} />
          <span
            className="text-base md:text-lg font-semibold"
            style={{ color: TEXT_DARK }}
          >
            让数字连接更有价值
          </span>
        </div>
        <div className="text-xs md:text-sm" style={{ color: TEXT_MID }}>
          以理念为指引,以全球化、技术力与可信赖,为客户创造长期价值
        </div>
      </motion.div>
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
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(245,245,247,0) 0%, rgba(245,245,247,0.6) 80%, #F5F5F7 100%)" }} />
        <ScreenInner>
          {/* 顶部徽章已移除 */}
          <ScreenTitle size="xl">
            让数字连接
            <br />
            更有价值
          </ScreenTitle>
          <ScreenLead>
            成立于 2016 年,全球 5 个办公点、200+ 员工,致力于成为全球数字生态中值得信赖的桥梁
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
          <ScreenTitle>公司简介</ScreenTitle>
          <CompanyIntro />
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 3 — 全球办公点 === */}
      <SnapScreen id="offices">
        <ScreenInner>
          <ScreenTitle>全球布局 · 本地深耕</ScreenTitle>
          <ScreenLead>西安(总部)、新加坡(亚太商务)、东京(日本运营)、杜塞尔多夫(欧洲商务)、洛杉矶(北美运营)。鼠标悬停查看详细地址。</ScreenLead>
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
                      <motion.div
                        initial={false}
                        animate={{
                          height: hoverIdx === i ? "auto" : 0,
                          opacity: hoverIdx === i ? 1 : 0,
                          marginTop: hoverIdx === i ? 6 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="text-[11px] leading-relaxed pr-2" style={{ color: TEXT_DARK }}>
                          📍 {o.addr}
                        </div>
                      </motion.div>
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
