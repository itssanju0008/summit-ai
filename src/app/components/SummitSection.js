import { Globe } from "lucide-react";

export function IndiaAISummitSection() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Purple Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-6 text-center">
            <h3 className="text-white text-sm sm:text-base font-semibold tracking-wider uppercase">
              Official Pre-Summit Event
            </h3>
          </div>

          {/* Content Area */}
          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Logo */}
              <div className="flex justify-center md:justify-start">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
                  <img
                    src="/api/placeholder/280/280"
                    alt="AI Impact Summit Logo"
                    className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  India AI Impact Summit 2026
                </h2>

                <p className="text-lg sm:text-xl text-gray-600">
                  February 2026 | India
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  This seminar is the official pre-summit event of the India AI Impact Summit,
                  bringing together global perspectives to shape the future of AI for the Global
                  South.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Learn More About India AI Impact Summit
                    <Globe className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}