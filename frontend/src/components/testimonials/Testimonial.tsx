import { ScrollReveal } from "../common/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import testimonialData from "./testimonialData.json";

const Testimonial = () => {
  interface testimonial {
    company: string;
    logo: string;
    description: string;
    testimonial: string;
  }

  const testimonials: testimonial[] = testimonialData.items;

  const dashes = Array.from({ length: 20 });
  const doubled = [...testimonials, ...testimonials];

  const TestimonialCard = ({ test }: { test: testimonial }) => (
    <div className="bg-platform h-[398px] w-[423px] shrink-0 px-[30px] py-[50px] border border-[#1C780080] rounded-[30px] flex flex-col items-start justify-between">
      <div className="flex flex-col items-center gap-[46px] w-full">
        <div className="flex flex-col items-start gap-[13px] w-full">
          <div className="w-[65px] h-[65px] rounded-full border border-[#5E5E5E] text-green-600 flex items-center justify-center">
            <img
              loading="lazy"
              src={test.logo}
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-start gap-[7px]">
            <p className="font-semibold text-[32px] text-body">{test.company}</p>
            <p className="font-light text-[18px] text-[#FAFAFABF]">{test.description}</p>
          </div>
        </div>
        <div className="h-px w-full bg-linear-to-r from-button via-[#1c78008d] to-[#1c780049] flex items-center justify-between">
          {dashes.map((_, i) => (
            <div key={i} className="h-px w-[6px] bg-platform" />
          ))}
        </div>
      </div>
      <p className="font-light text-[18px] text-[#FAFAFABF]">{test.testimonial}</p>
    </div>
  );

  return (
    <ScrollReveal id="testimonials" className="py-[86px] md:py-[119px] px-5 h-auto flex flex-col items-center gap-[70px] md:gap-[95px] font-sf">
      <SectionHeader
        badgeText={testimonialData.header.badgeText}
        title={testimonialData.header.title}
      />

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  30s linear infinite; }
        .marquee-right { animation: marquee-right 30s linear infinite; }
        .marquee-left:hover,
        .marquee-right:hover { animation-play-state: paused; }
      `}</style>

      <div className="flex flex-col gap-[50px] w-full" >

        {/* Row 1 — -9deg tilt, scrolls left */}
        <div className="rotate-[-9deg] scale-110">
          <div className="flex gap-[67px] marquee-left w-max">
            {doubled.map((test, i) => (
              <TestimonialCard key={`r1-${i}`} test={test} />
            ))}
          </div>
        </div>

        {/* Row 2 — +15deg tilt, scrolls right (desktop only) */}
        <div className="hidden md:block rotate-15 scale-110">
          <div className="flex gap-[67px] marquee-right w-max">
            {doubled.map((test, i) => (
              <TestimonialCard key={`r2-${i}`} test={test} />
            ))}
          </div>
        </div>

      </div>
    </ScrollReveal>
  );
};

export default Testimonial;