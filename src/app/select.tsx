"use client"
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-slate-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-pink-400">
              <i><h1 className='font-serif'>Persona</h1></i>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className='text-gray-600 hover:text-pink-600 font-semibold'>Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-pink-600 font-semibold">Products</Link>
            <Link href="/categories" className="text-gray-600 hover:text-pink-600 font-semibold">Categories</Link>
            <Link href="/about" className="text-gray-600 hover:text-pink-600 font-semibold">About us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-pink-600 font-semibold">Contact</Link>
          </nav>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center space-x-2 border rounded-full px-3 py-1 bg-gray-100"
          >
            <input
              type="text"
              className="bg-transparent outline-none px-2 w-full"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="focus:outline-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
            </button>
          </form>

          {/* Mobile Search Icon */}
          <div className="md:hidden flex items-center">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
          </div>

          {/* Cart Icon */}
          <div className="ml-4 relative">
            <Link href="/cart" className="flex items-center">
              <ShoppingCartIcon className="w-6 h-6 text-gray-800" />
              <span className="ml-2 text-gray-800 font-bold">(0)</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50">
          <nav className="flex flex-col space-y-4 px-4 py-6"> {/* Added padding */}
            <Link href="/" className="text-gray-600 hover:text-pink-600 font-semibold">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-pink-600 font-semibold">Products</Link>
            <Link href="/categories" className="text-gray-600 hover:text-pink-600 font-semibold">Categories</Link>
            <Link href="/about" className="text-gray-600 hover:text-pink-600 font-semibold">About us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-pink-600 font-semibold">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}