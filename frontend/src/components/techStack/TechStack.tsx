import techStackData from "./techStackData.json";

const TechStack = () => {
  const items = techStackData.items;
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Technologies we work with"
      className="relative z-10 w-full overflow-hidden border-y border-white/10 bg-[#0c1018] py-4 md:py-5 mt-5"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#0c1018] to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#0c1018] to-transparent sm:w-24"
        aria-hidden
      />

      <div className="flex w-max animate-tech-marquee hover:[animation-play-state:paused]">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center font-sf text-[15px] font-light italic tracking-wide text-[#C8CDD6] sm:text-[17px] md:text-[18px]"
          >
            <span className="px-4 sm:px-5">{item}</span>
            <span className="select-none text-[#C8CDD6]/50" aria-hidden>
              /
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
