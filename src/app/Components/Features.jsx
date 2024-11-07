import React from 'react'
import img from "../Assets/feature.webp"
import Image from 'next/image'

const Features = () => {
    return (
        <section id='about' className='py-[90px] flex items-center justify-center bg-white'>
            <div className='container w-full flex gap-x-16 justify-between max-md:flex-col-reverse max-md:gap-y-8 max-large-tab:gap-x-0 max-md:px-3'>
                <div className='flex-1 flex justify-center max-w-[512px] h-[550px] px-3 max-md:px-3'>
                    <Image src={img} alt="Feature image" />
                </div>
                <div className='flex-1 flex flex-col pl-3 pr-12 max-md:pr-0 max-md:pl-0'>
                    <p className="mb-2 text-base font-bold text-red">// Look At Our Quality Features //</p>
                    <h2 className='mb-2 font-semibold text-4xl max-md:text-2xl'>Car Tyre Repaire is the Best Place For Your Tyre Care</h2>
                    <h6 className='mb-2 py-4 pr-12 max-md:pr-0'>Get your tyres repaired by experienced professionals for guaranteed safety. Check our reviews and join over 300+ happy customers!</h6>
                    <ul class="list-disc pl-4 text-lg">
                        <li className='mb-2'>Onsite tyre service in case of tyre puncture.</li>
                        <li className='mb-2'>Tyre repair at home or at your location.</li>
                        <li className='mb-2'>Tyre puncture and tyre change service.</li>
                        <li className='mb-2'>Tyre Replacement or tyre change.</li>
                        <li className='mb-2'>Tyre Replacement or tyre change.</li>
                    </ul>
                    <div className='flex items-center text-white mt-12'>
                        <a href='#' className='bg-red text-center text-sm py-fifteen px-thirtyfive hover:bg-custom-black'>
                            Call Now +971557474109
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features