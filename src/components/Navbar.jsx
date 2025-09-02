import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../utils/navConfig";
import RotaryLogo from "../assets/RotaryLogo.png"

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);



  return (
    <nav className="bg-[#F0F4FA] shadow-lg fixed top-0 z-50 w-full">
      <div className="ml-1 px-3">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex flex-col items-center object-fill">
            <img
              src={RotaryLogo}
              alt="Rotary Club East Bhopal Logo"
              className="h-15 w-30 mr-3"
            />
            <span className="text-blue-900 leading-1 font-extrabold">
              Rotary Club East Bhopal
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-serif text-lg relative">
            {navItems.map((item, idx) => (
<div
  key={item.name}
  className="relative group"
>
  <Link
    to={item.path}
    className={`relative pb-1 font-medium transition-all duration-300 
      ${
        location.pathname === item.path
          ? "text-blue-900 after:w-full"
          : "text-blue-900 hover:after:w-full"
      }
      after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
      after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300
    `}
  >
    {item.name}
  </Link>

  {/* Dropdown */}
  {item.submenu && (
  <div
    className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3 grid grid-cols-1 gap-2 
               opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 
               translate-y-2 transition-all duration-300
               before:content-[''] before:absolute before:-top-2 before:left-6 before:border-l-8 before:border-r-8 
               before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-gray-500"
  >
    {item.submenu.map((sub) => (
      <Link
        key={sub.name}
        to={sub.path}
        className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-900 transition"
      >
        {sub.name}
      </Link>
    ))}
  </div>
)}

</div>

            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate("/join-us")}
              className="group relative inline-flex items-center justify-end px-8 py-3 overflow-hidden font-bold rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-orange-500 hover:to-amber-400"
            >
              <span className="relative text-white text-lg tracking-wide">
                Join Us
              </span>
            </button>
          </div>

          
          {/* Mobile CTA + Toggle */}
<div className="flex items-center space-x-3 md:hidden">
  {/* Small Join Us Button */}
  <button
    onClick={() => navigate("/join-us")}
    className="px-4 py-3 text-sm font-semibold bg-orange-500 text-white rounded-md shadow-md"
  >
    Join us
  </button>

  {/* Mobile Toggle */}
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="text-blue-900"
  >
    <i className="fas fa-bars text-2xl"></i>
  </button>
</div>



        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#F0F4FA] shadow-md rounded-lg py-2">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-200">
                <button
                  onClick={() =>
                    setHoveredMenu(hoveredMenu === item.name ? null : item.name)
                  }
                  className="w-full text-left px-4 py-2 font-medium text-blue-900"
                >
                  {item.name}
                </button>
                {hoveredMenu === item.name && item.submenu && (
                  <div className="pl-6 pb-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-1 text-sm text-gray-700 hover:text-blue-900"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
