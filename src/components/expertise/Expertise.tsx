import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../common/ScrollReveal'
import type { IconType } from "react-icons"
import { MdOutlineTerminal } from "react-icons/md";
import { RiTerminalBoxLine } from "react-icons/ri";
import { GoGitMerge } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";

const Expertise = () => {

    interface expert {
        title:string
        text:string
        icon:IconType
    }

    const expertise:expert[] =[
        {
            title:"Frontend Development",
            text:"React, React Native, Next.Js, Typescript, JavaScript...",
            icon:RiTerminalBoxLine,
        },
        {
            title:"Backend Development",
            text:"React, React Native, Next.Js, Typescript, JavaScript...",
            icon: MdOutlineTerminal,
        },
        {
            title:"Web & Mobile Development",
            text:"React, React Native, Next.Js, Typescript, JavaScript...",
            icon:GoGitMerge,
        },
        {
            title:"Frontend Development",
            text:"React, React Native, Next.Js, Typescript, JavaScript...",
            icon:CiShare2,
        },
    ]

  return (
    <ScrollReveal className='py-[150px] h-screen flex flex-col items-center gap-[46px] font-sf' direction="up">
        <SectionHeader
        badgeText="Our Expertise"
        title="Technologies and Skills"
        subtitle="Comprehensive tech stack for all your digital needs"
        className='w-[673px]'
      />

      <div className='flex flex-row items-center gap-[50px]'>
        <div className='w-[519px] h-[545px] flex flex-col items-left justify-between'>
            {expertise.map((exp) => (
                <div className='h-[119px] flex justify-start gap-[23px] w-full rounded-r-[20px] py-5 px-[30px] border-l-2 border-green-600 bg-linear-to-r from-[#0F0F0F] from-70%  to-[#75757559] '>
                        <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center border border-[#5E5E5E] text-green-600'>
                            <exp.icon size={18}/>
                        </div>
                        <div className=' flex flex-col gap-[5px]'>
                            <p className='font-semibold text-[24px] text-body'>{exp.title}</p>
                            <p className='font-normal text-[16px] text-[#FAFAFABF]'>{exp.text}</p>
                        </div>
                </div>
            ))}

        </div>
        <div className='w-[623px] h-[545px] rounded-[20px]'>
            <img src="rectangle.png" alt="" className='h-full w-full object-cover' />
        </div>

      </div>
    </ScrollReveal>


  )
}

export default Expertise