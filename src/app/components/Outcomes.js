import {
  CheckCircle2,
  FileText,
  Network,
  Rocket,
} from "lucide-react";

const outcomes = [
  {
    id: 1,
    icon: FileText,
    title: "Policy Recommendations",
    description:
      "A comprehensive document outlining policy recommendations for integrating technology in tribal development programs.",
    deliverable: "White Paper",
  },
  {
    id: 2,
    icon: Network,
    title: "Collaboration Network",
    description:
      "Establishment of a robust network connecting tribal leaders, technologists, NGOs, and government agencies.",
    deliverable: "Partnership Framework",
  },
  {
    id: 3,
    icon: Rocket,
    title: "Pilot Projects",
    description:
      "Identification and planning of 5-10 pilot technology projects to be implemented in select tribal regions.",
    deliverable: "Project Blueprints",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Action Roadmap",
    description:
      "A detailed roadmap with timelines, milestones, and responsibilities for implementing summit outcomes.",
    deliverable: "Implementation Plan",
  },
];

const impacts = [
  "Enhanced digital literacy and access to technology in tribal communities",
  "Preservation and digitization of indigenous knowledge and cultural heritage",
  "Improved healthcare delivery through telemedicine and digital health solutions",
  "Creation of sustainable livelihood opportunities through technology-enabled enterprises",
  "Stronger voice and representation for tribal communities in national policy discussions",
  "Development of culturally-sensitive technology solutions and best practices",
];

export function Outcomes() {
  return (
    <section id="outcomes" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Event Timeline */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 md:mb-4">
              <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
                Schedule
              </span>
            </div>
            {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 px-2">
              Event Timeline
            </h2> */}
            
            <div className="flex items-center justify-center gap-3 md:gap-4 py-3 md:py-4">
              <div className="h-px w-12 md:w-16 bg-amber-600"></div>
              <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
              <div className="h-px w-12 md:w-16 bg-amber-600"></div>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-amber-600"></div>

            <div className="space-y-8 md:space-y-12">
              {/* Day 1 Morning */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1 text-right hidden md:block">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-gray-900">
                    Day 1 - Morning
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Opening Ceremony & Keynotes
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-600 border-3 border-white rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0 -translate-x-2.5 sm:-translate-x-3 md:translate-x-0">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    9:00
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-gray-900 md:hidden">
                    Day 1 - Morning
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 md:hidden">
                    Opening Ceremony & Keynotes
                  </p>
                  <p className="text-sm md:text-base text-gray-700 hidden md:block">
                    Welcome address, inaugural speeches, and keynote presentations
                  </p>
                </div>
              </div>

              {/* Day 1 Afternoon */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1 text-right hidden md:block">
                  <p className="text-sm md:text-base text-gray-700">
                    Panel discussions and thematic workshops
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-700 border-3 border-white rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0 -translate-x-2.5 sm:-translate-x-3 md:translate-x-0">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    14:00
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-gray-900">
                    Day 1 - Afternoon
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Panel discussions and thematic workshops
                  </p>
                </div>
              </div>

              {/* Day 1 End */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1 text-right hidden md:block">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-gray-900">
                    Day 1 - End
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Interactive Breakout sessions
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-800 border-3 border-white rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0 -translate-x-2.5 sm:-translate-x-3 md:translate-x-0">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    17:00
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-gray-900 md:hidden">
                    Day 1 - End
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 md:hidden">
                    Interactive sessions & closing ceremony
                  </p>
                  <p className="text-sm md:text-base text-gray-700 hidden md:block">
                    Collaborative workshops, networking, and end of day 1
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1 text-right hidden md:block">
                  <p className="text-sm md:text-base text-gray-700">
                    Panel discussions and Plenary Talks
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-600 border-3 border-white rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0 -translate-x-2.5 sm:-translate-x-3 md:translate-x-0">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    9:00
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-gray-900">
                    Day 2
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Keynotes & Breakout Summary
                  </p>
                </div>
              </div>

              {/* Day 2 End */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1 text-right hidden md:block">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-gray-900">
                    Day 2 - End
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Interactive Breakout sessions
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-700 border-3 border-white rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0 -translate-x-2.5 sm:-translate-x-3 md:translate-x-0">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    12:00
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-gray-900 md:hidden">
                    Day 2 - End
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 md:hidden">
                    Interactive sessions & closing ceremony
                  </p>
                  <p className="text-sm md:text-base text-gray-700 hidden md:block">
                    Collaborative workshops, networking, and summit closing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}