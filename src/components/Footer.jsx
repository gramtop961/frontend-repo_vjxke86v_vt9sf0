import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              <span className="font-semibold tracking-tight">Vibe Starter</span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              Crafted to help you ideate and ship delightful interfaces rapidly.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Links</h4>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#showcase" className="hover:text-white">Showcase</a></li>
              <li><a href="#get-started" className="hover:text-white">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Stay in the loop</h4>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:shadow-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Vibe Starter. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
