import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useMochi } from '../store';

export default function SecuritySphere() {
  const { state } = useMochi();
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-emerald-400" />
          <h1 className="text-3xl font-extrabold">Security Sphere</h1>
        </div>
        <p className="mt-2 text-neutral-300">Mochi whispers: “I’m your shield. Let’s keep your credits cozy and safe.”</p>

        <motion.div
          initial={{ borderRadius: 32 }}
          whileHover={{ borderRadius: 12 }}
          transition={{ type: 'spring' }}
          className="mt-8 p-6 rounded-3xl bg-white/5 border border-white/10"
        >
          <div className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">
            {state.security.score}
          </div>
          <div className="text-sm text-neutral-400">Security score • Last check {state.security.lastCheck}</div>
          <ul className="mt-4 list-disc list-inside text-neutral-300 space-y-1">
            {state.security.tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
