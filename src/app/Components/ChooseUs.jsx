import React from 'react';
import Image from 'next/image';
import chooseImg1 from "../Assets/whychooseus1.png";
import chooseImg2 from "../Assets/whychooseus2.png";
import chooseImg3 from "../Assets/whychooseus3.png";
import chooseImg4 from "../Assets/whychooseus4.png";
import chooseImg5 from "../Assets/whychooseus5.png";
import chooseImg6 from "../Assets/whychooseus6.png";
import chooseImg7 from "../Assets/whychooseus7.png";
import chooseImg8 from "../Assets/whychooseus8.png";

export default function ChooseUs() {
    const chooseusCards = [
        {
            id: 1,
            img: chooseImg1,
            title: "Experienced Engineers",
            des: "Rely on our skilled engineers for precision and expertise. Experience top-notch solutions tailored to your needs. Trust us to keep your vehicle in peak condition."
        },
        {
            id: 2,
            img: chooseImg2,
            title: "Expert Skills",
            des: "Precision craftsmanship tailored to your needs. Trust our mastery for flawless results. Experience the difference of true expertise."
        },
        {
            id: 3,
            img: chooseImg3,
            title: "Guaranteed Service",
            des: "Rest assured with our commitment to excellence. Trust in our reliability for worry-free solutions. Your satisfaction is our guarantee."
        },
        {
            id: 4,
            img: chooseImg4,
            title: "Trusted Work",
            des: "Rely on our skilled engineers for precision and expertise. Experience top-notch solutions tailored to your needs. Trust us to keep your vehicle in peak condition."
        },
        {
            id: 5,
            img: chooseImg5,
            title: "Tyre Repair",
            des: "Best Tyre Repair Services at home or near you."
        },
        {
            id: 6,
            img: chooseImg6,
            title: "Tire Puncture",
            des: "We Fix Tire Puncture within 10 minutes onsite."
        },
        {
            id: 7,
            img: chooseImg7,
            title: "Tire Service",
            des: "We have all kinds of Tire Service for you."
        },
        {
            id: 8,
            img: chooseImg8,
            title: "30 Days Warranty",
            des: "We Provide a 30 Days money-back Warranty."
        },
    ];

    return (
        <section className='py-[90px] bg-[#BB0612]'>
            <div className='container mx-auto px-3'>
                <div className='flex items-center justify-center text-white text-center mb-8'>
                    <div className='max-w-[864px] px-3'>
                        <h1 className='font-bold text-4xl lg:text-6xl mb-4'>Why Choose Us</h1>
                        <p className='text-[15px]'>Premium tyres for safety and performance. Expert guidance for your specific needs. Convenient service to fit your schedule. Trusted by satisfied customers. Make the smart choice for your vehicle today.</p>
                    </div>
                </div>
                {/* Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-3 pt-5'>
                    {chooseusCards.map((data) => (
                        <div key={data.id} className='h-[371px] flex flex-col items-center justify-center px-3 pt-4 mb-4  text-center bg-white'>
                            <div className='w-[95px] h-[95px] bg-[#BB0612] flex items-center justify-center rounded-lg'>
                                <Image src={data.img} alt={data.title} width={75} height={75} />
                            </div>
                            <h5 className='my-4 font-bold text-lg'>{data.title}</h5>
                            <p className='text-[15px] mb-4'>{data.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
