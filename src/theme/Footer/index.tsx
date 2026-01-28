import React from 'react';
import Link from '@docusaurus/Link';

export default function Footer(): JSX.Element {
  return (
    <footer className="relative w-full overflow-hidden bg-transparent py-24">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[12rem] md:text-[20vw] font-black text-slate-900/[0.05] dark:text-white/[0.05] tracking-tighter whitespace-nowrap translate-y-1/4">
          x<span className="inline-block" style={{ transform: 'scaleX(-1)' }}>R</span>tm
        </h1>
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Philosophy */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
              Philosophy
            </h4>
            <Link to="/docs/philosophy/manifesto" className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors no-underline">
              Manifesto
            </Link>
          </div>

          {/* Column 2: Standard */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
              Standard
            </h4>
            <Link to="/docs/standard/intro" className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors no-underline">
              Governance
            </Link>
            <Link to="/docs/standard/forecast-object" className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors no-underline">
              Forecast Object
            </Link>
          </div>

          {/* Column 3: Framework */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
              Framework
            </h4>
            <Link to="/docs/framework/intro" className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors no-underline">
              The Stack
            </Link>
            <Link to="/docs/framework/roadmap" className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors no-underline">
              Roadmap
            </Link>
          </div>

          {/* Column 4: Community */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
              Community
            </h4>
            <a href="https://github.com/xrtm-org" className="text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors no-underline">
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-200 dark:border-white/10 pt-8">
          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} xrtm
          </p>
        </div>
      </div>
    </footer>
  );
}
