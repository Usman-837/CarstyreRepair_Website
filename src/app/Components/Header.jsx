import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { TfiEmail } from "react-icons/tfi"
import { FaFacebookF } from "react-icons/fa6"
<<<<<<< HEAD
import { FaLinkedinIn } from "react-icons/fa"
=======
import { FaLinkedinIn } from "react-icons/fa";
>>>>>>> main
import { FaInstagram } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa"            


const Header = () => {
  return (
    <header className='bg-[#222222] text-white flex justify-center pt-4 max-lg:hidden'>
        <div className='container w-full flex justify-between pb-fiftyfive mx-twintytwo px-3'>
            {/* Location */}
            <div className='flex gap-3 items-center justify-center'>
<<<<<<< HEAD
            <CiLocationOn className="text-4xl text-red stroke-[.5px]" />
=======
            <CiLocationOn className="text-4xl text-[#A00B15] stroke-[.5px]" />
>>>>>>> main
                <div>
                    <h5 className='font-semibold text-lg'>Office Location</h5>
                    <p className='text-fifteen'>Dubai</p>
                </div>
            </div>
            {/* Mail */}
            <div className='flex gap-3 items-center justify-center'>
<<<<<<< HEAD
                <TfiEmail className='text-3xl text-red'/>
=======
                <TfiEmail className='text-3xl text-[#A00B15]'/>
>>>>>>> main
                <div>
                    <h5 className='font-semibold text-lg'>Mail Us</h5>
                    <p className='text-fifteen'><a href=''>info@carstyrerepair.com</a></p>
                </div>
            </div>
            {/* Social Icons */}
            <div className='flex items-center justify-center'>
                <ul className='flex gap-3 text-seventeen'>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                </ul>
            </div>
            {/* Appointment Button */}
            <div className='flex items-center justify-center'>
<<<<<<< HEAD
                <a href='#' className='bg-red text-sm py-fifteen px-thirtyfive hover:bg-transparent'>                
=======
                <a href='#' className='bg-[#BB0612] text-sm py-fifteen px-thirtyfive hover:bg-transparent'>                
>>>>>>> main
                    Take Appointment
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header