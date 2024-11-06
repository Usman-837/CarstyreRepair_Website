import React from 'react'
import Image from 'next/image'
import logo from "../Assets/logo.png"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { FaGoogle } from "react-icons/fa"
import { TiTick } from "react-icons/ti"
import footerImg from "../Assets/footer.webp"

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
      <section className='flex items-center justify-center text-white' style={{ backgroundImage: "url('/Assets/footer-bg.jpg')" }}>
        <div className='container py-12 px-3'>
          <div className='flex'>
            <div className='flex flex-col items-start w-full max-w-300 mb-6 px-3'>
              {/* Logo */}
              <Image src={logo} className='w-onefifty h-sixty' />
              <p className='py-2 my-6 text-fifteen'>If you are in the middle of something and you don’t want to miss that important call that could be the start of an exciting new business</p>
              {/* Social Icons */}
              <div className='flex items-center justify-center'>
                <ul className='flex gap-x-3 text-xl'>
                  <li className='mr-5'><a href="#"><FaFacebook /></a></li>
                  <li className='mr-5'><a href="#"><FaInstagram /></a></li>
                  <li className='mr-5'><a href="#"><FaGoogle /></a></li>
                  <li className='mr-5'><a href="#"><FaLinkedin /></a></li>
                </ul>
              </div>
            </div>
            {/* Services */}
            <div className='w-full max-w-200 mb-6 px-3'>
              <h5 className='flex items-center mb-6 font-semibold'><p className='bg-[#BB0612] w-seven h-seven mr-2.5'></p>Services</h5>
              <ul className='flex flex-col gap-y-3 text-fifteen'>
                <li><a href='#' className='flex items-center hover:text-[#BB0612]'><TiTick className='mr-five w-twenty h-twenty' />Auto Maintenance</a></li>
                <li><a href='#' className='flex items-center hover:text-[#BB0612]'><TiTick className='mr-five w-twenty h-twenty' />Change Tires</a></li>
                <li><a href='#' className='flex items-center hover:text-[#BB0612]'><TiTick className='mr-five w-twenty h-twenty' />New Tires</a></li>
              </ul>
            </div>
            {/* Address */}
            <div className='w-full max-w-300 mb-6 px-3'>
              <h5 className='flex items-center mb-6 font-semibold'><p className='bg-[#BB0612] w-seven h-seven mr-2.5'></p>Address</h5>
              <ul className='flex flex-col gap-y-3 text-fifteen'>
                <li>Head Office Address Dubai</li>
                <li><a href='#' className='hover:text-[#BB0612]'>Phone:+971-55-747-4109</a></li>
                <li><a href='#' className='hover:text-[#BB0612]'>Email:info@carstyrerepair.com</a></li>
              </ul>
            </div>
            {/* Footer image */}
            <div>
              <Image src={footerImg} />
            </div>
          </div>
        </div>
      </section>
      {/* Copyright section */}
      <section className='flex items-end justify-end text-white' style={{ backgroundImage: "url('/Assets/footer-bg.jpg')" }}>
        <div className='w-full max-w-1359 flex justify-around bg-[#BB0612] py-6 text-fifteen'>
          <div className='w-full max-w-600 px-3'>
            <p className=''>Copyright © 2024 carstyrerepair.com Develop by DevsRank</p>
          </div>
          <div className='w-full max-w-576 px-4 text-center'>
            <span><a href='#about' className='mr-5'>About Us</a> | <a href='#Services'>Services</a></span>
          </div>
        </div>
      </section>
    </footer>
  )
}
