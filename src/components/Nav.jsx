
import React, { useState } from 'react';
import logo from '../../public/logo1.svg';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="jishnufont text-[#5C3013] text-[18px]">
      {/* Desktop navbar */}
      <div className="hidden md:block mt-[30px]">
        <div className="flex justify-evenly items-center">
          {/* Left nav items */}
          <div className="flex w-1/4 justify-between items-center">
            <a href="#" className="cursor-pointer">Home</a>
            <a href="#home" className="cursor-pointer">About</a>
            <a href="#collections" className="cursor-pointer">Collections</a>
          </div>

          {/* Logo */}
          <div className="flex items-center lg:mx-[100px]">
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          {/* Right nav items */}
          <div className="flex w-1/4 justify-between items-center">
            <a href="#why" className="cursor-pointer">Why Rents?</a>
            <a href="#location" className="cursor-pointer">Location</a>
            <a href="#contact" className="cursor-pointer">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="flex justify-between items-center px-6 py-4 md:hidden">
        <img src={logo} alt="Logo" className="h-8" />

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-[#5C3013]"></span>
            <span className="block w-6 h-0.5 bg-[#5C3013]"></span>
            <span className="block w-6 h-0.5 bg-[#5C3013]"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white gap-4 pb-6">
          <a href="#home" className="cursor-pointer" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="cursor-pointer" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#collections" className="cursor-pointer" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#why" className="cursor-pointer" onClick={() => setMenuOpen(false)}>Why Rents?</a>
          <a href="#location" className="cursor-pointer" onClick={() => setMenuOpen(false)}>Location</a>
          <a href="#contact" className="cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
