import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Search, UserCircle } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logoImg from '../assets/headerLogo/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/", hover: true },
    {
      name: "Men",
      hover: true,
      submenu: [
        { name: "Tshirt", href: "/men/tshirt" },
        { name: "Shirt", href: "/men/shirt" },
        { name: "Jeans", href: "/men/jeans" },
      ],
    },
    {
      name: "Women",
      hover: true,
      submenu: [
        { name: "Lehnga", href: "/women/lehnga" },
        { name: "Kurti", href: "/women/kurti" },
        { name: "GirlJeans", href: "/women/girljeans" },
        { name: "GirlShirt", href: "/women/girlshirt" }
      ],
    },
    {
      name: "Kids",
      hover: true,
      submenu: [
        { name: "KidsTshirt", href: "/kids/kidsTshirt" },
        { name: "kidsjeans", href: "/kids/kidsJeans" },
        { name: "BoyShirt", href: "/kids/kidsShirt" },
        { name: "kidsGirlTop", href: "/kids/kidsGirTop" },
        { name: "kidsGirlScart", href: "/kids/kidsGirlSkirt" },
        { name: "KidsGirlKurti", href: "/kids/kidsGirlKurti" }
      ],
    },
    { name: "About", href: "/about", hover: true },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={` border border-red-500 fixed w-full top-0 z-20 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-[rgba(255,255,250,0.9)]'}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 flex items-center justify-between flex-wrap">
          <div className="text-2xl sm:text-3xl font-bold text-indigo-600 hover:text-indigo-800">StyleLoop</div>

          <div className="hidden sm:flex items-center relative mx-2 sm:mx-6 w-full sm:w-1/3 group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-indigo-600 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800"
            />
          </div>

          <nav className=" border border-b-blue-600 hidden sm:flex gap-4 sm:gap-8 items-center text-indigo-600 text-base sm:text-lg font-medium relative">
            {navLinks.map((link) =>
              link.submenu ? (
                <div className="group relative" key={link.name}>
                  <span className=" border border-b-blue-500 cursor-pointer hover:text-indigo-800 underline-offset-4">
                    {link.name}
                  </span>
                  <div className="border border-amber-300 absolute top-full left-0 mt-2 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] z-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        className="block px-4 py-2 text-sm bg-[rgba(255,255,250,0.9)] text-indigo-600 hover:bg-white hover:text-indigo-800"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 ${link.hover ? "hover:text-indigo-800 underline-offset-4" : ""}`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* User Profile Icon with Login/Signup submenu */}
            <div className="relative group">
              <UserCircle className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-600 cursor-pointer hover:text-indigo-800" />
              <div className="absolute right-0 mt-2 bg-[rgba(255,255,250,0.9)] shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 w-40">
                <Link
                  to="/auth/login"
                  className="block w-full text-left px-4 py-2 hover:text-indigo-800 hover:bg-white text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="block w-full text-left px-4 py-2 hover:text-indigo-800 hover:bg-white text-sm"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <Link to="/wishlist" className="flex flex-col items-center text-indigo-600 hover:text-indigo-800 text-sm">
              <FaRegHeart className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="font-semibold">Wishlist</span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center text-indigo-600 hover:text-indigo-800 text-sm">
              <FaCartArrowDown className="w-6 sm:w-5 h-6 sm:h-5" />
              <span className="font-semibold">cart</span>
            </Link>
          </nav>

          <button onClick={toggleMenu} className="sm:hidden text-indigo-600 hover:text-indigo-800">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-indigo-600 text-white border-t border-gray-100 px-2 sm:px-4 py-4 space-y-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-full shadow-sm placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-indigo-800"
              />
            </div>
            {navLinks.map((link) =>
              link.submenu ? (
                <div className="group relative" key={link.name}>
                  <span
                    className="block py-2 text-white hover:text-indigo-800 transition-colors duration-200 hover:underline underline-offset-4 cursor-pointer"
                    onClick={() => {
                      const submenu = document.querySelector(`#submenu-${link.name}`);
                      if (submenu) submenu.classList.toggle('hidden');
                    }}
                  >
                    {link.name}
                  </span>
                  <div id={`submenu-${link.name}`} className="hidden pl-4 space-y-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        className="block py-1 text-white hover:text-indigo-800 text-sm transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-2 text-white hover:text-indigo-800 transition-colors duration-200 hover:underline underline-offset-4"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}

            <Link to="/wishlist" className="flex items-center gap-2 text-white hover:text-indigo-800" onClick={() => setMenuOpen(false)}>
              <FaRegHeart className="w-5 h-5" />
              Wishlist
            </Link>

            {/* User Profile Icon Mobile with Login/Signup submenu */}
            <div className="flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-white hover:text-indigo-800" />
              <div className="flex flex-col">
                <Link
                  to="/auth/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-left py-1 text-white hover:text-indigo-800 text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block text-left py-1 text-white hover:text-indigo-800 text-sm"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
