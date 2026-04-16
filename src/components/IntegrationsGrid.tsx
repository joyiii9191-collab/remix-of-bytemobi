import React from "react";
import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";
import logoChartboost from "@/assets/logo-chartboost.png";
import logoAudienceNetwork from "@/assets/logo-audience-network.png";
import logoKiip from "@/assets/logo-kiip.png";
import logoStartapp from "@/assets/logo-startapp.jpg";
import logoTapjoy from "@/assets/logo-tapjoy.png";
import logoAdmob from "@/assets/logo-admob.png";
import logoApplovin from "@/assets/logo-applovin.png";
import logoIronsource from "@/assets/logo-ironsource.png";
import "../components/LiquidGlassCard.css";

function FeatureCard({
  label,
  icon,
  logos,
}: {
  label: string;
  icon?: string;
  logos?: { src: string; alt: string }[];
}) {
  return (
    <div className="liquid-glass liquid-glass--inner liquid-glass--glow cursor-pointer">
      <div className="flex flex-col items-center justify-center gap-3 p-4 aspect-[4/3]">
        {logos ? (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                style={{
                  background: 'hsla(0, 0%, 100%, 0.06)',
                  border: '1px solid hsla(0, 0%, 100%, 0.08)',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="w-8 h-8 object-contain"
                />
              </div>
            ))}
          </div>
        ) : icon ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain" />
          </div>
        ) : null}

        <span className="text-[12px] font-medium leading-tight text-center whitespace-nowrap"
          style={{ color: 'hsla(0, 0%, 100%, 0.5)' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

const mediaLogos = [
  { src: logoAdmob, alt: "AdMob" },
  { src: logoAudienceNetwork, alt: "Audience Network" },
  { src: logoApplovin, alt: "AppLovin" },
  { src: logoIronsource, alt: "ironSource" },
];

const adPlatformLogos = [
  { src: logoChartboost, alt: "Chartboost" },
  { src: logoTapjoy, alt: "Tapjoy" },
  { src: logoKiip, alt: "Kiip" },
  { src: logoStartapp, alt: "StartApp" },
];

export default function IntegrationsGrid() {
  return (
    <>
      <FeatureCard label="互动广告平台" logos={mediaLogos} />
      <FeatureCard label="激励广告平台" logos={adPlatformLogos} />
      <FeatureCard label="布局全球，深拓日本" icon={iconGlobalJapan} />
      <FeatureCard label="一站式解决方案" icon={iconOneStop} />
    </>
  );
}
