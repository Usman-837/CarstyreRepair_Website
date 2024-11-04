import React from 'react';

const Banner = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Assets/banner-bg.jpg')" }}>
      {/* Overlay */}
      <div className="h-full w-full text-white bg-black bg-opacity-75 flex items-center justify-center">
        <div className="text-center">
          <p className="font-roboto mb-4 text-base">\ Welcome to car tyre repair</p>
          <h1 className='text-6xl font-bold mb-2'>Fastest on-site Tyre Repair</h1>
          <h2 className='my-6 text-4xl font-semibold'>& Tyre Services in Whole DUBAI in 20min</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
