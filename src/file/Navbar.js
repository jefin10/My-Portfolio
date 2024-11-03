import React from 'react';

const Navbar = ({ currentSection }) => {
  return (
    <div className="flex justify-center">
      <div className="h-9 flex my-3 text-blue-50">
        <div className="mx-10">
          <button
            className={`relative ${
              currentSection === "home"
                ? "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-gray-400 after:opacity-70 after:w-[30%] after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
                : ""
            }`}
          >
            Home
          </button>
        </div>
        
        <div className="mx-10">
          <button
            className={`relative ${
              currentSection === "about"
                ? "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-gray-400 after:opacity-70 after:w-[30%] after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
                : ""
            }`}
          >
            About
          </button>
        </div>
        
        <div className="mx-10">
          <button
            className={`relative ${
              currentSection === "porjects"
                ? "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-gray-400 after:opacity-70 after:w-[30%] after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
                : ""
            }`}
          >
            Projects
          </button>
        </div>
        
        <div className="mx-10">
          <button
            className={`relative ${
              currentSection === "skills"
                ? "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-gray-400 after:opacity-70 after:w-[30%] after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
                : ""
            }`}
          >
            Skills
          </button>
        </div>
        
        <div className="mx-10">
          <button
            className={`relative ${
              currentSection === "contact"
                ? "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-gray-400 after:opacity-70 after:w-[30%] after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
                : ""
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
