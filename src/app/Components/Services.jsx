import React from 'react'
import Image from 'next/image'
import serviceimg1 from "../Assets/serivces1.jpg"

const Services = () => {
    return (
        <section className='flex items-center justify-center'>
            <div className='w-full max-w-[1200px]'>
                <div className='pb-[150px]'>
                    <p className="mb-4 px-3 text-base font-bold text-[#BB0612]">// Our Services //</p>
                    <h2 className='mb-2 px-3 font-semibold text-4xl'>Our Best Features</h2>
                </div>
                <div className='flex'>
                    <div className='w-full max-w-[376px] mx-3'>
                        <Image src={serviceimg1} className='h-[230px]' />
                        <div className='p-6 h-[353px]'>
                            <h4 className='font-bold text-[22px] mb-2'>Tyre Change Service</h4>
                            <p className='mb-4 text-[15px] leading-custom-1.9'>Get professional tyre change service tailored to your location</p>
                            <ul className='list-disc pl-8'>
                                <li>Immediate Tire Change</li>
                                <li>Rapid Emergency Aid</li>
                                <li>Clear and Honest Support</li>
                            </ul>
                            <div className='flex items-center text-white mt-5'>
                                <a href='#' className='bg-[#BB0612] text-center text-sm py-[15px] px-[35px] hover:bg-[#222222]'>
                                    Call Now +971557474109
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services