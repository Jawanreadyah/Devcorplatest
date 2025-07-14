import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 w-full px-12 py-8 flex justify-between items-center z-50">
      <div className="flex flex-col">
        <h3 className="font-medium text-lg">DevCorp.</h3>
        <div className="text-sm text-zinc-600">
          <span>Web Development & UI/UX Design Company</span>
        </div>
      </div>

      <nav className="flex items-center gap-8 text-sm">
        <a href="#about" className="hover:text-zinc-600 transition-colors">About</a>
        <a href="#services" className="hover:text-zinc-600 transition-colors">Services</a>
        <a href="#work" className="hover:text-zinc-600 transition-colors">Work</a>
        <a href="#contact" className="hover:text-zinc-600 transition-colors">Contact</a>
      </nav>
    </header>
  );
}