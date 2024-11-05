import React from 'react'
import Image from 'next/image'
import Testimonialimg1 from "../Assets/Testimonials.webp"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"
import clientimg1 from "../Assets/author-1.png"
import clientimg2 from "../Assets/author-2.png"
import { ImQuotesLeft } from "react-icons/im"

export default function Testimonial() {

  const clientsInfo = [
    {
      id: 1,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
      title: "Emily",
      img: clientimg1
    }
    // {
    //   id: 1,
    //   des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
    //   title: "Isabella",
    //   img: clientimg2
    // },
    // {
    //   id: 3,
    //   des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
    //   title: "Emily",
    //   img: clientimg1
    // },
    // {
    //   id: 4,
    //   des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, labore! Laborum modi, earum autem obcaecati maxime accusamus provident delectus libero, optio qui id dolore reiciendis, quod hic at quidem non.",
    //   title: "Charlotte",
    //   img: clientimg2
    // }
  ]

  return (
    <section className='py-[90px]'>
      <div className='flex items-center justify-center gap-x-12'>
        <div className='px-3'>
          <Image src={Testimonialimg1} />
        </div>
        <div className='w-full max-w-[700px] py-12 px-3'>
          <p className='text-[#BB0612] font-bold mb-4'>// What Say Our Clients //</p>
          <div className='flex justify-between mb-4'>
            <h2 className='font-semibold text-4xl'>Our Testimonials</h2>
            <div className='flex text-3xl gap-4'>
              <button className='border border-black p-1.5'><MdOutlineKeyboardArrowLeft /></button>
              <button className='border border-black p-1.5'><MdKeyboardArrowRight /></button>
            </div>
          </div>
          <div>
            {
              clientsInfo.map((data) => {
                return (
                  <div key={data.id} className='border border-dashed border-gray-500 rounded-bl-[100px] px-3 py-4 h-[270px] text-right'>
                    <p className='mb-4 text-[15px]'>{data.des}</p>
                    <h5 className='text-lg font-bold text-[#BB0612] mb-0'>{data.title}</h5>
                    <div className='relative flex items-center justify-between top-[90px] px-6'>
                      <Image src={data.img} />
                      <div className='w-[50px] h-[50px] bg-black text-white flex items-center justify-center text-2xl'>
                        <ImQuotesLeft />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
