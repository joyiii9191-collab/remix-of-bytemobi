import React, { useEffect, useState } from "react";
import { TEXT_DARK, TEXT_MID, ACCENT } from "@/lib/page-styles";
import formatBanner from "@/assets/format-banner.png";
import formatVideo from "@/assets/format-video.png";
import formatNative from "@/assets/format-native.png";
import formatApp from "@/assets/format-app.png";
import formatWeb from "@/assets/format-web.png";
import formatCtv from "@/assets/format-ctv.png";

type FormatItem = {
  title: string;
  titleFull: string;
  description: string;
  image: string;
  spot: { left: string; top: string };
  objectPosition?: string;
};

const ITEMS: FormatItem[] = [
  {
    title: "Banner",
    titleFull: "横幅广告",
    description: "顶部 / 底部常驻横幅,稳定曝光与高频触达。",
    image: formatBanner,
    spot: { left: "50%", top: "38%" },
  },
  {
    title: "Video",
    titleFull: "视频广告",
    description: "沉浸式视频内容,提升品牌记忆与转化深度。",
    image: formatVideo,
    spot: { left: "45%", top: "55%" },
  },
  {
    title: "Native",
    titleFull: "原生广告",
    description: "无缝融入内容流,自然呈现,体验友好。",
    image: formatNative,
    spot: { left: "40%", top: "45%" },
  },
  {
    title: "App",
    titleFull: "移动应用",
    description: "深度覆盖移动端 App 内场景,触达高活跃用户。",
    image: formatApp,
    spot: { left: "50%", top: "50%" },
  },
  {
    title: "Web",
    titleFull: "网页端",
    description: "覆盖桌面与移动 Web,补齐多端流量入口。",
    image: formatWeb,
    spot: { left: "48%", top: "42%" },
  },
  {
    title: "CTV",
    titleFull: "联网电视",
    description: "客厅大屏沉浸场景,助力品牌曝光与高质量触达。",
    image: formatCtv,
    spot: { left: "42%", top: "35%" },
  },
];

function CarouselItem({
  item,
  isActive,
  onClick,
}: {
  item: FormatItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="cursor-pointer transition-all duration-500" onClick={onClick}>
      <div className="flex items-baseline gap-3 flex-wrap">
        <p
          className="font-medium tracking-[-0.5px] leading-[1.3] transition-all duration-500 shrink-0"
          style={{
            fontSize: isActive ? "44px" : "20px",
            color: TEXT_DARK,
          }}
        >
          {item.title}
          <span
            className="ml-2 transition-all duration-500"
            style={{
              fontSize: isActive ? "16px" : "13px",
              color: TEXT_MID,
            }}
          >
            ({item.titleFull})
          </span>
        </p>
        <div
          className="transition-all duration-500 overflow-hidden flex-1 min-w-0"
          style={{
            maxWidth: isActive ? "100%" : "0px",
            opacity: isActive ? 1 : 0,
          }}
        >
          <p
            className="text-[13px] leading-[1.5] tracking-[-0.2px] truncate"
            style={{ color: TEXT_MID }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function RevealCard({
  imageSrc,
  left,
  top,
  isActive,
  objectPosition,
}: {
  imageSrc: string;
  left: string;
  top: string;
  isActive: boolean;
  objectPosition?: string;
}) {
  const lNum = parseFloat(left);
  const tNum = parseFloat(top);

  const smallHalfW = (30 / 590) * 100;
  const smallHalfH = (40 / 520) * 100;
  const bigHalfW = (120 / 590) * 100;
  const bigHalfH = (130 / 520) * 100;

  const smallClip = `inset(${Math.max(0, tNum - smallHalfH)}% ${Math.max(0, 100 - lNum - smallHalfW)}% ${Math.max(0, 100 - tNum - smallHalfH)}% ${Math.max(0, lNum - smallHalfW)}% round 6px)`;
  const bigClip = `inset(${Math.max(0, tNum - bigHalfH)}% ${Math.max(0, 100 - lNum - bigHalfW)}% ${Math.max(0, 100 - tNum - bigHalfH)}% ${Math.max(0, lNum - bigHalfW)}% round 8px)`;

  return (
    <>
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "blur(6px)",
          objectPosition: objectPosition || "center",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          clipPath: isActive ? bigClip : smallClip,
          transition: "clip-path 1.2s ease-out",
        }}
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: objectPosition || "center" }}
        />
      </div>
      <div
        className="absolute pointer-events-none"
        style={{
          left,
          top,
          transform: "translate(-50%, -50%)",
          width: isActive ? "240px" : "60px",
          height: isActive ? "260px" : "80px",
          border: "2px solid rgba(255, 255, 255, 0.85)",
          borderRadius: isActive ? "8px" : "6px",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.35)",
          zIndex: 3,
          transition: "width 1.2s ease-out, height 1.2s ease-out, border-radius 1.2s ease-out",
        }}
      />
      {isActive && (
        <>
          <div
            className="absolute"
            style={{
              left,
              top,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.3)",
              transform: "translate(-50%, -50%)",
              animation: "focusDotPulse 1.5s ease-in-out infinite",
              zIndex: 4,
            }}
          />
          <div
            className="absolute"
            style={{
              left,
              top,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.6)",
              transform: "translate(-50%, -50%)",
              animation: "focusRingPulse 1.5s ease-out infinite",
              zIndex: 4,
            }}
          />
        </>
      )}
    </>
  );
}

export function FormatShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex items-center gap-10 lg:gap-14 mt-6">
      {/* Left content */}
      <div className="flex flex-col flex-1 gap-8 h-[520px] justify-center">
        {/* Title block */}
        <div className="flex flex-col gap-3">
          <h2
            className="text-[36px] lg:text-[40px] font-semibold leading-[1.1] tracking-[-1px]"
            style={{ color: TEXT_DARK }}
          >
            全场景流量变现能力
          </h2>
          <p className="text-[14px] lg:text-[15px]" style={{ color: TEXT_MID }}>
            支持多种广告形式 · 全端覆盖
          </p>
        </div>

        {/* Carousel */}
        <div className="flex flex-col gap-3 min-h-[200px]">
          {ITEMS.map((item, i) => (
            <div key={item.title}>
              <CarouselItem
                item={item}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
              {i < ITEMS.length - 1 && (
                <div
                  className="mt-3 h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,18,45,0) 0%, rgba(20,18,45,0.12) 50%, rgba(20,18,45,0) 100%)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom: developer benefits */}
        <div className="flex flex-col gap-3">
          <div className="text-[13px] font-semibold" style={{ color: TEXT_DARK }}>
            帮助开发者实现:
          </div>
          <ul className="space-y-2 text-[13px]" style={{ color: TEXT_MID }}>
            <li className="flex items-start gap-2">
              <span
                className="mt-[7px] block w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: ACCENT }}
              />
              单一平台管理多元变现渠道
            </li>
            <li className="flex items-start gap-2">
              <span
                className="mt-[7px] block w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: ACCENT }}
              />
              不同场景最大化收益
            </li>
          </ul>
        </div>
      </div>

      {/* Right reveal images */}
      <div className="h-[520px] shrink-0 w-[480px] lg:w-[560px] rounded-[24px] overflow-hidden relative bg-black/5">
        {ITEMS.map((item, i) => (
          <div
            key={item.title}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          >
            <RevealCard
              imageSrc={item.image}
              left={item.spot.left}
              top={item.spot.top}
              isActive={activeIndex === i}
              objectPosition={item.objectPosition}
            />
          </div>
        ))}
        {/* Placeholder hint when CTV is selected (5th index would be CTV - not yet provided) */}
      </div>
    </div>
  );
}
