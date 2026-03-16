import React from "react";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../common/ScrollReveal";

const Herosection = () => {
  const beams = [
    {
      height: "80%",
    },
    {
      height: "70%",
    },
    {
      height: "60%",
    },
    {
      height: "50%",
    },
    {
      height: "40%",
    },
    {
      height: "30%",
    },
    {
      height: "20%",
    },
    {
      height: "10%",
    },
  ];

  const stats = [
    {
      title: "products",
      number: 250,
      text: "Trusted products",
    },
    {
      title: "integrations",
      number: 250,
      text: "Integrations",
    },
    {
      title: "guarantee",
      number: 99.8,
      text: "Uptime guarantee",
    },
  ];
  return (
    <ScrollReveal className="relative flex h-screen items-center justify-center overflow-hidden rounded-b-[20px]">
      <div className="z-50 flex w-[834px] flex-col items-center justify-center gap-[55px] font-sf text-center animate-hero-float">
        <h1 className="font-medium text-[56px]  text-body">
          Gorem ipsum dolor sit amet, dipiscing elit.
        </h1>
        <p className="font-normal text-[14px] text-[#FAFAFABF]">
          Gorem ipsum dolor sit amet, dipiscing elit.
        </p>
        <Button
          variant="secondary"
          className="font-normal text-[18px] animate-soft-pulse"
        >
          Book a meet
        </Button>
      </div>

      <div className="absolute top-0 h-[532px] w-[532px] rounded-full bg-[#B8FF8833] blur-3xl opacity-40 rounded-b-[20px]" />

      <div className="absolute bottom-[68px] font-sf text-body w-full flex justify-between z-10 items-center px-[70px] rounded-b-[20px]">
        <div className="flex gap-12">
          {stats.map((stat) => (
            <div>
              <p className="text-[24px] font-bold">
                {stat.number}
                {stat.title === "guarantee" ? "%" : "+"}
              </p>
              <p className="text-[18px] font-normal">{stat.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[18px] font-normal cursor-pointer bg-[#FFFFFF1A] p-2 rounded-2xl text-[#2AC500] backdrop-blur-md border border-white/10 shadow-lg  ">
          view more
        </p>
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
      <div className="absolute bottom-0 flex w-full justify-center opacity-20 rounded-b-[20px] animate-earth-orbit">
        <div className="absolute h-full w-full rounded-b-[20px] bg-linear-to-t from-green-800/50 to-transparent" />
        <img src="earth.png" className="w-[1360px] rounded-b-[20px]" alt="" />
      </div>
    </ScrollReveal>
  );
};

export default Herosection;
