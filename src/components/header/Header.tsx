import React, { useState } from "react";
import { Button } from "../ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full px-6 pt-6 text-body md:px-[70px] md:pt-[40px] z-100">
      <div className="relative flex items-center justify-between">
        {/* logo */}
        <img src="/logo.png" alt="logo" className="h-8 w-auto md:h-10" />

        {/* desktop navigation */}
        <nav className="hidden items-center gap-24 rounded-xl bg-[#FFFFFF1A] px-[30px] py-5 font-sf text-[18px] font-normal backdrop-blur-md border border-white/10 shadow-lg md:flex">
          <a href="">Solutions</a>
          <a href="">Team</a>
          <a href="">Pricing</a>
        </nav>

        {/* desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="primary">Contact Us</Button>
        </div>

        {/* mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF1A] backdrop-blur-md border border-white/10 shadow-lg md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-[2px] w-5 bg-body transition-transform data-[open=true]:translate-y-[3px] data-[open=true]:rotate-45" data-open={isOpen} />
          <span className="mt-[5px] block h-[2px] w-5 bg-body transition-transform data-[open=true]:-translate-y-[3px] data-[open=true]:-rotate-45" data-open={isOpen} />
        </button>
      </div>

      {/* mobile nav panel */}
      {isOpen && (
        <div className="absolute  mt-3 flex w-[90%] flex-col gap-4 rounded-2xl bg-[#FFFFFF1A] p-4 font-sf text-base backdrop-blur-md border border-white/10 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3">
            <a href="">Solutions</a>
            <a href="">Team</a>
            <a href="">Pricing</a>
          </nav>
          <div className="mt-2 flex flex-col gap-3">
            <Button variant="primary" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;