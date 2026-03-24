import React from 'react'
import { ScrollReveal } from '../common/ScrollReveal'
import { SectionHeader } from '../ui/SectionHeader'
import { SlGlobeAlt } from "react-icons/sl";

const Pricing = () => {

    const pricings = [
        {
            title:"Hourly Rate",
            text:"Borem ipsum dolor sit amet adipiscing elit.",
            costs:{
                techLead: 5000,
                product:6000,
                marketing:8000,
            }
        },
        {
            title:"Monthly Rate",
            text:"Borem ipsum dolor sit amet adipiscing elit.",
            costs:{
                techLead: 5000,
                product:6000,
                marketing:8000,
            }
        },
        {
            title:"Yearly Rate",
            text:"Borem ipsum dolor sit amet adipiscing elit.",
            costs:{
                techLead: 5000,
                product:6000,
                marketing:8000,
            }
        },
    ]

    const dashes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


  return (
    <ScrollReveal className='pt-[150px] pb-[50px]  flex flex-col items-center gap-[85px] font-sf' direction="up">
          <SectionHeader
        badgeText="Our Pricing"
        title="Check out our Pricing"
        subtitle="Comprehensive tech stack for all your digital needs"
        className='w-[673px]'
        align='center'
      />

      <div className='flex items-center gap-[35px] h-[666px] '>
            {pricings.map((pricing)=>(
                <div className='h-full w-[423px] px-[30px] py-[50px] border border-[#1C780080] rounded-[30px] flex flex-col items-start justify-between'>

                    <div className='flex flex-col items-center gap-[46px] w-full '>

                        <div className='flex flex-col items-start gap-[20px] w-full'>
                            <div className='w-[50px] h-[50px] rounded-full border border-[#5E5E5E] text-green-600 flex items-center justify-center'>
                                    <SlGlobeAlt size={35}/>
                            </div>
                            <div className='flex flex-col items-start gap-[10px]'>
                                <p className='font-semibold text-[32px] text-body'>{pricing.title}</p>
                                <p className='font-normal text-[18px] text-[#FAFAFABF]'>{pricing.text}</p>

                            </div>

                        </div>
                        <div className='h-px w-full bg-linear-to-r from-button  via-[#1c78008d] to-[#1c780049] flex items-center justify-between'>
                                {dashes.map(() => (
                                    <div className='h-px w-[6px] bg-platform'></div>
                                ))}
                        </div>

                    </div>

                    <div className='w-full flex flex-col items-start gap-5 '>
                        <div className='w-full flex items-center justify-between font-normal text-[18px] text-[#FAFAFABF]'>
                            <p>Tech Lead</p>
                            <p>${pricing.costs.techLead}</p>
                        </div>
                        <div className='w-full flex items-center justify-between font-normal text-[18px] text-[#FAFAFABF]'>
                            <p>Product</p>
                            <p>${pricing.costs.product}</p>
                        </div>
                        <div className='w-full flex items-center justify-between font-normal text-[18px] text-[#FAFAFABF]'>
                            <p>Marketing</p>
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