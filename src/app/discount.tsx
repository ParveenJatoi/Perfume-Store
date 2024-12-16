"use client"
// // components/DiscountedItems.tsx
// import Image from 'next/image';
// import { useState } from 'react';

// // Define the type for the discounted item
// interface DiscountedItem {
//   id: number;
//   name: string;
//   image: string;
//   previousPrice: number;
//   latestPrice: number;
//   discountPercent: number;
//   description: string;
// }

// const discountedItems: DiscountedItem[] = [
//   {
//     id: 1,
//     name: 'Perfume A',
//     image: '/perfumes/p1.jpeg',
//     previousPrice: 150,
//     latestPrice: 120,
//     discountPercent: 20,
//     description: 'A fresh floral fragrance with a blend of rose and jasmine.',
//   },
//   {
//     id: 2,
//     name: 'Perfume B',
//     image: '/perfumes/p2.jpeg',
//     previousPrice: 200,
//     latestPrice: 160,
//     discountPercent: 20,
//     description: 'A spicy and woody scent with notes of vanilla and sandalwood.',
//   },
//   {
//     id: 3,
//     name: 'Perfume C',
//     image: '/perfumes/p3.jpeg',
//     previousPrice: 180,
//     latestPrice: 150,
//     discountPercent: 16,
//     description: 'An oriental fragrance featuring musk, amber, and vanilla.',
//   },
//   {
//     id: 4,
//     name: 'Perfume D',
//     image: '/perfumes/p4.jpeg',
//     previousPrice: 220,
//     latestPrice: 180,
//     discountPercent: 18,
//     description: 'A citrusy scent with hints of bergamot and grapefruit.',
//   },
//   {
//     id: 5,
//     name: 'Perfume E',
//     image: '/perfumes/p5.jpeg',
//     previousPrice: 250,
//     latestPrice: 200,
//     discountPercent: 20,
//     description: 'A classic lavender fragrance with notes of vanilla and amber.',
//   },
//   {
//     id: 6,
//     name: 'Perfume F',
//     image: '/perfumes/p6.jpeg',
//     previousPrice: 300,
//     latestPrice: 250,
//     discountPercent: 17,
//     description: 'A fresh aquatic fragrance with marine and citrus notes.',
//   },
// ];

// const DiscountedItems = () => {
//   const [selectedItem, setSelectedItem] = useState<DiscountedItem | null>(null); // Ensure selectedItem can be null
//   const [cartItems, setCartItems] = useState<DiscountedItem[]>([]);

//   const addToCart = (item: DiscountedItem) => {
//     setCartItems([...cartItems, item]);
//     alert(`${item.name} has been added to the cart!`);
//   };

//   const viewDetails = (item: DiscountedItem) => {
//     setSelectedItem(item); // Show details for the selected item
//   };

//   return (
//     <div className="px-4 py-8">
//       {/* Heading */}
//       <h1 className="text-center text-3xl font-bold mb-8">Discounted Perfume Items</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {discountedItems.map((item) => (
//           <div
//             key={item.id}
//             className="relative bg-white shadow-lg border border-transparent hover:border-yellow-500 rounded-lg overflow-hidden transition duration-300 ease-in-out"
//           >
//             {/* Image */}
//             <div className="relative w-full h-64">
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
//               />
//               {/* Discount Percentage in red */}
//               <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
//                 {item.discountPercent}% OFF
//               </div>
//             </div>

//             {/* Item Info */}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//               <div className="flex items-center space-x-2">
//                 <span className="text-red-500 text-xl font-bold">${item.latestPrice}</span>
//                 <span className="line-through text-gray-500 text-md">${item.previousPrice}</span>
//               </div>

//               {/* Buttons: View Details and Add to Cart */}
//               <div className="flex space-x-4 mt-4">
//                 <button
//                   onClick={() => viewDetails(item)}
//                   className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//                 >
//                   View Details
//                 </button>
//                 <button
//                   onClick={() => addToCart(item)}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Selected Item Details */}
//       {selectedItem && (
//         <div className="mt-8 p-4 border border-gray-300 rounded-lg bg-gray-50">
//           <h2 className="text-2xl font-bold mb-4">Details of {selectedItem.name}</h2>
//           <p><strong>Description:</strong> {selectedItem.description}</p>
//           <p><strong>Latest Price:</strong> ${selectedItem.latestPrice}</p>
//           <p><strong>Previous Price:</strong> ${selectedItem.previousPrice}</p>
//           <p><strong>Discount:</strong> {selectedItem.discountPercent}% OFF</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DiscountedItems;
import Image from 'next/image';
import { useState } from 'react';

interface DiscountedItem {
  id: number;
  name: string;
  image: string;
  previousPrice: number;
  latestPrice: number;
  discountPercent: number;
  description: string;
}

const discountedItems: DiscountedItem[] = [
  {
    id: 1,
    name: 'Perfume A',
    image: '/perfumes/p1.jpeg',
    previousPrice: 150,
    latestPrice: 120,
    discountPercent: 20,
    description: 'A fresh floral fragrance with a blend of rose and jasmine.',
  },
  {
    id: 2,
    name: 'Perfume B',
    image: '/perfumes/p2.jpeg',
    previousPrice: 200,
    latestPrice: 160,
    discountPercent: 20,
    description: 'A spicy and woody scent with notes of vanilla and sandalwood.',
  },
  {
    id: 3,
    name: 'Perfume C',
    image: '/perfumes/p3.jpeg',
    previousPrice: 180,
    latestPrice: 150,
    discountPercent: 16,
    description: 'An oriental fragrance featuring musk, amber, and vanilla.',
  },
  {
    id: 4,
    name: 'Perfume D',
    image: '/perfumes/p4.jpeg',
    previousPrice: 220,
    latestPrice: 180,
    discountPercent: 18,
    description: 'A citrusy scent with hints of bergamot and grapefruit.',
  },
  {
    id: 5,
    name: 'Perfume E',
    image: '/perfumes/p5.jpeg',
    previousPrice: 250,
    latestPrice: 200,
    discountPercent: 20,
    description: 'A classic lavender fragrance with notes of vanilla and amber.',
  },
  {
    id: 6,
    name: 'Perfume F',
    image: '/perfumes/p6.jpeg',
    previousPrice: 300,
    latestPrice: 250,
    discountPercent: 17,
    description: 'A fresh aquatic fragrance with marine and citrus notes.',
  },
];

const DiscountedItems = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const viewDetails = (itemId: number) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  };

  return (
    <div className="px-4 py-8">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold mb-8">Discounted Perfume Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {discountedItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow-lg border border-transparent hover:border-yellow-500 rounded-lg overflow-hidden transition duration-300 ease-in-out"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
              />
              {/* Discount Percentage in red */}
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                {item.discountPercent}% OFF
              </div>
            </div>

            {/* Item Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 text-xl font-bold">${item.latestPrice}</span>
                <span className="line-through text-gray-500 text-md">${item.previousPrice}</span>
              </div>

              {/* Buttons: View Details and Add to Cart */}
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => viewDetails(item.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  {selectedItemId === item.id ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>

            {/* Show Details Above the Image */}
            {selectedItemId === item.id && (
              <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Details of {item.name}</h2>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Latest Price:</strong> ${item.latestPrice}</p>
                <p><strong>Previous Price:</strong> ${item.previousPrice}</p>
                <p><strong>Discount:</strong> {item.discountPercent}% OFF</p>

                <div className="flex mt-4 space-x-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => viewDetails(item.id)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountedItems;