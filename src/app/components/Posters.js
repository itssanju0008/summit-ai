"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/ui/Image/Image";

const posters = [
  {
    id: 1,
    title: "Main Poster",
    image: "/images/posters/Main Poster.png",
  },
  {
    id: 2,
    title: "Inauguration Poster",
    image: "/images/posters/Inauguration Poster.png",
  },
  {
    id: 3,
    title: "Speakers Poster",
    image: "/images/posters/Speakers Poster.png",
  },
  {
    id: 4,
    title: "Panel 1 Poster",
    image: "/images/posters/Panel 1 Poster.png",
  },
  {
    id: 5,
    title: "Panel 2 Poster",
    image: "/images/posters/Panel 2 Poster.png",
  },
];

function PostersCarousel() {
  const containerRef = useRef(null);
  const emblaApi = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const emblaCarousel = EmblaCarousel(
      containerRef.current,
      {
        align: "start",
        loop: true,
        skipSnaps: false,
        breakpoints: {
          "(max-width: 640px)": { slidesToScroll: 1, active: true },
          "(max-width: 1024px)": { slidesToScroll: 1, active: true },
          "(min-width: 1024px)": { slidesToScroll: 1, active: true },
        },
      },
      [Autoplay({ delay: 6000, stopOnInteraction: true })],
    );

    emblaApi.current = emblaCarousel;

    const onSelect = () => {
      setSelectedIndex(emblaCarousel.selectedScrollSnap());
    };

    const onInit = () => {
      setScrollSnaps(emblaCarousel.scrollSnapList());
    };

    emblaCarousel.on("select", onSelect);
    emblaCarousel.on("init", onInit);
    onInit();
    onSelect();

    return () => {
      emblaCarousel.destroy();
    };
  }, []);

  const scrollPrev = useCallback(() => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollPrev();
  }, []);

  const scrollNext = useCallback(() => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollNext();
  }, []);

  const scrollTo = useCallback((index) => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollToScrollSnap(index);
  }, []);

  return (
    <div className="relative px-3 sm:px-6">
      <button
        onClick={scrollPrev}
        className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-amber-600 rounded-full shadow-md flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all text-amber-600 active:scale-95"
        aria-label="Previous poster"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-amber-600 rounded-full shadow-md flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all text-amber-600 active:scale-95"
        aria-label="Next poster"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <div className="embla overflow-hidden" ref={containerRef}>
        <div className="embla__container flex">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="embla__slide flex-[0_0_100%] min-w-0"
            >
              <div className="px-2 sm:px-6 md:px-12 py-4">
                <div className="bg-white rounded border-2 border-gray-200 overflow-hidden h-full max-w-2xl mx-auto">
                  <div className="relative w-full aspect-[18/25] overflow-hidden bg-gray-100">
                    <Image
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-amber-600 w-6"
                : "bg-gray-300 hover:bg-amber-400"
            }`}
            aria-label={`Go to poster ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Posters() {
  return (
    <section id="posters" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
              Event Highlights
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4 py-3 md:py-4">
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
          </div>

          <p className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Explore the key highlights and events of our summit through our
            promotional materials.
          </p>
        </div>

        <PostersCarousel />
      </div>
    </section>
  );
}
