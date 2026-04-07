import { Button } from "../ui/Button";
import { FaXTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import type {IconType} from "react-icons"
import { SlCallOut } from "react-icons/sl";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import type {MeetProps} from  "../../types/meet"





const Footer = ({openModal}:MeetProps) => {
    interface iSocial {
        icon: IconType;
        link: string
    }

   
  
    const socials: iSocial[]= [
        {
            icon:FaFacebook,
            link:"wwww.facebook.com",
        },
        {
            icon:FaInstagram,
            link:"wwww.instagram.com",
        },
        {
            icon:FaLinkedin,
            link:"wwww.linkedin.com",
        },
        {
            icon:FaXTwitter,
            link:"wwww.twitter.com",
        },
        {
            icon:FaGithub,
            link:"wwww.github.com",
        },

    ]
  return (
    <footer className=" py-[86px] md:py-0 md:h-screen bg-linear-to-t from-[#34de006a] flex items-center justify-center flex-col px-5 md:px-[70px]  gap-[72px]  to-platform font-sf">
      <div className="relative hidden md:block w-[80%] h-[485px] bg-[#196106] pt-[100px] px-[61px]  rounded-[50px] overflow-hidden ">

        <div className="flex flex-col items-start gap-[30px] z-10">
            <div className="flex flex-col items-start gap-[20px]">
                <p className="font-meduim text-[56px] text-[#FAFAFAFA]">Want to contact us?</p>
                <p className="font-light text-[18px] text-[#FAFAFABF]">Comprehensive tech stack for all your digital needs</p>

            </div>
            <Button variant="secondary" onClick={() => openModal(true)}>Book a meet</Button>
        </div>

        <div className="absolute w-[426px] h-[938px] bg-[#FFFFFF66] top-[-374px] left-[-269px]  rotate-67 blur-3xl"/>
        <div className="absolute w-[426px] h-[938px] bg-[#ffffff86] top-[-242px] left-[1250px]  rotate-22 blur-3xl"/>
        <img loading="lazy" src="dlt.png" alt="dlt" className="absolute bottom-[-100px] right-[-50px] w-[571px] h-[571px]" />
        <svg className="absolute inset-0 w-full h-full opacity-20 z-100 pointer-events-none rounded-[50px]">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.3"
              
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="w-full flex flex-col gap-[35px]  md:flex-row items-start justify-between   ">
        <div className="w-full flex flex-col items-start gap-[10px]">
            <img loading="lazy" src="dltMonoWhite.png" alt="DLTHub" />
            <div className="flex items-center gap-[15px]">
                {socials.map((social) => (
                    <a href={social.link}>
                        <social.icon size={35}/>
                    </a>
                ))}

            </div>
        </div>
        <div className=" w-full flex flex-col items-start gap-[9px] max-w-[300px]">
            <p className="font-semibold text-[20px] text-body">Contact</p>
            <div className="flex items-start gap-[10px]">
            <div className="flex items-center justify-center">
            <IoLocationOutline  className="text-green-600  text-[20px]"/>
            </div>
            <p className="font-light text-[16px] text-[#FAFAFAD9] wrap-break-word">2, Sheikh Zakariyah Adebayo Yusuf Street, PEGAMUT, 102112, Ota, Ogun State</p>

            </div>

           <a  className="flex items-start gap-[10px] cursor-pointer" href="tel:+2348156509701">
           <div className="flex items-center justify-center">
            <SlCallOut  className="text-green-600  text-[20px]"/>
            </div>
                <p> (234)815 650 9701</p>
           </a>
           <a  className="flex items-start gap-[10px] cursor-pointer" href="mailto:info@dlthub.org">
           <div className="flex items-center justify-center">
            <PiEnvelopeSimpleThin  className="text-green-600  text-[20px]"/>
            </div>
                <p> info@dlthub.org</p>
           </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
