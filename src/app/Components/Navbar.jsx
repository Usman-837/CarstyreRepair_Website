"use client"
import React, { useState, useEffect } from 'react'
import logo from "../Assets/logo.png"
import Image from 'next/image'
import { HiBars3 } from "react-icons/hi2"
import { RxCross2 } from "react-icons/rx"

function Navbar() {

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up the effect on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menu]);


  return (
    <nav className='flex justify-center z-50 relative'>
      <div className='flex justify-between items-center w-full max-w-1200 bg-white h-76 py-2 px-3 absolute top-[-35px] max-lg:top-0 max-large-tab:fixed'>
        {/* logo */}
        <Image src={logo} className='w-onefifty h-sixty' alt='logo' />
        <div>
          <ul className="flex text-custom-black text-fifteen max-large-tab:hidden">
            <li className="pr-4"><a href="#home" className="p-2 active:text-red">Home</a></li>
            <li className="pr-4"><a href="#about" className="p-2 hover:text-red">About</a></li>
            <li className="pr-4"><a href="#services" className="p-2 hover:text-red">Services</a></li>
            <li className="pr-4"><a href="#contact" className="p-2 hover:text-red">Contact Us</a></li>
          </ul>
        </div>
        {/* Appointment button */}
        <div className="bg-red text-white py-fifteen px-thirtyfive max-md:p-2.5 max-xs-mobile:hidden hover:bg-custom-black text-sm">
          <a href="#">+971557474109</a>
        </div>
        <div className='text-3xl text-custom-black hidden max-large-tab:block' onClick={() => setMenu(!menu)}>
         <HiBars3 />
        </div>
      </div>
      {
        menu ? (
          <div className='fixed top-0 right-0 w-9/12 h-screen flex flex-col bg-white z-50'>
            <div className='flex items-center justify-between p-4'>
              <Image src={logo} className='w-onefifty h-sixty' alt="logo" />
              <div className='p-2 text-2xl text-gray-500 cursor-pointer' onClick={() => setMenu(!menu)}>
                <RxCross2 />
              </div>
            </div>
            <div className='p-4 h-fit'>
              <ul className="flex flex-col text-custom-black text-[15px] pr-4 gap-3">
                <li className="py-2 hover:text-red cursor-pointer" onClick={() => setMenu(!menu)}><a href="#home">Home</a></li>
                <li className="py-2 hover:text-red cursor-pointer" onClick={() => setMenu(!menu)}><a href="#about">About</a></li>
                <li className="py-2 hover:text-red cursor-pointer" onClick={() => setMenu(!menu)}><a href="#services">Services</a></li>
                <li className="py-2 hover:text-red cursor-pointer" onClick={() => setMenu(!menu)}><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        ) : null
      }
    </nav>
  )
}

export default Navbar
