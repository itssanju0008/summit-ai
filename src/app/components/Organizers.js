const organizers = [
  {
    id: 1,
    type: "Organizer",
    name: "Yardi School of AI ",
    description:
      "Working towards the protection and promotion of rights and interests of Scheduled Tribes.",
    // image: '/images/logos/scailogo.jpeg',
    image: "/images/logos/iitdlogo.png",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 2,
    type: "Organizer",
    name: "Bhagwan Birsa Munda Cell",
    description:
      "Leading the initiative to empower tribal communities through digital transformation and sustainable development.",
    image: "/images/logos/iitdlogo.png",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 3,
    type: "Supported by",
    name: "Indian Institute of Technology",
    description:
      "Driving AI innovation and digital solutions for inclusive growth across all communities.",
    image: "/images/logos/iitdlogo.png",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 4,
    type: "Supported by",
    name: "Ministry of Tribal Affairs, Government of India",
    description:
      "Promoting tribal art, culture, and products through modern marketing channels and technology.",
    image: "/images/logos/motalogo.svg",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 5,
    type: "Adivaani",
    name: "Every dialect has its own identity",
    description:
      "Shared responsibility of bridging language barriers and preserving cultural identity and traditions.",
    image: "/images/logos/logo.png",
    color: "from-green-500 to-teal-600",
  },
];

export function Organizers() {
  return (
    <section id="organizers" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
              Event Partners
            </span>
          </div>
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 px-2">
            Organizers & Partners
          </h2> */}

          <div className="flex items-center justify-center gap-3 md:gap-4 py-3 md:py-4">
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
          </div>

          <p className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            A collaborative effort bringing together government agencies, tribal
            organizations, and technology leaders to create meaningful change.
          </p>
        </div>

        {/* Main Organizers */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {organizers.map((org) => {
            return (
              <div
                key={org.id}
                className="bg-white rounded p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-amber-600 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded border-2 border-amber-600 flex items-center justify-center flex-shrink-0 p-1.5 sm:p-2 bg-white">
                    <img
                      src={org.image}
                      alt={org.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="inline-block bg-slate-100 text-amber-700 border border-amber-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3 uppercase tracking-wide whitespace-nowrap">
                      {org.type}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-lg font-serif font-bold text-gray-900 break-words">
                      {org.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {org.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
