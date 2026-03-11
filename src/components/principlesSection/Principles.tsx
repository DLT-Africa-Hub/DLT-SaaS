import React from 'react'
import { ScrollReveal } from '../common/ScrollReveal'

const Principles = () => {
  return (
    <ScrollReveal className='min-h-screen flex items-center justify-center px-[70px]'>
      <div className='w-full max-w-4xl rounded-3xl border border-white/10 bg-[#FFFFFF08] p-10 text-body backdrop-blur-md shadow-xl'>
        <h2 className='mb-4 font-sf text-3xl font-semibold'>Our principles</h2>
        <p className='font-sf text-base text-body/70'>
          This section will flow into view as you scroll, with the same ambient
          energy as the hero above.
        </p>
      </div>
    </ScrollReveal>
  )
}

export default Principles