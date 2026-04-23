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
import caseExnessLogo from "@/assets/case-exness-logo.png";
import caseExnessBanner from "@/assets/case-exness-banner.png";
import caseVantageLogo from "@/assets/case-vantage-logo.png";
import caseVantageBanner from "@/assets/case-vantage-banner.png";
import caseVtmarketsLogo from "@/assets/case-vtmarkets-logo.png";
import caseVtmarketsBanner from "@/assets/case-vtmarkets-banner.png";
import caseCryptocomLogo from "@/assets/case-cryptocom-logo.png";
import caseCryptocomBanner from "@/assets/case-cryptocom-banner.png";
import casePaybisLogo from "@/assets/case-paybis-logo.png";
import casePaybisBanner from "@/assets/case-paybis-banner.png";
import caseBet365Img from "@/assets/case-bet365.png";
import caseBet365Logo from "@/assets/case-bet365-logo.png";
import caseBet365Banner from "@/assets/case-bet365-banner.jpg";
import case1xbetLogo from "@/assets/case-1xbet-logo.png";
import case1xbetBanner from "@/assets/case-1xbet-banner.jpg";
import caseMelbetLogo from "@/assets/case-melbet-logo.png";
import caseMelbetBanner from "@/assets/case-melbet-banner.png";
import caseGgvegasLogo from "@/assets/case-ggvegas-logo.png";
import caseGgvegasBanner from "@/assets/case-ggvegas-banner.png";
import casePrimepartnersLogo from "@/assets/case-primepartners-logo.png";
import casePrimepartnersBanner from "@/assets/case-primepartners-banner.jpg";
import caseHungryImg from "@/assets/case-hungry-studio.png";
import caseSaygamesLogo from "@/assets/case-saygames-logo.png";
import caseSaygamesBanner from "@/assets/case-saygames-banner.jpg";
import caseSupersonicLogo from "@/assets/case-supersonic-logo.png";
import caseSupersonicBanner from "@/assets/case-supersonic-banner.jpg";
import caseLilithLogo from "@/assets/case-lilith-logo.png";
import caseLilithBanner from "@/assets/case-lilith-banner.png";
import caseIggLogo from "@/assets/case-igg-logo.jpg";
import caseIggBanner from "@/assets/case-igg-banner.jpg";
import caseFunplusLogo from "@/assets/case-funplus-logo.png";
import caseFunplusBanner from "@/assets/case-funplus-banner.png";
import caseTiktokImg from "@/assets/case-tiktok.png";
import caseTiktokLogo from "@/assets/case-tiktok-logo.png";
import caseTiktokBanner from "@/assets/case-tiktok-banner.png";
import caseKwaiLogo from "@/assets/case-kwai-logo.png";
import caseKwaiBanner from "@/assets/case-kwai-banner.png";
import caseLikeeLogo from "@/assets/case-likee-logo.png";
import caseLikeeBanner from "@/assets/case-likee-banner.png";
import caseBigoLogo from "@/assets/case-bigo-logo.png";
import caseBigoBanner from "@/assets/case-bigo-banner.png";
import caseNordvpnImg from "@/assets/case-nordvpn.png";
import caseNordvpnLogo from "@/assets/case-nordvpn-logo.png";
import caseNordvpnBanner from "@/assets/case-nordvpn-banner.jpg";
import casePurevpnLogo from "@/assets/case-purevpn-logo.png";
import casePurevpnBanner from "@/assets/case-purevpn-banner.png";
import caseSailyLogo from "@/assets/case-saily-logo.png";
import caseSailyBanner from "@/assets/case-saily-banner.png";
import caseFacetuneLogo from "@/assets/case-facetune-logo.png";
import caseFacetuneBanner from "@/assets/case-facetune-banner.jpg";
import caseAicleanerLogo from "@/assets/case-aicleaner-logo.png";
import caseAicleanerBanner from "@/assets/case-aicleaner-banner.png";

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
        highlights: [
          "高意向人群建模 + 转化路径压缩优化",
          "显著提升真实交易用户占比与入金效率",
        ],
        metric: "8,000+",
        metricLabel: "单月新增注册用户",
        banner: caseBinanceImg,
        logo: caseBinanceImg,
        logoBg: "hsl(0 0% 100%)",
      },
      {
        brand: "Exness",
        region: "Global",
        goal: "开户 & 首次入金",
        highlights: [
          "高净值用户定向 + 分市场 ROI 控制模型",
          "降低无效流量占比",
          "提高资金转化质量",
        ],
        metric: "有效开户率↑",
        metricLabel: "首次入金转化显著提升",
        banner: caseExnessBanner,
        logo: caseExnessLogo,
      },
      {
        brand: "Vantage",
        region: "Multi-Market",
        goal: "用户增长 & ROI",
        highlights: [
          "多渠道组合投放 + 自动化预算调度",
          "实现长期 ROI 稳定性提升",
          "多市场稳定获客增长",
        ],
        metric: "ROI 稳定↑",
        metricLabel: "长期投放回报稳定提升",
        banner: caseVantageBanner,
        logo: caseVantageLogo,
      },
      {
        brand: "VT Markets",
        region: "Global",
        goal: "高质量用户获取",
        highlights: [
          "LTV 导向投放模型 + 用户质量筛选",
          "提升长期留存与交易活跃度",
          "优质用户占比显著提升",
        ],
        metric: "优质用户↑",
        metricLabel: "LTV 与活跃度同步提升",
        banner: caseVtmarketsBanner,
        logo: caseVtmarketsLogo,
      },
      {
        brand: "Crypto.com",
        region: "Global",
        goal: "注册 & 活跃用户",
        highlights: [
          "行为驱动再营销体系优化",
          "增强平台整体交易活跃度",
          "用户激活率持续提升",
        ],
        metric: "激活率↑",
        metricLabel: "用户激活率持续提升",
        banner: caseCryptocomBanner,
        logo: caseCryptocomLogo,
      },
      {
        brand: "Paybis",
        region: "Multi-Region",
        goal: "新市场拓展",
        highlights: [
          "本地化投放 + 国家级渠道优化",
          "提升新市场转化效率与用户质量",
          "多区域稳定增长",
        ],
        metric: "新市场↑",
        metricLabel: "多区域稳定增长",
        banner: casePaybisBanner,
        logo: casePaybisLogo,
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
        goal: "注册 & 首充转化",
        highlights: [
          "高转化意图人群聚合",
          "全漏斗精细化优化",
          "首存转化效率持续提升",
        ],
        metric: "+3,000",
        metricLabel: "FTD 首充用户增量",
        banner: caseBet365Banner,
        logo: caseBet365Logo,
      },
      {
        brand: "1xBet",
        region: "Global",
        goal: "ROI & 用户增长",
        highlights: [
          "多渠道动态预算分配模型",
          "获客成本降低约 10%+",
          "ROI 稳定性显著增强",
        ],
        metric: "CAC -10%+",
        metricLabel: "获客成本下降",
        banner: case1xbetBanner,
        logo: case1xbetLogo,
      },
      {
        brand: "Melbet",
        region: "Global",
        goal: "活跃用户 & 留存",
        highlights: [
          "用户生命周期运营优化",
          "活跃度持续增长",
          "提升长期留存与回流率",
        ],
        metric: "活跃 ↑",
        metricLabel: "用户活跃度持续增长",
        banner: caseMelbetBanner,
        logo: caseMelbetLogo,
      },
      {
        brand: "GGVegas",
        region: "Global",
        goal: "高价值用户获取",
        highlights: [
          "高价值人群筛选模型",
          "高 ARPU 用户占比提升",
          "强化整体付费能力结构",
        ],
        metric: "ARPU ↑",
        metricLabel: "高价值用户占比提升",
        banner: caseGgvegasBanner,
        logo: caseGgvegasLogo,
      },
      {
        brand: "Prime Partners",
        region: "LATAM · SEA",
        goal: "新市场拓展",
        highlights: [
          "区域流量结构化投放",
          "拉美 / 东南亚规模增长",
          "快速完成市场冷启动",
        ],
        metric: "新市场 ↑",
        metricLabel: "区域规模化增长",
        banner: casePrimepartnersBanner,
        logo: casePrimepartnersLogo,
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
        highlights: [
          "创意快速 AB 测试",
          "高频素材迭代",
          "eCPM 与广告填充率同步提升",
        ],
        metric: "50,000+",
        metricLabel: "月新增用户",
        image: caseHungryImg,
        imageBg: "hsl(0 0% 100%)",
      },
      {
        brand: "SayGames",
        region: "Global",
        goal: "大规模拉新 (IAA)",
        highlights: [
          "素材测试驱动的规模化放量模型",
          "CPI 下降约 15%",
          "整体投放效率显著提升",
        ],
        metric: "CPI -15%",
        metricLabel: "获客成本下降",
        banner: caseSaygamesBanner,
        logo: caseSaygamesLogo,
      },
      {
        brand: "Supersonic Studios",
        region: "Global",
        goal: "ROI 优化 (IAA)",
        highlights: [
          "自动化投放优化系统",
          "稳定规模增长",
          "整体收益稳定性提升",
        ],
        metric: "ROI ↑",
        metricLabel: "稳定规模化增长",
        banner: caseSupersonicBanner,
        logo: caseSupersonicLogo,
      },
      {
        brand: "Lilith Games",
        region: "Global",
        goal: "高价值用户获取 (IAP)",
        highlights: [
          "LTV 分层投放模型",
          "付费用户占比提升",
          "长期收入结构优化",
        ],
        metric: "付费占比 ↑",
        metricLabel: "高价值付费用户提升",
        banner: caseLilithBanner,
        logo: caseLilithLogo,
      },
      {
        brand: "IGG",
        region: "Global",
        goal: "全球发行增长 (IAP)",
        highlights: [
          "多市场协同投放策略",
          "多区域转化提升",
          "全球市场一致性表现",
        ],
        metric: "多区域 ↑",
        metricLabel: "全球转化稳步提升",
        banner: caseIggBanner,
        logo: caseIggLogo,
      },
      {
        brand: "FunPlus",
        region: "Global",
        goal: "长周期收益 (IAP)",
        highlights: [
          "生命周期价值导向运营",
          "用户结构持续优化",
          "强化长期付费能力",
        ],
        metric: "LTV ↑",
        metricLabel: "长周期收益提升",
        banner: caseFunplusBanner,
        logo: caseFunplusLogo,
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
        highlights: [
          "创意优化体系",
          "多市场扩张模型",
          "提升整体平台活跃度与内容消费",
        ],
        metric: "+80,000",
        metricLabel: "用户增长",
        banner: caseTiktokBanner,
        logo: caseTiktokLogo,
      },
      {
        brand: "Kwai",
        region: "LATAM · SEA",
        goal: "新兴市场增长",
        highlights: [
          "区域内容适配 + 本地化投放策略",
          "拉美 / 东南亚快速增长",
          "区域渗透率与用户规模提升",
        ],
        metric: "新兴市场 ↑",
        metricLabel: "区域规模化增长",
        banner: caseKwaiBanner,
        logo: caseKwaiLogo,
      },
      {
        brand: "Likee",
        region: "Global",
        goal: "用户留存 & 互动",
        highlights: [
          "内容互动反馈优化机制",
          "互动率提升约 15%+",
          "增强社区活跃度与粘性",
        ],
        metric: "互动 +15%+",
        metricLabel: "用户互动率提升",
        banner: caseLikeeBanner,
        logo: caseLikeeLogo,
      },
      {
        brand: "Bigo Live",
        region: "Global",
        goal: "活跃用户 & 付费转化",
        highlights: [
          "直播场景高意图用户触达",
          "直播付费转化提升",
          "整体变现能力提升",
        ],
        metric: "付费 ↑",
        metricLabel: "直播付费转化提升",
        banner: caseBigoBanner,
        logo: caseBigoLogo,
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
        highlights: [
          "高意向用户筛选",
          "订阅漏斗优化",
          "稳定付费增长",
        ],
        metric: "订阅 ↑",
        metricLabel: "订阅转化效率显著提升",
        banner: caseNordvpnBanner,
        logo: caseNordvpnLogo,
      },
      {
        brand: "PureVPN",
        region: "Global",
        goal: "安装量与活跃度提升",
        highlights: [
          "工具场景高频需求驱动投放",
          "安装量与活跃度同步提升",
          "广告收益结构优化",
        ],
        metric: "安装 ↑",
        metricLabel: "活跃度持续增长",
        banner: casePurevpnBanner,
        logo: casePurevpnLogo,
      },
      {
        brand: "Saily",
        region: "Global",
        goal: "eSIM 订阅获客",
        highlights: [
          "出行场景高意图人群定向",
          "多市场本地化投放",
          "订阅转化效率持续优化",
        ],
        metric: "订阅 ↑",
        metricLabel: "高意图用户转化提升",
        banner: caseSailyBanner,
        logo: caseSailyLogo,
      },
      {
        brand: "Facetune",
        region: "Global",
        goal: "付费转化 & LTV 优化",
        highlights: [
          "免费 → 付费漏斗优化",
          "高付费意向人群建模",
          "长期 LTV 持续提升",
        ],
        metric: "LTV ↑",
        metricLabel: "付费用户生命周期价值提升",
        banner: caseFacetuneBanner,
        logo: caseFacetuneLogo,
      },
      {
        brand: "AI Cleaner",
        region: "Global",
        goal: "安装量与广告变现",
        highlights: [
          "工具场景高频需求驱动投放",
          "安装量规模化提升",
          "广告收益结构持续优化",
        ],
        metric: "安装 ↑",
        metricLabel: "规模化增长 + 变现提升",
        banner: caseAicleanerBanner,
        logo: caseAicleanerLogo,
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
      heroTitle={
        <>
          <span style={{ color: data.color }}>{data.zh}</span>
          <span className="block text-lg md:text-xl font-medium mt-2" style={{ color: TEXT_MID }}>
            {data.en}
          </span>
        </>
      }
      heroSubtitle={data.intro}
    >
      {/* 返回按钮：圆形纯箭头，与下方主体内容左边距对齐 */}
      <div className="fixed z-30 top-28 left-0 right-0 pointer-events-none">
        <div className="max-w-[1200px] mx-auto px-6">
          <Link
            to="/global#cases"
            aria-label="返回增长成果精选"
            title="返回增长成果精选"
            className="group pointer-events-auto inline-flex items-center justify-center w-10 h-10 rounded-full transition-all hover:-translate-x-0.5"
            style={{
              background: "hsla(0, 0%, 100%, 0.65)",
              color: TEXT_MID,
              border: "1px solid hsla(245, 30%, 60%, 0.18)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              boxShadow:
                "inset 0 1px 0 0 hsla(0,0%,100%,0.9), 0 6px 18px -8px hsla(245, 40%, 25%, 0.18)",
            }}
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          </Link>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-6 pb-24">

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
                    background: c.banner
                      ? `url(${c.banner}) center/cover no-repeat`
                      : c.image
                        ? c.imageBg ?? "hsl(220 15% 96%)"
                        : `linear-gradient(135deg, ${data.color.replace("hsl(", "hsla(").replace(")", " / 0.18)")}, ${data.color.replace("hsl(", "hsla(").replace(")", " / 0.05)")})`,
                  }}
                >
                  {c.banner && c.logo && (
                    <div
                      className="absolute top-3 left-3 w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center shadow-lg"
                      style={{
                        background: c.logoBg ?? "hsl(0 0% 100%)",
                        border: "1px solid hsla(0,0%,100%,0.6)",
                      }}
                    >
                      <img
                        src={c.logo}
                        alt={`${c.brand} logo`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  {!c.banner && c.image && (
                    <img
                      src={c.image}
                      alt={c.brand}
                      className="max-w-[60%] max-h-[70%] object-contain"
                      loading="lazy"
                    />
                  )}
                  {!c.banner && !c.image && (
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
