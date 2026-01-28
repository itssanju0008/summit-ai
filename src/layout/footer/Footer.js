'use client';
import { useLinkContext } from "@/context/LinkContext";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export function Footer() {
    const { setHash } = useLinkContext();
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-amber-600">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-amber-600">
                <img src={'/images/logos/India-AI-Impact-Summit-2026-Logo.png'} alt="India AI Impact Summit 2026" />
              </div>
              <h3 className="text-2xl font-serif font-bold leading-tight">
                Community Driven AI:<br/>
                A Roadmap for India's Last Mile
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Co-Creating AI with Communities: A participatory pre-summit dialogue grounded in lived realities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-amber-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={() => setHash("about")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  About Event
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  onClick={() => setHash("speakers")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  onClick={() => setHash("program")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#organizers"
                  onClick={() => setHash("organizers")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Organizers
                </a>
              </li>
              <li>
                <a
                  href="#people"
                  onClick={() => setHash("people")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  People
                </a>
              </li>
              <li>
                <a
                  href="#participate"
                  onClick={() => setHash("participate")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Participate
                </a>
              </li>
              {/* <li>
                <a
                  href="#thematic-focus"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Thematic Focus
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-amber-500">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">
                    community.responsive.ai@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">
                    +91 62 0568 5367
                  </p>
                  <p className="text-gray-300">
                    +91 92895 73193
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  IIT Delhi, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Community Driven AI Pre-Summit Event. All rights reserved.
            Organized by Yardi School of AI, IIT Delhi.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="mt-8">
          <div className="h-1 bg-amber-600 rounded-full opacity-30"></div>
        </div>
      </div>
    </footer>
  );
}