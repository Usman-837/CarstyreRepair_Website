import React from 'react'

export default function Footer() {
  return (
    <section>
      <div className='flex items-center justify-center w-full max-w-[1250px] py-12 bg-[#BB0612]'>
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
      </div>
    </section>
  )
}
