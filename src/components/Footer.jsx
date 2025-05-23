import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[#EFEFEF] text-[#3B2E1D] text-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 flex-wrap">

            {/* Contact Section */}
            <div className="flex-1 min-w-[250px]">
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Contact</h4>
              <div className="flex items-center mb-3 transition-transform duration-200 hover:scale-[1.03]">
                <span className="text-lg mr-2">📞</span>
                <a href="tel:7593844448" className="relative group text-[#3B2E1D] text-sm sm:text-base">
                  +91 7593844448
                  <span className="block h-[1px] max-w-0 bg-[#3B2E1D] transition-all duration-300 group-hover:max-w-full"></span>
                </a>
              </div>
              <div className="flex items-center transition-transform duration-200 hover:scale-[1.03]">
                <span className="text-lg mr-2">📍</span>
                <a href="#location" className="relative group text-[#3B2E1D] text-sm sm:text-base">
                  Store Locations
                  <span className="block h-[1px] max-w-0 bg-[#3B2E1D] transition-all duration-300 group-hover:max-w-full"></span>
                </a>
              </div>
            </div>

            {/* Information and Links */}
            <div className="flex flex-col md:flex-row justify-between flex-1 gap-10 flex-wrap min-w-[250px]">
              <div className="min-w-[120px]">
                <h4 className="font-semibold mb-4 text-base sm:text-lg">Information</h4>
                <ul className="space-y-2">
                  {[
                    { href: "#location", text: "Location" },
                    { href: "/faq", text: "FAQ" },
                    { href: "/privacy-policy", text: "Privacy & Policy" },
                    { href: "/terms", text: "Terms & Condition" },
                    { href: "#contact", text: "Contact" },
                  ].map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="group relative text-[#3B2E1D] text-sm sm:text-base">
                        {link.text}
                        <span className="block h-[1px] max-w-0 bg-[#3B2E1D] transition-all duration-300 group-hover:max-w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-[120px]">
                <h4 className="font-semibold mb-4 text-base sm:text-lg">Links</h4>
                <ul className="space-y-2">
                  {[
                    { href: "/", text: "About Us" },
                    { href: "#collections", text: "Collections" },
                    { href: "#why", text: "Why rent?" },
                    { href: "#howitwork", text: "How it works?" },
                  ].map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="group relative text-[#3B2E1D] text-sm sm:text-base">
                        {link.text}
                        <span className="block h-[1px] max-w-0 bg-[#3B2E1D] transition-all duration-300 group-hover:max-w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8B6F55] text-center py-4 text-xs sm:text-sm">
          ©2025 zorucci. All rights reserved
        </div>
      </footer>

      {/* Floating Action Buttons */}
      {showButton && (
        <>
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#083B37] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:animate-bounce transition z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg sm:text-xl" />
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917593844448"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 bg-green-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-lg sm:text-xl" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/zorucci?igsh=MWRxbXVhMmZpenp1Mw=="   //Real Instagram Link
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-36 right-6 sm:bottom-40 sm:right-8 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg sm:text-xl" />
          </a>
        </>
      )}
    </>
  );
};

export default Footer;
