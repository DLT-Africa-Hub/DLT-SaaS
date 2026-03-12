
import React, { useState } from 'react'
import { Badge } from '../ui/Badge'
import {X, Facebook, Github, Linkedin} from 'lucide-react'


const Team = () => {
    const [hoveredTall, setHoveredTall] = useState<"top" | "bottom" | null>(null)
    const [hoveredRight, setHoveredRight] = useState<"top" | "bottom" | null>(null)
    const team = [
        {
            name:"Aliu Musa",
            position: "Director of DLThub",
            socials:{
                facebook: "wwww.facebook.com",
                twitter: "wwww.twitter.com",
                github: "wwww.github.com",
                linkedin: "wwww.linkedin.com",

            },
            photo:"faceFive.png"
        },
        {
            name:"Seyiyah Abolaji",
            position: "Product Manager",
            socials:{
                facebook: "wwww.facebook.com",
                twitter: "wwww.twitter.com",
                github: "wwww.github.com",
                linkedin: "wwww.linkedin.com",

            },
            photo:"faceOne.png"
        },
        {
            name:"Raji Abdullahi",
            position: "Software Engineer",
            socials:{
                facebook: "wwww.facebook.com",
                twitter: "wwww.twitter.com",
                github: "wwww.github.com",
                linkedin: "wwww.linkedin.com",

            },
            photo:"faceFour.png"
        },
        {
            name:"Ibrahim Aliyu",
            position: "Software Engineer",
            socials:{
                facebook: "wwww.facebook.com",
                twitter: "wwww.twitter.com",
                github: "wwww.github.com",
                linkedin: "wwww.linkedin.com",

            },
            photo:"faceThree.png"
        },
        {
            name:"Fawziyah Dada",
            position: "Graphic Designer",
            socials:{
                facebook: "wwww.facebook.com",
                twitter: "wwww.twitter.com",
                github: "wwww.github.com",
                linkedin: "wwww.linkedin.com",

            },
            photo:"faceTwo.png"
        },

    ]
  return (
    <section className='py-[119px] h-auto flex flex-col items-center gap-[95px] bg-linear-to-t from-[#34de002f] from-0% to-platform font-sf'>
       <div className='flex flex-col items-center gap-[15px] max-w-[520px]'>
       <Badge>Our Team</Badge>

       <div className='flex flex-col items-center gap-[20px] text-center'>
            <p className='text-[56px] font-medium text-[#FAFAFAFA]'>Meet the team</p>
            <p className='text-[18px] font-normal text-[#FAFAFABF]'>Principles that guide our work and ensure the best outcomes for our clients</p>
       </div>
       </div>
       <div className='flex items-center gap-[29px]'>
        {/* left */}
        <div className='group relative h-[869px] w-[376px] overflow-hidden rounded-[500px] border-2 border-[#5e5e5e] font-sf'>
            <img src={team[0].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[0].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/10 px-[27px] py-8 flex flex-col items-start gap-[20px] opacity-0 -translate-x-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[0].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[0].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.twitter} >
                        <X size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.facebook}>
                        <Facebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.github}>
                        <Github size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[0].socials.linkedin}>
                        <Linkedin size={35}/>
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
            <img src={team[1].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[1].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[1].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[1].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.twitter} >
                        <X size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.facebook}>
                        <Facebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.github}>
                        <Github size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[1].socials.linkedin}>
                        <Linkedin size={35}/>
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
            <img src={team[2].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[2].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[2].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[2].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.twitter} >
                        <X size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.facebook}>
                        <Facebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.github}>
                        <Github size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[2].socials.linkedin}>
                        <Linkedin size={35}/>
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
            <img src={team[3].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[3].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[3].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[3].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.twitter} >
                        <X size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.facebook}>
                        <Facebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.github}>
                        <Github size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[3].socials.linkedin}>
                        <Linkedin size={35}/>
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
            <img src={team[4].photo} className='h-full w-full rounded-[500px] object-cover' alt={team[4].name} />
            <div className='pointer-events-none absolute inset-x-0 bottom-40 bg-black/20 px-[27px] py-4 flex flex-col items-start gap-[12px] opacity-0 -translate-x-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200'>
                <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-semibold text-[32px] text-body'>{team[4].name}</p>
                <p className='text-[18px] font-normal text-[#FAFAFABF]'>{team[4].position}</p>
                </div>
                <div className='flex gap-[15px]  text-[#FAFAFABF]'>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.twitter} >
                        <X size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.facebook}>
                        <Facebook size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.github}>
                        <Github size={35}/>
                    </a>
                    <a className='pointer-events-auto cursor-pointer hover:text-body transition-colors' href={team[4].socials.linkedin}>
                        <Linkedin size={35}/>
                    </a>
                    
                </div>
            </div>

        </div>

        </div>
       </div>




    </section>
  )
}

export default Team