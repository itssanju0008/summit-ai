"use client";

import { useState } from "react";
import {
  Clock,
  MapPin,
  Calendar,
  Users,
  Presentation,
  Coffee,
  Award,
  UsersRound,
  Speech,
  MicVocal,
  X,
  Download,
} from "lucide-react";

const schedule = [
  {
    day: "Day 1",
    date: "TBD 2026",
    sessions: [
      {
        time: "9:00 AM - 09:30 AM",
        title: "Inaugration",
        description: "Lamp Lighting & Inaugration",
        icon: Presentation,
        type: "General",
      },
      {
        time: "09:30 AM - 10:10 AM",
        title: "Keynote",
        description: "A Keynote, delivered by one of our speakers",
        icon: Speech,
        type: "Plenary",
      },
      {
        time: "10:00 AM - 10:50 AM",
        title: "Talks",
        description: "2 Talks",
        icon: MicVocal,
        type: "Plenary",
      },
      {
        time: "10:50 AM - 11:20 AM",
        title: "Tea Break",
        description: "A small refreshment break",
        icon: Coffee,
        type: "Break",
      },
      {
        time: "11:20 AM - 12:00 ",
        title: "Talks",
        description: "2 Talks",
        icon: MicVocal,
        type: "Plenary",
      },
      {
        time: "12:00 AM - 1:00 PM",
        title: "Panel Discussion",
        description: "AI Centric panel discussion",
        icon: UsersRound,
        type: "Panel",
      },
      {
        time: "1:00 PM - 2:15 PM",
        title: "Lunch Break",
        description: "Traditional lunch featuring tribal cuisine",
        icon: Coffee,
        type: "Break",
      },
      {
        time: "2:20 PM - 3:00 PM",
        title: "Afternoon Keynote",
        description: "A Keynote, delivered by one of our speakers",
        icon: Speech,
        type: "Plenary",
      },
      {
        time: "3:00 PM - 4:20 PM",
        title: "Talks",
        description: "4 Talks",
        icon: MicVocal,
        type: "Plenary",
      },
      {
        time: "4:20 PM - 4:50 PM",
        title: "Tea Break",
        description: "Refreshments",
        icon: Coffee,
        type: "Break",
      },
      {
        time: "4:50 PM - 6:00 PM",
        title: "Panel Discussion",
        description: "Social Centric",
        icon: UsersRound,
        type: "Panel",
      },
      {
        time: "6:00 PM - 6:50 PM",
        title: "Voices from Parallel Communities",
        description:
          "Community-Led Digital Transformation | Tech Entrepreneurship | Policy & Governance",
        icon: Presentation,
        type: "Workshop",
      },
      {
        time: "6:50 PM - 8:00 PM",
        title: "Breakout Session",
        description:
          "Theme Based Sessions Democratic | Responsive | Prioritization",
        icon: Award,
        type: "Thematic",
      },
    ],
  },
  {
    day: "Day 2",
    date: "TBD 2026 (Half Day)",
    sessions: [
      {
        time: "9:00 AM - 9:40 AM",
        title: "Keynote: The Last Mile",
        description: "Keynote",
        icon: Speech,
        type: "Plenary",
      },
      {
        time: "9:40 AM - 11:00 AM",
        title: "Talks",
        description: "4 Talks",
        icon: UsersRound,
        type: "Plenary",
      },
      {
        time: "11:30 AM - 11:30 AM",
        title: "Tea Break",
        description: "Refreshments",
        icon: Coffee,
        type: "Break",
      },
      {
        time: "10:45 AM - 12:00 PM",
        title: "Keynote",
        description: "Last Keynote",
        icon: Speech,
        type: "Plenary",
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "Summary of Breakouts",
        description:
          "Presentation of outcomes, vote of thanks, and way forward",
        icon: Award,
        type: "Collaborative",
      },
      {
        time: "1:00 PM - 1:15 PM",
        title: "Valedictory Session",
        description: "Concludes the event on an inspiring note.",
        icon: Speech,
        type: "Collaborative",
      },
      {
        time: "1:15 PM Onwards",
        title: "Way Froward & Vote of Thanks",
        description: "Farewell lunch and informal networking",
        icon: Coffee,
        type: "Break",
      },
    ],
  },
];

const sessionTypes = {
  Plenary: "bg-amber-600",
  Panel: "bg-amber-700",
  Workshop: "bg-amber-800",
  Roundtable: "bg-amber-600",
  Collaborative: "bg-amber-700",
  Cultural: "bg-amber-600",
  Break: "bg-gray-500",
  General: "bg-amber-600",
  Thematic: "bg-amber-800",
};

export function ProgramStructure() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/ps.pdf";
    link.download = "Program_Structure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="program" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-4 py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
              Program Structure
            </span>
          </div>
          {/* <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Program Structure
          </h2> */}

          <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-px w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-16 bg-amber-600"></div>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A carefully curated 1.5-day program featuring keynotes, panels,
            workshops, and networking opportunities designed to maximize
            learning and collaboration.
          </p>
        </div>
        {/* Download CTA */}
        <div className="mt-12 md:mt-16 text-center bg-slate-900 rounded p-6 md:p-12 border-4 border-amber-600 mb-8">
          <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Download the complete program guide with detailed session
            descriptions, speaker information, and venue maps.
          </p>
           <button
            onClick={() => handleDownload(true)}
            className="md:hidden bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 md:px-8 md:py-4 rounded font-semibold uppercase tracking-wide transition-colors text-sm md:text-base w-full sm:w-auto"
          >
            Download Program Guide (PDF)
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:inline bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 md:px-8 md:py-4 rounded font-semibold uppercase tracking-wide transition-colors text-sm md:text-base w-full sm:w-auto"
          >
            Open Program Guide (PDF)
          </button>
        </div>
        

        {/* Event Details Cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="bg-slate-50 rounded p-4 md:p-6 border-2 border-amber-600">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif font-bold text-gray-900 text-base md:text-lg">
                  Duration
                </h3>
                <p className="text-gray-700 text-xs md:text-sm break-words">
                  1.5 Days | 7th & 8th February 2026
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded p-4 md:p-6 border-2 border-amber-600">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif font-bold text-gray-900 text-base md:text-lg">
                  Venue
                </h3>
                <p className="text-gray-700 text-xs md:text-sm break-words">
                  Seminar Hall | IIT Delhi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-8 md:space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex}>
              {/* Day Header */}
              <div className="bg-amber-600 rounded p-4 md:p-6 mb-4 md:mb-6 text-white border-4 border-amber-700">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1 md:mb-2">
                      {day.day}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      {day.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded border border-white/30 text-sm md:text-base">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="font-semibold whitespace-nowrap">
                      {day.sessions[0].time.split(" - ")[0]} -{" "}
                      {
                        day.sessions[day.sessions.length - 1].time.split(
                          " - ",
                        )[1]
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* Sessions */}
              <div className="space-y-3 md:space-y-4">
                {day.sessions.map((session, sessionIndex) => {
                  const Icon = session.icon;
                  const bgColor = sessionTypes[session.type];

                  return (
                    <div
                      key={sessionIndex}
                      className="bg-white rounded p-4 md:p-6 border-2 border-gray-200 hover:border-amber-600 transition-all border-l-4 border-l-amber-600"
                    >
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 sm:gap-6">
                        {/* Time & Icon */}
                        <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 flex-shrink-0">
                          <div
                            className={`w-12 h-12 md:w-16 md:h-16 ${bgColor} rounded flex items-center justify-center sm:mb-2 md:mb-3`}
                          >
                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                          <div className="sm:text-center">
                            <span
                              className={`inline-block ${bgColor} text-white px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold uppercase tracking-wide`}
                            >
                              {session.type}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 md:mb-3">
                            <h4 className="text-base md:text-lg font-serif font-bold text-gray-900 break-words">
                              {session.title}
                            </h4>
                            <span className="text-amber-700 font-semibold text-xs md:text-sm whitespace-nowrap flex items-center gap-1 md:gap-2">
                              <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                              <span className="break-all sm:break-normal">
                                {session.time}
                              </span>
                            </span>
                          </div>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed break-words">
                            {session.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* PDF Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-0">
            <div className="bg-white rounded-none shadow-2xl w-screen h-screen max-w-none max-h-screen flex flex-col overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 md:px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  Program Structure Guide
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:bg-amber-700 p-2 rounded transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="/pdf/ps.pdf"
                  className="w-full h-full border-0"
                  title="Program Structure PDF"
                />
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-100 border-t border-gray-300 px-4 md:px-6 py-4 flex items-center justify-between gap-4">
                <p className="text-sm text-gray-600">
                  Program Structure - 7 & 8 February 2026
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 md:px-6 py-2 rounded font-semibold transition-colors text-sm md:text-base"
                  >
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                    Download
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 md:px-6 py-2 rounded font-semibold transition-colors text-sm md:text-base"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
