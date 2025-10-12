import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const MOBILE_BREAKPOINT = 768; 
const DESKTOP_SCROLL_HEIGHT = 580; 
const MOBILE_SCROLL_HEIGHT = 800;

const ScrollButton: React.FC = () => {
  const handleScrollDown = (): void => {
     const viewportWidth = window.innerWidth;
       let scrollDistance: number;

        if (viewportWidth < MOBILE_BREAKPOINT) {
            scrollDistance = MOBILE_SCROLL_HEIGHT;
        } else {
            scrollDistance = DESKTOP_SCROLL_HEIGHT;
        }
       window.scroll({
            top: window.scrollY + scrollDistance,
            behavior: 'smooth'
        });
  };

  return (
    <>    
      <button
        className="font-Inter cursor-pointer flex gap-3 flex-col mb-24 mt-20 md:mt-0 lg:mt-0 md:mb-0 lg:mb-0 bg-transparent font-bold py-2 px-4 rounded text-base sm:text-lg items-center justify-center group"
        onClick={handleScrollDown} 
      >
        Bajar
        <FaArrowDown 
        className="ml-2 transition-opacity duration-300 group-hover:opacity-100 animate-bounce-custom"/>
      </button>
    </>
    );
};

export default ScrollButton;