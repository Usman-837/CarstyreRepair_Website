import React from 'react'
import BannerImg from "../Assets/banner-image.webp"
import Image from 'next/image'


const Banner = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center flex justify-center" style={{ backgroundImage: "url('/Assets/banner-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"/>
      {/* Content */}
      <div className="relative container text-white flex items-center justify-center max-md:flex-col">
        <div className='py-20 pl-12 max-w-600 max-md:pl-0 max-md:pb-0 max-md:pt-28 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center max-md:mt-5'>
          <p className="mb-4 text-base font-bold">\ Welcome to car tyre repair</p>
          <h1 className='text-6xl font-bold mb-2 max-md:text-4xl'>Fastest on-site Tyre Repair</h1>
          <h2 className='my-6 text-4xl font-semibold max-md:text-2xl'>& Tyre Services in Whole DUBAI in 20min</h2>
          <a href="#" className="bg-red w-[164.3px] text-white py-fifteen px-thirtyfive hover:bg-custom-black text-sm border-t border-white">Contact Now</a>
        </div>
        <div className='pb-14 max-md:max-w-96 max-md:pt-10'> 
            <Image src={BannerImg}/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
