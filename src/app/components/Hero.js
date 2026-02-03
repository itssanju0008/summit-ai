// "use client";
// import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
// import Link from "next/link";

// export function Hero() {
//   return (
//     <section className="relative pt-14 overflow-hidden bg-slate-900">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/images/backdrop2.png"
//           alt="Tribal Mural Background"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
//         <div className="text-center space-y-4 sm:space-y-6">
//           {/* Elegant Badge */}
//           <div className="inline-block">
//             <div className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 sm:px-6 sm:py-2 rounded text-xs sm:text-sm font-semibold tracking-wide uppercase">
//               <span className="hidden sm:inline">
//                 Official Pre-summit event of IndiaAI Impact summit 2026
//               </span>
//               <span className="sm:hidden">Official Pre-summit event of IndiaAI Impact summit 2026</span>
//             </div>
//           </div>

//           {/* Main Title - Classic Serif Style */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight px-2">
//             Community Driven AI:
//             <span className="block text-amber-500 mt-2 sm:mt-4">
//               A Roadmap for India's Last-Mile
//             </span>
//           </h1>

//           {/* Decorative Divider */}
//           <div className="flex items-center justify-center gap-3 sm:gap-4 py-2">
//             <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
//             <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
//             <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
//           </div>

//           {/* Subtitle */}
//           <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
//             A one-and-a-half-day workshop to co-create India's first
//             participatory AI framework.
//           </p>

//           {/* Event Details - Classic Cards */}
//           <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 px-4">
//             <div className="  bg-white/5 backdrop-blur-sm px-6 py-4 sm:px-8 sm:py-6 rounded border border-amber-600/30 w-full sm:min-w-[240px] sm:w-auto">
//               <div className="flex flex-row items-center gap-2 sm:gap-3">
//                 <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
//                 <div className="text-start">
//                   {/* <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
//                     Dates
//                   </div> */}
//                   <div className="font-semibold text-white text-base sm:text-lg">
//                     7 & 8 February 2026
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-row items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
//                 <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
//                 <div className="text-start">
//                   {/* <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
//                     Venue
//                   </div> */}
//                   <div className="font-semibold text-white text-base sm:text-lg">
//                     Seminar Hall | IIT Delhi
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Classic CTA */}
//           <div className="pt-6 sm:pt-8 px-4">
//             <Link
//               href={"/participate"}
//               className="bg-amber-600 flex items-center justify-center gap-3 hover:bg-amber-700 text-white px-10 py-4 sm:px-16 sm:py-6 rounded text-lg sm:text-2xl font-semibold tracking-wide uppercase transition-colors duration-300 shadow-lg"
//             >
//               participate
//               <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Simple Bottom Border */}
//       <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
//     </section>
//   );
// }

// "use client";
// import { ArrowUpRight, Calendar, Globe, MapPin } from "lucide-react";
// import Link from "next/link";
// import { IndiaAISummitSection } from "./SummitSection";

// export function Hero() {
//   return (
//     <section className="relative pt-14 overflow-hidden bg-slate-900">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/images/backdrop2.png"
//           alt="Tribal Mural Background"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Side - Content */}
//           <div className="space-y-4 sm:space-y-6">
//             {/* Elegant Badge */}
//             <div className="inline-block">
//               <div className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 sm:px-6 sm:py-2 rounded text-xs sm:text-sm font-semibold tracking-wide uppercase">
//                 <span className="hidden sm:inline">
//                   Official Pre-summit event of IndiaAI Impact summit 2026
//                 </span>
//                 <span className="sm:hidden">
//                   Official Pre-summit event of IndiaAI Impact summit 2026
//                 </span>
//               </div>
//             </div>

//             {/* Main Title - Classic Serif Style */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight">
//               Community Driven AI:
//               <span className="block text-amber-500 mt-2 sm:mt-4">
//                 A Roadmap for India's Last-Mile
//               </span>
//             </h1>

//             {/* Decorative Divider */}
//             <div className="flex items-center gap-3 sm:gap-4 py-2">
//               <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
//               <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
//               <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
//             </div>

//             {/* Subtitle */}
//             <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
//               A one-and-a-half-day workshop to co-create India's first
//               participatory AI framework.
//             </p>

//             {/* Event Details - Classic Cards */}
//             <div className="flex flex-col gap-4 pt-6 sm:pt-8">
//               <div className="bg-white/5 backdrop-blur-sm px-6 py-4 rounded border border-amber-600/30">
//                 <div className="flex items-center gap-3">
//                   <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
//                   <div className="text-start">
//                     <div className="font-semibold text-white text-base sm:text-lg">
//                       7 & 8 February 2026
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white/5 backdrop-blur-sm px-6 py-4 rounded border border-amber-600/30">
//                 <div className="flex items-center gap-3">
//                   <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
//                   <div className="text-start">
//                     <div className="font-semibold text-white text-base sm:text-lg">
//                       Seminar Hall | IIT Delhi
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Classic CTA */}
//             <div className="pt-6 sm:pt-8">
//               <Link
//                 href={"/participate"}
//                 className="bg-amber-600 w-full inline-flex items-center justify-center gap-3 hover:bg-amber-700 text-white px-10 py-4 sm:px-16 sm:py-6 rounded text-lg sm:text-2xl font-semibold tracking-wide uppercase transition-colors duration-300 shadow-lg"
//               >
//                 participate
//                 <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
//               </Link>
//             </div>
//           </div>

//           {/* Right Side - Image Box */}
//           <div className="w-full">
//             <section className="">
//               <div className="max-w-6xl mx-auto px-4 sm:px-6">
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
//                   {/* Purple Header */}
//                   <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-6 text-center">
//                     <h3 className="text-white text-sm sm:text-base font-semibold tracking-wider uppercase">
//                       Official Pre-Summit Event
//                     </h3>
//                   </div>

//                   {/* Content Area */}
//                   <div className="p-8 sm:p-12">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//                       {/* Left Side - Logo */}
//                       <div className="flex justify-center md:justify-start">
//                         <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
//                           <img
//                             src="/api/placeholder/280/280"
//                             alt="AI Impact Summit Logo"
//                             className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
//                           />
//                         </div>
//                       </div>

//                       {/* Right Side - Text Content */}
//                       <div className="space-y-6 text-center md:text-left">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
//                           India AI Impact Summit 2026
//                         </h2>

//                         <p className="text-lg sm:text-xl text-gray-600">
//                           February 2026 | India
//                         </p>

//                         <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
//                           This seminar is the official pre-summit event of the
//                           India AI Impact Summit, bringing together global
//                           perspectives to shape the future of AI for the Global
//                           South.
//                         </p>

//                         {/* CTA Button */}
//                         <div className="pt-4">
//                           <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
//                             Learn More About India AI Impact Summit
//                             <Globe className="w-5 h-5" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>

//       {/* Simple Bottom Border */}
//       <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
//     </section>
//   );
// }

"use client";
import { ArrowUpRight, Calendar, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-14 overflow-hidden bg-slate-900">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Elegant Badge */}
            {/* <div className="inline-block">
              <Link
                href="https://impact.indiaai.gov.in/"
                target="_blank"
                className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm font-semibold tracking-wide uppercase"
              >
                Official Pre-summit event of IndiaAI Impact summit 2026
              </Link>
            </div> */}
            <div className="inline-block max-w-full">
              <Link
                href="https://impact.indiaai.gov.in/"
                target="_blank"
                className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm font-semibold tracking-wide uppercase inline-block text-start leading-tight"
              >
                Official Pre-summit event of IndiaAI Impact summit 2026
              </Link>
            </div>

            {/* Main Title - Classic Serif Style */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight">
              Community Driven AI:
              <span className="block text-amber-500 mt-2 sm:mt-4">
                A Roadmap for India's Last-Mile
              </span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 sm:gap-4 py-2">
              <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
              <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
              <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
              A one-and-a-half-day workshop to co-create India's first
              participatory AI framework.
            </p>

            {/* Event Details - Classic Cards */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-4 rounded border border-amber-600/30 flex-1">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />
                  <div className="text-start">
                    <div className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                      7 & 8 February 2026
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-4 rounded border border-amber-600/30 flex-1">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />
                  <div className="text-start">
                    <div className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                      Seminar Hall | IIT Delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Classic CTA */}
            <div className="pt-6 ">
              <Link
                href={"/participate"}
                className="bg-amber-600 w-full inline-flex items-center justify-center gap-3 hover:bg-amber-700 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded text-base sm:text-lg lg:text-xl font-semibold tracking-wide uppercase transition-colors duration-300 shadow-lg"
              >
                participate
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
            <span className="text-sm sm:text-base">
              <span className="text-amber-600">*</span> Invitation letters has been sent to selected participants.
            </span>
          </div>

          {/* Right Side - India AI Summit Card */}
          <div className="lg:col-span-2 w-full mt-8 lg:mt-0 sm:px-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Purple Header */}
              <div className="bg-gradient-to-r from-amber-800 to-amber-600 py-3 sm:py-4 px-4 sm:px-6 text-center">
                <h3 className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  Official Pre-Summit Event
                </h3>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 ">
                {/* Logo */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <img
                      src="\images\logos\India-AI-Impact-Summit-2026-Logo.png"
                      alt="AI Impact Summit Logo"
                      className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-50 leading-tight font-serif">
                    India AI Impact Summit 2026
                  </h2>

                  <p className="text-base sm:text-lg text-gray-100">
                    February 2026 | India
                  </p>

                  <p className="text-sm sm:text-base text-gray-100 leading-relaxed text-justify px-2">
                    This workshop is the official pre-summit event of the India
                    AI Impact Summit, bringing together global perspectives to
                    shape the future of AI for the Global South.
                  </p>
                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      href={"https://impact.indiaai.gov.in/"}
                      target="_blank"
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-600 hover:from-amber-700 hover:to-amber-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base  font-semibold inline-flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="text-center">
                        Learn More 
                      </span>
                      {/* <Globe className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
    </section>
  );
}
