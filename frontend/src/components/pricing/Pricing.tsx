
import { ScrollReveal } from '../common/ScrollReveal'
import { SectionHeader } from '../ui/SectionHeader'
import { SlGlobeAlt } from "react-icons/sl";
import pricingData from "./pricingData.json"

const Pricing = () => {
  const dashes = Array.from({ length: 20 });

  return (
    <ScrollReveal id="pricing" className='scroll-mt-[100px] pt-[86px] md:pt-[150px] pb-[50px]  flex flex-col items-center gap-[85px] font-sf' direction="up">
          <SectionHeader
        badgeText={pricingData.header.badgeText}
        title={pricingData.header.title}
        subtitle={pricingData.header.subtitle}
        className='w-full px-5  md:w-[673px]'
        align='center'
      />

      <div className='flex flex-col md:flex-row items-stretch gap-[35px] md:min-h-[666px] px-5'>
            {pricingData.plans.map((plan)=>(
                <div key={plan.title} className='h-full w-full md:w-[423px] px-[30px] py-[50px] border border-[#1C780080] rounded-[30px] flex flex-col items-start gap-10 justify-between'>

                    <div className='flex flex-col items-center gap-[46px] w-full '>

                        <div className='flex flex-col items-start gap-[20px] w-full'>
                            <div className='w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-full border border-[#5E5E5E] text-green-600 flex items-center justify-center'>
                            <SlGlobeAlt className="w-6 h-6 md:w-[35px] md:h-[35px]" />
                            </div>
                            <div className='flex flex-col items-start gap-[10px]'>
                                <p className='font-semibold text-[26px] md:text-[32px] text-body'>{plan.title}</p>
                                <p className='font-light text-[16px] md:text-[18px] text-[#FAFAFABF]'>{plan.lead}</p>
                            </div>

                        </div>
                        <ul className="flex flex-col gap-3 w-full list-disc pl-5 text-[15px] md:text-[16px] text-[#FAFAFABF] font-light marker:text-green-600">
                          {plan.bullets.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>

                    </div>

                          <div>
                          <div className="h-px w-full bg-linear-to-r from-button via-[#1c78008d] to-[#1c780049] flex items-center justify-between">
          {dashes.map((_, i) => (
            <div key={i} className="h-px w-[6px] bg-platform" />
          ))}
        </div>

                    <p className="w-full text-[13px] md:text-[14px] font-light text-[#FAFAFABF]/80  pt-4">
                      {plan.footnote}
                    </p>
                          </div>
                </div>
            ))}
      </div>

      <p className="px-5 text-center text-[14px] md:text-[16px] font-light text-[#FAFAFABF] max-w-[720px]">
        {pricingData.disclaimer}
      </p>


    </ScrollReveal>
  )
}

export default Pricing
