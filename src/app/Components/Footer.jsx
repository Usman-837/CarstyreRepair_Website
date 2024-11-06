import React from 'react'
import Image from 'next/image'
import logo from "../Assets/logo.png"
import { FaFacebookF } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { FaGoogle } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      {/* Emergency call section */}
      <section className='flex items-center justify-center w-full max-w-[1250px] py-12 bg-[#BB0612]'>
        <div className='container flex items-center justify-between py-4 mx-3 text-white'>
          <div className='px-3'>
            <h1 className='font-bold text-6xl mb-2'>EMERGENCY CALL</h1>
            <h4 className='text-twintytwo mb-2'>BOOK NOW AND TAKE OUR SUPER SERVICE</h4>
          </div>
          <div className='flex items-center text-[#BB0612]'>
            <a href='#' className='bg-white text-sm py-fifteen px-thirtyfive hover:bg-[#222222] hover:text-white'>
              Call Now +971557474109
            </a>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section className='flex items-center justify-center'>
        <div className='container py-12 px-3'>
          <div>
            <div className='flex flex-col'>
              {/* Logo */}
              <Image src={logo} className='w-onefifty h-sixty' />
              <p className='py-2 my-6 text-fifteen'>If you are in the middle of something and you don’t want to miss that important call that could be the start of an exciting new business</p>
              {/* Social Icons */}
              <div className='flex items-center justify-center'>
                <ul className='flex gap-3 text-seventeen'>
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                  <li><a href="#"><FaGoogle /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
