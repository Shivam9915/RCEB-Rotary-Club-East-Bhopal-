import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // If using React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // For active link tracking
  const navigate = useNavigate(); // For programmatic navigation
   const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Events & Media", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Members Corner", path: "/members-corner" },
  ];



  const handleJoin = () => {
    // Navigate to the Join Us page
    navigate("/join-us");
    setIsMenuOpen(false); // Close the menu if it was open

  }

  return (
    <nav className="bg-[#F0F4FA] shadow-lg fixed top-0 z-50 w-full">
      <div className="container ml-8 px-3">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/564d45f0-ff22-4892-82c6-b8b7d3217db3.png"
              alt="Rotary Club East Bhopal Logo"
              className="h-10 mr-3"
            />
            <span className="text-blue-900 font-extrabold">Rotary East Bhopal</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-serif text-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative pb-1 font-medium transition-colors duration-300
                  after:absolute after:left-0 after:bottom-0 after:h-[2px]
                  after:bg-yellow-400 after:transition-all after:duration-300
                  ${
                    location.pathname === item.path
                      ? "text-blue-900 after:w-full"
                      : "text-blue-900 after:w-0 hover:after:w-full"
                  }`}
              >
                {item.name}
              </Link>
            ))}


          </div>

          <div>
<button onClick={handleJoin} class="group relative inline-flex items-center justify-end px-8 py-3 overflow-hidden font-bold rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-orange-500 hover:to-amber-400">
  <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-amber-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
  <span class="relative text-white text-lg tracking-wide group-hover:tracking-widest transition-all duration-300">
    Join Us
  </span>
</button>
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-blue-900"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#F0F4FA] shadow-md rounded-lg py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 relative font-medium transition-colors duration-300
                  after:absolute after:left-0 after:bottom-0 after:h-[2px]
                  after:bg-yellow-400 after:transition-all after:duration-300
                  ${
                    location.pathname === item.path
                      ? "text-blue-900 after:w-full"
                      : "text-blue-900 after:w-0 hover:after:w-full"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
