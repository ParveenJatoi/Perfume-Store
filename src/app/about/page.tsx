import Image from 'next/image';


import Link from 'next/link';


export default function About() {
  return (
    <>
      

          
      {/* About Us Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to our exclusive online perfume shop, where luxury meets sophistication. Explore the finest fragrances from around the world, each crafted to leave a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left section with text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
              <p className="text-gray-600">
                Established with a passion for fragrances, our online perfume shop offers a wide selection of premium perfumes from the worlds most renowned brands. We carefully curate each scent to bring you only the best in quality and sophistication.
              </p>
              <p className="text-gray-600">
                Whether you are looking for a timeless classic or a modern fragrance, we are committed to providing you with the perfect scent to suit every occasion.
              </p>
              <Link href="/categories" className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
                Explore Categories
              </Link>
            </div>

            {/* Right section with image */}
            <div className="relative w-full h-96">
              <Image
                src="/perfumes/perfumes.jpeg" // Make sure this image is in the public/images folder
                alt="Perfume Bottles"
                // layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                width={800}
                height={600}
              />
            </div>
          </div>

          {/* Section for mission and values */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              To provide an exceptional fragrance shopping experience with a wide selection of luxurious, high-quality perfumes. Our mission is to help you discover the perfect scent that complements your unique style and personality.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <p className="text-lg text-gray-600">
              We take pride in offering premium, authentic perfumes, ensuring that our customers receive only the best. Our exceptional customer service and commitment to quality make us the go-to destination for fragrance enthusiasts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}