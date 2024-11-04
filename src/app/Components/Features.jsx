import React from 'react'
import img from "../Assets/feature.webp"
import Image from 'next/image'

const Features = () => {
  return (
    <section className='py-[90px] flex items-center justify-center'>
        <div className='w-full max-w-[1200px] flex justify-between'>
            <Image src={img} className='px-3'/>
            <div className='flex flex-col pl-3 pr-12'>
                <p className="mb-2 text-base font-bold text-[#BB0612]">// Look At Our Quality Features \\</p>
                <h2 className='mb-2 font-semibold text-4xl'>Car Tyre Repaire is the Best Place For Your Tyre Care</h2>
                <h6 className='mb-2 py-3 pr-12 pe-md-5'>Get your tyres repaired by experienced professionals for guaranteed safety. Check our reviews and join over 300+ happy customers!</h6>
            </div>
        </div>
    </section>
  )
}

export default Features