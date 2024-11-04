import React from 'react'
import Image from 'next/image'
import serviceimg1 from "../Assets/serivces1.jpg"
import serviceimg2 from "../Assets/serivces2.jpg"
import serviceimg3 from "../Assets/serivces3.jpg"
import serviceimg4 from "../Assets/serivces4.jpg"
import serviceimg5 from "../Assets/serivces5.jpg"
import serviceimg6 from "../Assets/serivces6.jpg"

const Services = () => {

    const servicCards = [
        {
            id: 1,
            img1: serviceimg1,
            title: "Tyre Change Service",
            des: "Get professional tyre change service tailored to your location",
            listItem1: "Immediate Tire Change",
            listItem2: "Rapid Emergency Aid",
            listItem3: "Clear and Honest Support",
        },
        {
            id: 2,
            img1: serviceimg2,
            title: "New Tyre Replacement",
            des: "Get original tyres with warranty, fitted on-site for ultimate convenience.",
            listItem1: "Convenient Nearest Solutions",
            listItem2: "Optimal New Tyres",
            listItem3: "Your Tyre, Our Priority",
        },
        {
            id: 3,
            img1: serviceimg3,
            title: "Spare Tyre Replacement",
            des: "Professional Onsite spare tyre replacement service in Dubai",
            listItem1: "Convenient on-site replacement service",
            listItem2: "Rapid Emergency Aid",
            listItem3: "Expert technicians ensure prompt and professional service",
        },
        {
            id: 4,
            img1: serviceimg4,
            title: "Rim Repair",
            des: "Efficient on-site rim repair service, restoring your wheels to perfection for a safer drive.",
            listItem1: "Expert on-site rim repair service",
            listItem2: "Skilled technicians with advanced tools",
            listItem3: "Convenient solution, no shop visit required",
        },
        {
            id: 5,
            img1: serviceimg5,
            title: "Tyre Repair",
            des: "Our on-site service delivers prompt, professional tire repairs tailored to your location.",
            listItem1: "Immediate Flat Tire Fix",
            listItem2: "Expert service on-site",
            listItem3: "Enhance ride quality",
        },
        {
            id: 6,
            img1: serviceimg6,
            title: "Oil change",
            des: "Experience optimal engine performance with our efficient on-site oil change service, performed by skilled technicians.",
            listItem1: "Efficient on-site oil change",
            listItem2: "Skilled technicians",
            listItem3: "Optimal engine performance",
        },
    ];

    return (
        <section className='flex items-center justify-center'>
            <div className='w-full max-w-[1200px]'>
                <div className='pb-[150px]'>
                    <p className="mb-4 px-3 text-base font-bold text-[#BB0612]">// Our Services //</p>
                    <h2 className='mb-2 px-3 font-semibold text-4xl'>Our Best Features</h2>
                </div>
                <div className='flex flex-wrap'>
                    {
                        servicCards.map((data) => {
                            return (
                                <div key={data.id} className='w-full max-w-[376px] mx-3'>
                                    <Image src={data.img1} className='h-[230px]' />
                                    <div className='p-6 h-[353px]'>
                                        <h4 className='font-bold text-[22px] mb-2'>{data.title}</h4>
                                        <p className='mb-4 text-[15px] leading-custom-1.9'>{data.des}</p>
                                        <ul className='list-disc pl-8'>
                                            <li>{data.listItem1}</li>
                                            <li>{data.listItem2}</li>
                                            <li>{data.listItem3}</li>
                                        </ul>
                                        <div className='flex items-center text-white mt-5'>
                                            <a href='#' className='bg-[#BB0612] text-center text-sm py-[15px] px-[35px] hover:bg-[#222222]'>
                                                Call Now +971557474109
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services