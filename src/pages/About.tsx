import React from "react";
import StarBorder from "@/components/StarBorder";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import {
  SnapPage, SnapScreen, ScreenInner, SnapScrollContext,
  ScreenEyebrow, ScreenTitle, ScreenLead,
} from "@/components/SnapPage";
import { ParticleWorldMap } from "@/components/ParticleWorldMap";
import officeXian from "@/assets/office-xian.jpg";
import officeSingapore from "@/assets/office-singapore.jpg";
import officeTokyo from "@/assets/office-tokyo.jpg";
import officeDusseldorf from "@/assets/office-dusseldorf.jpg";
import officeLosangeles from "@/assets/office-losangeles.jpg";
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
  image: string;
  nameZh: string;
  nameEn: string;
};

const OFFICES: Office[] = [
  { x: 73, y: 40, name: "西安(总部)", nameZh: "西安", nameEn: "Xi'an", city: "Xi'an", country: "China",
    addr: "西安市高新技术产业开发区科技路旺座现代城B座23层",
    established: "2016", team: "150+",
    focus: "全球总部 · 技术研发 · 商务运营 · 数据中台", highlight: true,
    image: officeXian },
  { x: 78, y: 58, name: "新加坡", nameZh: "新加坡", nameEn: "Singapore", city: "Singapore", country: "Singapore",
    addr: "The Corporate Tower - 10 Anson Road, #28-12, Singapore 079903",
    established: "2018", team: "20+",
    focus: "亚太商务 · 跨境支付与合规",
    image: officeSingapore },
  { x: 84, y: 38, name: "东京", nameZh: "东京", nameEn: "Tokyo", city: "Tokyo", country: "Japan",
    addr: "東京都港区六本木三丁目3番2 7号スハラ六本木",
    established: "2019", team: "47",
    focus: "日本运营 · 商务 / 媒体合作",
    image: officeTokyo },
  { x: 50, y: 30, name: "杜塞尔多夫", nameZh: "杜塞尔多夫", nameEn: "Düsseldorf", city: "Düsseldorf", country: "Germany",
    addr: "Königsallee 14, 3rd Floor, 40212 Düsseldorf, Germany",
    established: "2022", team: "10+",
    focus: "欧洲商务 · GDPR 合规中心",
    image: officeDusseldorf },
  { x: 14, y: 40, name: "洛杉矶", nameZh: "洛杉矶", nameEn: "Los Angeles", city: "Los Angeles", country: "USA",
    addr: "Figueroa Center - 611 S Figueroa St, Suite 1750, Los Angeles, CA 90017",
    established: "2024", team: "10+",
    focus: "北美运营 · 头部广告主对接",
    image: officeLosangeles },
];

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

// 时间轴渐变色:蓝 → 紫
const TIMELINE_GRADIENT = "linear-gradient(180deg, hsl(220 90% 60%) 0%, hsl(250 80% 62%) 50%, hsl(280 75% 60%) 100%)";

function TimelineItem({
  m,
  index,
  total,
  scrollYProgress,
}: {
  m: Milestone;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const isLeft = index % 2 === 0;
  // 每一项在整体进度中的位置
  const itemPos = total > 1 ? index / (total - 1) : 0;
  const start = Math.max(0, itemPos - 0.08);
  const end = Math.min(1, itemPos + 0.04);

  // 染色进度
  const colorProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

  // 节点底色:白 → 蓝紫
  const dotBg = useTransform(
    colorProgress,
    [0, 1],
    ["rgba(255,255,255,1)", "hsl(250 80% 60%)"]
  );
  // 渐变文字层透明度:0 → 1 (覆盖在灰色文字之上)
  const gradientOpacity = useTransform(colorProgress, [0, 1], [0, 1]);
  // 灰色底层透明度:1 → 0 (染色完成后完全隐藏,避免底部露出灰色)
  const greyOpacity = useTransform(colorProgress, [0, 0.6, 1], [1, 0.4, 0]);

  // 入场动效:基于同一进度,把 opacity / x / y 一起推
  const enterProgress = useTransform(scrollYProgress, [start - 0.02, end], [0, 1]);
  const opacity = useTransform(enterProgress, [0, 1], [0, 1]);
  const y = useTransform(enterProgress, [0, 1], [40, 0]);
  const x = useTransform(enterProgress, [0, 1], [isLeft ? -40 : 40, 0]);
  const dotScale = useTransform(enterProgress, [0, 1], [0.4, 1]);
  const dotOpacity = useTransform(enterProgress, [0, 1], [0.2, 1]);

  const yearStyle: React.CSSProperties = {
    fontSize: "clamp(3.2rem, 7vw, 5.5rem)",
    fontFamily:
      "'Playfair Display', 'Cormorant Garamond', 'Noto Serif SC', Georgia, serif",
    letterSpacing: "-0.02em",
  };

  return (
    <li className="relative min-h-[140px] md:min-h-[180px]">
      {/* 中轴节点 */}
      <motion.div
        className="absolute top-3 z-10 left-[18px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
        style={{
          background: dotBg,
          border: "2px solid hsl(250 80% 60%)",
          opacity: dotOpacity,
          scale: dotScale,
          boxShadow: "0 0 0 6px rgba(120,90,240,0.10)",
        }}
      />

      {/* 内容 — 桌面端左右交错;移动端右侧 */}
      <div
        className={`pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${
          isLeft ? "" : "md:[&>*:first-child]:col-start-2"
        }`}
      >
        <motion.div
          className={isLeft ? "md:text-right md:pr-6" : "md:text-left md:pl-6"}
          style={{ opacity, x, y }}
        >
          {/* 年份 — 灰色底层 + 蓝紫渐变层叠加,渐变完成时灰色淡出避免底部露色 */}
          <div className="relative inline-block">
            {/* 灰色底层 */}
            <motion.div
              className="font-bold tracking-tight tabular-nums"
              style={{
                ...yearStyle,
                lineHeight: 1.1,
                color: "rgba(15,20,40,0.18)",
                opacity: greyOpacity,
              }}
            >
              {m.year}
            </motion.div>
            {/* 蓝紫渐变覆盖层 */}
            <motion.div
              aria-hidden
              className="absolute inset-0 font-bold tracking-tight tabular-nums"
              style={{
                ...yearStyle,
                lineHeight: 1.1,
                opacity: gradientOpacity,
                backgroundImage:
                  "linear-gradient(135deg, hsl(220 90% 58%) 0%, hsl(250 85% 60%) 50%, hsl(280 80% 60%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {m.year}
            </motion.div>
          </div>

          <div
            className="mt-3 text-lg md:text-xl font-semibold"
            style={{ color: TEXT_DARK }}
          >
            {m.title}
          </div>
          <div
            className="mt-1 text-sm md:text-base leading-relaxed"
            style={{ color: TEXT_MID }}
          >
            {m.desc}
          </div>
        </motion.div>
      </div>
    </li>
  );
}

function HorizontalTimeline() {
  const ref = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useContext(SnapScrollContext);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef ?? undefined,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto w-full">
      {/* 中轴线 — 背景 */}
      <div
        className="absolute top-0 bottom-0 w-[2px] rounded-full left-[18px] md:left-1/2 md:-translate-x-1/2"
        style={{ background: "rgba(15,20,40,0.08)" }}
      />
      {/* 中轴线 — 蓝紫渐变进度条 */}
      <motion.div
        className="absolute top-0 w-[3px] rounded-full left-[18px] md:left-1/2 md:-translate-x-[1.5px] origin-top"
        style={{
          height: lineHeight,
          background: TIMELINE_GRADIENT,
          boxShadow: "0 0 14px rgba(120,90,240,0.45)",
        }}
      />

      <ol className="relative space-y-16 md:space-y-24">
        {TIMELINE.map((m, i) => (
          <TimelineItem
            key={m.year}
            m={m}
            index={i}
            total={TIMELINE.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </ol>
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


/* ============================================================
 * 企业文化 — 使命/愿景大字陈述屏
 * ============================================================ */
function CultureStatement({
  eyebrow,
  kicker,
  statement,
  sub,
  icon: Icon,
  align = "left",
}: {
  eyebrow: string;
  kicker: string;
  statement: string[];
  sub: string;
  icon: LucideIcon;
  align?: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={`w-full flex flex-col ${
        isRight ? "md:items-end md:text-right" : "md:items-start md:text-left"
      } items-start text-left gap-6`}
    >
      {/* Eyebrow + Icon */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(120,90,240,0.18) 100%)",
            border: "1px solid rgba(255,255,255,0.6)",
            color: ACCENT,
            boxShadow: "0 8px 24px -12px rgba(99,102,241,0.35)",
          }}
        >
          <Icon size={20} strokeWidth={1.7} />
        </span>
        <span
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em]"
          style={{ color: ACCENT }}
        >
          {eyebrow}
        </span>
      </motion.div>

      {/* 中文小标(使命/愿景) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-base md:text-lg font-medium"
        style={{ color: TEXT_MID, letterSpacing: "0.04em" }}
      >
        {kicker}
      </motion.div>

      {/* 大字陈述 — 蓝紫渐变 */}
      <div className="w-full">
        {statement.map((line, i) => (
          <motion.div
            key={line + i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)",
              fontFamily:
                "'Playfair Display', 'Cormorant Garamond', 'Noto Serif SC', Georgia, serif",
              backgroundImage:
                "linear-gradient(135deg, hsl(220 90% 58%) 0%, hsl(250 85% 60%) 50%, hsl(280 80% 60%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* 副文 */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="max-w-2xl text-base md:text-lg leading-relaxed"
        style={{ color: TEXT_MID }}
      >
        {sub}
      </motion.p>
    </div>
  );
}

/* ============================================================
 * 价值观 4 卡片网格
 * ============================================================ */
type ValueItem = {
  no: string;
  label: string;
  en: string;
  desc: string;
  icon: LucideIcon;
};

const VALUES: ValueItem[] = [
  {
    no: "01",
    label: "长期主义",
    en: "Long-termism",
    desc: "以十年视角做今天的选择,让每一项投入都为未来积累复利。",
    icon: ShieldCheck,
  },
  {
    no: "02",
    label: "开放协作",
    en: "Open Collaboration",
    desc: "跨地域、跨团队、跨文化共建,让信息流动、让伙伴受益。",
    icon: HeartHandshake,
  },
  {
    no: "03",
    label: "客户导向",
    en: "Customer First",
    desc: "从客户的真实场景出发,用结果衡量价值,持续创造可被验证的增长。",
    icon: BadgeCheck,
  },
  {
    no: "04",
    label: "持续创新",
    en: "Relentless Innovation",
    desc: "不满足于既有解法,把技术、产品与服务持续推向更优的下一版本。",
    icon: Cpu,
  },
];

function ValueGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-8 w-full">
      {VALUES.map((v, i) => {
        const Icon = v.icon;
        return (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl p-6 md:p-7 overflow-hidden glass-card"
            style={CARD}
          >
            {/* 悬浮渐变光斑 */}
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle, hsl(250 85% 65% / 0.35) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <div className="relative flex items-start gap-4">
              {/* 序号 — 渐变大字 */}
              <div
                className="font-bold leading-none tabular-nums shrink-0"
                style={{
                  fontSize: "2.25rem",
                  fontFamily:
                    "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                  backgroundImage:
                    "linear-gradient(135deg, hsl(220 90% 58%) 0%, hsl(280 80% 60%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: 1.05,
                }}
              >
                {v.no}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-1">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(120,90,240,0.18) 100%)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      color: ACCENT,
                    }}
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <h3
                    className="text-lg md:text-xl font-bold"
                    style={{ color: TEXT_DARK }}
                  >
                    {v.label}
                  </h3>
                </div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-3"
                  style={{ color: ACCENT }}
                >
                  {v.en}
                </div>
                <p
                  className="text-sm md:text-[15px] leading-relaxed"
                  style={{ color: TEXT_MID }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
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
          <ScreenLead>5 城办公网络协同,在每一个关键市场实现本地化运营与服务。</ScreenLead>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-5 gap-y-4 mt-8 items-start">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenOffice(o)}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                  className="relative w-full rounded-2xl overflow-hidden text-left aspect-[16/10] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 block"
                  style={{
                    border: "1px solid rgba(255,255,255,0.6)",
                    boxShadow:
                      hoverIdx === i
                        ? "0 22px 50px -20px rgba(30,41,99,0.35)"
                        : "0 10px 28px -16px rgba(30,41,99,0.22)",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  {/* 背景图 */}
                  <img
                    src={o.image}
                    alt={`${o.nameZh} ${o.nameEn} 办公点`}
                    loading="lazy"
                    width={1280}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* 半透明白色遮罩 — 更亮以提升可读性 */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(240,244,252,0.78) 0%, rgba(240,244,252,0.62) 55%, rgba(240,244,252,0.82) 100%)",
                    }}
                  />

                  {/* HQ 标签 — 更小更精致 */}
                  {o.highlight && (
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className="text-[9px] font-semibold tracking-[0.18em] uppercase px-2 py-0.5 rounded-full backdrop-blur-md"
                        style={{
                          background: "rgba(255,255,255,0.9)",
                          color: ACCENT,
                          border: "1px solid rgba(99,102,241,0.25)",
                        }}
                      >
                        HQ
                      </span>
                    </div>
                  )}

                  {/* 文本内容居中 */}
                  <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
                    <h3
                      className="text-2xl md:text-3xl font-bold leading-tight"
                      style={{
                        color: "hsl(225 60% 18%)",
                        textShadow: "0 1px 2px rgba(255,255,255,0.6)",
                      }}
                    >
                      {o.nameZh}{" "}
                      <span className="font-semibold">{o.nameEn}</span>
                    </h3>
                    <div
                      className="mt-2.5 text-xs md:text-sm font-medium tracking-wide"
                      style={{
                        color: "hsl(225 35% 28%)",
                        textShadow: "0 1px 2px rgba(255,255,255,0.5)",
                      }}
                    >
                      {o.focus.split("·")[0].trim()}
                    </div>
                  </div>

                  {/* 卡片内底部 — 悬停时显示完整地址 */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-20 px-4 pt-6 pb-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.95) 100%)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MapPin size={13} className="shrink-0" style={{ color: ACCENT }} />
                      <p
                        className="text-[12px] md:text-[13px] leading-relaxed text-center"
                        style={{ color: "hsl(225 45% 22%)" }}
                      >
                        {o.addr}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
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

      {/* === Screen 4 — 发展历程(不吸附,允许长内容自由滚动) === */}
      <SnapScreen id="timeline" bg="tint" snap={false}>
        <ScreenInner className="!justify-start py-12 md:py-16">
          <ScreenTitle>十年路径</ScreenTitle>
          <ScreenLead>从 2016 到 2025,八个里程碑串起公司的全球化轨迹。</ScreenLead>
          <div className="mt-10 w-full">
            <HorizontalTimeline />
          </div>
          {/* 底部留白:让最后一项 (2025) 有足够滚动空间完整展示后再翻页 */}
          <div aria-hidden className="w-full" style={{ height: "20vh" }} />
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5a — 使命 === */}
      <SnapScreen id="mission">
        <ScreenInner>
          <CultureStatement
            eyebrow="Our Mission"
            kicker="使命"
            statement={["让数字连接", "更有价值"]}
            sub="以技术与服务为支点,放大每一次跨地域、跨文化数字连接背后的商业与社会价值。"
            icon={Rocket}
          />
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5b — 愿景 === */}
      <SnapScreen id="vision" bg="tint">
        <ScreenInner>
          <CultureStatement
            eyebrow="Our Vision"
            kicker="愿景"
            statement={["成为全球数字生态中", "值得信赖的桥梁"]}
            sub="连接世界各地的伙伴、用户与机会,在每一个市场被认可为长期、稳定、可信赖的合作者。"
            icon={Globe2}
            align="right"
          />
        </ScreenInner>
      </SnapScreen>

      {/* === Screen 5c — 价值观 === */}
      <SnapScreen id="values">
        <ScreenInner>
          <ScreenEyebrow>Our Values</ScreenEyebrow>
          <ScreenTitle>四个我们坚持的事</ScreenTitle>
          <ScreenLead>从战略到日常协作,这四件事定义我们如何思考、如何做选择。</ScreenLead>
          <ValueGrid />
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
