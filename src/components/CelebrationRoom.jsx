import React from 'react';
import { motion } from 'framer-motion';
import { Confetti } from 'lucide-react';
import { useMochi } from '../store';

export default function CelebrationRoom() {
  const { state, playChime } = useMochi();
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-amber-300 via-amber-500 to-orange-600 text-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <Confetti className="text-orange-600" />
            <h1 className="text-3xl font-extrabold">Celebration Room</h1>
          </div>
          <p className="mt-3 text-neutral-700">
            Mochi twirls their antennae: “You did it! XP +{state.xp}. Streak: {state.streak} days. Should we ring the bell?”
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {state.badges.map((b) => (
              <motion.div key={b.id} whileHover={{ y: -4 }} className="px-4 py-2 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                <span className="mr-2">{b.icon}</span>
                {b.name}
              </motion.div>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -2 }}
            onClick={playChime}
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-500"
          >
            Ring Mochi’s Bell
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
