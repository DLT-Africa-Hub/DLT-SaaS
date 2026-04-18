
import { Button } from "../ui/Button";
import { ScrollReveal } from "../common/ScrollReveal";
import type {MeetProps} from  "../../types/meet"
import heroSectionData from "./heroSectionData.json"



const Herosection = ({openModal}:MeetProps) => {
  const { beams, stats, heading, subheading, ctaText, viewMoreText, viewMoreHref, earthImage } = heroSectionData
  return (
    <ScrollReveal className="relative  flex flex-col h-screen pt-[153px] justify-between md:pt-0  md:items-center md:justify-center overflow-hidden rounded-b-[20px]">
      <div className="z-50 flex w-full max-w-[834px] px-5 flex-col items-center  md:justify-center gap-[20px] md:gap-[55px] font-sf text-center animate-hero-float">
        <h1 className="font-medium md:text-[56px] text-[40px]   text-body">
          {heading}
        </h1>
        <p className="font-light text-[14px] md:text-[18px] text-[#FAFAFABF]">
          {subheading}
        </p>
        <Button
        onClick={() => openModal(true)}
          variant="secondary"
          className="font-light px-[25px] md:px-[40.5px] py-[10px] md:py-[22px] text-[16px]  md:text-[18px] animate-soft-pulse"
        >
          {ctaText}
        </Button>
      </div>

      <div className="absolute top-0 h-[532px] w-[532px] rounded-full bg-[#B8FF8833] blur-3xl opacity-40 rounded-b-[20px]" />

      <div className=" relative md:absolute bottom-[68px] font-sf text-body w-full flex z-10 items-center md:justify-between  px-[20px] md:px-[70px] rounded-b-[20px]">
        <div className="flex items-center justify-center  w-full md:w-auto md:gap-12 gap-5 text-center">
          {stats.map((stat) => (
            <div key={stat.title}>
              <p className="text-[24px] font-bold">
                {stat.number}
                {stat.suffix ?? (stat.title === "guarantee" ? "%" : "+")}
              </p>
              <p className="md:text-[18px] text-[14px] font-light">{stat.text}</p>
            </div>
          ))}
        </div>
        <a
          href={viewMoreHref}
          className="hidden md:inline-block text-[18px] font-light cursor-pointer bg-[#FFFFFF1A] p-2 rounded-2xl text-green-600/90 backdrop-blur-md border border-white/10 shadow-lg hover:bg-[#FFFFFF26] transition-colors"
        >
          {viewMoreText}
        </a>
      </div>
      <div className="absolute bottom-0 z-5 flex h-full w-full items-end gap-5 overflow-x-hidden rounded-b-[20px]">
        {beams.map((beam, index) => (
          <div
            key={`left-${index}`}
            className="w-[116px] rounded-t-[10px] bg-linear-to-t from-[#34DE00] to-[#1C78001A] blur-lg opacity-40 animate-beam-wave"
            style={{ height: beam.height, animationDelay: `${index * 0.25}s` }}
          />
        ))}
        {beams
          .slice()
          .reverse()
          .map((beam, index) => (
            <div
              key={`right-${index}`}
              className="w-[116px] rounded-t-[10px] bg-linear-to-t from-[#34DE00] to-[#1C78001A] blur-lg opacity-40 animate-beam-wave"
              style={{ height: beam.height, animationDelay: `${index * 0.25 + 1.5}s` }}
            />
          ))}
      </div>
      <div className="absolute bottom-0 flex w-full h-[50%] md:h-auto justify-center opacity-20 rounded-b-[20px] animate-earth-orbit">
        <div className="absolute  h-full w-full rounded-b-[20px] bg-linear-to-t from-green-800/50 to-transparent" />
        <img loading='lazy' src={earthImage} className="w-[1360px] object-cover rounded-b-[20px]" alt="" aria-hidden />
      </div>
    </ScrollReveal>
  );
};

export default Herosection;
