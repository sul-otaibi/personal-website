import React, { useState } from 'react';

const Navbar = ({ sections, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <nav className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <button onClick={() => handleNavClick('home')} className="btn btn-ghost normal-case text-xl">SA</button>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            {sections.map((section) => (
              <li key={section}>
                <button onClick={() => handleNavClick(section)} className="hover:bg-base-200 rounded-lg">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={closeMenu}>
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <nav className="absolute top-0 right-0 bottom-0 flex w-5/6 max-w-sm py-6 px-6 bg-base-100 shadow-xl">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleNavClick(section)}
                    className="block px-4 py-2 hover:bg-base-200 rounded-lg w-full text-left"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;