import React from "react";
import { ScrollReveal } from "../common/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const Testimonial = () => {
  interface testimonial {
    company: string;
    logo: string;
    description: string;
    testimonial: string;
  }

  const testimonials: testimonial[] = [
    {
      company: "Celo Dao Africa",
      logo: "celo.jpg",
      description: "Borem ipsum dolor sit amet adipiscing elit.",
      testimonial:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      company: "Celo Dao Africa",
      logo: "celo.jpg",
      description: "Borem ipsum dolor sit amet adipiscing elit.",
      testimonial:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      company: "Celo Dao Africa",
      logo: "celo.jpg",
      description: "Borem ipsum dolor sit amet adipiscing elit.",
      testimonial:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      company: "Celo Dao Africa",
      logo: "celo.jpg",
      description: "Borem ipsum dolor sit amet adipiscing elit.",
      testimonial:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      company: "Celo Dao Africa",
      logo: "celo.jpg",
      description: "Borem ipsum dolor sit amet adipiscing elit.",
      testimonial:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];

  const dashes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <ScrollReveal className="py-[119px] h-auto flex flex-col items-center gap-[95px] font-sf">
      <SectionHeader
        badgeText="Testimonials"
        title="What our clients has to say"
      />

      <div className="flex flex-col gap-[50px]">
      <div className="flex justify-center items-center gap-[67px] h-[398px] rotate-[-9deg]">
        {testimonials.map((test) => (
          <div className="bg-platform h-full w-[423px] px-[30px] py-[50px] border border-[#1C780080] rounded-[30px] flex flex-col items-start justify-between">
            <div className="flex flex-col items-center gap-[46px] w-full ">
              <div className="flex flex-col items-start gap-[13px] w-full">
                <div className="w-[65px] h-[65px] rounded-full border border-[#5E5E5E] text-green-600 flex items-center justify-center">
                  <img
                    src={test.logo}
                    alt=""
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start gap-[7px]">
                  <p className="font-semibold text-[32px] text-body">
                    {test.company}
                  </p>
                  <p className="font-normal text-[18px] text-[#FAFAFABF]">
                    {test.description}
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-linear-to-r from-button  via-[#1c78008d] to-[#1c780049] flex items-center justify-between">
                {dashes.map(() => (
                  <div className="h-px w-[6px] bg-platform"></div>
                ))}
              </div>
            </div>

            <p className="font-normal text-[18px] text-[#FAFAFABF]">
              {test.testimonial}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-[67px] h-[398px] rotate-[15.71deg]">
        {testimonials.map((test) => (
          <div className="bg-platform h-full w-[423px] px-[30px] py-[50px] border border-[#1C780080] rounded-[30px] flex flex-col items-start justify-between">
            <div className="flex flex-col items-center gap-[46px] w-full ">
              <div className="flex flex-col items-start gap-[13px] w-full">
                <div className="w-[65px] h-[65px] rounded-full border border-[#5E5E5E] text-green-600 flex items-center justify-center">
                  <img
                    src={test.logo}
                    alt=""
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start gap-[7px]">
                  <p className="font-semibold text-[32px] text-body">
                    {test.company}
                  </p>
                  <p className="font-normal text-[18px] text-[#FAFAFABF]">
                    {test.description}
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-linear-to-r from-button  via-[#1c78008d] to-[#1c780049] flex items-center justify-between">
                {dashes.map(() => (
                  <div className="h-px w-[6px] bg-platform"></div>
                ))}
              </div>
            </div>

            <p className="font-normal text-[18px] text-[#FAFAFABF]">
              {test.testimonial}
            </p>
          </div>
        ))}
      </div>
      </div>

    
    </ScrollReveal>
  );
};

export default Testimonial;
