import React from 'react'
import { CiLocationOn } from "react-icons/ci"

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
        </div>
    </header>
  )
}

export default Header
