import { Button } from "../ui/Button";
import { ScrollReveal } from "../common/ScrollReveal";
import heroSectionData from "./heroSectionData.json";

type HeroSectionProps = {
  openModal: (bool: boolean) => void;
  openContact: () => void;
};

const Herosection = ({ openModal, openContact }: HeroSectionProps) => {
  const {
    beams,
    stats,
    heading,
    subheading,
    ctaText,
    contactCtaText,
    earthImage,
  } = heroSectionData;

  return (
    <ScrollReveal className="relative flex h-180 flex-col justify-between overflow-hidden rounded-b-[20px] pt-30 pb-27.5 md:h-screen md:items-center md:justify-center md:pb-0 md:pt-0">
      <div className="z-50 flex w-full max-w-208.5 flex-col items-center gap-4 px-5 text-center font-sf md:justify-center md:gap-13.75">
        <h1 className="text-[34px] leading-tight font-medium text-body md:text-[56px] md:leading-normal">
          {heading}
        </h1>
        <p className="text-[14px] font-light text-[#FAFAFABF] md:text-[18px]">
          {subheading}
        </p>
        <div className="flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <Button
            onClick={() => openModal(true)}
            variant="secondary"
            className="animate-soft-pulse px-6.25 py-2.5 text-[16px] font-light md:px-[40.5px] md:py-5.5 md:text-[18px]"
          >
            {ctaText}
          </Button>
          <Button
            onClick={openContact}
            variant="primary"
            className="border border-body/20 bg-transparent px-6.25 py-2.5 text-[16px] font-light text-body hover:bg-body/10 md:px-10.25 md:py-5.5 md:text-[18px]"
          >
            {contactCtaText}
          </Button>
        </div>
      </div>

      <div className="absolute top-0 h-133 w-133 rounded-full rounded-b-[20px] bg-[#B8FF8833] opacity-40 blur-3xl" />

      <div className="absolute inset-x-0 bottom-12.5 z-10 px-4 font-sf text-body md:bottom-17 md:px-17.5">
        <div className="mx-auto grid max-w-5xl grid-cols-3 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`px-2 text-center md:px-0 ${
                index > 0 ? "border-l border-white/15 md:border-l-0" : ""
              }`}
            >
              <p className="text-[20px] font-bold leading-none md:text-[24px]">
                {stat.number}
                {stat.suffix ?? "+"}
              </p>
              <p className="mt-1.5 text-[11px] leading-snug font-light text-[#FAFAFAD9] md:hidden">
                {stat.shortText}
              </p>
              <p className="mt-2 hidden text-[18px] font-light md:block">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-5 overflow-hidden rounded-b-[20px]">
        <div className="absolute bottom-0 left-0 flex h-full items-end gap-5">
          {beams.map((beam, index) => (
            <div
              key={`left-${index}`}
              className="w-29 animate-beam-wave rounded-t-[10px] bg-linear-to-t from-[#34DE00] to-[#1C78001A] opacity-40 blur-lg"
              style={{ height: beam.height, animationDelay: `${index * 0.25}s` }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 flex h-full items-end gap-5">
          {beams
            .slice()
            .reverse()
            .map((beam, index) => (
              <div
                key={`right-${index}`}
                className="w-29 animate-beam-wave rounded-t-[10px] bg-linear-to-t from-[#34DE00] to-[#1C78001A] opacity-40 blur-lg"
                style={{
                  height: beam.height,
                  animationDelay: `${index * 0.25 + 1.5}s`,
                }}
              />
            ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-1/2 overflow-hidden rounded-b-[20px] opacity-20 md:h-auto">
        <div className="-ml-[10%] flex w-[120%] max-w-none justify-center animate-earth-orbit">
          <img
            loading="lazy"
            src={earthImage}
            className="block w-340 max-w-none rounded-b-[20px] object-cover"
            alt=""
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 rounded-b-[20px] bg-linear-to-t from-green-800/50 to-transparent" />
      </div>
    </ScrollReveal>
  );
};

export default Herosection;
