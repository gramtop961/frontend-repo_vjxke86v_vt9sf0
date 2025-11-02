import React from 'react';
import { motion } from 'framer-motion';
import { useMochi } from '../store';

export default function SavingsNarrative() {
  const { state } = useMochi();
  return (
    <section className="bg-gradient-to-b from-neutral-950 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Savings Narrative</h2>
        <p className="mt-1 text-white/70">Mochi narrates your goals like mini-quests.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {state.goals.map((g, i) => {
            const pct = Math.round((g.saved / g.target) * 100);
            return (
              <motion.div key={g.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{g.title}</div>
                  <div className="text-sm text-white/70">{pct}%</div>
                </div>
                <div className="mt-3 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-gradient-to-r from-amber-400 to-orange-600" />
                </div>
                <p className="mt-3 text-sm text-white/70">Saved ₹{g.saved} of ₹{g.target}. Mochi says: “A few more steps and we’ll high-five the finish!”</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
