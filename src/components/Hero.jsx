import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-zinc-900">
      {/* Background 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9rCj0V8oQxVZ1s4S/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle overlay gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      <div className="relative z-10 text-center px-6">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Sandbox Ready
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Build beautiful apps, faster
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            A tasteful starter with a 3D touch. Compose modular components, wire APIs, and ship polished
            interfaces — all in your browser.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium shadow hover:shadow-lg transition"
            >
              Start Building
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
