"use client"
// pages/categories.tsx
import Link from 'next/link';
import Image from 'next/image';

const Categories: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Men Category */}
        <Link href="#men" className="relative block overflow-hidden group">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://media.istockphoto.com/id/1772604575/photo/fragrance-spray-man-and-perfume-applying-cologne-scent-water-skin-care-beauty-product-and.jpg?s=612x612&w=0&k=20&c=z7HfVjY-FsIB2MFXI1TAWsXDHmzv9SUggDgrkoKelbY=" // Replace with the path to your men category image
              alt="Men's Perfumes"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Men</h3>
            </div>
          </div>
        </Link>
        
        {/* Women Category */}
        <Link href="#women" className="relative block overflow-hidden group">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://media.istockphoto.com/id/465659762/photo/beautiful-sensual-woman-applying-perfume.jpg?s=612x612&w=0&k=20&c=jAIXzphwxInC5tV8lfiZdGeoUpJ62wDO7NetZaK3hWs=" // Replace with the path to your women category image
              alt="Women's Perfumes"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Women</h3>
            </div>
          </div>
        </Link>
      </div>

      {/* Men Section */}
      <div id="men" className="py-12">
        <h2 className="text-2xl font-bold text-center mb-4">Men Perfumes</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example product cards for Men's Perfumes */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image src="/perfumes/p1.jpeg" alt="Men's Perfume" width={300} height={400} className="rounded-lg mb-2" />
            <h3 className="font-semibold">Men Perfume 1</h3>
            <p>$49.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image src="/perfumes/p2.jpeg" alt="Men's Perfume" width={300} height={400} className="rounded-lg mb-2" />
            <h3 className="font-semibold">Men Perfume 2</h3>
            <p>$59.99</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </div>

      {/* Women Section */}
      <div id="women" className="py-12">
        <h2 className="text-2xl font-bold text-center mb-4">Women Perfumes</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example product cards for Women's Perfumes */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image src="/perfumes/p3.jpeg" alt="Women's Perfume" width={300} height={400} className="rounded-lg mb-2" />
            <h3 className="font-semibold">Women Perfume 1</h3>
            <p>$39.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image src="/perfumes/p4.jpeg" alt="Women's Perfume" width={300} height={400} className="rounded-lg mb-2" />
            <h3 className="font-semibold">Women Perfume 2</h3>
            <p>$54.99</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </div>
    </div>
  );
};

export default Categories;