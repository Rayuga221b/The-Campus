import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Hexagon, Search, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gifts', href: '/gifts' },
    { name: 'Categories', href: '/categories', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const categoryDropdown = [
    { name: 'Birthday', href: '/categories/birthday' },
    { name: 'Anniversary', href: '/categories/anniversary' },
    { name: 'Plants', href: '/categories/plants' },
    { name: 'Personalized', href: '/categories/personalized' },
    { name: 'Cakes', href: '/categories/cakes' },
    { name: 'Flowers', href: '/categories/flowers' },
    { name: 'Chocolates', href: '/categories/chocolates' },
    { name: 'Decor', href: '/categories/decor' },
    { name: 'Jewelry', href: '/categories/jewelry' },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#faf9f6] border-b border-gray-100 sticky top-0 z-50">
      {/* 1. Left Section: Logo */}
      <div className="flex items-center gap-2">
        <Hexagon size={28} className="fill-black stroke-none" />
        <span className="text-xl font-bold tracking-tight text-black">GiftHaven</span>
      </div>

      {/* 2. Middle Section: Navigation Links */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="relative group flex items-center gap-1 cursor-pointer"
          >
            {link.hasDropdown ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-sm font-medium text-gray-600 transition-colors group-hover:text-black flex items-center gap-1"
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                  {/* The Magic Line: */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {categoryDropdown.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors group-hover:text-black"
              >
                {link.name}
                {/* The Magic Line: */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* 3. Right Section: Icons & Actions */}
      <div className="flex items-center gap-6">

        {/* The New Icons Section */}
        {/* 3. Right Section: Icons & Actions */}
        <div className="flex items-center gap-6">

          {/* The Bubble Icons Section */}
          <div className="flex items-center gap-3">
            {/* Search Bubble */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all">
              <Search size={20} className="text-gray-700" strokeWidth={2} />
            </button>

            {/* User Bubble */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all">
              <User size={20} className="text-gray-700" strokeWidth={2} />
            </button>

            {/* Cart Bubble */}
            <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all">
              <ShoppingCart
                size={20}
                className="text-gray-700"
                strokeWidth={2}
              />

              {/* The '0' Badge - Positioned relative to the bubble now */}
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;