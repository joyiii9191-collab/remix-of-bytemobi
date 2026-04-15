import iconGlobalJapan from "@/assets/icon-global-japan.png";
import iconOneStop from "@/assets/icon-one-stop.png";
import FlowingBorderGlow from "./FlowingBorderGlow";

const features = [
  { label: "头部媒体及合作伙伴", hasPlaceholders: true, delay: 0 },
  { label: "自有程序化流量体系", hasPlaceholders: true, delay: 1 },
  { label: "布局全球，深拓日本", icon: iconGlobalJapan, delay: 2 },
  { label: "一站式解决方案", icon: iconOneStop, delay: 3 },
];

function FeatureCard({
  label,
  icon,
  hasPlaceholders,
  delay,
}: {
  label: string;
  icon?: string;
  hasPlaceholders?: boolean;
  delay: number;
}) {
  return (
    <FlowingBorderGlow
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
      glowColor="270 70 70"
      borderRadius={16}
      glowRadius={30}
      glowIntensity={0.8}
      coneSpread={20}
      speed={4}
      delay={delay}
      backgroundColor="rgba(255,255,255,0.02)"
      edgeSensitivity={25}
    >
      <div className="flex flex-col items-center justify-center gap-3 p-6 aspect-[4/3] cursor-pointer">
        {hasPlaceholders ? (
          <div className="flex gap-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"
              >
                <div className="w-5 h-5 rounded bg-gradient-to-br from-white/10 to-white/5" />
              </div>
            ))}
          </div>
        ) : icon ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src={icon} alt={label} loading="lazy" className="w-full h-full object-contain" />
          </div>
        ) : null}

        <span className="text-white/50 text-[12px] font-medium leading-tight text-center whitespace-nowrap">
          {label}
        </span>
      </div>
    </FlowingBorderGlow>
  );
}

export default function IntegrationsGrid() {
  return (
    <>
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </>
  );
}
