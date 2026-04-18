
import { ScrollReveal } from '../common/ScrollReveal'

import {Link} from 'lucide-react'
import principlesData from "./principlesData.json"
import { SectionHeader } from '../ui/SectionHeader'


const Principles = () => {
    const { badgeText, title, subtitle, cards } = principlesData
  return (
    <ScrollReveal id="principles" className='min-h-screen w-full flex flex-col items-start py-[86px] md:py-[150px] gap-[75px] px-[20px] md:px-[70px] relative '>
        <SectionHeader
        title={title}
        badgeText={badgeText}
        subtitle={subtitle}
        align='left'
        />
        <div className='flex flex-col md:grid md:grid-cols-3  w-full md:gap-x-[130px] md:gap-y-[37px] gap-y-[25px] '>
            {cards.map((cardDetail) => (
                <div
                    key={cardDetail.title}
                    className={`relative overflow-hidden w-full max-w-[486px] flex flex-col items-start gap-[46px] p-[30px] border border-[#5E5E5E] rounded-[20px] bg-gradient-to-tr from-[#000000] from-40% ${
                        cardDetail.color === "green" ? "to-[#3df50077]" : "to-[#ffa851a5]"
                    }`}
                >
                    <div className='w-[44px] h-[44px] rounded-full border border-[#5E5E5E] flex items-center justify-center text-green-600'>
                            <Link className='rotate-45'/>
                    </div>
                 <div className='flex flex-col items-start gap-[20px] font-sf'>
                 <p className='font-bold text-[24px] text-[#FAFAFAFA]'>{cardDetail.title}</p>
                 <p className='font-light text-[18px] text-[#FAFAFABF]'>{cardDetail.text}</p>
                 </div>
                 {/* <img src="cardGradiient.png" alt="" className='absolute  bg-black ' /> */}
                </div>
            ))}
        </div>
    </ScrollReveal>
  )
}

export default Principles