import React from 'react'
import img from "../Assets/feature.webp"
import Image from 'next/image'

const Features = () => {
  return (
    <section className='py-[90px]'>
        <div className='w-full max-w-[1200px] flex items-center justify-center'>
            <Image src={img}/>
        </div>
    </section>
  )
}

export default Features