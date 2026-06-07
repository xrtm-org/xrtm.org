import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Terminal from '../components/Terminal';
import styles from './index.module.css';

const FEATURES = [
  { title: 'Zero-config first run', desc: 'xrtm start with no API keys. Hash-derived probabilities prove the pipeline works before you add cost.' },
  { title: 'OpenAI-compatible', desc: 'DeepSeek, Anthropic, local llama.cpp. One provider, any endpoint that speaks the OpenAI Chat API.' },
  { title: 'Scored & auditable', desc: 'Brier score, ECE, log score. Full reasoning traces with causal DAGs. 8+ artifacts per run.' },
  { title: 'Framework underneath', desc: 'pip install xrtm-forecast for composable agents, topologies, and providers in Python.' },
  { title: 'Real question sources', desc: 'Built-in 21-question corpus, Polymarket, Metaculus. Web search via Tavily.' },
  { title: 'Lean & open', desc: 'Apache 2.0. 5 packages. Python 3.11+. No GPU. No Docker.' },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout title="AI for event forecasting" description="XRTM runs event-forecasting workflows. Deterministic by default, OpenAI-compatible for real LLMs.">
      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.eyebrow}>xrtm v0.9.0</p>
        <h1 className={styles.title}>AI for event forecasting</h1>
        <p className={styles.lead}>
          Run probabilistic forecasts from the command line. Deterministic baseline with zero API keys.
          Plug in any OpenAI-compatible endpoint for real LLM forecasts.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">Get Started</Link>
          <Link className="button button--secondary button--lg" to="/docs/framework">Framework Docs</Link>
        </div>
      </div>

      {/* Terminal */}
      <div className={styles.terminal}>
        <Terminal />
      </div>

      {/* How It Works */}
      <div className={styles.howItWorks}>
        <h2 className={styles.howTitle}>How it works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepTitle}>Install</div>
            <div className={styles.stepDesc}>pip install xrtm. No GPU, no Docker, no API keys needed for the baseline.</div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepTitle}>Forecast</div>
            <div className={styles.stepDesc}>xrtm start runs a linear pipeline: load questions → forecast → score → backtest → report.</div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepTitle}>Inspect</div>
            <div className={styles.stepDesc}>xrtm runs show --latest prints Brier scores, reasoning traces, and all artifacts.</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className={styles.features}>
        <h2 className={styles.featuresTitle}>Features</h2>
        <div className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <div className={styles.featureCard} key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Ready to try?</h2>
        <Link className="button button--primary button--lg" to="/docs/getting-started">
          Get Started in 30 Seconds
        </Link>
      </div>
    </Layout>
  );
}
