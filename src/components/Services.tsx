import React from 'react';
import { ServiceSection } from './ServiceSection';

export function Services() {
  const productDesignServices = {
    number: "01",
    title: "Product Design",
    subtitle: "THE MAIN PART",
    description1: "Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application. With a strong focus on UI design and systemic design, I aim to create elements and modules that are responsive, flexible and above all functional and performant.",
    description2: "I firmly believe that UI has a strong impact on your brand and your web solutions – this is where my passion starts to ignite as I bring more key aspects together – giving everything real value.",
    services: [
      { number: "01", title: "UX/UI Design" },
      { number: "02", title: "Responsive Webdesign" },
      { number: "03", title: "Designsystems" },
      { number: "04", title: "App Design" },
      { number: "05", title: "Prototyping" },
      { number: "06", title: "Interactions" }
    ]
  };

  const webflowServices = {
    number: "02",
    title: "Web Development",
    subtitle: "THE TECHNICAL PART",
    description1: "Translating design into dynamic, functional web experiences is where I thrive. I'm passionate about transforming design systems into responsive, web-based environments, leveraging the web's flexibility to create sustainable websites with flexible and responsive components.",
    description2: "Whether it's building animated solutions or crafting reusable modules, my goal is to develop websites that are not only visually compelling but also future-proof. It's about marrying creativity and logic to deliver seamless experiences that feel fresh and adaptable across devices.",
    services: [
      { number: "01", title: "Landingpages" },
      { number: "02", title: "Designsystems (Figma <> React)" },
      { number: "03", title: "Animated web solutions" }
    ]
  };

  const brandingServices = {
    number: "03",
    title: "Branding & Vision",
    subtitle: "THE VISION PART",
    description1: "UI design isn't just about buttons and components — it is about reflecting the essence of a brand on digital functional platforms and strengthening brand authenticity at every user touchpoint. I love pushing beyond the conventional, transforming UI into a tool that elevates the brand to a new level.",
    description2: "I can be just the right person for you when it comes not only to UI design and or webflow solutions, but also someone who thinks in the vision of a brand and emphasizes the purpose in every pixel.",
    services: [
      { number: "01", title: "Brand Design" },
      { number: "02", title: "Moodboards" },
      { number: "03", title: "Vision Concepts" },
      { number: "04", title: "Styleguides" }
    ]
  };

  return (
    <section id="services" className="mt-48">
      <div className="inline-flex items-center gap-3 mb-24">
        <span className="px-3 py-1 text-sm bg-black text-white rounded-full">SERVICES</span>
        <div className="h-[1px] w-[200px] bg-black"></div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12">
          <ServiceSection {...productDesignServices} />
          <div className="mt-48">
            <ServiceSection {...webflowServices} />
          </div>
          <div className="mt-48">
            <ServiceSection {...brandingServices} />
          </div>
        </div>
      </div>
    </section>
  );
}