/* Neo-Samurai UI Single-file React component (Tailwind CSS required in the hosting project)

Default export: <NeoSamuraiUI />

Uses Tailwind utility classes and a few custom CSS keyframes for glow & slashes

Copy into a React + Tailwind app (Vite / Create React App + Tailwind) and place as a page/component


Notes:

Replace the inline SVG (samurai silhouette) with your own hero asset if you have one.

This file intentionally avoids external JS deps so it's easy to drop in. */


import React from 'react';

export default function NeoSamuraiUI() { return ( <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0620] to-[#0b0228] text-slate-100 antialiased"> {/* Overlay glow and grain */} <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30 bg-[radial-gradient(ellipse_at_top_right,_#7c3aed_0,_transparent_20%)]"></div>

<header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff2d55] to-[#00e5ff] flex items-center justify-center ring-1 ring-white/10 shadow-2xl">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
          <path d="M6 8h12" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        </svg>
      </div>
      <div>
        <div className="text-sm font-semibold tracking-widest">NEO-SAMURAI</div>
        <div className="text-xs text-slate-400 -mt-0.5">Mastery & Precision — Digital Dojo</div>
      </div>
    </div>

    <nav className="hidden md:flex gap-6 items-center text-sm text-slate-300">
      <a className="hover:text-white transition">Work</a>
      <a className="hover:text-white transition">Services</a>
      <a className="hover:text-white transition">About</a>
      <button className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00e5ff]/20 to-[#ff2d55]/20 border border-white/10 backdrop-blur-sm">Contact</button>
    </nav>

    <div className="md:hidden">
      <button className="px-3 py-2 rounded-lg border border-white/10">Menu</button>
    </div>
  </header>

  {/* Hero */}
  <main className="relative z-10">
    <section className="min-h-[78vh] flex items-center max-w-7xl mx-auto px-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/40 border border-white/5 backdrop-blur">BRAND</span>
            <span className="text-xs text-slate-400">Digital craftsmanship</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
            <span className="block md:inline bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#06b6d4] drop-shadow-[0_10px_30px_rgba(99,102,241,0.12)]">Mastery</span>
            <span className="block md:inline ml-0 md:ml-4 text-3xl md:text-5xl font-[900] italic">&nbsp;of Precision</span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-xl">A bold fusion of cyberpunk neon and samurai restraint — we craft interfaces with razor focus, kinetic motion, and cinematic presence.</p>

          <div className="mt-8 flex gap-4">
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold bg-gradient-to-r from-[#00e5ff] to-[#ff2d55] text-black shadow-xl transform hover:-translate-y-0.5 transition">Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>

            <a href="#" className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold border border-white/10 text-slate-200/90 bg-black/20 backdrop-blur hover:scale-[1.02] transition">Explore Showcase</a>
          </div>

          {/* Feature badges */}
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-400">
            <span className="px-3 py-2 rounded-md bg-black/30 border border-white/5">Cinematic Motion</span>
            <span className="px-3 py-2 rounded-md bg-black/30 border border-white/5">Neon Systems</span>
            <span className="px-3 py-2 rounded-md bg-black/30 border border-white/5">Responsive & Fast</span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="md:col-span-5 relative flex items-center justify-center">
          <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-br from-[#0b0228] to-[#0b0620] rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Neon skyline backdrop */}
            <div className="absolute inset-0 -z-10 opacity-80" aria-hidden>
              <svg className="w-full h-full" viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#6b21a8" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="800" height="1000" fill="url(#g1)" opacity="0.06" />
              </svg>
            </div>

            {/* Samurai silhouette (SVG) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 600 800" className="w-[260px] h-[360px] -translate-y-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blade" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9"/>
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </feMerge>
                </filter>
                </defs>

                {/* simplified silhouette: replaceable */}
                <path d="M300 90 C270 120 250 180 250 260 C250 360 200 420 190 540 C180 660 230 700 320 700 C410 700 460 660 450 540 C440 420 390 360 390 260 C390 180 370 120 340 90 C320 70 280 70 300 90Z" fill="#060814" />

                {/* Katana blade */}
                <g filter="url(#glow)">
                  <path d="M330 150 L520 110" stroke="url(#blade)" strokeWidth="6" strokeLinecap="round" />
                  <path d="M328 156 L518 116" stroke="#ff2d55" strokeWidth="1.5" opacity="0.45" strokeLinecap="round"/>
                </g>
              </svg>
            </div>

            {/* Particle / smoke */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"/>

          </div>
        </div>
      </div>
    </section>

    {/* Showcase / Services */}
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h3 className="text-sm text-slate-400 uppercase tracking-wider">Services</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Design Systems','Motion & Interactions','Product Strategy'].map((t,i)=> (
          <article key={t} className="rounded-2xl p-6 bg-gradient-to-br from-black/40 to-transparent border border-white/5 backdrop-blur hover:scale-[1.02] transition-shadow shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 border border-white/5">
              <div className="w-7 h-7 bg-gradient-to-tr from-[#06b6d4] to-[#8b5cf6] rounded-sm" />
            </div>
            <h4 className="text-lg font-semibold">{t}</h4>
            <p className="mt-3 text-sm text-slate-400">High-fidelity systems, modular tokens, and pixel-perfect components tuned for speed and accessibility.</p>
            <div className="mt-4">
              <a className="text-sm inline-flex items-center gap-2 font-medium text-[#06b6d4] hover:underline">Explore <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/3 text-slate-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#ff2d55] flex items-center justify-center shadow"> 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="#07102a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div className="text-sm font-semibold">Neo-Samurai Studio</div>
            <div className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved</div>
          </div>
        </div>

        <div className="text-sm text-slate-400">Crafted with precision • <span className="text-slate-300">Dojo HQ</span></div>
      </div>
    </footer>
  </main>

  {/* Custom styles (glow animations) */}
  <style>{`
    @keyframes neonFloat {
      0% { transform: translateY(0px) }
      50% { transform: translateY(-6px) }
      100% { transform: translateY(0px) }
    }

    h1 span:first-child {
      animation: neonFloat 4s ease-in-out infinite;
    }

    /* subtle grain */
    body::after {
      content: '';
      pointer-events: none;
      position: fixed;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px);
      background-size: 3px 3px;
      mix-blend-mode: overlay;
    }
  `}</style>
</div>

); }
