
import { useState } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../common/ScrollReveal'
import { FaXTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";
import teamData from "./teamData.json"



const Team = () => {
    const [hoveredTall, setHoveredTall] = useState<"top" | "bottom" | null>(null)
    const [hoveredRight, setHoveredRight] = useState<"top" | "bottom" | null>(null)
    const team = teamData.members
  return (
    <ScrollReveal className='relative overflow-hidden  md:py-[119px]  py-[86px] h-auto flex flex-col items-center gap-[95px] bg-linear-to-t from-[#34de002f] from-0% to-platform font-sf'>
       <SectionHeader
        badgeText={teamData.header.badgeText}
        title={teamData.header.title}
        subtitle={teamData.header.subtitle}
        align='left'
        className='md:hidden px-[20px]'
        
      />
       <SectionHeader
        badgeText={teamData.header.badgeText}
        title={teamData.header.title}
        subtitle={teamData.header.subtitle}
       
        className='hidden md:flex'
        
      />

      <div className='absolute w-[1867px] top-[-467px] left-[215px] z-0 rotate-[5.05deg] opacity h-[1866px]'>
            <img src={teamData.bg} alt="dltbg" />
      </div>
       <div className='hidden md:flex items-center gap-[29px]'>
        {/* left */}
        <div className='group relative h-[869px] w-[376px] overflow-hidden rounded-[500px] border-2 border-[#5e5e5e] font-sf'>
            <img loading='lazy' src={team[0].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[0].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/10 px-[27px] py-8 flex flex-col items-start gap-[20px] opacity-0 -translate-x-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[0].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[0].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.twitter} >
                        <FaXTwitter size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.facebook}>
                        <FaFacebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.github}>
                        <FaGithub size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.linkedin}>
                        <FaLinkedin size={35}/>
                    </a>
                    
                </div>
            </div>

        </div>

        {/* center */}
        <div className={`flex flex-col items-center h-[869px] w-[376px] transition-all duration-500 ease-out ${
          hoveredTall ? "gap-0" : "gap-[37px]"
        }`}>
        <div
          className={`group relative w-[376px] overflow-hidden rounded-[500px] border-2 border-[#5e5e5e] font-sf transition-all duration-500 ease-out ${
            hoveredTall === "top"
              ? "h-[869px]"
              : hoveredTall === "bottom"
              ? "h-[2px]"
              : "h-[246px]"
          }`}
          onMouseEnter={() => setHoveredTall("top")}
          onMouseLeave={() => setHoveredTall(null)}
        >
            <img loading='lazy' src={team[1].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[1].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[1].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[1].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.twitter} >
                        <FaXTwitter size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.facebook}>
                        <FaFacebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.github}>
                        <FaGithub size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.linkedin}>
                        <FaLinkedin size={35}/>
                    </a>
                    
                </div>
            </div>

        </div>

        <div
          className={`group relative w-[376px] overflow-hidden rounded-[500px] border-2 border-[#5e5e5e] font-sf transition-all duration-500 ease-out ${
            hoveredTall === "bottom"
              ? "h-[869px]"
              : hoveredTall === "top"
              ? "h-[2px]"
              : "h-[586px]"
          }`}
          onMouseEnter={() => setHoveredTall("bottom")}
          onMouseLeave={() => setHoveredTall(null)}
        >
            <img loading='lazy' src={team[2].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[2].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[2].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[2].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.twitter} >
                        < FaXTwitter size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.facebook}>
                        <FaFacebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.github}>
                        <FaGithub size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.linkedin}>
                        <FaLinkedin size={35}/>
                    </a>
                    
                </div>
            </div>

        </div>
        </div>

        {/* right */}
        <div className={`flex flex-col items-center h-[869px] w-[376px] transition-all duration-500 ease-out ${
          hoveredRight ? "gap-0" : "gap-[37px]"
        }`}>
             <div
          className={`group relative w-[376px] overflow-hidden rounded-[500px] border-2 border-[#5e5e5e] font-sf transition-all duration-500 ease-out ${
          hoveredRight === "bottom"
              ? "h-[869px]"
              : hoveredRight === "top"
              ? "h-[2px]"
              : "h-[586px]"
          }`}
          onMouseEnter={() => setHoveredRight("bottom")}
          onMouseLeave={() => setHoveredRight(null)}
        >
            <img loading='lazy' src={team[3].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[3].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[3].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[3].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.twitter} >
                        <FaXTwitter size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.facebook}>
                        <FaFacebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.github}>
                        <FaGithub size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.linkedin}>
                        <FaLinkedin size={35}/>
                    </a>
                    
                </div>

            </div>

        </div>

        <div
          className={`group relative w-[376px] overflow-hidden rounded-[500px] border-2 border-[#5e5e5e] font-sf transition-all duration-500 ease-out ${
            hoveredRight === "top"
              ? "h-[869px]"
              : hoveredRight === "bottom"
              ? "h-[2px]"
              : "h-[246px]"
          }`}
          onMouseEnter={() => setHoveredRight("top")}
          onMouseLeave={() => setHoveredRight(null)}
        >
            <img loading='lazy' src={team[4].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[4].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[4].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[4].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.twitter} >
                        <FaXTwitter size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.facebook}>
                        <FaFacebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.github}>
                        <FaGithub size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.linkedin}>
                        <FaLinkedin size={35}/>
                    </a>
                    
                </div>
            </div>

        </div>

        </div>
       </div>

       <div className='px-[20px] w-full flex gap-[30px] flex-col items-center  md:hidden'>
          {team.map((member) => (
            <div key={member.name} className='relative w-full h-[419px]'>
                 <img src={member.photo} className='h-full w-full rounded-[50px]   mobileFit object-cover' alt={member.name} loading='lazy' />
                <div className='absolute  bottom-0 pl-[27px] pb-[35px] rounded-b-[50px] w-full bg-linear-to-t from-black/20 from-90%  flex flex-col items-start gap-[15px] '>
              
                <div className='flex flex-col items-start gap-[5px]'>
                <p className='font-semibold text-[28px] text-body'>{member.name}</p>
                <p className='text-[18px] font-light text-[#FAFAFABF]'>{member.position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={member.socials.twitter} >
                        <FaXTwitter size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={member.socials.facebook}>
                        <FaFacebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={member.socials.github}>
                        <FaGithub size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={member.socials.linkedin}>
                        <FaLinkedin size={35}/>
                    </a>
                    
                </div>
            
                </div>
            </div>
          ))}

       </div>




    </ScrollReveal>
  )
}

export default Team