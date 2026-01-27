"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Globe, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/ui/Image/Image";

const speakersRow1 = [
  {
    id: 1,
    name: "Dr. Piyashi Dutta",
    title: "Lead, TRKC",
    image: "/images/Speakers/drpriyashidutta.png",
    website: "https://www.linkedin.com/in/piyashi-dutta-82200222/",
    email: "piyashi.dutta@gmail.com",
  },
  {
    id: 2,
    name: "Dr. Sunayana Sitaram",
    title: "Microsoft Research",
    image: "/images/Speakers/Sunayana_Sitaram.png",
    website: "https://www.microsoft.com/en-us/research/people/susitara/",
    email: "sunayana.sitaram@microsoft.com",
  },
  {
    id: 21,
    name: "Sandeep Kumar",
    title: "Professor, IIT Delhi",
    image: "/images/Organizers/Sandeep_kumar.jpg",
    website: "https://ctech.iitd.ac.in/sandeep.html",
    email: "Ksandeep@iitd.ac.in",
  },
  {
    id: 22,
    name: "Ganesh Ramakrishnan",
    title: "Professor, IIT Bombay",
    image: "/images/Speakers/ganeshramakrishnan.jpg",
    website: "https://www.cse.iitb.ac.in/~ganesh/",
    email: "ganeshramakrishnan@iitb.ac.in",
  },
  {
    id: 3,
    name: "Parag Singla",
    title: "Professor, IIT Delhi",
    image: "/images/Organizers/parag_singla.jpg",
    website: "https://www.cse.iitd.ac.in/~parags/",
    email: "parags@cse.iitd.ac.in",
  },
  // { id: 4, name: "Rangan Banerjee", title: "Director, IIT Delhi", image: '/images/Speakers/ranganbanerjee.jpg', website: "https://www.ese.iitb.ac.in/~rb/", email: "rangan@iitb.ac.in" },
  {
    id: 5,
    name: "Sahiinii Lemaina Veikho",
    title: "Assistant Professor, IIT Delhi",
    image: "/images/Speakers/Sahiinii-Lemaina-Veikho.webp",
    website: "https://www.researchgate.net/profile/Sahiinii-Lemaina-Veikho",
    email: "sahiinii@iitd.ac.in",
  },
  {
    id: 6,
    name: "Radhika Mamidi",
    title: "Associate Professor, University of Hyderabad",
    image: "/images/Speakers/Radhikamamidi.jpg",
    website: "https://www.iiit.ac.in/faculty/radhika-mamidi/",
    email: "radhika.mamidi@iiit.ac.in",
  },
  {
    id: 7,
    name: "Rohan Paul",
    title: "Associate Professor, IIT Delhi",
    image: "/images/Speakers/rohanpaul.jpg",
    website: "https://www.cse.iitd.ac.in/~rohanpaul/",
    email: "rohan@cse.iitd.ac.in",
  },
  {
    id: 8,
    name: "Debananda Mishra",
    title: "EdD, University College london",
    image: "/images/Speakers/debanandamishra.jpg",
    website: "https://spp.iitd.ac.in/faculty-profile/10",
    email: "deb@iitd.ac.in",
  },
  // { id: 9, name: "Smt. Ranjana Chopra", title: "Secretary, Ministry of Tribal Affairs", image: '/images/Speakers/ranjana_chopra_ias.png', website: "https://trifed.tribal.gov.in/node/1533", email: "secy-tribal@nic.in" },
  {
    id: 10,
    name: "Mr. Vibhu Nayar",
    title: "Former Secretary, Ministry Of Tribal Affairs",
    image: "/images/Speakers/vibhunayar.jpeg",
    website: "https://example.com/anjali-sharma",
    email: "secy-tribal@nic.in",
  },
];

const speakersRow2 = [
  {
    id: 11,
    name: "PVM Rao",
    title: "Professor, IIT Delhi",
    image: "/images/Speakers/pvmrao.jpeg",
    website: "https://web.iitd.ac.in/~pvmrao/",
    email: "pvmrao@design.iitd.ac.in",
  },
  {
    id: 12,
    name: "Monojit Chaudhary",
    title: "Professor, MBZUAI",
    image: "/images/Speakers/monojitchaudhary.jpeg",
    website: "https://mbzuai.ac.ae/study/faculty/monojit-choudhury/",
    email: "monojit.choudhury@mbzuai.ac.ae",
  },
  // { id: 13, name: "Srikanta Bedathur", title: "DS Chair of Artificial Intelligence, IIT Delhi", image: '/images/Speakers/srikanta.jpeg', website: "https://www.cse.iitd.ac.in/~srikanta/", email: "srikanta@cse.iitd.ac.in" },
  {
    id: 13,
    name: "James Arambam",
    title:
      "Assistant Professor at Yardi School of Artificial Intelligence, IIT Delhi",
    image: "/images/Speakers/james-jpg.jpg",
    website: "https://jamesarambam.me",
    email: "jamesa@scai.iitd.ac.in",
  },
  {
    id: 14,
    name: "Santanu Chaudhary",
    title: "Dean, UGS, IIT Delhi",
    image: "/images/Speakers/santanuchaudhary.jpeg",
    website: "https://web.iitd.ac.in/~santanuc/",
    email: "schaudhury@iitd.ac.in",
  },
  {
    id: 15,
    name: "Chetan Arora",
    title: "Professor, IIT Delhi",
    image: "/images/Speakers/chetanarora.jpeg",
    website: "https://www.cse.iitd.ac.in/~chetan/",
    email: "chetan@cse.iitd.ac.in",
  },
  {
    id: 16,
    name: "Arnab Bhattacharya",
    title: "Professor, IIT Kanpur",
    image: "/images/Speakers/arnabbhattacharya.jpeg",
    website: "arnabb@iitk.ac.in",
    email: "arnabb@cse.iitk.ac.in",
  },
  {
    id: 17,
    name: "Harsh chauhan",
    title: "Former Chairperson, NSCT",
    image: "/images/Speakers/harsh chauhan.jpg",
    website:
      "https://frontline.thehindu.com/social-issues/harsh-chouhan-interview-ncst-national-commission-scheduled-tribes-tribal-rights-adivasis-madhya-pradesh/article68492623.ece",
    email: "null",
  },
  {
    id: 23,
    name: "Raunak Bhattacharya",
    title: "Professor, IITD",
    image: "/images/Organizers/raunakbhattacharya.jpeg",
    website: "https://web.iitd.ac.in/~raunakbh/",
    email: "raunakbh@iitd.ac.in",
  },
  {
    id: 24,
    name: "Vivek Kumar",
    title: "Professor, IIT Delhi",
    image: "/images/Organizers/Vivek_kumar.jpg",
    website: "https://crdt.iitd.ac.in/faculty/vivek-kumar",
    email: "vivekk@rdat.iitd.ac.in",
  },
  {
    id: 18,
    name: "Milind Thatte",
    title: "Head, Teer Foundation",
    image: "/images/Speakers/milindthatte.jpg",
    website: "https://in.linkedin.com/in/milindthatte",
    email: "milindvayam@gmail.com",
  },
  {
    id: 19,
    name: "Jitin Singla",
    title: "Assistant Professor, IIT Roorkee",
    image: "/images/Speakers/jitinsingla.webp",
    website: "https://www.iitr.ac.in/~BT/Jitin_Singla",
    email: "jsingla@bt.iitr.ac.in",
  },
];

function SpeakerCarousel({ speakers }) {
  const containerRef = useRef(null);
  const emblaApi = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const emblaCarousel = EmblaCarousel(
      containerRef.current,
      {
        align: "start",
        loop: true,
        skipSnaps: false,
        breakpoints: {
          "(max-width: 640px)": { slidesToScroll: 1, active: true },
          "(max-width: 1024px)": { slidesToScroll: 2, active: true },
          "(min-width: 1024px)": { slidesToScroll: 4, active: true },
        },
      },
      [Autoplay({ delay: 5000, stopOnInteraction: true })],
    );

    emblaApi.current = emblaCarousel;

    const onSelect = () => {
      setSelectedIndex(emblaCarousel.selectedScrollSnap());
    };

    const onInit = () => {
      setScrollSnaps(emblaCarousel.scrollSnapList());
    };

    emblaCarousel.on("select", onSelect);
    emblaCarousel.on("init", onInit);
    onInit();
    onSelect();

    return () => {
      emblaCarousel.destroy();
    };
  }, []);

  const scrollPrev = useCallback(() => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollPrev();
  }, []);

  const scrollNext = useCallback(() => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollNext();
  }, []);

  const scrollTo = useCallback((index) => {
    if (!emblaApi.current) return;
    emblaApi.current.scrollToScrollSnap(index);
  }, []);

  return (
    <div className="relative mb-8 md:mb-12 px-3 sm:px-6 md:px-10 lg:px-16">
      <button
        onClick={scrollPrev}
        className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-amber-600 rounded-full shadow-md flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all text-amber-600 active:scale-95 md:-translate-x-4 lg:-translate-x-8"
        aria-label="Previous speakers"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-amber-600 rounded-full shadow-md flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all text-amber-600 active:scale-95 md:translate-x-4 lg:translate-x-8"
        aria-label="Next speakers"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <div className="embla overflow-hidden px-2 sm:px-4" ref={containerRef}>
        <div className="embla__container flex">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-2 sm:px-3"
            >
              <div className="group bg-white rounded border-2 border-gray-200 hover:border-amber-600 transition-all duration-300 h-full flex flex-col overflow-hidden">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={speaker.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-amber-600 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                    <a
                      href={`mailto:${speaker.email}`}
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-amber-600 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-6 flex-grow">
                  <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-gray-900 mb-1 md:mb-2 leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-amber-700 text-xs sm:text-sm">
                    {speaker.title}
                  </p>
                </div>
                <div className="h-1 bg-amber-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
              Speaker and Panelists
            </span>
          </div>
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 px-2">
            Meet Our Speakers and Panelists
          </h2> */}

          <div className="flex items-center justify-center gap-3 md:gap-4 py-3 md:py-4">
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
          </div>

          <p className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Learn from thought leaders, innovators, and change-makers shaping
            the future of tribal communities.
          </p>
        </div>

        <SpeakerCarousel speakers={speakersRow1} />
        <SpeakerCarousel speakers={speakersRow2} />
      </div>
    </section>
  );
}
