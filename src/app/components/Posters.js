"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Posters() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);

  // Sample images - replace with your own
  const images = [
    "/images/posters/p1.png",
    "/images/posters/p2.png",
    "/images/posters/p3.png",
    "/images/posters/p4.png",
    "/images/posters/p5.png",
  ];

  const animateCards = () => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      let diff = index - currentIndex;

      // Wrap around logic for circular positioning
      if (diff > images.length / 2) {
        diff -= images.length;
      } else if (diff < -images.length / 2) {
        diff += images.length;
      }

      const absDiff = Math.abs(diff);

      // Reset transform
      gsap.killTweensOf(card);

      if (absDiff === 0) {
        // Center card (main focus)
        gsap.to(card, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 50,
          rotationY: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        // All other cards visible in background
        const direction = diff > 0 ? 1 : -1;

        // Responsive spacing based on screen size
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
        const spacing = isMobile ? 100 : isTablet ? 140 : 180;

        const xPos = direction * (spacing * absDiff);

        gsap.to(card, {
          x: xPos,
          y: 20 + absDiff * 10,
          scale: Math.max(0.65, 1 - absDiff * 0.15),
          opacity: Math.max(0.3, 1 - absDiff * 0.2),
          zIndex: 50 - absDiff * 10,
          rotationY: -direction * (10 + absDiff * 5),
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    animateCards();
  }, [currentIndex]);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className=" bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 sm:py-12 md:py-16">
      <div className="text-center px-4">
        <div className="inline-block mb-3 md:mb-4">
          <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-sm sm:text-base md:text-lg font-semibold tracking-wide uppercase">
            Event Highlights
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4">
          <div className="h-px w-8 sm:w-12 md:w-16 bg-amber-600"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rotate-45"></div>
          <div className="h-px w-8 sm:w-12 md:w-16 bg-amber-600"></div>
        </div>
      </div>

      <div className="flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-2 sm:px-4">
          {/* Carousel Container - Dynamic height based on card content */}
          <div
            ref={carouselRef}
            className="relative min-h-[340px] xs:min-h-[410px] sm:min-h-[480px] md:min-h-[550px] lg:min-h-[620px] py-8 sm:py-10 md:py-12 flex items-center justify-center"
            style={{ perspective: "2000px" }}
          >
            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              aria-label="Previous slide"
              className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700/80 hover:bg-gray-600 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95"
            >
              <span className="text-lg sm:text-xl">◄</span>
            </button>
            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-amber-600/80 hover:bg-amber-500 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95"
            >
              <span className="text-lg sm:text-xl">►</span>
            </button>

            {/* Cards - Maintaining 1440x2000 aspect ratio (0.72:1) */}
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute 
                  border-2 border-amber-600
                  w-[216px] h-[300px]
                  xs:w-[252px] xs:h-[350px]
                  sm:w-[288px] sm:h-[400px]
                  md:w-[324px] md:h-[450px]
                  lg:w-[360px] lg:h-[500px]
                  xl:w-[432px] xl:h-[600px]
                  rounded-lg overflow-hidden  cursor-pointer transition-shadow hover:shadow-3xl"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Image with proper aspect ratio */}
                <img
                  src={image}
                  alt={`Event poster ${index + 1}`}
                  className="w-full h-full object-cover bg-white"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
