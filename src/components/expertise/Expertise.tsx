import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../common/ScrollReveal'
import type { IconType } from "react-icons"
import { MdOutlineTerminal } from "react-icons/md";
import { RiTerminalBoxLine } from "react-icons/ri";
import { GoGitMerge } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";

const Expertise = () => {

    interface expert {
        title: string
        text: string
        icon: IconType
        strokeWidth?: number
    }

    const expertise: expert[] = [
        {
            title: "Frontend Development",
            text: "React, React Native, Next.Js, Typescript, JavaScript...",
            icon: RiTerminalBoxLine,
            strokeWidth: 0,
        },
        {
            title: "Backend Development",
            text: "React, React Native, Next.Js, Typescript, JavaScript...",
            icon: MdOutlineTerminal,
            strokeWidth: 0,
        },
        {
            title: "Web & Mobile Development",
            text: "React, React Native, Next.Js, Typescript, JavaScript...",
            icon: GoGitMerge,
            strokeWidth: 1.3,
        },
        {
            title: "Frontend Build",
            text: "React, React Native, Next.Js, Typescript, JavaScript...",
            icon: CiShare2,
            strokeWidth: 1.4,
        },
    ]

  return (
    <ScrollReveal className='py-[86px] md:py-[150px] h-screen flex flex-col items-center gap-[46px] font-sf' direction="up">
        <SectionHeader
          badgeText="Our Expertise"
          title="Technologies and Skills"
          subtitle="Comprehensive tech stack for all your digital needs"
          className='w-[673px]'
        />

        <div className='px-5 md:px-0 md:flex md:flex-row items-center gap-[50px]'>
          <div className='w-full max-w-[519px] h-[545px] flex flex-col items-left justify-between'>
              {expertise.map((exp) => (
                  <div className='h-auto md:h-[119px] flex justify-start gap-[18px] md:gap-[23px] w-full rounded-r-[20px] py-5 pl-[30px] pr-[10px] border-l-2 border-green-600 bg-linear-to-r from-[#0F0F0F] from-70% to-[#75757559]'>
                      <div className='w-[44px] h-[44px] shrink-0 rounded-full flex items-center justify-center border border-[#5E5E5E] text-green-600'>
                          <exp.icon className='w-6 h-6' strokeWidth={exp.strokeWidth} />
                      </div>
                      <div className='flex flex-col w-full gap-[5px]'>
                          <p className='font-semibold w-full text-[20px] md:text-[24px] text-body'>{exp.title}</p>
                          <p className='font-light text-[14px] md:text-[16px] text-[#FAFAFABF]'>{exp.text}</p>
                      </div>
                  </div>
              ))}
          </div>
          <div className='hidden md:block w-[623px] h-[545px] rounded-[20px]'>
              <img loading="lazy" src="rectangle.png" alt="" className='h-full w-full object-cover' />
          </div>
        </div>
    </ScrollReveal>
  )
}

export default Expertise