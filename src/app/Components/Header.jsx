import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { TfiEmail } from "react-icons/tfi"
import { FaFacebookF } from "react-icons/fa6"
import { TiSocialLinkedin } from "react-icons/ti"
import { FaInstagram } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa"            


const Header = () => {
  return (
    <header className='bg-[#222222] text-white flex justify-center pt-4 max-lg:hidden'>
        <div className='w-full max-w-[1200px] flex justify-between  pb-[55px]'>
            {/* Location */}
            <div className='flex gap-3 items-center'>
                <CiLocationOn  className='text-3xl text-[#A00B15]'/>
                <div>
                    <h5 className='font-semibold text-lg'>Office Location</h5>
                    <p className='text-[15px]'>Dubai</p>
                </div>
            </div>
            {/* Mail */}
            <div className='flex gap-3 items-center'>
                <TfiEmail className='text-3xl text-[#A00B15]'/>
                <div>
                    <h5 className='font-semibold text-lg'>Mail Us</h5>
                    <p className='text-[15px]'><a href=''>info@carstyrerepair.com</a></p>
                </div>
            </div>
            {/* Social Icons */}
            <div className='flex items-center'>
                <ul className='flex gap-3'>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><TiSocialLinkedin /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                </ul>
            </div>
            {/* Appointment Button */}
            <div className='flex items-center'>
                <a href='#' className='bg-[#BB0612] text-center text-sm py-[15px] px-[35px] hover:bg-transparent'>                
                    Take Appointment
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header
