import React from "react";
import iconZapier from "@/assets/icon-zapier.png";
import iconReadwise from "@/assets/icon-readwise.png";
import imgLogo from "@/assets/ByteMobiLOGO-02.png";
import iconGoogleOutlook from "@/assets/icon-google-outlook.png";
import iconChromeSafari from "@/assets/icon-chrome-safari.png";

interface IntegrationCardProps {
  icon: string;
  title: string;
  description: string;
  iconSize?: number;
  iconBg?: string;
}

function IntegrationCard({ icon, title, description, iconSize = 52, iconBg }: IntegrationCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
      <div className="relative">
        {/* Hover glow */}
        <div className="absolute inset-[-12px] rounded-2xl bg-purple-500/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className={`relative rounded-xl overflow-hidden ${iconBg || ''}`}
          style={{ width: iconSize, height: iconSize }}
        >
          <img
            src={icon}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h3 className="text-white font-semibold text-[15px] leading-tight">{title}</h3>
      <p className="text-white/50 text-[13px] max-w-[240px] leading-relaxed">{description}</p>
    </div>
  );
}

export default function IntegrationsGrid() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="relative grid grid-cols-2 gap-x-[180px] gap-y-[40px] items-start max-w-[800px]">
        {/* Top row — positions swapped */}
        <IntegrationCard
          icon={iconReadwise}
          title="Readwise"
          description="Sync your reading highlights and notes with Reflect."
          iconBg="bg-white"
        />
        <IntegrationCard
          icon={iconZapier}
          title="Zapier"
          description="Connect with Reflect with dozens of applications without code"
        />

        {/* Center logo with glow animation */}
        <div className="col-span-2 flex justify-center py-2">
          <div className="relative group">
            {/* Outer pulsing glow */}
            <div className="absolute inset-[-16px] rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
            {/* Inner steady glow */}
            <div className="absolute inset-[-8px] rounded-full bg-purple-400/15 blur-lg" />
            <img
              src={imgLogo}
              alt="ByteMobi Logo"
              loading="lazy"
              width={64}
              height={64}
              className="relative drop-shadow-[0_0_16px_rgba(168,85,247,0.5)] rounded-full"
            />
          </div>
        </div>

        {/* Bottom row — positions swapped */}
        <IntegrationCard
          icon={iconChromeSafari}
          title="Chrome and Safari"
          description="Save web clips and sync with your Kindle"
        />
        <IntegrationCard
          icon={iconGoogleOutlook}
          title="Google and Outlook"
          description="Integrate your contacts and calendars"
        />
      </div>
    </div>
  );
}
