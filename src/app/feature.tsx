
// "use client"

// import React, { useState } from 'react';
// import Image from 'next/image';

// const FeaturedCollection: React.FC = () => {
//   const [selectedPerfume, setSelectedPerfume] = useState<any>(null); // Update state type to hold an object

//   const perfumes = [
//     { id: 1, name: 'Perfume 5', image: '/perfumes/p10.jpeg', description: 'This is a beautiful fragrance with floral notes.' },
//     { id: 2, name: 'Perfume 2', image: '/perfumes/p2.jpeg', description: 'A refreshing perfume with a touch of citrus.' },
//     { id: 3, name: 'Perfume 6', image: '/perfumes/p6.jpeg', description: 'A bold and musky perfume for special occasions.' },
//     { id: 4, name: 'Perfume 4', image: '/perfumes/p4.jpeg', description: 'A light and fresh scent, perfect for daily wear.' },
//   ];

//   // Function to handle the opening of the modal
//   const openModal = (perfume: any) => {
//     setSelectedPerfume(perfume);
//   };

//   // Function to handle closing the modal
//   const closeModal = () => {
//     setSelectedPerfume(null);
//   };

//   return (
//     <div>
//       {/* Featured Collection Section */}
//       <section className="py-12 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-8">Featured Perfume Collection</h2>

//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {perfumes.map((perfume) => (
//             <div key={perfume.id} className="relative group overflow-hidden">
//               <Image
//                 src={perfume.image}
//                 alt={perfume.name}
//                 width={300}
//                 height={300}  
//                 className="rounded-full object-cover transition-transform duration-500 transform group-hover:rotate-6 group-hover:scale-110"  // Added rotation on hover
//               />
//               <div
//                 onClick={() => openModal(perfume)}
//                 className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold cursor-pointer"
//               >
//                 Quick View
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal Section */}
//       {selectedPerfume && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
//             <Image
//               src={selectedPerfume.image}
//               alt={selectedPerfume.name}
//               width={300}
//               height={300}
//               className="mx-auto rounded-full object-cover mb-4"  // Keep the image round in the modal as well
//             />
//             <h3 className="text-2xl font-bold mb-4 text-center">{selectedPerfume.name}</h3>
//             <p className="text-gray-700 mb-4 text-center">
//               {selectedPerfume.description}
//             </p>
//             <button
//               onClick={closeModal}
//               className="block mx-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeaturedCollection;

"use client"
"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define a type for the perfume object
type Perfume = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const FeaturedCollection: React.FC = () => {
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  const perfumes: Perfume[] = [
    {
      id: 1,
      name: "Perfume 5",
      image: "/perfumes/p10.jpeg",
      description: "This is a beautiful fragrance with floral notes.",
    },
    {
      id: 2,
      name: "Perfume 2",
      image: "/perfumes/p2.jpeg",
      description: "A refreshing perfume with a touch of citrus.",
    },
    {
      id: 3,
      name: "Perfume 6",
      image: "/perfumes/p6.jpeg",
      description: "A bold and musky perfume for special occasions.",
    },
    {
      id: 4,
      name: "Perfume 4",
      image: "/perfumes/p4.jpeg",
      description: "A light and fresh scent, perfect for daily wear.",
    },
  ];

  // Function to handle the opening of the modal
  const openModal = (perfume: Perfume) => {
    setSelectedPerfume(perfume);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedPerfume(null);
  };

  return (
    <div>
      {/* Featured Collection Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Perfume Collection
        </h2>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className="relative group overflow-hidden">
              <Image
                src={perfume.image}
                alt={perfume.name}
                width={300}
                height={300}
                className="rounded-full object-cover transition-transform duration-500 transform group-hover:rotate-6 group-hover:scale-110"
              />
              <div
                onClick={() => openModal(perfume)}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold cursor-pointer"
              >
                Quick View
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Section */}
      {selectedPerfume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <Image
              src={selectedPerfume.image}
              alt={selectedPerfume.name}
              width={300}
              height={300}
              className="mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">
              {selectedPerfume.name}
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              {selectedPerfume.description}
            </p>
            <button
              onClick={closeModal}
              className="block mx-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedCollection;
