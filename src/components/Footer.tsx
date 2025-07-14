import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white mt-24 md:mt-48">
      <div className="px-4 md:px-12 py-8 md:py-16">
        <div className="max-w-full md:max-w-7xl mx-0 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-24">
            {/* Logo Section */}
            <div className="flex flex-col items-start mb-8 md:mb-0">
              <div className="grid grid-cols-3 gap-1 md:gap-2 mb-4 md:mb-8">
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white transform rotate-45"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white transform rotate-45"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white transform rotate-45"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white transform rotate-45"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white transform rotate-45"></div>
                <div className="w-4 md:w-6 h-4 md:h-6 bg-white"></div>
              </div>
            </div>
            {/* Company Name */}
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">DevCorp.</h3>
            </div>
            {/* About Us */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">About Us</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li><a href="#about" className="hover:text-white transition-colors">Mission</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Support</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors"><ArrowUp className="w-4 md:w-6 h-4 md:h-6" /> Back to Top</button></li>
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <div className="flex gap-16">
                <div>
                  <h4 className="text-xl font-semibold mb-6">Social</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                  </ul>
                </div>
              </div>
              
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                Back to top
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center text-gray-400 text-sm">
            <span>Copyright © DevCorp.</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}