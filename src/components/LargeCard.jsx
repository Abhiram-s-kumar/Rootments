import React from 'react';

const LargeCard = () => {
  return (
    <div id='why'
      className="relative h-auto md:h-[713px] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/whyimg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl text-white py-10 text-center">
        <p className="text-base md:text-lg italic text-gray-300 mb-4">Why Rent?</p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6">
          <span className="block sugarfont">ELEGANCE MADE EASY,</span>
          <span className="block sugarfont">LUXURY MADE AFFORDABLE</span>
        </h1>

        {/* Feature Box with Button Inside */}
        <div className="w-full max-w-[1080px] bg-opacity-10 rounded-xl backdrop-blur-md p-6 md:p-10 mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex-1 text-center">
              <h2 className="text-base md:text-lg font-semibold jishnufont">Luxury at a Fraction</h2>
              <p className="text-sm text-gray-300 mt-2 jishnufont ">
                Experience designer fashion<br />without the high cost.
              </p>
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-base md:text-lg font-semibold jishnufont">Perfect Fit Guarantee</h2>
              <p className="text-sm text-gray-300 mt-2 jishnufont ">
                Tailored to your size, styled to perfection.
              </p>
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-base md:text-lg font-semibold jishnufont">Effortless & Sustainable</h2>
              <p className="text-sm text-gray-300 mt-2 jishnufont">
                Reduce waste, embrace smart fashion.
              </p>
            </div>
          </div>

          {/* Button inside the box, aligned below content */}
          <div className="mt-6 flex justify-center">
           <a href="#contact">
  <button className="border border-white px-6 py-3 rounded-md jishnufont text-white hover:bg-white hover:text-black transition-all duration-300">
    Book an appointment →
  </button>
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;

