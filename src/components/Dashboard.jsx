import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame } from 'lucide-react';
import { useMochi } from '../store';

export default function Dashboard() {
  const { state } = useMochi();
  const progress = (g) => Math.round((g.saved / g.target) * 100);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-amber-200 via-orange-200 to-amber-300 text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3">
          <Trophy className="text-orange-700" />
          <h1 className="text-3xl font-extrabold">Mochi Dashboard</h1>
        </div>
        <p className="mt-2 text-neutral-700">Mochi beams: “Your journey glows! Keep the streak alive.”</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-2xl bg-white/80 p-6 shadow">
            <div className="text-sm text-neutral-500">XP</div>
            <div className="text-4xl font-black">{state.xp}</div>
          </motion.div>
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-2xl bg-white/80 p-6 shadow">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Flame className="text-orange-600" /> Streak
            </div>
            <div className="text-4xl font-black">{state.streak} days</div>
          </motion.div>
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-2xl bg-white/80 p-6 shadow">
            <div className="text-sm text-neutral-500">Badges</div>
            <div className="text-2xl font-bold">{state.badges.length}</div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {state.badges.map((b) => (
                <span key={b.id} className="px-2 py-1 bg-amber-100 text-amber-900 rounded-full text-xs border border-amber-300">{b.icon} {b.name}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/80 p-6 shadow">
            <div className="font-semibold">Savings Goals</div>
            <div className="mt-4 space-y-4">
              {state.goals.map((g) => (
                <div key={g.id}>
                  <div className="flex justify-between text-sm"><span>{g.title}</span><span>{progress(g)}%</span></div>
                  <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-orange-600" style={{ width: `${progress(g)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 shadow">
            <div className="font-semibold">Recent Activity</div>
            <div className="mt-4 space-y-3">
              {state.transactions.slice(0, 5).map((t) => (
                <div key={t.id} className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium">{t.merchant}</div>
                    <div className="text-neutral-500">{t.date}</div>
                  </div>
                  <div className={t.amount < 0 ? 'text-rose-500 font-semibold' : 'text-emerald-600 font-semibold'}>
                    {t.amount < 0 ? '-' : '+'}₹{Math.abs(t.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
