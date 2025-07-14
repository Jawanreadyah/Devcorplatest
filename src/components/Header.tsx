import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full px-12 py-8 flex justify-between items-center z-50">
      <div className="flex flex-col">
        <h3 className="font-medium text-lg">DevCorp.</h3>
        <div className="text-sm text-zinc-600">
          <span>Web Development & UI/UX Design Company</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm">
        <a href="#about" className="hover:text-zinc-600 transition-colors">About</a>
        <a href="#services" className="hover:text-zinc-600 transition-colors">Services</a>
        <a href="#work" className="hover:text-zinc-600 transition-colors">Work</a>
        <a href="#contact" className="hover:text-zinc-600 transition-colors">Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden fixed bottom-6 right-6 z-[100] bg-white rounded-full shadow-lg p-3 border border-zinc-200 ${menuOpen ? 'hidden' : 'block'}`}
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu Overlay with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-[200]"
          >
            <button
              className="absolute top-6 right-6 text-white"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-10 text-2xl text-white font-semibold">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:underline">About</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="hover:underline">Services</a>
              <a href="#work" onClick={() => setMenuOpen(false)} className="hover:underline">Work</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}