import React from 'react'
import img from "../Assets/feature.webp"
import Image from 'next/image'

const Features = () => {
    return (
        <section className='py-[90px] flex items-center justify-center'>
            <div className='w-full max-w-[1200px] flex justify-between'>
                <div className='flex-1 flex justify-center'>
                    <Image src={img} className='px-3 w-full max-w-[512px] h-[550px]' alt="Feature image" />
                </div>
                <div className='flex-1 flex flex-col pl-3 pr-12'>
                    <p className="mb-2 text-base font-bold text-[#BB0612]">// Look At Our Quality Features \\</p>
                    <h2 className='mb-2 font-semibold text-4xl'>Car Tyre Repaire is the Best Place For Your Tyre Care</h2>
                    <h6 className='mb-2 py-3 pr-12 pe-md-5'>Get your tyres repaired by experienced professionals for guaranteed safety. Check our reviews and join over 300+ happy customers!</h6>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Onsite tyre service in case of tyre puncture.</li>
                        <li>Tyre repair at home or at your location.</li>
                        <li>Tyre puncture and tyre change service.</li>
                        <li>Tyre Replacement or tyre change.</li>
                        <li>Tyre Replacement or tyre change.</li>
                    </ul>
                    <div className='flex items-center text-white mt-5'>
                        <a href='#' className='bg-[#BB0612] text-center text-sm py-[15px] px-[35px] hover:bg-[#222222]'>
                            Call Now +971557474109
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features