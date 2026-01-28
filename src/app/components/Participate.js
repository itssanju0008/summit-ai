import React from "react";
import { Users } from "lucide-react";

export default function Participate() {
  return (
    <div id="participate" className="min-h-screen bg-white pt-14 sm:pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-4 py-2 sm:px-4 sm:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
            Participate
            </span>
          </div>
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-3 md:mb-6">
            Participate
          </h1> */}
          
          <div className="flex items-center justify-center gap-4 py-3 md:py-4">
            <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-slate-50 rounded-xl p-5 sm:p-8 md:p-12 mb-10 md:mb-12 border-l-4 border-amber-600 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-5 sm:mb-8">
            <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                How to Participate
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                This is an{" "}
                <span className="font-semibold text-amber-700">
                  invite-only event
                </span>
                . Fill out the form below and get a chance to participate in
                this transformative gathering focused on community-driven AI and
                last-mile innovation.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-amber-600 p-4 sm:p-6 rounded-lg">
            <h3 className="font-serif font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
              Important Note:
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span>
                  Limited seats available - applications will be reviewed on a
                  rolling basis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span>
                  Selected participants will be notified via email within 5
                  business days
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span>
                  Please provide accurate information to help us understand your
                  background and interest
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Form Embed Section */}
        <div className="bg-white rounded-xl p-5 sm:p-8 md:p-12 border-2 border-gray-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Application Form
          </h2>

          <div className="w-full bg-gray-50 rounded-lg flex items-center justify-center border-2 border-gray-300 p-2 sm:p-3">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfRQAsRIs9DD5NxbR-fHvoATnCWCdOFdiUWXPLGZbxt_MhMbA/viewform?embedded=true"
              width="100%"
              height="1300"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-[900px] sm:h-[1200px] md:h-[1300px] rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-700">
            Questions about the application process?{" "}
            <a
              href="mailto:community.responsive.ai@gmail.com"
              className="text-amber-700 hover:text-amber-800 font-semibold underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}