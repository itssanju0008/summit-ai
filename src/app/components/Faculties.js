import { Image } from "@/ui/Image/Image";

const faculties = [
  {
    id: 1,
    name: "Prof. Sandeep Kumar",
    title: "IIT Delhi",
    image: "/images/faculties/sandeep.jpeg",
    link: "https://ctech.iitd.ac.in/sandeep.html",
  },
    {
    id: 3,
    name: "Prof. Raunak Bhattacharya",
    title: "IIT Delhi",
    image: "/images/faculties/raunakbhattacharya.jpeg",
    link: "https://web.iitd.ac.in/~raunakbh/",
  },
    {
    id: 5,
    name: "Prof. Hariprasad Kodamana",
    title: "IIT Delhi",
    image: "/images/faculties/Hari sir.jpg",
    link: "https://web.iitd.ac.in/~kodamana/HariprasadKodamana.html",
  },
  {
    id: 2,
    name: "Prof. Parag Singla",
    title: "IIT Delhi",
    image: "/images/faculties/parag_singla.jpg",
    link: "https://www.cse.iitd.ac.in/~parags/",
  },

  {
    id: 4,
    name: "Prof. Vivek Kumar",
    title: "IIT Delhi",
    image: "/images/faculties/Vivek_kumar.jpg",
    link: "https://crdt.iitd.ac.in/faculty/vivek-kumar",
  },

];

export function Faculties() {
  return (
    <section id="faculties" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-base md:text-lg font-semibold tracking-wide uppercase">
              Organizing Committee
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4 py-3 md:py-4">
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 md:w-16 bg-amber-600"></div>
          </div>

          <p className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Organizing members  </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {faculties.map((faculty, index) => {
            const needsCentering = faculties.length % 3 === 2;
            const isCenteredRow = needsCentering && index >= faculties.length - 2;
            const isLastSingle = faculties.length % 2 === 1 && index === faculties.length - 1;
            const positionClass = isCenteredRow
              ? index === faculties.length - 2
                ? " lg:col-start-2"
                : " lg:col-start-4"
              : "";
            const baseSpanClass = isLastSingle
              ? " col-span-2 sm:col-span-1 justify-self-center w-full max-w-[calc(50%-0.75rem)] sm:max-w-none"
              : " col-span-1 w-full";
            const cardWrapperClass = `${baseSpanClass} lg:col-span-2${positionClass}`;
            const card = (
              <div className="group bg-white rounded border-2 border-gray-200 hover:border-amber-600 transition-all duration-300 h-full flex flex-col">
                <div className="flex-1 p-5 sm:p-6 flex flex-col items-center text-center">
                  <div className="mb-4 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-amber-600 group-hover:border-amber-700 transition-colors">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900">
                    {faculty.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-700 mt-1">
                    {faculty.title}
                  </p>
                </div>
                <div className="h-1 bg-amber-600"></div>
              </div>
            );

            return faculty.link ? (
              <a
                key={faculty.id}
                href={faculty.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${cardWrapperClass}`}
              >
                {card}
              </a>
            ) : (
              <div key={faculty.id} className={cardWrapperClass}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
