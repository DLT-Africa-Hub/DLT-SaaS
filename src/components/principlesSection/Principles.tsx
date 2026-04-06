
import { ScrollReveal } from '../common/ScrollReveal'
import { Badge } from '../ui/Badge'
import {Link} from 'lucide-react'


const Principles = () => {
    const cardDetails = [
        {
            title: "Integrity",
            text: "We are true to our words",
            color: "green"
        },
        {
            title: "Proficiency",
            text: "We are always up to the task",
            color: "brown"
        },
        {
            title: "Honest",
            text: "Always honest",
            color: "green"
        },
        {
            title: "Creativity",
            text: "Always creative",
            color: "brown"
        },
        {
            title: "Builders",
            text: "Always Building",
            color: "green"
        },
        {
            title: "Handsome",
            text: "Yes Aliyu is handsome",
            color: "brown"
        },
        
    ]
  return (
    <ScrollReveal className='min-h-screen w-full flex flex-col items-start py-[86px] md:py-[150px] gap-[75px] px-[20px] md:px-[70px] relative '>
        <div className='w-full flex flex-col gap-[15px] font-sf'>
            <Badge className='w-[150px]'>Our Principles</Badge>
            <div className='flex flex-col gap-[20px]'>
            <p className='font-medium text-[32px] md:text-[56px] text-[#FAFAFAFA]'>Gorem ipsum dolor sit amet, dipiscing elit.</p>
            <p className='text-[#FAFAFABF] font-normal text-[14px] md:text-[18px]'>Principles that guide our work and ensure the best outcomes for our clients</p>
            </div>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-3  w-full md:gap-x-[130px] md:gap-y-[37px] gap-y-[25px] '>
            {cardDetails.map((cardDetail) => (
                <div
                    key={cardDetail.title}
                    className={`relative overflow-hidden w-full max-w-[486px] flex flex-col items-start gap-[46px] p-[30px] h-[240px] border border-[#5E5E5E] rounded-[20px] bg-gradient-to-tr from-[#000000] from-40% ${
                        cardDetail.color === "green" ? "to-[#3df50077]" : "to-[#ffa851a5]"
                    }`}
                >
                    <div className='w-[44px] h-[44px] rounded-full border border-[#5E5E5E] flex items-center justify-center text-green-600'>
                            <Link className='rotate-45'/>
                    </div>
                 <div className='flex flex-col items-start gap-[20px] font-sf'>
                 <p className='font-bold text-[24px] text-[#FAFAFAFA]'>{cardDetail.title}</p>
                 <p className='font-normal text-[18px] text-[#FAFAFABF]'>{cardDetail.text}</p>
                 </div>
                 {/* <img src="cardGradiient.png" alt="" className='absolute  bg-black ' /> */}
                </div>
            ))}
        </div>
    </ScrollReveal>
  )
}

export default Principles