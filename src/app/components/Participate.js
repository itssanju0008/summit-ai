import { Users } from "lucide-react";

export function Participate() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-4 py-2 rounded text-sm font-semibold tracking-wide uppercase">
              Join Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Participate
          </h1>
          
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-px w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-16 bg-amber-600"></div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-slate-50 rounded p-8 md:p-12 mb-12 border-l-4 border-amber-600">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                How to Participate
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is an{" "}
                <span className="font-semibold text-amber-700">
                  invite-only event
                </span>
                . Fill out the form below and get a chance to
                participate in this transformative gathering
                focused on community-driven AI and last-mile
                innovation.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-amber-600 p-6 rounded">
            <h3 className="font-serif font-semibold text-gray-900 mb-3">
              Important Note:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span>
                  Limited seats available - applications will be
                  reviewed on a rolling basis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span>
                  Selected participants will be notified via
                  email within 5 business days
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span>
                  Please provide accurate information to help us
                  understand your background and interest
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Form Embed Section */}
        <div className="bg-white rounded p-8 md:p-12 border-2 border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
            Application Form
          </h2>

          <div className="w-full min-h-[1200px] bg-gray-50 rounded border-2 border-gray-300">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfRQAsRIs9DD5NxbR-fHvoATnCWCdOFdiUWXPLGZbxt_MhMbA/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-700">
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