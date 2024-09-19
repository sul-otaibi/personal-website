import React from 'react';

const ProgressBar = ({ sections, activeSection, scrollToSection }) => {
  return (
    <div className="fixed z md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 bottom-0 md:bottom-auto right-0 md:w-auto w-full z-[1000]">
      <div className="flex flex-row items-center justify-center p-2 space-x-4 bg-opacity-75 rounded-none md:flex-col md:space-y-4 md:space-x-0 md:rounded-full">
        {sections.map((section, index) => (
          <div key={section} className="relative">
            <button
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                section === activeSection 
                  ? 'bg-primary scale-125' 
                  : 'bg-base-content bg-opacity-20 hover:bg-opacity-50'
              }`}
              aria-label={`Go to ${section} section`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;