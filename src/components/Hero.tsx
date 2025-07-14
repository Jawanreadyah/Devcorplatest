import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

function ProjectCard({ image, title, subtitle, description, link }: ProjectCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="space-y-5">
      <div 
        className={`relative overflow-hidden aspect-[24/9] group ${link ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-1 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-zinc-600 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16">
      <div className="relative z-10 w-full px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-24 items-start">
          {/* Left Side - Hero Text */}
          <div className="flex flex-col justify-center">
            <h1 className="hero-text-anton text-black leading-tight">
              I create visions —<br />
              shaping more than<br />
              interfaces.
            </h1>
            
            <div className="mt-12">
              <span className="text-sm text-zinc-600 uppercase tracking-wider font-semibold mb-4 block">Our Mission</span>
              <p className="text-[2.5rem] leading-[1.1] font-normal text-black" style={{ fontFamily: 'Anton, sans-serif' }}>
                Our mission is to empower businesses and creators by crafting digital experiences that transform ideas into impactful realities. We believe every brand deserves innovative solutions that connect with their audience and drive meaningful growth.
              </p>
            </div>

            {/* Viewplus Project */}
            <div className="mt-16">
              <ProjectCard 
                image="https://i.ibb.co/39tP0Cgq/image.png"
                title="Viewplus streaming app"
                subtitle="Mobile App, Streaming, UI/UX"
                description="A comprehensive streaming application with intuitive user interface, seamless video playback, and personalized content discovery features."
                link="https://1viewplus.netlify.app"
              />
            </div>
          </div>

          {/* Floating Separator Line */}
          <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-black transform -translate-x-1/2"></div>

          {/* Right Side - Works Section */}
          <div className="flex flex-col justify-start pt-8">
            <div className="mb-10">
              <span className="text-base text-zinc-600 uppercase tracking-wider font-semibold">SELECTED PROJECTS</span>
              <h2 className="text-4xl font-medium leading-tight mt-4">Our Work</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-12 max-w-2xl">
              <ProjectCard 
                image="https://i.ibb.co/r2zf4pn5/image.png"
                title="Zeal it events landing page"
                subtitle="UX/UI Design, Development"
                description="A comprehensive digital transformation project focusing on user experience and accessibility for Qatar's Leading Event Management Company."
                link="https://zealitevents.org"
              />
              <ProjectCard 
                image="https://i.ibb.co/v6y6ZfPx/image.png"
                title="Marza Hypermarket"
                subtitle="E-commerce, Retail, Branding"
                description="A modern e-commerce platform for Marza Hypermarket, featuring seamless shopping experience, product catalog, and brand-focused design."
                link="https://marzahyprmarket.netlify.app"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}