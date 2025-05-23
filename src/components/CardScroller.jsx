import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./CardScroller.css"; // Ensure scrollbar-hide exists

gsap.registerPlugin(ScrollToPlugin);

const CardScroller = () => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const cardWidth = 260;

  useEffect(() => {
    const scrollToFirst = () => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          scrollTo: { x: 0 },
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    scrollToFirst();
    window.addEventListener("resize", scrollToFirst);
    return () => window.removeEventListener("resize", scrollToFirst);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scrollTo: {
          x: Math.max(containerRef.current.scrollLeft - cardWidth, 0),
        },
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const maxScroll =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      gsap.to(containerRef.current, {
        scrollTo: {
          x: Math.min(containerRef.current.scrollLeft + cardWidth, maxScroll),
        },
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  const cards = [
    { img: "/firstgirl.png", name: "First Girl" },
    { img: "/secondGirl.png", name: "Second Girl" },
    { img: "/thirdgirl.png", name: "Third Girl" },
    { img: "/secondGirl.png", name: "Second Girl" },
    { img: "/thirdgirl.png", name: "Third Girl" },
    { img: "/firstgirl.png", name: "First Girl" },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <section className="relative py-8 px-4 mt-10 max-w-7xl mx-auto overflow-visible z-10">
      {/* Cards container */}
      <div
        ref={containerRef}
        className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory relative z-10"
        style={{
          scrollSnapType: "x mandatory",
          paddingBottom: "2rem",
          overflowY: "visible",
        }}
        aria-label="Scrollable card list"
      >
        {cards.map(({ img, name }, idx) => (
          <article
            key={idx}
            onClick={() => handleCardClick(idx)}
            className={`snap-center flex-shrink-0 w-[50vw] mt-10 sm:w-[40vw] md:w-[260px] cursor-pointer rounded-xl bg-white shadow-lg transform transition duration-300
              ${
                activeCard === idx
                  ? "scale-110 z-30 shadow-2xl border-4 border-[#083B37]"
                  : "hover:scale-105 hover:z-20 hover:shadow-xl"
              }
            `}
            style={{ transformOrigin: "center bottom" }}
            tabIndex={0}
            aria-pressed={activeCard === idx}
          >
            <img
              src={img}
              alt={name}
              className="rounded-t-xl w-full mt-8 h-auto max-h-[160px] sm:max-h-[200px] md:max-h-[220px] object-contain"
              loading="lazy"
              draggable={false}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2 jishnufont text-[#083B37]">
                {name}
              </h3>
              <p className="text-[#5C3013] font-medium jishnufont">
                Price starting from ₹100,000
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-between mt-6 px-4 sm:px-6 md:px-0 max-w-[calc(100vw-2rem)] mx-auto z-20 relative">
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="bg-[#083B37] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-[#065242] transition"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="bg-[#083B37] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-[#065242] transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default CardScroller;
