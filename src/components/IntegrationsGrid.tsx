import React from "react";
import iconZapier from "@/assets/icon-zapier.png";
import iconReadwise from "@/assets/icon-readwise.png";
import iconGlobeNetwork from "@/assets/icon-globe-network.png";
import iconGoogleOutlook from "@/assets/icon-google-outlook.png";
import iconChromeSafari from "@/assets/icon-chrome-safari.png";

interface IntegrationCardProps {
  icon: string;
  title: string;
  description: string;
  iconSize?: number;
  iconBg?: string;
}

function IntegrationCard({ icon, title, description, iconSize = 64, iconBg }: IntegrationCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 group">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className={`relative rounded-2xl overflow-hidden ${iconBg || ''}`}
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
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-white/50 text-sm max-w-[280px] leading-relaxed">{description}</p>
    </div>
  );
}

export default function IntegrationsGrid() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative grid grid-cols-2 gap-x-[200px] gap-y-[80px] items-start max-w-[900px]">
        {/* Top row — positions swapped: Readwise left, Zapier right */}
        <IntegrationCard
          icon={iconReadwise}
          title="Readwise"
          description="Sync your reading highlights and notes with Reflect."
          iconSize={64}
          iconBg="bg-white"
        />
        <IntegrationCard
          icon={iconZapier}
          title="Zapier"
          description="Connect with Reflect with dozens of applications without code"
          iconSize={64}
        />

        {/* Center globe with glow */}
        <div className="col-span-2 flex justify-center -my-4">
          <div className="relative">
            <div className="absolute inset-[-20px] rounded-full bg-purple-500/30 blur-2xl animate-pulse" />
            <img
              src={iconGlobeNetwork}
              alt="Network"
              loading="lazy"
              width={80}
              height={80}
              className="relative drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            />
          </div>
        </div>

        {/* Bottom row — positions swapped: Chrome/Safari left, Google/Outlook right */}
        <IntegrationCard
          icon={iconChromeSafari}
          title="Chrome and Safari"
          description="Save web clips and sync with your Kindle"
          iconSize={64}
        />
        <IntegrationCard
          icon={iconGoogleOutlook}
          title="Google and Outlook"
          description="Integrate your contacts and calendars"
          iconSize={64}
        />
      </div>
    </div>
  );
}
