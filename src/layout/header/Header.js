"use client";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export function Header({ currentPage, setCurrentPage }) {
  const closeTimeoutRef = useRef(null);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page, hash) => {
    setCurrentPage(page);
    if (hash && page === "home") {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (page === "home" && !hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logos Section */}
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Logo 1 */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <img
                  src={"/images/logos/iitdlogo.jpeg"}
                  alt="IITD"
                  className="max-h-full object-contain"
                />
              </div>
              {/* Logo 2 */}
              <div className="w-24 sm:w-32 h-auto flex items-center justify-center overflow-hidden">
                <img
                  src={"/images/logos/motalogo.svg"}
                  alt="MOTA"
                  className="w-full h-full object-contain "
                />
              </div>
              {/* India AI Logo - Made Bigger */}
              <Link href={"/"} className="w-24 h-12 sm:w-28 sm:h-16 flex items-center justify-center overflow-hidden">
                <img
                  src={"/images/logos/India-AI-Impact-Summit-2026-Logo.png"}
                  alt="India AI"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setIsHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = window.setTimeout(() => {
                  setIsHomeDropdownOpen(false);
                }, 500);
              }}
            >
              <Link
                href={"/"}
                className="flex items-center gap-1 text-black hover:text-orange-600 font-bold transition-colors"
              >
                Home
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isHomeDropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {isHomeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                  <Link
                    href={"#about"}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href={"#organizers"}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    Organizers
                  </Link>
                  <Link
                    href={"#speakers"}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    Speakers
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={"#program"}
              className="text-black hover:text-orange-600 font-bold transition-colors"
            >
              Program Structure
            </Link>
            <Link
              href={"/people"}
              className="text-black hover:text-orange-600 font-bold transition-colors"
            >
              People
            </Link>
            <Link
              href={"/participate"}
              className="text-black hover:text-orange-600 font-bold transition-colors"
            >
              Participate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-orange-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur">
            <div className="flex flex-col gap-2">
              <Link
                href={"/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
              >
                Home
              </Link>
              <Link
                href={"/#about"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
              >
                About
              </Link>
              <Link
                href={"/#organizers"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
              >
                Organizers
              </Link>
              <Link
                href={"/#speakers"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
              >
                Speakers
              </Link>
              <Link
                href={"/#program"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
              >
                Program Structure
              </Link>
              <Link
                href={"/people"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
              >
                People
              </Link>
              <Link
                href={"/participate"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
              >
                Participate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
