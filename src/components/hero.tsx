import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          // src="https://media.istockphoto.com/id/93490921/photo/woman-tilting-her-head-to-the-side-while-applying-perfume.jpg?s=612x612&w=0&k=20&c=zM4PryRFb3KWvqmginUe_hBNEf4tmqYUg9D-lfZFqpM=" // Make sure to add your image in the public/images folder
          src="https://media.istockphoto.com/id/1309587668/photo/various-herbal-oils-with-beautiful-flowers.jpg?s=612x612&w=0&k=20&c=n9SIugCYgaibaiND22i2AJmkk6Ni6nWGfrKUAOQW4b4="
          alt="Perfume"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-100"
          quality={100}
          
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-5 px-6 text-center text-gray-800">
        <h1 className="text-5xl font-extrabold text-gray-900">
          A Perfume makes a Persona
        </h1>
        <p className="max-w-md text-lg text-gray-700">
          Explore our exclusive range of luxury perfumes. Find the fragrance that defines you.
        </p>
        <Link href="/products">
        <button  className="px-8 py-3 mt-4 text-white bg-slate-600 rounded-full hover:bg-yellow-600 transition">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;