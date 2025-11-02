import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from 'lucide-react';
import { useMochi } from '../store';

export default function TransactionJourney() {
  const { state } = useMochi();
  return (
    <div className="min-h-[calc(100vh-64px)] bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3">
          <Timeline />
          <h1 className="text-3xl font-extrabold">Your Transaction Journey</h1>
        </div>
        <p className="mt-2 text-neutral-300">Mochi narrates: “Each payment is a step. Let’s replay your highlights!”</p>

        <div className="mt-8 space-y-4">
          {state.transactions.map((tx) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{tx.merchant}</div>
                  <div className="text-sm text-neutral-400">{tx.date} • {tx.category}</div>
                </div>
                <div className={tx.amount < 0 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {tx.amount < 0 ? '-' : '+'}₹{Math.abs(tx.amount)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
