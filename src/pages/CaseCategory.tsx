import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { SubPageLayout } from "@/components/SubPageLayout";
import { GLASS_CARD as CARD, TEXT_DARK, TEXT_MID, ACCENT } from "@/lib/page-styles";

import caseEcommerceImg from "@/assets/case-ecommerce-aliexpress.png";
import caseAliexpressBanner from "@/assets/case-aliexpress-banner.jpg";
import caseTaobaoLogo from "@/assets/case-taobao-logo.png";
import caseTaobaoBanner from "@/assets/case-taobao-banner.png";
import caseTemuLogo from "@/assets/case-temu-logo.png";
import caseTemuBanner from "@/assets/case-temu-banner.jpg";
import caseShopeeLogo from "@/assets/case-shopee-logo.png";
import caseShopeeBanner from "@/assets/case-shopee-banner.jpg";
import caseLazadaLogo from "@/assets/case-lazada-logo.png";
import caseLazadaBanner from "@/assets/case-lazada-banner.png";
import caseBinanceImg from "@/assets/case-binance.png";
import caseBet365Img from "@/assets/case-bet365.png";
import caseHungryImg from "@/assets/case-hungry-studio.png";
import caseTiktokImg from "@/assets/case-tiktok.png";
import caseNordvpnImg from "@/assets/case-nordvpn.png";

type CaseItem = {
  brand: string;
  region: string;
  goal: string;
  highlights: string[];
  metric: string;
  metricLabel: string;
  /** 居中展示的 logo 图(白底/品牌底色),用 contain */
  image?: string;
  imageBg?: string;
  /** 卡片头部大图(背景),与 logo 叠加使用更显品牌感 */
  banner?: string;
  /** 叠加在 banner 左上角的小 logo */
  logo?: string;
  /** logo 容器底色,默认白色 */
  logoBg?: string;
};

type Category = {
  slug: string;
  zh: string;
  en: string;
  color: string;
  intro: string;
  methodology: string[];
  cases: CaseItem[];
};

const CATEGORIES: Category[] = [
  {
    slug: "ecommerce",
    zh: "电商类",
    en: "E-commerce Growth",
    color: "hsl(14 90% 58%)",
    intro: "面向全球电商平台的规模化用户增长与 GMV 提升解决方案",
    methodology: ["高意图人群建模", "多市场本地化投放", "转化漏斗优化"],
    cases: [
      {
        brand: "AliExpress",
        region: "Global",
        goal: "全球新增用户 & GMV",
        highlights: [
          "基于多国家人群分层模型进行精准流量分发",
          "跨境转化效率稳定提升",
          "实现可控获客成本",
        ],
        metric: "8,000+",
        metricLabel: "单月新增高质量用户",
        banner: caseAliexpressBanner,
        logo: caseEcommerceImg,
      },
      {
        brand: "Taobao",
        region: "CN · 跨境",
        goal: "下单转化 & ROI 优化",
        highlights: [
          "通过转化漏斗优化(点击→下单)提升整体效率",
          "有效降低获客成本约 10%",
          "订单稳定性持续提升",
        ],
        metric: "40,000+",
        metricLabel: "月均新增订单",
        banner: caseTaobaoBanner,
        logo: caseTaobaoLogo,
      },
      {
        brand: "Temu",
        region: "Global",
        goal: "CPS / 用户复购",
        highlights: [
          "构建复购导向用户分层投放模型",
          "用户复购率达 25%",
          "实现长期价值沉淀",
        ],
        metric: "3,000+",
        metricLabel: "单月新增高转化下单用户",
        banner: caseTemuBanner,
        logo: caseTemuLogo,
      },
      {
        brand: "Shopee",
        region: "SEA · 4 大市场",
        goal: "东南亚市场本地化增长",
        highlights: [
          "区域化素材本地适配",
          "国家级流量调度",
          "解决多市场分散带来的转化波动问题",
        ],
        metric: "20,000+",
        metricLabel: "单月新增用户",
        banner: caseShopeeBanner,
        logo: caseShopeeLogo,
      },
      {
        brand: "Lazada",
        region: "SEA",
        goal: "节点促销 & 转化提升",
        highlights: [
          "节点流量集中投放 + 动态预算优化",
          "提升节日销售爆发能力",
          "降低投放风险",
        ],
        metric: "15,000+",
        metricLabel: "节日周期新增用户",
        banner: caseLazadaBanner,
        logo: caseLazadaLogo,
      },
    ],
  },
  {
    slug: "fintech",
    zh: "金融类",
    en: "Fintech Growth",
    color: "hsl(45 90% 52%)",
    intro: "面向高价值金融用户的增长与转化优化体系",
    methodology: ["高净值用户筛选", "风险分层", "入金漏斗优化"],
    cases: [
      {
        brand: "Binance",
        region: "Global",
        goal: "注册 & 入金转化",
        highlights: ["高意向人群建模", "转化路径压缩优化", "真实交易用户占比显著提升"],
        metric: "8,000+",
        metricLabel: "单月新增注册用户",
        image: caseBinanceImg,
        imageBg: "hsl(0 0% 100%)",
      },
      {
        brand: "LATAM 信贷平台",
        region: "BR · MX",
        goal: "授信通过率与首借转化",
        highlights: ["风控信号联合建模", "授信通过率 +21%", "次月留存 +16%"],
        metric: "CPA -42%",
        metricLabel: "获客成本下降",
      },
      {
        brand: "新兴市场支付钱包",
        region: "SEA · ID / PH",
        goal: "首充转化 & KYC 完成率",
        highlights: ["KYC 完成率 +28%", "首充转化 +35%", "次日留存 +12%"],
        metric: "首充 +35%",
        metricLabel: "转化率提升",
      },
    ],
  },
  {
    slug: "igaming",
    zh: "博彩类",
    en: "iGaming Growth",
    color: "hsl(150 60% 32%)",
    intro: "面向 iGaming 行业的 ROI 驱动用户增长体系",
    methodology: ["首存预测模型", "ROI 优化投放", "分层流量策略"],
    cases: [
      {
        brand: "Bet365",
        region: "EU",
        goal: "注册 & 首充 (FTD) 转化",
        highlights: ["高转化意图人群聚合", "全漏斗精细化优化", "首存转化效率持续提升"],
        metric: "+3,000",
        metricLabel: "首充 FTD 用户增量",
        image: caseBet365Img,
        imageBg: "hsl(150 60% 28%)",
      },
      {
        brand: "欧盟合规娱乐平台 C",
        region: "EU",
        goal: "活跃用户与复充转化",
        highlights: ["活跃用户 +41%", "复充率 +23%", "合规媒体 100% 直签"],
        metric: "FTD +73%",
        metricLabel: "首充转化提升",
      },
      {
        brand: "LATAM iGaming 品牌",
        region: "BR · CO",
        goal: "ROI 优先的规模化获客",
        highlights: ["首存预测模型", "ROI 优化投放策略", "买量结构多元化"],
        metric: "ROI +58%",
        metricLabel: "投放回报提升",
      },
    ],
  },
  {
    slug: "game",
    zh: "游戏类",
    en: "Game Growth",
    color: "hsl(0 75% 55%)",
    intro: "面向 IAA / IAP 的全球游戏增长与变现体系",
    methodology: ["创意性能系统", "LTV 分层投放", "双轨变现优化"],
    cases: [
      {
        brand: "Hungry Studio",
        region: "Global",
        goal: "用户增长 & 广告变现 (IAA)",
        highlights: ["创意快速 AB 测试", "高频素材迭代", "eCPM 与广告填充率同步提升"],
        metric: "50,000+",
        metricLabel: "月新增用户",
        image: caseHungryImg,
        imageBg: "hsl(0 0% 100%)",
      },
      {
        brand: "全球 SLG 厂商",
        region: "Global",
        goal: "长周期 ROI 与 LTV 优化",
        highlights: ["D7 留存 +28%", "付费 LTV +35%", "买量 ROI +22%"],
        metric: "LTV +35%",
        metricLabel: "付费用户生命周期价值",
      },
      {
        brand: "休闲消除品类 D",
        region: "NA · EU",
        goal: "IAA + IAP 双轨变现",
        highlights: ["双轨变现模型", "ARPDAU +18%", "买量规模 ×2.6"],
        metric: "ARPDAU +18%",
        metricLabel: "日均收入提升",
      },
    ],
  },
  {
    slug: "short-video",
    zh: "短视频类",
    en: "Short Video Growth",
    color: "hsl(340 80% 55%)",
    intro: "内容驱动的全球用户增长与 DAU 提升体系",
    methodology: ["内容分发优化", "多市场扩张", "留存驱动模型"],
    cases: [
      {
        brand: "TikTok",
        region: "Multi-Market",
        goal: "下载 & DAU 增长",
        highlights: ["创意优化体系", "多市场扩张模型", "整体平台活跃度持续上升"],
        metric: "+80,000",
        metricLabel: "用户增长 / 周期",
        image: caseTiktokImg,
        imageBg: "hsl(0 0% 100%)",
      },
      {
        brand: "中东本地化短视频平台",
        region: "MEA",
        goal: "本地化获客与活跃提升",
        highlights: ["阿语本地化创意 12 套", "活跃 DAU +210%", "CPI -35%"],
        metric: "DAU +210%",
        metricLabel: "日活提升",
      },
      {
        brand: "新兴市场内容 App",
        region: "SEA · LATAM",
        goal: "次留与长留驱动",
        highlights: ["留存驱动召回模型", "D7 留存 +18%", "内容消费时长 +24%"],
        metric: "D7 +18%",
        metricLabel: "次周留存提升",
      },
    ],
  },
  {
    slug: "digital",
    zh: "数字服务类",
    en: "Digital Services (App)",
    color: "hsl(230 85% 60%)",
    intro: "面向订阅转化与长期 LTV 优化的增长体系",
    methodology: ["订阅漏斗优化", "高意图用户获取", "付费转化建模"],
    cases: [
      {
        brand: "NordVPN",
        region: "Global",
        goal: "订阅转化 & 高质量用户增长",
        highlights: ["高意向用户筛选", "订阅漏斗优化", "稳定付费增长"],
        metric: "稳定增长",
        metricLabel: "订阅转化效率显著提升",
        image: caseNordvpnImg,
        imageBg: "hsl(0 0% 100%)",
      },
      {
        brand: "全球工具类 App",
        region: "Global · 50+ 国家",
        goal: "全球化扩张 & 新增规模化",
        highlights: ["50+ 国家上线", "新增 +220%", "买量结构多元化"],
        metric: "新增 +220%",
        metricLabel: "周期对比",
      },
      {
        brand: "海外效率类订阅 App",
        region: "NA · EU",
        goal: "付费转化与 LTV 提升",
        highlights: ["付费转化建模", "免费→付费 +27%", "12 月 LTV +33%"],
        metric: "LTV +33%",
        metricLabel: "12 月生命周期价值",
      },
    ],
  },
];

const METHODOLOGY_ICONS: LucideIcon[] = [Target, Sparkles, TrendingUp];

export default function CaseCategory() {
  const { category } = useParams<{ category: string }>();
  const data = CATEGORIES.find((c) => c.slug === category);

  if (!data) {
    return <Navigate to="/global" replace />;
  }

  return (
    <SubPageLayout
      title={`${data.zh} 案例 — 增长成果精选`}
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <span style={{ color: data.color }}>●</span> 增长成果精选 · {data.en}
        </span>
      }
      heroTitle={
        <>
          <span style={{ color: data.color }}>{data.zh}</span>
          <span className="block text-xl md:text-2xl font-medium mt-3" style={{ color: TEXT_MID }}>
            {data.en}
          </span>
        </>
      }
      heroSubtitle={data.intro}
    >
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        {/* 返回 */}
        <Link
          to="/global#cases"
          className="inline-flex items-center gap-1.5 text-sm mb-8 hover:opacity-80 transition-opacity"
          style={{ color: TEXT_MID }}
        >
          <ArrowLeft size={16} /> 返回 增长成果精选
        </Link>

        {/* 核心方法论 */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5" style={{ color: TEXT_DARK }}>
            核心方法论
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.methodology.map((m, i) => {
              const Icon = METHODOLOGY_ICONS[i % METHODOLOGY_ICONS.length];
              return (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-5 flex items-start gap-3"
                  style={CARD}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${data.color.replace("hsl(", "hsla(").replace(")", " / 0.14)")}`, color: data.color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="pt-1.5 text-sm md:text-base font-semibold" style={{ color: TEXT_DARK }}>
                    {m}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 案例卡片 */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-5" style={{ color: TEXT_DARK }}>
            代表案例
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.cases.map((c, i) => (
              <motion.div
                key={c.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col"
                style={CARD}
              >
                {/* 视觉头部 */}
                <div
                  className="relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden"
                  style={{
                    background: c.image
                      ? c.imageBg ?? "hsl(220 15% 96%)"
                      : `linear-gradient(135deg, ${data.color.replace("hsl(", "hsla(").replace(")", " / 0.18)")}, ${data.color.replace("hsl(", "hsla(").replace(")", " / 0.05)")})`,
                  }}
                >
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.brand}
                      className="max-w-[60%] max-h-[70%] object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="text-3xl md:text-4xl font-extrabold tracking-tight"
                      style={{ color: data.color }}
                    >
                      {c.metric}
                    </div>
                  )}
                </div>

                {/* 内容区 */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-bold" style={{ color: TEXT_DARK }}>
                      {c.brand}
                    </h3>
                    <span className="text-[11px]" style={{ color: TEXT_MID }}>{c.region}</span>
                  </div>

                  <div className="flex items-baseline gap-2 leading-none">
                    <span
                      className="text-2xl md:text-3xl font-extrabold tabular-nums"
                      style={{ color: data.color, lineHeight: 1.05 }}
                    >
                      {c.metric}
                    </span>
                    <span className="text-[11px] font-medium" style={{ color: TEXT_MID }}>
                      {c.metricLabel}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold mb-1.5" style={{ color: ACCENT }}>
                      推广目标
                    </div>
                    <div className="text-sm" style={{ color: TEXT_DARK, lineHeight: 1.55 }}>
                      {c.goal}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold mb-1.5" style={{ color: ACCENT }}>
                      成果亮点
                    </div>
                    <ul className="space-y-1.5">
                      {c.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-[13px] flex items-start gap-2"
                          style={{ color: TEXT_MID, lineHeight: 1.55 }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: data.color }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 免责声明 */}
        <p className="text-center text-xs mt-10" style={{ color: "hsl(220 9% 60%)" }}>
          免责声明:部分客户为历史合作或渠道服务案例,数据为综合表现参考
        </p>
      </section>
    </SubPageLayout>
  );
}

export { CATEGORIES as CASE_CATEGORIES };
