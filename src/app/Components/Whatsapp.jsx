import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <>
      {/* WhatsApp Icon */}
      <a href='https://api.whatsapp.com/send?phone=971557474109&text=Hello!%20I%20am%20looking%20for%20Tyre%20Repair%20/%20Puncture%20Tyre%20Fix%20Service%20Onsite.' className='fixed bottom-5 right-5 flex items-center justify-center text-3xl bg-green-500 text-white w-16 h-16 rounded-full shadow-lg cursor-pointer'>
        <FaWhatsapp />
      </a> 
    </>
  );
}
