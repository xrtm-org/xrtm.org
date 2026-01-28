import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const Visuals = {
    Posterior: () => (
        <svg viewBox="0 0 100 60" className="w-full h-full text-blue-500/80 stroke-current" fill="none" strokeWidth="2">
            <path d="M10 50 C 30 50, 40 10, 50 10 C 60 10, 70 50, 90 50" />
            <path d="M10 50 L 90 50" className="text-slate-200 dark:text-slate-800" strokeWidth="1" />
        </svg>
    ),
    Matrix: () => (
        <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-2 opacity-80">
            {[...Array(12)].map((_, i) => (
                <div key={i} className={`rounded-sm ${i % 3 === 0 ? 'bg-purple-500' : 'bg-slate-200 dark:bg-slate-800'}`} />
            ))}
        </div>
    ),
    Scatter: () => (
        <svg viewBox="0 0 100 60" className="w-full h-full text-emerald-500/80 fill-current">
            <circle cx="20" cy="40" r="3" />
            <circle cx="40" cy="30" r="3" />
            <circle cx="60" cy="20" r="3" />
            <circle cx="80" cy="10" r="3" />
            <line x1="10" y1="50" x2="90" y2="5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
        </svg>
    ),
    Network: () => (
        <svg viewBox="0 0 100 60" className="w-full h-full text-pink-500/80 stroke-current" fill="none" strokeWidth="2">
            <circle cx="20" cy="30" r="4" fill="currentColor" className="stroke-none" />
            <circle cx="50" cy="15" r="4" fill="currentColor" className="stroke-none" />
            <circle cx="50" cy="45" r="4" fill="currentColor" className="stroke-none" />
            <circle cx="80" cy="30" r="4" fill="currentColor" className="stroke-none" />
            <path d="M20 30 L 50 15 M 20 30 L 50 45 M 50 15 L 80 30 M 50 45 L 80 30" opacity="0.5" />
        </svg>
    )
};

const Components = [
    {
        title: 'xrtm-forecast',
        description: 'Bayesian Runtime. Causal graphs for probabilistic reasoning.',
        visual: <Visuals.Posterior />,
    },
    {
        title: 'xrtm-data',
        description: 'Snapshot Vault. Zero-leakage historical state.',
        visual: <Visuals.Matrix />,
    },
    {
        title: 'xrtm-eval',
        description: 'Rigorous Scoring. Proper scoring rules (Brier, Log-Loss).',
        visual: <Visuals.Scatter />,
    },
    {
        title: 'xrtm-train',
        description: 'Simulation Loop. Backtesting as a first-class citizen.',
        visual: <Visuals.Network />,
    },
];

function Hero() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[50vh] text-center px-6 overflow-hidden mt-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto space-y-6"
            >
                <h1 className="hero__title text-6xl md:text-8xl font-black tracking-tight mb-6">
                    x<span className="reflected-r">R</span>tm
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
                    True intelligence is not recall. It is prediction.
                </p>
            </motion.div>
        </div>
    );
}

function Grid() {
    return (
        <section className="py-20 w-full px-6">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Components.map((comp, idx) => (
                        <GlassCard key={idx} className="flex flex-col h-64 justify-between">
                            <div className="w-full h-24 mb-6 p-2">
                                {comp.visual}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-mono text-lg font-bold text-slate-900 dark:text-white">
                                    {comp.title}
                                </h3>
                                <p className="text-l text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                    {comp.description}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}
            noFooter={false}>
            <main className="flex flex-col w-full selection:bg-blue-500/20">
                <Hero />
                <Grid />
            </main>
        </Layout>
    );
}
