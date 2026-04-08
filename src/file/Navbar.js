import React, { useState } from 'react';

const Navbar = ({ currentSection, onNavClick, homeRef, aboutRef, experienceRef, projectsRef, skillsRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'experience', label: 'Experience', ref: experienceRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'skills', label: 'Skills', ref: skillsRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
  ];

  const handleNavClick = (ref) => {
    onNavClick(ref);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo/Brand - Optional */}
        <div className="text-blue-50 font-semibold text-lg md:hidden">
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center w-full">
          <div className="flex text-blue-50">
            {navItems.map((item) => (
              <div key={item.id} className="mx-6 lg:mx-10 relative">
                <button
                  onClick={() => onNavClick(item.ref)}
                  className={`relative whitespace-nowrap transition-colors duration-300 ${
                    currentSection === item.id
                      ? "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-gray-400 after:opacity-70 after:w-[30%] after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
                      : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:bottom-[-2px] hover:after:h-[2px] hover:after:bg-gray-400 hover:after:opacity-50 hover:after:w-[30%] hover:after:mx-auto hover:after:transition-all hover:after:duration-300"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue-50 focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-blue-50 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-blue-50 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-blue-50 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-20 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.ref)}
              className={`text-left py-4 text-blue-50 border-b border-gray-800 transition-all duration-300 ${
                currentSection === item.id
                  ? 'text-white pl-4 border-l-4 border-gray-400'
                  : 'hover:pl-4 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          style={{ zIndex: -1 }}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
