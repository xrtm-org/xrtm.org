import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const shellCard =
  'rounded-3xl border border-black/10 bg-white/80 p-6 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/30';
const subtleCard =
  'rounded-3xl border border-black/5 bg-white/60 p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-zinc-950/50 dark:shadow-black/20';
const pillClass =
  'rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-slate-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-slate-200';

const proofPills = [
  'Provider-free first success',
  'Artifact-backed runs',
  'HTML report',
  'WebUI + TUI',
  'Brier + calibration metrics',
  'Profiles, compare, export',
];

const reasons = [
  {
    title: 'Know what happened, not just what was said',
    description:
      'Every run writes canonical artifacts to disk so you can inspect the forecast payloads, scores, events, reports, and logs after the model finishes.',
  },
  {
    title: 'Start local by default',
    description:
      'The first released proof uses the built-in mock provider. You can prove the workflow end to end without API keys, model downloads, or a hosted control plane.',
  },
  {
    title: 'Evaluate forecasting systems, not chat demos',
    description:
      'XRTM focuses on probabilistic workflows: scored runs, calibration-aware evaluation, historical replay, and repeatable local operator paths.',
  },
];

const defaultStory = [
  {
    title: 'Run the guided first command',
    description:
      'Use xrtm start to run the released health check, create the initial scored run directory, and print the exact next commands.',
    command: `xrtm start`,
    href: '/docs/getting-started#2-run-the-guided-first-command',
  },
  {
    title: 'Inspect the newest run',
    description:
      'Use the released latest-run helpers to inspect the canonical artifact directory and regenerate the HTML report from the same saved evidence.',
    command: `xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs`,
    href: '/docs/getting-started#3-inspect-the-run-artifacts',
  },
  {
    title: 'Browse the same run in WebUI or TUI',
    description:
      'Open the run in the local browser view or terminal cockpit without changing the underlying artifact format.',
    command: `xrtm web --runs-dir runs
xrtm tui --runs-dir runs`,
    href: '/docs/getting-started#4-browse-the-results',
  },
  {
    title: 'Choose your next path',
    description:
      'Move from the default proof-of-workflow into researcher, operator, team, or developer docs depending on what you need next.',
    command: `Researcher / model-eval first
then operator, team, developer`,
    href: '/docs/workflows/researcher-model-eval',
  },
];

const audiences = [
  {
    title: 'Researcher / model-eval',
    description:
      'Run repeatable local passes, compare outputs, review Brier and calibration signals, and keep the evidence on disk.',
    href: '/docs/workflows/researcher-model-eval',
  },
  {
    title: 'Operator',
    description:
      'Create profiles, manage run directories, inspect artifacts, use monitoring, and bring up the WebUI or TUI for daily operations.',
    href: '/docs/workflows/operator-runbook',
  },
  {
    title: 'Team',
    description:
      'Use shared conventions, exports, and run history honestly today while keeping built-in multi-user features clearly out of scope.',
    href: '/docs/workflows/team-workflows',
  },
  {
    title: 'Developer / integrator',
    description:
      'Start from the shipped CLI path, then drop into package APIs, providers, and example scripts when you need custom integration.',
    href: '/docs/workflows/developer-integrator',
  },
];

const packageRows = [
  {
    name: 'xrtm',
    role: 'Product shell',
    description:
      'Provider-free first success, canonical artifacts, HTML reports, WebUI, TUI, profiles, compare/export, and local monitoring.',
  },
  {
    name: 'xrtm-forecast',
    role: 'Runtime package',
    description:
      'Forecasting agents, orchestration, inference providers, and example reasoning workflows.',
  },
  {
    name: 'xrtm-eval',
    role: 'Evaluation package',
    description: 'Brier scoring, calibration-focused evaluation, and verification utilities.',
  },
  {
    name: 'xrtm-data',
    role: 'Data package',
    description: 'Schemas and temporal snapshot foundations for zero-leakage evaluation.',
  },
  {
    name: 'xrtm-train',
    role: 'Training package',
    description:
      'Backtesting, replay, calibration demos, and optimization loops built on the rest of the stack.',
  },
];

const quickstart = [
  'python3.11 -m venv .venv',
  '. .venv/bin/activate',
  'pip install xrtm==0.3.1',
  'xrtm start',
  'xrtm runs show latest --runs-dir runs',
  'xrtm artifacts inspect --latest --runs-dir runs',
  'xrtm report html --latest --runs-dir runs',
  'xrtm web --runs-dir runs',
].join('\n');

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Local-first forecasting and model-eval workbench"
      description="Run forecasting workflows locally, inspect every artifact, and review results in the browser or terminal."
    >
      <main className="flex flex-col gap-20 px-6 pb-24 pt-10 selection:bg-blue-500/20 md:px-8">
        <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300">
              Local-first forecasting and model-eval workbench
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">
                Forecast locally. Score rigorously. Inspect everything.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300 md:text-xl">
                XRTM gives newcomers a clear product path: run the released guided first
                command, inspect the newest run artifacts, browse the same run in the WebUI
                or TUI, then choose the audience workflow that fits next.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="button button--primary button--lg" to="/docs/getting-started">
                Start with getting started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/workflows/researcher-model-eval"
              >
                Browse researcher workflow
              </Link>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              Local-LLM mode is supported, but it is intentionally optional and secondary. The default
              first run is the released provider-free path so you can prove the workflow before adding
              model-serving complexity.
            </p>
          </div>

          <div className={shellCard}>
            <div className="mb-4 flex items-center justify-between text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Default first run</span>
              <span className="font-mono">start → inspect → Web/TUI</span>
            </div>
            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-100 shadow-inner shadow-black/20">
              <code>{quickstart}</code>
            </pre>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              This path proves the product with shipped features only: the guided first-run
              flow, deterministic local execution, scored run artifacts, and a browser or
              terminal view over the same saved run directory.
            </p>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-wrap gap-3">
          {proofPills.map((pill) => (
            <span key={pill} className={pillClass}>
              {pill}
            </span>
          ))}
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Why XRTM
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              A forecasting workbench, not a philosophy puzzle.
            </h2>
            <p className="text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg">
              The homepage leads with what XRTM is, why someone would use it, and what they can
              prove today. Philosophy and package internals remain available, but they no longer block
              the first-run story.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className={subtleCard}>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              What you can do today
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              Follow the shipped newcomer path end to end.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {defaultStory.map((step, index) => (
              <Link key={step.title} to={step.href} className="no-underline hover:no-underline">
                <div className={`${subtleCard} h-full transition-transform duration-200 hover:-translate-y-1`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {step.description}
                  </p>
                  <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm leading-7 text-slate-100">
                    <code>{step.command}</code>
                  </pre>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Audience paths
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              Researcher / model-eval first, then operator, team, and developer.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {audiences.map((audience) => (
              <Link key={audience.title} to={audience.href} className="no-underline hover:no-underline">
                <div className={`${subtleCard} h-full transition-transform duration-200 hover:-translate-y-1`}>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {audience.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-blue-600 dark:text-blue-300">
                    Open path →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Packages and architecture
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              The product shell is first-run; the package stack sits underneath it.
            </h2>
            <p className="text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg">
              Newcomers should not need package taxonomy to reach first success, but the package
              boundaries are real and documented once you are ready to go deeper.
            </p>
          </div>
          <div className="grid gap-4">
            {packageRows.map((row) => (
              <div
                key={row.name}
                className={`${subtleCard} md:grid md:grid-cols-[0.9fr_0.8fr_2fr] md:items-start md:gap-6`}
              >
                <div>
                  <p className="font-mono text-lg font-semibold text-slate-950 dark:text-white">
                    {row.name}
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 md:mt-0">
                  {row.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300 md:mt-0">
                  {row.description}
                </p>
              </div>
            ))}
          </div>
          <div className={subtleCard}>
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              Keep philosophy and roadmap secondary
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-300">
              The philosophy, standard, and roadmap still matter, but they now live behind the product
              path instead of replacing it. Start with getting started and the docs overview, then go
              deeper once you understand the shipped workflow.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="button button--secondary button--sm" to="/docs">
                Docs overview
              </Link>
              <Link className="button button--secondary button--sm" to="/docs/examples">
                Examples and proof
              </Link>
              <Link className="button button--secondary button--sm" to="/docs/roadmap">
                Roadmap
              </Link>
              <Link className="button button--secondary button--sm" to="/docs/philosophy/manifesto">
                Philosophy
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
