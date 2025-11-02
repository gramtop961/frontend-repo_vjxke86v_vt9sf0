import React from 'react';
import { Rocket, Star, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast by default',
    desc: 'Vite + React + Tailwind deliver instant feedback and smooth DX.'
  },
  {
    icon: Shield,
    title: 'Production-ready',
    desc: 'Opinionated patterns, accessible components, and clean semantics.'
  },
  {
    icon: Zap,
    title: 'Interactive 3D',
    desc: 'Blend 3D scenes with your UI using Spline — no heavy setup.'
  },
  {
    icon: Star,
    title: 'Polished design',
    desc: 'Modern typography, gradients, and motion to make it feel premium.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-zinc-950 text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to ship</h2>
          <p className="mt-3 text-white/70">
            A modular, tasteful foundation that helps you move from idea to demo, fast.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
