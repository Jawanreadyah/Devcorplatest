import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="contact-section mt-24 md:mt-48 min-h-screen">
      <div className="border-t border-black pt-6 md:pt-8">
        <span className="text-xs md:text-sm text-zinc-600 uppercase contact-animate">GET IN TOUCH</span>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 contact-animate mt-4">
          <span className="text-5xl md:text-[20rem] font-bold leading-none">05</span>
          <h2 className="text-2xl md:text-[5rem] font-medium leading-none mt-4 md:mt-12 mb-4 md:mb-16">Let's Create<br />Together</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 mt-4 md:mt-0">
          <div className="space-y-6 md:space-y-12 contact-animate">
            <div className="flex items-center gap-2 md:gap-4">
              <Mail className="w-5 md:w-6 h-5 md:h-6" />
              <a href="mailto:Dev2006me@gmail.com" className="text-base md:text-lg hover:text-zinc-600 transition-colors">
                Dev2006me@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Phone className="w-5 md:w-6 h-5 md:h-6" />
              <a href="tel:+974 66725231" className="text-base md:text-lg hover:text-zinc-600 transition-colors">
                +974 66725231
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <MapPin className="w-5 md:w-6 h-5 md:h-6" />
              <span className="text-base md:text-lg">Doha,Qatar</span>
            </div>
            <h3 className="text-lg md:text-2xl font-medium mb-4 md:mb-6">Ready to start your project?</h3>
            <p className="text-zinc-600 mb-4 md:mb-8 text-sm md:text-base">
              Let's discuss your vision and bring it to life. Get in touch with us today.
            </p>
            <a 
              href="mailto:Dev2006me@gmail.com"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors text-base md:text-lg"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}