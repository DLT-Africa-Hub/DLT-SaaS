import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/Button";
import headerData from "./headerData.json";

type HeaderProps = {
  onContactClick: () => void;
};

const Header = ({ onContactClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
        setIsOpen(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed bg-platform md:bg-transparent w-full px-5 pb-[10px] pt-[37px] text-body md:px-[70px] md:pb-0 md:pt-[40px] z-[200] transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative z-[210] flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <img src={headerData.logo.src} alt={headerData.logo.alt} className="h-8 w-auto md:h-10 shrink-0" />
          <span className="hidden lg:block max-w-[220px] text-left text-[11px] font-light leading-snug text-[#FAFAFABF]">
            {headerData.tagline}
          </span>
        </div>

        <nav className="hidden items-center gap-24 rounded-xl bg-[#FFFFFF1A] px-[30px] py-5 font-sf text-[18px] font-normal backdrop-blur-md border border-white/10 shadow-lg md:flex">
          {headerData.navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="primary" onClick={onContactClick}>
            {headerData.actions.contactButtonText}
          </Button>
        </div>

        <button
          type="button"
          className="relative md:hidden flex items-center gap-2 rounded-full border border-white/15 bg-[#0a0a0a]/80 px-3 py-2 backdrop-blur-md shadow-[0_0_24px_-4px_rgba(42,197,0,0.25)] transition-colors hover:border-green-600/50"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-overlay"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          <span className="font-sf text-[11px] font-medium uppercase tracking-[0.2em] text-green-600">
            {isOpen ? "Close" : "Menu"}
          </span>
          <span className="flex h-4 w-4 flex-col items-center justify-center gap-[3px]" aria-hidden>
            <motion.span
              className="block h-[2px] w-3.5 origin-center rounded-full bg-body"
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-3.5 origin-center rounded-full bg-body"
              animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            className="fixed inset-0 z-[199] flex min-h-dvh md:hidden flex-col bg-platform font-sf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Solid base + depth: matches page canvas, reads clearly as a full-screen panel */}
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#0b120b] via-platform to-[#020202]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(52,222,0,0.14),transparent_60%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage: `linear-gradient(rgba(250,250,250,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(250,250,250,0.5) 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-1/4 top-1/3 h-[min(70vh,520px)] w-[min(90vw,420px)] rounded-full bg-green-600/25 blur-[100px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-1/4 bottom-0 h-[45vh] w-[80vw] rounded-full bg-[#1c7800]/35 blur-[90px]"
              aria-hidden
            />

            <div className="relative flex min-h-0 flex-1 flex-col px-6 pb-10 pt-[calc(5.5rem+env(safe-area-inset-top))]">
              <p className="mb-10 max-w-[280px] text-[13px] font-light leading-relaxed text-[#FAFAFABF]">
                {headerData.tagline}
              </p>

              <nav className="flex flex-1 flex-col justify-center gap-0" aria-label="Mobile">
                {headerData.navigation.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="group relative flex items-center gap-5 border-b border-white/80 py-6 first:border-t first:border-t-white/80"
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-8 font-mono text-[11px] font-medium tabular-nums text-green-600/90">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[22px] font-medium leading-tight tracking-tight text-body transition-colors group-active:text-green-600 sm:text-[26px]">
                      {item.label}
                    </span>
                    <span className="text-green-600/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-green-600/80">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-auto pt-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
              >
                <Button
                  variant="primary"
                  className="w-full py-4 text-[16px] shadow-[0_0_40px_-8px_rgba(42,197,0,0.45)]"
                  onClick={() => {
                    onContactClick();
                    setIsOpen(false);
                  }}
                >
                  {headerData.actions.contactButtonText}
                </Button>
                <p className="mt-4 text-center text-[11px] font-light tracking-wide text-[#FAFAFABF]/70">
                  {headerData.mobileNavHint}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
