import React from 'react'
import logo from "../Assets/logo.png"
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='flex justify-center z-50'>
        <div className='flex justify-between items-center w-full max-w-[1200px] bg-[#FFFFFF] h-[76px] py-2 px-2 absolute top-24 max-lg:top-0'>
            {/* logo */}
            <Image src={logo} className='w-[150px] h-[60px]'/>
            <div>
              <ul className="flex text-[#222222] text-[15px] font-sans">
                <li className="pr-4"><a href="#home" className="p-2 active:text-[#BB0612]">Home</a></li>
                <li className="pr-4"><a href="#home" className="p-2 hover:text-[#BB0612]">About</a></li>
                <li className="pr-4"><a href="#home" className="p-2 hover:text-[#BB0612]">Services</a></li>
                <li className="pr-4"><a href="#home" className="p-2 hover:text-[#BB0612]">Contact Us</a></li>
              </ul>
            </div>
            {/* Appointment button */}
            <div className="bg-[#BB0612] text-white py-[15px] px-[35px] hover:bg-[#222222] text-sm font-sans">
              <a href="#">+971557474109</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
