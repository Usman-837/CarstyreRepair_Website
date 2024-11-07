"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Testimonialimg1 from "../Assets/Testimonials.webp";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import clientimg1 from "../Assets/author-1.png";
import clientimg2 from "../Assets/author-2.png";
import { ImQuotesLeft } from "react-icons/im";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clientsInfo = [
    {
      id: 1,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
      title: "Emily",
      img: clientimg1
    },
    {
      id: 1,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
      title: "Isabella",
      img: clientimg2
    },
    {
      id: 3,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
      title: "Emily",
      img: clientimg1
    },
    {
      id: 4,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
      title: "Charlotte",
      img: clientimg2
    }
  ]

  return (
    <section className='py-90 flex items-center justify-center bg-white'>
      <div className='container flex items-center justify-between max-large-tab:flex-wrap max-large-tab:justify-center'>
        <div className='px-3'>
          <Image src={Testimonialimg1} alt="Testimonial Image" />
        </div>
        <div className='w-full max-w-700 flex flex-col justify-between py-12 px-3'>
          <p className='text-red font-bold mb-4 max-xs-mobile:text-center'>// What Say Our Clients //</p>
          <div className='flex justify-between mb-4 max-xs-mobile:flex-col max-xs-mobile:items-center max-xs-mobile:space-y-6'>
            <h2 className='font-semibold text-4xl max-xs-mobile:text-2xl'>Our Testimonials</h2>
            <div className='flex text-3xl gap-4'>
              {/* Connect left and right buttons to slider ref */}
              <button onClick={() => sliderRef.current.slickPrev()} className='border border-black p-1.5'>
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button onClick={() => sliderRef.current.slickNext()} className='border border-black p-1.5'>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div>
            <Slider {...settings} ref={sliderRef}>
              {clientsInfo.map((data) => (
                <div key={data.id} className='mb-6 mr-6 border border-dashed border-gray-500 rounded-bl-[100px] px-3 py-4 h-270 text-right'>
                  <p className='mb-4 text-fifteen'>{data.des}</p>
                  <h5 className='text-lg font-bold text-red mb-0'>{data.title}</h5>
                  <div className='relative flex items-center justify-between top-[30px] px-6 max-lg:top-[95px] max-xs-mobile:top-[30px]'>
                    <Image src={data.img} alt={data.title} className='w-20 h-20 object-cover' />
                    <div className='w-50 h-50 bg-black text-white flex items-center justify-center text-2xl'>
                      <ImQuotesLeft />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
