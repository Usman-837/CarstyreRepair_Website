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
        <>
            <section className='flex items-center justify-center' id='services'>
                <div className='container w-full'>
                    <div className='pb-150'>
                        <p className="mb-4 px-3 text-base font-bold text-red">// Our Services //</p>
                        <h2 className='mb-2 px-3 font-semibold text-4xl'>Our Best Features</h2>
                    </div>
                </div>
            </section>
            <section id='services' className='relative flex items-center justify-center' style={{ backgroundImage: "url('/Assets/banner-bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-85"></div>

                {/* Content */}
                <div className='relative w-full container top-[-115px]'>
                    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-center mb-4'>
                        {
                            servicCards.map((data) => (
                                <div key={data.id} className='w-full px-3 mb-6'>
                                    <div>
                                        <Image src={data.img1} alt={data.title} className='w-full'/>
                                    </div>
                                    <div className='p-6 bg-white h-[353px] flex flex-col justify-between'>
                                        <div>
                                            <h4 className='font-bold text-twintytwo mb-2'>{data.title}</h4>
                                            <p className='mb-4 text-fifteen leading-[1.9]'>{data.des}</p>
                                            <ul className='list-disc pl-8'>
                                                <li>{data.listItem1}</li>
                                                <li>{data.listItem2}</li>
                                                <li>{data.listItem3}</li>
                                            </ul>
                                        </div>
                                        <div className='flex items-center text-white'>
                                            <a href='#' className='bg-red text-center text-sm py-fifteen px-thirtyfive hover:bg-custom-black'>
                                                Call Now +971557474109
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex items-center justify-center text-center flex-wrap gap-x-4 pt-90 px-4'>
                        <h1 className='font-bold text-white text-6xl max-md:text-4xl'>Fastest on-site Tyre Repair </h1>
                        <div className='flex items-center text-white max-xl:mt-12'>
                            <a href='#' className='bg-red text-center text-sm py-fifteen px-thirtyfive hover:bg-custom-black'>
                                Call Now +971557474109
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Services