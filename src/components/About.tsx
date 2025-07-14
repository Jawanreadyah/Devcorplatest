import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const sectionRef = useScrollAnimation({
    element: '.animate-item',
    start: 'top 70%',
  });

  return (
    <section id="about" className="mt-48" ref={sectionRef}>
      <div className="inline-flex items-center gap-3 mb-24">
        <span className="px-3 py-1 text-sm bg-black text-white rounded-full font-semibold animate-item">ABOUT</span>
        <div className="h-[1px] w-[200px] bg-black animate-item"></div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <h2 className="col-span-8 text-[3.5rem] leading-[1.1] tracking-tight font-extrabold animate-item">
          Whether in Doha or elsewhere, I am crafting digital experiences and innovative Webflow solutions for brands, companies and your next big idea.
        </h2>

        <div className="col-span-12 mt-24">
          <div className="border-t border-black pt-16">
            <span className="text-sm text-zinc-600 uppercase font-semibold animate-item">TESTIMONIALS</span>
            <h2 className="text-[4rem] font-extrabold mt-8 mb-4 animate-item">WHAT OUR CLIENTS SAY</h2>
            <p className="text-lg text-zinc-600 max-w-2xl font-semibold animate-item">
              Real feedback from the clients and brands we've partnered with to achieve extraordinary results.
            </p>

            <div className="mt-24 relative">
              <div className="grid grid-cols-2 gap-24">
                <div className="space-y-12">
                  <p className="text-2xl italic leading-relaxed text-zinc-600 font-semibold animate-item">
                    We're currently collecting testimonials from our amazing clients. Check back soon to hear their stories!
                  </p>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <img 
                        src="https://i.imghippo.com/files/RFpu5116PM.png" 
                        alt="Abstract Shape 1"
                        className="w-full h-auto animate-float animate-item"
                      />
                    </div>
                    <div className="relative mt-12">
                      <img 
                        src="https://i.imghippo.com/files/RFpu5116PM.png" 
                        alt="Abstract Shape 2"
                        className="w-full h-auto animate-float-delayed animate-item"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-8">
                <div className="w-12 h-1 rounded-full bg-black animate-item" />
                <div className="w-12 h-1 rounded-full bg-zinc-200 animate-item" />
                <div className="w-12 h-1 rounded-full bg-zinc-200 animate-item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}