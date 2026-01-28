import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="relative w-full overflow-hidden bg-transparent py-24">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[12rem] md:text-[20vw] font-black text-slate-900/[0.05] dark:text-white/[0.05] tracking-tighter whitespace-nowrap translate-y-1/4">
          x<span className="inline-block" style={{ transform: 'scaleX(-1)' }}>R</span>tm
        </h1>
      </div>

      <div className="container relative z-10 px-6">

        {/* Copyright */}
        <div className="border-t border-zinc-200 dark:border-white/10 pt-8 mt-8">
          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} xrtm
          </p>
        </div>
      </div>
    </footer>
  );
}
