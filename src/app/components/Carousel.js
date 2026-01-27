"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from '@/ui/Image/Image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: "/images/carousel/halma.jpeg",
    title: "From the Last Mile to Logic",
    description: "Where Communities Shape Intelligence",
    subtitle: "Co-creating AI solutions with communities"
  },
  {
    id: 2,
    image: "/images/carousel/halma1.png",
    title: "Community-Driven Solutions",
    description: "AI, Co-Created, Participation Before Deployment",
    subtitle: "Building inclusive technology for all"
  },
  {
    id: 3,
    image: "/images/carousel/halma2.webp",
    title: "Sustainable Development",
    description: "Building a future that honors heritage and embraces progress",
    subtitle: "Innovation rooted in tradition"
  }
];

export function Carousel() {
  const containerRef = useRef(null);
  const emblaApi = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const emblaCarousel = EmblaCarousel(containerRef.current, {
      loop: true,
      align: 'start',
      skipSnaps: false,
    }, [Autoplay({ delay: 6000, stopOnInteraction: true })]);

    emblaApi.current = emblaCarousel;

    const onSelect = () => {
      setSelectedIndex(emblaCarousel.selectedScrollSnap());
    };

    emblaCarousel.on('select', onSelect);
    onSelect();

    return () => {
      emblaCarousel.destroy();
    };
  }, []);

  const goToSlide = useCallback((index) => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollToScrollSnap(index);
  }, []);

  const scrollPrev = useCallback(() => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollPrev();
  }, []);

  const scrollNext = useCallback(() => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollNext();
  }, []);

  return (
    <section className="relative w-full h-64 sm:h-96 md:h-[520px] lg:h-[620px] overflow-hidden bg-slate-950 text-white">
      {/* Embla Container */}
      <div className="embla overflow-hidden h-full w-full" ref={containerRef}>
        <div className="embla__container flex h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide relative flex-[0_0_100%] min-w-0 h-full w-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Gradients to ensure text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-900/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
                <div className="w-full sm:w-96 md:w-full md:max-w-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                  <p className="text-blue-200 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
                    {slide.subtitle}
                  </p>

                  <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight text-white">
                    {slide.title}
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-slate-100/80 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-3 pt-2">
                    <Link href="#about" className="px-4 sm:px-5 md:px-6 py-2 md:py-3 bg-blue-500 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-blue-900/30 text-sm md:text-base whitespace-nowrap">
                      Discover the Summit
                    </Link>
                    <span className="text-xs sm:text-sm text-white/70">Academically grounded. Community driven.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 z-20 pointer-events-none">
        <button
          onClick={scrollPrev}
          className="pointer-events-auto group p-2 sm:p-2.5 md:p-3.5 bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full transition-all duration-200 flex items-center justify-center shadow-lg shadow-slate-900/40 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={scrollNext}
          className="pointer-events-auto group p-2 sm:p-2.5 md:p-3.5 bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full transition-all duration-200 flex items-center justify-center shadow-lg shadow-slate-900/40 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Indicator - Bottom Center */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3 z-20 flex-wrap justify-center px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full backdrop-blur-sm border border-white/15 ${
              index === selectedIndex
                ? 'w-6 sm:w-8 md:w-10 h-2 md:h-2.5 bg-blue-500 shadow-lg shadow-blue-900/40'
                : 'w-2 h-2 bg-white/35 hover:bg-white/55'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 md:right-10 text-white text-xs sm:text-sm font-medium z-20 bg-slate-950/35 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-sm">
        <span className="text-blue-200 font-semibold">{selectedIndex + 1}</span>
        <span className="text-white/70"> / {slides.length}</span>
      </div>
    </section>
  );
}