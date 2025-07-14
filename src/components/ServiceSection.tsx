import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceItemProps {
  number: string;
  title: string;
}

function ServiceItem({ number, title }: ServiceItemProps) {
  return (
    <div className="service-item">
      <div className="flex items-center gap-24 py-6 border-b border-black">
        <span className="text-zinc-600 w-12 animate-item">{number}</span>
        <span className="font-medium animate-item">{title}</span>
      </div>
    </div>
  );
}

interface ServiceProps {
  number: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  services: { number: string; title: string; }[];
}

export function ServiceSection({ number, title, subtitle, description1, description2, services }: ServiceProps) {
  const sectionRef = useScrollAnimation({
    element: '.animate-item',
    start: 'top 70%',
  });

  return (
    <div className="border-t border-black pt-8" ref={sectionRef}>
      <span className="text-sm text-zinc-600 uppercase animate-item">{subtitle}</span>
      
      <div className="flex items-center gap-12">
        <span className="text-[20rem] font-bold leading-none animate-item">{number}</span>
        <h2 className="text-[5rem] font-medium leading-none mt-12 mb-16 animate-item">{title}</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-24">
        <p className="text-lg text-zinc-600 animate-item">{description1}</p>
        <p className="text-lg text-zinc-600 animate-item">{description2}</p>
      </div>

      <div className="mt-24 space-y-0">
        {services.map((service, index) => (
          <ServiceItem key={index} number={service.number} title={service.title} />
        ))}
      </div>
    </div>
  );
}