import React from 'react'
import BannerImg from "../Assets/banner-image.webp"
import Image from 'next/image'


const Banner = () => {
  return (
    <section className="relative h-screen bg-cover bg-center flex justify-center" style={{ backgroundImage: "url('/Assets/banner-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75" />
      {/* Content */}
      <div className="relative w-full max-w-[1200px] h-full text-white flex items-center justify-center z-10">
        <div>
          <p className="mb-4 text-base font-bold">\ Welcome to car tyre repair</p>
          <h1 className='text-6xl font-bold mb-2'>Fastest on-site Tyre Repair</h1>
          <h2 className='my-6 text-4xl font-semibold'>& Tyre Services in Whole DUBAI in 20min</h2>
          <div className="bg-[#BB0612] w-[164.3px] text-white py-[15px] px-[35px] hover:bg-[#222222] text-sm border-t border-white">
              <a href="#">Contact Now</a>
          </div>
        </div>
        <div>
            <Image src={BannerImg}/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
