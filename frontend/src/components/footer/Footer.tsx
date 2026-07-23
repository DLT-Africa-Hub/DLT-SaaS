import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SlCallOut } from "react-icons/sl";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "../ui/Button";
import type { MeetProps } from "../../types/meet";
import footerData from "./footerData.json";

const socialIconMap: Record<string, IconType> = {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaGithub,
};

const Footer = ({ openModal }: MeetProps) => {
  const year = new Date().getFullYear();
  const socials = footerData.socials.map((social) => ({
    link: social.link,
    label: social.label,
    icon: socialIconMap[social.icon] ?? FaFacebook,
  }));

  return (
    <footer className="flex w-full flex-col items-center bg-linear-to-t from-[#34de006a] to-platform px-5 py-16 font-sf md:px-17.5 md:py-24">
      {/* CTA */}
      <div className="relative mb-14 w-full overflow-hidden rounded-[28px] bg-[#196106] px-6 py-10 md:mb-20 md:w-[80%] md:rounded-[50px] md:px-16 md:py-24">
        <div className="relative z-10 flex max-w-xl flex-col items-start gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-5">
            <p className="text-[28px] leading-tight font-medium text-body md:text-[56px]">
              {footerData.cta.title}
            </p>
            <p className="text-[15px] font-light leading-relaxed text-[#FAFAFABF] md:text-[18px]">
              {footerData.cta.subtitle}
            </p>
          </div>
          <Button variant="secondary" onClick={() => openModal(true)}>
            {footerData.cta.buttonText}
          </Button>
        </div>

        <div className="pointer-events-none absolute -top-93.5 -left-67.25 hidden h-234.5 w-106.5 rotate-67 bg-[#FFFFFF66] blur-3xl md:block" />
        <div className="pointer-events-none absolute -top-60.5 -right-50 hidden h-234.5 w-106.5 rotate-22 bg-[#ffffff86] blur-3xl md:block" />
        <img
          loading="lazy"
          src={footerData.cta.image}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-10 -bottom-20 z-0 hidden w-105 opacity-90 md:block lg:w-130"
        />
        <svg
          className="pointer-events-none absolute inset-0 z-20 h-full w-full rounded-[28px] opacity-20 md:rounded-[50px]"
          aria-hidden
        >
          <filter id="footer-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.3"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#footer-noise)" />
        </svg>
      </div>

      {/* Brand + contact */}
      <div className="flex w-full flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between md:gap-16 md:pt-14">
        <div className="flex flex-col items-start gap-4">
          <img
            loading="lazy"
            src={footerData.brand.logo}
            className="h-auto w-40 md:w-44"
            alt={footerData.brand.logoAlt}
          />
          <div className="flex flex-wrap items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-body transition-colors hover:border-white/35 hover:bg-white/5"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-xs flex-col gap-4 md:items-start">
          <p className="text-[16px] font-semibold tracking-wide text-body md:text-[18px]">
            {footerData.contact.title}
          </p>
          <div className="flex flex-col gap-3.5 text-[15px] font-light text-[#FAFAFAD9]">
            <div className="flex items-start gap-3">
              <IoLocationOutline className="mt-0.5 shrink-0 text-[18px] text-green-600" />
              <p className="leading-relaxed">{footerData.contact.location}</p>
            </div>
            <a
              className="flex items-center gap-3 transition-colors hover:text-white"
              href={footerData.contact.phone.href}
            >
              <SlCallOut className="shrink-0 text-[16px] text-green-600" />
              <span>{footerData.contact.phone.display}</span>
            </a>
            <a
              className="flex items-center gap-3 transition-colors hover:text-white"
              href={footerData.contact.email.href}
            >
              <PiEnvelopeSimpleThin className="shrink-0 text-[18px] text-green-600" />
              <span>{footerData.contact.email.display}</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mt-12 w-full text-center text-[13px] font-light text-white/40 md:mt-16 md:text-left">
        © {year} DLTHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
