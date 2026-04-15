import { useState } from "react";
import "./BentoBusinessCards.css";

interface BizCard {
  abbr: string;
  full: string;
  scene: string;
  desc: string;
  span?: string; // grid area name
}

const cards: BizCard[] = [
  {
    abbr: "CPM",
    full: "Cost Per Mille",
    scene: "品牌曝光与流量触达",
    desc: "按千次广告展示计费，帮助广告主高效提升品牌知名度、产品曝光度与市场影响力，广泛适用于品牌推广、活动宣发等场景。",
  },
  {
    abbr: "CPC",
    full: "Cost Per Click",
    scene: "精准点击引流",
    desc: "按用户实际广告点击计费，能够有效控制获客成本，精准触达高意向用户，助力广告主提升流量质量与页面访问转化效率。",
  },
  {
    abbr: "CPA",
    full: "Cost Per Action",
    scene: "深度转化行为获取",
    desc: "针对APP深度转化行为的用户获取，例如注册、充值、交易等关键转化事件，帮助广告主实现更高质量的用户增长。",
  },
  {
    abbr: "CPI",
    full: "Cost Per Install",
    scene: "APP新用户获取",
    desc: "面向APP新用户获取，同时支持老用户召回与二次激活，帮助应用快速扩大用户规模。",
  },
  {
    abbr: "CPS",
    full: "Cost Per Sale",
    scene: "电商与Revenue Share",
    desc: "针对电商、博彩及其他Revenue Share模式的客户，通过高质量流量获取真实付费用户，并按照实际成交或收益进行合作。",
  },
  {
    abbr: "CPL",
    full: "Cost Per Lead",
    scene: "用户线索获取",
    desc: "面向WAP端用户线索获取，通过表单提交、注册等方式帮助广告主收集潜在客户信息，广泛应用于金融、电商及服务类行业。",
  },
];

function BentoCard({ card }: { card: BizCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bento-biz-card group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow layers */}
      <div className="bento-biz-glow bento-biz-glow--1" />
      <div className="bento-biz-glow bento-biz-glow--2" />

      <div className="bento-biz-card__content">
        {/* Default state */}
        <div className={`bento-biz-default ${hovered ? "opacity-0" : "opacity-100"}`}>
          <span className="bento-biz-abbr">{card.abbr}</span>
          <span className="bento-biz-scene">{card.scene}</span>
        </div>

        {/* Hover state */}
        <div className={`bento-biz-expanded ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="bento-biz-header">
            <span className="bento-biz-abbr-sm">{card.abbr}</span>
            <span className="bento-biz-full">({card.full})</span>
          </div>
          <p className="bento-biz-desc">{card.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function BentoBusinessCards() {
  return (
    <div className="bento-biz-grid">
      {cards.map((card) => (
        <BentoCard key={card.abbr} card={card} />
      ))}
    </div>
  );
}
