'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Our Collection', path: '/collection' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-brand-off-white/90 backdrop-blur-md shadow-md z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            {/* <h1 className="text-3xl font-bold text-brand-maroon font-serif">Sundari Silk Palace</h1> */}
          <Image src="/sundari.png" alt="Sundari Silk Palace" width={180} height={100} className="transition-transform duration-300 hover:scale-110 hover:shadow-lg" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="text-lg text-brand-charcoal hover:text-brand-maroon transition-colors duration-300">
                  {item.text}
              </Link>
            ))}
          </nav>
          <div onClick={handleNav} className="md:hidden text-3xl cursor-pointer text-brand-maroon">
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-200 bg-brand-off-white ease-in-out duration-500 transition-transform' : 'fixed left-[-100%] top-0 ease-in-out duration-500'}>
        <h1 className="w-full text-3xl font-bold text-brand-maroon m-4 font-serif">Sundari Silk</h1>
        <ul className="p-4 uppercase bg-brand-off-white">
          {navItems.map((item) => (
            <li key={item.path} className="p-4 border-b border-gray-300">
              <Link href={item.path} onClick={handleNav}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Navbar;