'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial scroll position
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Handle scroll position on pathname change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  // Smooth scroll to top and update URL
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Remove hash from URL without refreshing
    if (window.location.hash) {
      history.pushState('', document.title, window.location.pathname);
    }
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#112240] hover:bg-[#233554] border-2 border-[#64ffda] text-[#64ffda] 
                   w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer 
                   transition-all duration-300 z-[9999] hover:scale-110 shadow-lg"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 