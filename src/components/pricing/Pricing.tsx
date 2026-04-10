
import { ScrollReveal } from '../common/ScrollReveal'
import { SectionHeader } from '../ui/SectionHeader'
import { SlGlobeAlt } from "react-icons/sl";
import pricingData from "./pricingData.json"

const Pricing = () => {
    const dashes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


  return (
    <ScrollReveal className='pt-[86px] md:pt-[150px] pb-[50px]  flex flex-col items-center gap-[85px] font-sf' direction="up">
          <SectionHeader
        badgeText={pricingData.header.badgeText}
        title={pricingData.header.title}
        subtitle={pricingData.header.subtitle}
        className='w-[673px]'
        align='center'
      />

      <div className='flex flex-col md:flex-row items-center gap-[35px] md:h-[666px] px-5'>
            {pricingData.plans.map((pricing)=>(
                <div className='h-full w-full md:w-[423px] px-[30px] py-[50px] border border-[#1C780080] rounded-[30px] flex flex-col items-start gap-[81px] justify-between'>

                    <div className='flex flex-col items-center gap-[46px] w-full '>

                        <div className='flex flex-col items-start gap-[20px] w-full'>
                            <div className='w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-full border border-[#5E5E5E] text-green-600 flex items-center justify-center'>
                            <SlGlobeAlt className="w-6 h-6 md:w-[35px] md:h-[35px]" />
                            </div>
                            <div className='flex flex-col items-start gap-[10px]'>
                                <p className='font-semibold text-[26px] md:text-[32px] text-body'>{pricing.title}</p>
                                <p className='font-light text-[16px] md:text-[18px] text-[#FAFAFABF]'>{pricing.text}</p>

                            </div>

                        </div>
                        <div className='h-px w-full bg-linear-to-r from-button  via-[#1c78008d] to-[#1c780049] flex items-center justify-between'>
                                {dashes.map(() => (
                                    <div className='h-px w-[6px] bg-platform'></div>
                                ))}
                        </div>

                    </div>

                    <div className='w-full flex flex-col items-start gap-5 '>
                        <div className='w-full flex items-center justify-between font-light text-[16px] md:text-[18px] text-[#FAFAFABF]'>
                            <p>{pricingData.roleLabels.techLead}</p>
                            <p>${pricing.costs.techLead}</p>
                        </div>
                        <div className='w-full flex items-center justify-between font-light text-[16px] md:text-[18px] text-[#FAFAFABF]'>
                            <p>{pricingData.roleLabels.product}</p>
                            <p>${pricing.costs.product}</p>
                        </div>
                        <div className='w-full flex items-center justify-between font-light text-[16px] md:text-[18px] text-[#FAFAFABF]'>
                            <p>{pricingData.roleLabels.marketing}</p>
                            <p>${pricing.costs.marketing}</p>
                        </div>
                        
                    </div>
                </div>
            ))}
      </div>


    </ScrollReveal>
  )
}

export default Pricing