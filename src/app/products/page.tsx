"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Define the type for a perfume
interface Perfume {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const Products: React.FC = () => {
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  // Sample product data with multiple images and prices
  const perfumes: Perfume[] = [
    { id: 1, name: 'Floral Elegance', image: '/perfumes/p4.jpeg', description: 'A beautiful floral fragrance that brings joy.', price: '$49.99' },
    { id: 2, name: 'Citrus Fresh', image: '/perfumes/p2.jpeg', description: 'An invigorating scent with zesty citrus notes.', price: '$39.99' },
    { id: 3, name: 'Musk Infusion', image: '/perfumes/p6.jpeg', description: 'A deep musky fragrance perfect for evenings.', price: '$59.99' },
    { id: 4, name: 'Light Breeze', image: '/perfumes/p7.jpeg', description: 'A fresh scent that captures the essence of spring.', price: '$44.99' },
    { id: 5, name: 'Ocean Mist', image: '/perfumes/p2.jpeg', description: 'A refreshing aquatic fragrance ideal for summer.', price: '$34.99' },
    { id: 6, name: 'Spicy Oud', image: '/perfumes/p6.jpeg', description: 'A rich and exotic scent with warm spicy notes.', price: '$69.99' },
    { id: 7, name: 'Vanilla Dream', image: '/perfumes/p2.jpeg', description: 'A sweet and comforting vanilla fragrance.', price: '$29.99' },
    { id: 8, name: 'Woodland Whisper', image: '/perfumes/p8.jpeg', description: 'A woody fragrance that evokes a walk in the forest.', price: '$54.99' },
    { id: 9, name: 'Floral Elegance', image: '/perfumes/p6.jpeg', description: 'A beautiful floral fragrance that brings joy.', price: '$49.99' },
    { id: 10, name: 'Citrus Fresh', image: '/perfumes/p8.jpeg', description: 'An invigorating scent with zesty citrus notes.', price: '$39.99' },
    { id: 11, name: 'Musk Infusion', image: '/perfumes/p7.jpeg', description: 'A deep musky fragrance perfect for evenings.', price: '$59.99' },
    { id: 12, name: 'Light Breeze', image: '/perfumes/p4.jpeg', description: 'A fresh scent that captures the essence of spring.', price: '$44.99' },
  ];

  const openModal = (perfume: Perfume) => {
    setSelectedPerfume(perfume);
  };

  const closeModal = () => {
    setSelectedPerfume(null);
  };

  return (
    <div>
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className="relative group overflow-hidden">
              <Image
                src={perfume.image}
                alt={perfume.name}
                width={300}
                height={400}
                className="rounded-lg object-cover transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{perfume.name}</h3>
                <p className="text-white mb-2">{perfume.price}</p>
                <button
                  onClick={() => openModal(perfume)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600"
                >
                  Quick View
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Add to Cart
                </button>
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
              height={400}
              className="mx-auto rounded-lg object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">{selectedPerfume.name}</h3>
            <p className="text-gray-700 mb-4 text-center">
              {selectedPerfume.description}
            </p>
            <p className="text-gray-900 text-lg font-bold text-center mb-4">{selectedPerfume.price}</p>
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

export default Products;