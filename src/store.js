import React, { createContext, useContext, useMemo, useReducer } from 'react';

const initialState = {
  user: { id: 'u1', name: 'Mochi Explorer' },
  preferences: { soundOn: true },
  xp: 240,
  streak: 5,
  badges: [
    { id: 'b1', name: 'First UPI', icon: '⭐', earnedAt: Date.now() - 1000 * 60 * 60 * 24 * 7 },
    { id: 'b2', name: 'Security Champ', icon: '🛡️', earnedAt: Date.now() - 1000 * 60 * 60 * 24 * 3 },
  ],
  goals: [
    { id: 'g1', title: 'Weekend Getaway', target: 10000, saved: 4200 },
    { id: 'g2', title: 'New Headphones', target: 6000, saved: 3600 },
  ],
  transactions: [
    { id: 't1', date: '2025-10-27', amount: -249, merchant: 'Chai Stop', category: 'Food', status: 'success' },
    { id: 't2', date: '2025-10-28', amount: -1200, merchant: 'Metro Card', category: 'Transport', status: 'success' },
    { id: 't3', date: '2025-10-29', amount: 2000, merchant: 'Refund • StoreX', category: 'Refund', status: 'success' },
  ],
  security: {
    score: 92,
    lastCheck: '2025-10-30',
    tips: [
      'Enable device lock & biometrics',
      'Use one-time UPI PIN only on your device',
      'Beware of payment request scams',
    ],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TXN':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'SAVE_PROGRESS': {
      const { goalId, amount } = action.payload;
      return {
        ...state,
        goals: state.goals.map((g) => (g.id === goalId ? { ...g, saved: Math.min(g.target, g.saved + amount) } : g)),
        xp: state.xp + Math.max(1, Math.round(amount / 50)),
      };
    }
    case 'TOGGLE_SOUND':
      return { ...state, preferences: { ...state.preferences, soundOn: !state.preferences.soundOn } };
    case 'ADD_BADGE':
      return { ...state, badges: [{ id: `b${Date.now()}`, ...action.payload }, ...state.badges] };
    case 'INCREMENT_XP':
      return { ...state, xp: state.xp + action.payload };
    case 'SET_STREAK':
      return { ...state, streak: action.payload };
    default:
      return state;
  }
}

const MochiContext = createContext(null);

export function MochiProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const playChime = () => {
    try {
      if (!state.preferences.soundOn) return;
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = 'sine';
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.25);
      o.connect(g).connect(audioCtx.destination);
      o.start();
      o.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      // fail silently
    }
  };

  const value = useMemo(
    () => ({ state, dispatch, playChime }),
    [state]
  );

  // Avoid JSX in .js file: use React.createElement
  return React.createElement(
    MochiContext.Provider,
    { value },
    children
  );
}

export function useMochi() {
  const ctx = useContext(MochiContext);
  if (!ctx) throw new Error('useMochi must be used within MochiProvider');
  return ctx;
}
