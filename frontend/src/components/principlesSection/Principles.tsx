import {
  BadgeCheck,
  LifeBuoy,
  Milestone,
  Minimize2,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";



import { ScrollReveal } from "../common/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import principlesData from "./principlesData.json";

const ICONS: Record<string, LucideIcon> = {
  Minimize2,
  ShieldCheck,
  Target,
  TrendingUp,
  Rocket,
  BadgeCheck,
  LifeBuoy,
  Milestone,
};

const Principles = () => {
  const { badgeText, title, subtitle, cards } = principlesData;

  return (
    <ScrollReveal
      id="principles"
      className="relative flex min-h-screen w-full flex-col items-start gap-[75px] px-[20px] py-[86px] md:px-[70px] md:py-[150px]"
    >
      <SectionHeader
        title={title}
        badgeText={badgeText}
        subtitle={subtitle}
        align="left"
      />
      <div className="flex w-full flex-col gap-y-[25px] md:grid md:grid-cols-3 md:gap-x-[130px] md:gap-y-[37px]">
        {cards.map((cardDetail) => {
          const Icon = ICONS[cardDetail.icon] ?? Minimize2;

          return (
            <div
              key={cardDetail.title}
              className={`relative flex w-full max-w-[486px] flex-col items-start gap-[46px] overflow-hidden rounded-[20px] border border-[#5E5E5E] bg-gradient-to-tr from-[#000000] from-40% p-[30px] ${
                cardDetail.color === "green"
                  ? "to-[#3df50077]"
                  : "to-[#ffa851a5]"
              }`}
            >
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#5E5E5E] text-green-600">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="flex flex-col items-start gap-[20px] font-sf">
                <p className="text-[24px] font-bold text-[#FAFAFAFA]">
                  {cardDetail.title}
                </p>
                <p className="text-[18px] font-light text-[#FAFAFABF]">
                  {cardDetail.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
};

export default Principles;
