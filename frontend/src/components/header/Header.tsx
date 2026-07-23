import { useEffect, useState } from "react";
import headerData from "./headerData.json";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 40);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-200 w-full bg-platform px-5 pb-2.5 pt-9.25 text-body transition-[background-color,border-color,backdrop-filter,padding] duration-300 md:bg-transparent md:px-17.5 ${
        scrolled
          ? "md:border-b md:border-white/10 md:bg-platform/80 md:py-4 md:backdrop-blur-md"
          : "md:border-b md:border-transparent md:py-6"
      }`}
    >
      <div className="relative z-210 flex items-center justify-center">
        <a href="/" className="shrink-0" aria-label={headerData.logo.alt}>
          <img
            src={headerData.logo.src}
            alt={headerData.logo.alt}
            className="h-8 w-auto shrink-0 md:h-9"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
