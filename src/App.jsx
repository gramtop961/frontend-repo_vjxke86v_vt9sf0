import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Showcase / CTA */}
        <section id="get-started" className="relative py-24 bg-gradient-to-b from-zinc-900 to-black">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to build your next idea?</h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Use this starter as your canvas. Compose components, plug in your API, and publish — all in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium shadow hover:shadow-lg transition"
              >
                Create a Project
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition"
              >
                See Features
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
