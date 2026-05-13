import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const routeLinks = [
  {
    title: 'Researcher',
    href: '/docs/workflows/researcher-model-eval',
  },
  {
    title: 'Operator runbook',
    href: '/docs/workflows/operator-runbook',
  },
  {
    title: 'Developer / integrator',
    href: '/docs/workflows/developer-integrator',
  },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="AI for event forecasting"
      description="A minimal entry point to the released XRTM journey: start once, inspect the run, then choose the next path."
    >
      <main className="px-6 pb-24 pt-16 selection:bg-blue-500/20 md:px-8 md:pt-24">
        <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300">
              XRTM
            </p>
            <h1 className="text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">
              Forecast real events.
              <br />
              Start simple.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 md:text-xl">
              One released path. Install <code>xrtm</code>, run <code>xrtm start</code>, inspect
              the saved run, then decide what to do next.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="button button--primary button--lg" to="/docs/getting-started">
                Start
              </Link>
              <Link className="button button--secondary button--lg" to="https://github.com/xrtm-org/xrtm">
                GitHub
              </Link>
            </div>
            <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
              After first success, choose one route.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              {routeLinks.map((route) => (
                <Link key={route.title} to={route.href} className="text-slate-700 no-underline hover:text-blue-600 hover:no-underline dark:text-slate-300 dark:hover:text-blue-300">
                  {route.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
