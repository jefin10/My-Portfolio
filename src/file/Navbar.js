import React from 'react';

const Navbar = ({ currentSection, onNavClick, homeRef, aboutRef, projectsRef, skillsRef, contactRef }) => {
  const navItems = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'skills', label: 'Skills', ref: skillsRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="h-9 flex my-3 text-blue-50">
        <div className="flex justify-between sm:justify-center">
          {navItems.map((item) => (
            <div key={item.id} className="mx-2 sm:mx-6 lg:mx-10 relative">
              <button
                onClick={() => onNavClick(item.ref)}
                className={`relative whitespace-nowrap ${
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
    </div>
  );
};

export default Navbar;
