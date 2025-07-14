import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="contact-section mt-48 min-h-screen">
      <div className="border-t border-black pt-8">
        <span className="text-sm text-zinc-600 uppercase contact-animate">GET IN TOUCH</span>
        
        <div className="flex items-center gap-12 contact-animate">
          <span className="text-[20rem] font-bold leading-none">05</span>
          <h2 className="text-[5rem] font-medium leading-none mt-12 mb-16">Let's Create<br />Together</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-24">
          <div className="space-y-12 contact-animate">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <a href="mailto:Dev2006me@gmail.com" className="text-lg hover:text-zinc-600 transition-colors">
                Dev2006me@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <a href="tel:+974 66725231" className="text-lg hover:text-zinc-600 transition-colors">
                +974 66725231
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Doha,Qatar</span>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-medium mb-6">Ready to start your project?</h3>
              <p className="text-zinc-600 mb-8">
                Let's discuss your vision and bring it to life. Get in touch with us today.
              </p>
              <a 
                href="mailto:Dev2006me@gmail.com"
                className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}