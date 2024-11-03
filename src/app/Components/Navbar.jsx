import React from 'react'
import logo from "../Assets/logo.png"
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='flex justify-center z-3'>
        <div className='flex justify-between items-center w-full max-w-[1200px] bg-[#FFFFFF] h-[76px] py-2 px-2 absolute top-24 max-lg:top-0'>
            {/* logo */}
            <Image src={logo} className='w-[150px] h-[60px]'/>
        </div>
    </nav>
  )
}

export default Navbar
