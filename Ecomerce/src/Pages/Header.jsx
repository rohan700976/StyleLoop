import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Search, UserCircle } from "lucide-react";
import { href, Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
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
        { name:"GirlShirt", href: "/women/girlshirt"}
      ],
    },
    { name: "Kids", 
       hover: true,
       submenu: [
        { name:"KidsTshirt", href: "/kids/kidsTshirt"},
        { name: "kidsjeans", href: "/kids/kidsJeans" },
        { name: "BoyShirt", href: "/kids/kidsShirt" },
        { name: "kidsGirlTop", href: "/kids/kidsGirTop" },
        // {name: "kidsGirlJeans" , href: "/kids/kidsJeans"},
        {name: "kidsGirlScart", href: "/kids/kidsGirlSkirt"},
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
      <header className={`fixed w-full  top-0 z-20 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-[rgba(255,255,250,0.9)]'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-indigo-600 hover:text-indigo-800">StyleLoop</div>

          <div className="hidden md:flex items-center relative mx-6 w-1/3 group">
            <Search className="absolute left-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-indigo-600 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800"
            />
          </div>

          <nav className="hidden md:flex gap-8 items-center text-indigo-600 text-lg font-medium relative">
            {navLinks.map((link) =>
              link.submenu ? (
                <div className="group relative" key={link.name}>
                  <span className="cursor-pointer hover:text-indigo-800 underline-offset-4">
                    {link.name}
                  </span>
                  <div className="absolute top-full left-0 mt-2 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] z-50">
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

            <div className="relative group">
              <UserCircle className="w-6 h-6 text-indigo-600 cursor-pointer hover:text-indigo-800" />
              <div className="absolute right-0 mt-2 bg-[rgba(255,255,250,0.9)] shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 w-40">
                <button onClick={() => setShowLoginModal(true)} className="block w-full text-left px-4 py-2 hover:text-indigo-800 hover:bg-white text-sm">Login</button>
                <button className="block w-full text-left px-4 py-2 hover:text-indigo-800 hover:bg-white text-sm">Sign Up</button>
              </div>
            </div>
          </nav>

          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <div className="relative group">
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-full shadow-sm placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 text-gray-700 transition-colors duration-200 ${link.hover ? "hover:text-indigo-600 hover:underline underline-offset-4" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 px-2">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-blue-600">StyleLoop</h2>
                <button onClick={() => setShowLoginModal(false)} className="text-xl font-bold text-gray-500">×</button>
              </div>
              <input
                type="text"
                placeholder="Email or Username"
                className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
                LOGIN →
              </button>
              <p className="text-sm text-center text-blue-500">support@gmail.com</p>
              <button className="w-full border py-2 rounded-md flex items-center justify-center shadow-sm">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2 text-gray-500" />
                Sign in with Google
              </button>
              <p className="text-center text-sm text-gray-500">Don't have an account? <span className="text-blue-500 cursor-pointer">Sign up</span></p>
            </div>
            <div className="w-full md:w-1/2 bg-indigo-50 flex justify-center items-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
                alt="Login Visual"
                className="w-3/4 max-w-[200px] sm:max-w-[300px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
