import React from 'react'
import Image from 'next/image'
import Testimonialimg1 from "../Assets/Testimonials.webp"

export default function Testimonial() {
  return (
    <section className='py-[90px]'>
        <div className='flex items-center justify-center'>
            <div>
                <Image src={Testimonialimg1}/>
            </div>
        </div>
    </section>
  )
}
