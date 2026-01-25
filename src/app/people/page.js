import { Image } from '@/ui/Image/Image';
import { User } from 'lucide-react';
import React from 'react'

export default function page() {
  const organizingCommittee = [
    {
      name: 'Sandeep Kumar',
      organization: 'IIT Delhi',
      image: '/images/Organizers/Sandeep_kumar.jpg',
      link: 'https://ctech.iitd.ac.in/sandeep.html'
    },
    {
      name: 'Parag Singla',
      organization: 'IIT Delhi',
      image: '/images/Organizers/parag_singla.jpg',
      link: 'https://www.cse.iitd.ac.in/~parags/'
    },
    {
      name: 'Raunak Bhattacharya',
      organization: 'IIT Delhi',
      image: '/images/Organizers/raunakbhattacharya.jpeg',
      link: 'https://web.iitd.ac.in/~raunakbh/'
    },
    {
      name: 'Vivek Kumar',
      organization: 'IIT Delhi',
      image: '/images/Organizers/Vivek_kumar.jpg',
      link: 'https://crdt.iitd.ac.in/faculty/vivek-kumar'
    },
    {
      name: 'HARIPRASAD KODAMANA',
      organization: 'IIT Delhi',
      image: '/images/Organizers/Hari sir.jpg',
      link: 'https://web.iitd.ac.in/~kodamana/HariprasadKodamana.html'
    },
  ];

  const organizingMembers = [
    {
      name: 'Md Fazal',
      image: '/images/Voulenteers/md_fazal.jpeg',
    },
    {
      name: 'Vaibhav Sharma',
      image: '/images/Voulenteers/Vaibhav_sharma.png',
    },
    {
      name: 'Shashwat Bhardwaj',
      image: '/images/Voulenteers/shashwatbhardwaj.jpeg',
    },
    {
      name: 'Pooja Singh',
      image: '/images/Voulenteers/poojasingh.jpeg',
    },
    {
      name: 'Kshliti Kumar Verma',
      image: '/images/Voulenteers/kshitij_verma.jpeg',
    },
    {
      name: 'Amit Kumar',
      image: '/images/Voulenteers/amitkumar.jpeg',
    },
    {
      name: 'Vishwesh Valluru',
      image: '/images/Voulenteers/vishveshvalluru.jpeg',
    },
    {
      name: 'Avinash Soy',
      image: '/images/Voulenteers/avinashsoy.jpeg',
    },
    {
      name: 'Jyotismita Barman',
      image: '/images/Voulenteers/jyotismitabarman.jpeg',
    },
    {
      name: 'Aditya Jain',
      image: '/images/Voulenteers/adityajain.jpeg',
    },
    {
      name: 'Vipul Kumar Singh',
      image: '/images/Voulenteers/vipulkumarsharma.jpeg',
    },
    {
      name: 'Bisma Zahoor',
      image: '/images/Voulenteers/bismazahoor.jpeg',
    },
    {
      name: 'Ankit Kumar',
      image: '/images/Voulenteers/AnkitKumar.jpeg',
    },
    {
      name: 'Anuj Kumar Sirohi',
      image: '/images/Voulenteers/anujkumar.jpeg',
    },
    {
      name: 'Debarchan Basu',
      image: '/images/Voulenteers/debarchand.jpeg',
    },
    {
      name: 'Gourab Panda',
      image: '/images/Voulenteers/gouravpanda.jpeg',
    },
    {
      name: 'Mohammad Yusuf',
      image: '/images/Voulenteers/mdyusuf.jpeg',
    },
    {
      name: 'Abhishek Gupta',
      image: '/images/Voulenteers/abhishekgupta.png',
    },
    {
      name: 'Shubhanu Halder',
      image: '/images/Voulenteers/shubhanu.jpeg',
    },
    {
      name: 'Vaibhav Sagar',
      image: '/images/Voulenteers/vaibhavsagar.jpeg',
    },
    {
      name: 'Vaibhav Kagathara',
      image: '/images/Voulenteers/Vaibhavpatel.png',
    },
    {
      name: 'Anushka Banerjee',
      image: '/images/Voulenteers/anushkabanerjee.jpeg',
    },
    {
      name: 'Chinmay Rajpurohit',
      image: '/images/Voulenteers/chinmayrajput.jpeg',
    },
    {
      name: 'Shyam kedia',
      image: '/images/Voulenteers/Shyamkedia.jpeg',
    },
    {
      name: 'Atulya Jaiswal',
      image: '/images/Voulenteers/atulyajaiswal.jpeg',
    },
    {
      name: 'Suraj Natekar',
      image: '/images/Voulenteers/surajnatekar.jpeg',
    },
    {
      name: 'Mohit Kataria',
      image: '/images/Voulenteers/mohitkataria.jpeg',
    },
    {
      name: 'Hitika Gahlot',
      image: '/images/Voulenteers/hitikagahlot.jpeg',
    },
    {
      name: 'Samarth Agrawal',
      image: '/images/Voulenteers/samarthagarwal.jpeg',
    },
    {
      name: 'Ashad Alam',
      image: '/images/Voulenteers/arshadalam.jpeg',
    },
    {
      name: 'Ahmad Siraj Hashmi',
      image: '/images/Voulenteers/ahmadsirajhashmi.jpeg',
    },
    {
      name: 'Aditya Shahane',
      image: '/images/Voulenteers/adityashahane.jpeg',
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-14 sm:pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="border-2 border-amber-600 text-amber-600 px-4 py-2 rounded text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Our Team
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-3 md:mb-6">
            People
          </h1>
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 py-3 md:py-4">
            <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
            <div className="h-px w-12 sm:w-16 bg-amber-600"></div>
          </div>
        </div>

        {/* Organizing Committee Section */}
        <div className="mb-12 md:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-8 md:mb-12">
            Organizing Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 md:gap-10 justify-items-center">
            {organizingCommittee.map((person, index) => (
              <a
                key={index}
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="text-center flex flex-col items-center">
                  <div className="mb-3 sm:mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-amber-600 group-hover:border-amber-700 transition-colors">
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-serif font-bold text-gray-900 text-sm sm:text-lg text-center mb-1 leading-tight">
                    {person.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 text-center">
                    {person.organization}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Organizing Members Section */}
        <div className="mb-12 md:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-8 md:mb-12">
            Volunteer Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-7 md:gap-10">
            {organizingMembers.map((person, index) => (
              <div key={index} className="text-center">
                <div className="mb-3 sm:mb-4 mx-auto w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-gray-300 bg-gray-100 flex items-center justify-center">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-400" />
                  )}
                </div>
                <h3 className="font-serif font-semibold text-gray-900 text-xs sm:text-sm md:text-base leading-snug">
                  {person.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}