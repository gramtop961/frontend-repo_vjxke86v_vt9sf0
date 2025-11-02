import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useMochi } from '../store';

export default function CoachArena() {
  const { state, dispatch, playChime } = useMochi();

  const boost = () => {
    dispatch({ type: 'INCREMENT_XP', payload: 10 });
    playChime();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100 text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3">
          <Sparkles className="text-orange-600" />
          <h1 className="text-3xl font-extrabold">Coach Arena</h1>
        </div>
        <p className="mt-2 text-neutral-700">
          Mochi cheers: “Mini wins make mega momentum. Tap the Boost when you review your budget!”
        </p>
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.04 }}
          onClick={boost}
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-500"
        >
          +10 XP Boost
        </motion.button>
        <div className="mt-6 text-sm text-neutral-600">Current XP: <span className="font-semibold text-neutral-900">{state.xp}</span></div>
      </div>
    </div>
  );
}
