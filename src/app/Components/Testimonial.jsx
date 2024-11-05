import React from 'react'
import Image from 'next/image'
import Testimonialimg1 from "../Assets/Testimonials.webp"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"

export default function Testimonial() {
  return (
    <section className='py-[90px]'>
        <div className='flex items-center justify-center'>
            <div>
                <Image src={Testimonialimg1}/>
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

            </div>
        </div>
    </section>
  )
}
