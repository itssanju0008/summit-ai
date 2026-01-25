'use client';
import { Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backdrop2.png"
          alt="Tribal Mural Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Elegant Badge */}
          <div className="inline-block">
            <div className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 sm:px-6 sm:py-2 rounded text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <span className="hidden sm:inline">India AI Impact Summit 2026 Pre-Summit Event</span>
              <span className="sm:hidden">AI Impact Summit 2026</span>
            </div>
          </div>

          {/* Main Title - Classic Serif Style */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight px-2">
            Community Driven AI:
            <span className="block text-amber-500 mt-2 sm:mt-4">
              A Roadmap for India's Last-Mile
            </span>
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 py-2">
            <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            A one-and-a-half-day workshop to co-create India's first participatory AI framework.
          </p>

          {/* Event Details - Classic Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 px-4">
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 sm:px-8 sm:py-6 rounded border border-amber-600/30 w-full sm:min-w-[240px] sm:w-auto">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
              <div className="text-center">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dates</div>
                <div className="font-semibold text-white text-base sm:text-lg">7 & 8 February 2026</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 sm:px-8 sm:py-6 rounded border border-amber-600/30 w-full sm:min-w-[240px] sm:w-auto">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
              <div className="text-center">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Venue</div>
                <div className="font-semibold text-white text-base sm:text-lg">Seminar Hall | IIT Delhi</div>
              </div>
            </div>
          </div>

          {/* Classic CTA */}
          <div className="pt-6 sm:pt-8 px-4">
            <Link href={"/participate"} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 sm:px-12 sm:py-4 rounded text-base sm:text-lg font-semibold tracking-wide uppercase transition-colors duration-300 shadow-lg w-full sm:w-auto">
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
    </section>
  );
}