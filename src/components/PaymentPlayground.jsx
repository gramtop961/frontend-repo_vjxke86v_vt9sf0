import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useMochi } from '../store';

export default function PaymentPlayground() {
  const { dispatch, playChime } = useMochi();
  const [amount, setAmount] = useState('199');
  const [to, setTo] = useState('Ashwin');

  const sendMock = () => {
    const txn = {
      id: `t${Date.now()}`,
      date: new Date().toISOString().slice(0, 10),
      amount: -Math.abs(parseInt(amount || '0', 10)),
      merchant: `UPI • ${to}`,
      category: 'Mock',
      status: 'success',
    };
    dispatch({ type: 'ADD_TXN', payload: txn });
    dispatch({ type: 'INCREMENT_XP', payload: 6 });
    playChime();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold">Payment Playground</h1>
        <p className="mt-2 text-neutral-300">Try a safe, simulated transfer. Mochi guides every step.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Pay to"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min="1"
            placeholder="Amount"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ y: -2 }}
          onClick={sendMock}
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-neutral-900 font-semibold shadow-lg hover:bg-amber-400"
        >
          <Send className="w-4 h-4" /> Send Mock Payment
        </motion.button>

        <p className="mt-3 text-sm text-neutral-400">No real money is moved. Your XP increases for practice!</p>
      </div>
    </div>
  );
}
