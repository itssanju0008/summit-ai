"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Globe, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/ui/Image/Image";

const inaugurators = [
  {
    id: 1,
    name: "Prof. Rangan Banerjee",
    title: "Director, IIT Delhi",
    image: "/images/Speakers/ranganbanerjee.jpg",
    website: "https://www.ese.iitb.ac.in/~rb/",
    email: "rangan@iitb.ac.in",
  },
  {
    id: 2,
    name: "Smt. Ranjana Chopra",
    title: "Secretary, Ministry of Tribal Affairs",
    image: "/images/Speakers/ranjana_chopra_ias.png",
    website: "https://trifed.tribal.gov.in/node/1533",
    email: "secy-tribal@nic.in",
  },
  {
    id: 3,
    name: "Shri. Vibhu Nayar",
    title: "Former Secretary, Ministry Of Tribal Affairs",
    image: "/images/Speakers/vibhunayar.jpeg",
    website: "https://example.com/anjali-sharma",
    email: "secy-tribal@nic.in",
  },
];

export function InaugratedBy() {
  return (
    <section id="speakers" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
              Inaugural Session
            </span>
          </div>
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 px-2">
            Inaugurated By
          </h2> */}

          <div className="flex items-center justify-center gap-3 md:gap-4 py-3 md:py-4">
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
          </div>

          <p className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Honorable leaders opening the summit and setting the vision for our
            gathering
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {inaugurators.map((person) => (
              <div
                key={person.id}
                className="group bg-white rounded border-2 border-gray-200 flex flex-col hover:border-amber-600 transition-all duration-300 overflow-hidden shadow-sm"
              >
                <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-amber-600 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                    <a
                      href={`mailto:${person.email}`}
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-amber-600 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-4 md:p-6 text-center flex-1">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-amber-700 text-sm md:text-base">
                    {person.title}
                  </p>
                </div>
                <div className="h-1 bg-amber-600"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
