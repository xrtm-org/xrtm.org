import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="AI for event forecasting"
      description="XRTM runs event-forecasting workflows from the command line."
    >
      <main style={{ maxWidth: 720, margin: '4rem auto', padding: '0 1.5rem' }}>
        <p style={{ color: 'var(--ifm-color-primary)', fontWeight: 600, margin: 0 }}>
          xrtm v0.9.1
        </p>
        <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>
          AI for event forecasting
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: 1.6 }}>
          Run forecasts from the command line using any OpenAI-compatible endpoint.
          Open-source. Apache 2.0.
        </p>

        <div style={{ margin: '2rem 0', background: 'var(--ifm-code-background)', borderRadius: 8, padding: '1.5rem' }}>
          <code style={{ display: 'block', marginBottom: '0.5rem' }}>$ export OPENAI_API_KEY="sk-..."</code>
          <code style={{ display: 'block', marginBottom: '0.5rem' }}>$ pip install xrtm</code>
          <code style={{ display: 'block', color: 'var(--ifm-color-emphasis-600)' }}>
            $ xrtm start --limit 5
          </code>
          <code style={{ display: 'block', color: 'var(--ifm-color-emphasis-600)' }}>
            Forecast complete · Brier 0.089 · 5 questions · runs/20260607T004903Z/
          </code>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/framework">
            Framework Docs
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {[
            { title: 'Real forecasts', desc: 'Uses any OpenAI-compatible endpoint. DeepSeek, OpenAI, Anthropic, local servers.' },
            { title: 'Scored & auditable', desc: 'Brier score, ECE, log score. Full reasoning traces. 11 artifacts per run.' },
            { title: 'Framework underneath', desc: 'pip install xrtm-forecast for agents, topologies, providers in Python.' },
            { title: 'Real question sources', desc: 'Built-in corpus, Polymarket, Metaculus. Web search via Tavily.' },
            { title: 'CI-tested', desc: 'Every commit smoke-tested. Mock provider for fast CI validation.' },
            { title: 'Lean & open', desc: 'Apache 2.0. 5 packages. Python 3.11+. pip install xrtm.' },
          ].map((card) => (
            <div key={card.title} style={{ padding: '1rem', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8 }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>{card.title}</h3>
              <p style={{ margin: 0, color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
