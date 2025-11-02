import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="font-semibold text-white tracking-tight">Vibe Starter</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#showcase" className="hover:text-white transition">Showcase</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium shadow hover:shadow-lg transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
