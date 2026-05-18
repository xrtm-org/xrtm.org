import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const audienceCards = [
  {
    title: 'Run pre-built forecast paths',
    audience: 'For bettors and decision-makers',
    description:
      'Start from a local template, frame a market-style or business question, and inspect the forecast result, evidence, and reasoning trace before acting.',
    cta: 'Open the quickstart',
    href: '/docs/getting-started',
  },
  {
    title: 'Design in the drag-and-drop Studio',
    audience: 'For researchers and builders',
    description:
      'Wire safe built-in nodes into reusable workflows, validate them, and send candidates into Playground without leaving the visual authoring loop.',
    cta: 'Explore workflows',
    href: '/docs/workflows/researcher-model-eval',
  },
  {
    title: 'Keep decisions inspectable',
    audience: 'For operators and teams',
    description:
      'Use Observatory and run artifacts to compare candidates, preserve context, and review what changed across local forecasting sessions.',
    cta: 'Read the runbook',
    href: '/docs/workflows/operator-runbook',
  },
];

const personaCards = [
  {
    title: 'Market bettor edge',
    eyebrow: 'Prediction markets',
    description:
      'Frame market-style questions, compare evidence against current assumptions, and inspect the reasoning behind each probability.',
    signals: ['Odds drift', 'Base rates', 'Resolution criteria'],
  },
  {
    title: 'Business decision edge',
    eyebrow: 'Strategic decisions',
    description:
      'Turn operational uncertainty into scenario ranges, risk indicators, and artifact-backed decisions your team can review.',
    signals: ['Risk bands', 'Scenario ranges', 'Decision memo'],
  },
];

const proofStats = [
  { label: 'Published product', value: 'xrtm 0.8.5' },
  { label: 'Default first run', value: 'Provider-free' },
  { label: 'Core surfaces', value: 'Studio · Playground · Observatory' },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Agentic forecasting for real-world outcomes"
      description="XRTM is a local-first visual workspace for designing forecast paths, inspecting reasoning traces, and evaluating probabilistic decisions."
    >
      <main className={styles.page}>
        <div aria-hidden="true" className={styles.backdrop}>
          <div className={styles.dataMesh} />
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className={styles.orbPrimary}
            initial={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className={styles.orbSecondary}
            initial={{ opacity: 0, scale: 0.96 }}
            transition={{ delay: 0.1, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <section className={styles.hero}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.eyebrow}>Published xrtm 0.8.5 workspace</p>
            <h1 className={styles.title}>Stop guessing. Start forecasting.</h1>
            <p className={styles.lead}>
              Design, evaluate, and reuse multi-agent probabilistic workflows to seek a calibrated edge in
              prediction markets, business risk, and strategic decisions.
            </p>
            <div className={styles.actions}>
              <Link className={`button button--primary button--lg ${styles.primaryButton}`} to="/docs/getting-started">
                Launch local workspace (free)
              </Link>
              <Link
                className={`button button--secondary button--lg ${styles.secondaryButton}`}
                to="/docs/workflows/researcher-model-eval"
              >
                View demo workflows
              </Link>
            </div>
            <div className={styles.proofStrip} aria-label="Release proof">
              {proofStats.map((item) => (
                <span key={item.label}>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            animate={{ opacity: 1, x: 0, rotateX: 0, rotateY: 0 }}
            aria-label="XRTM Playground visual workspace preview"
            className={styles.productFrame}
            initial={{ opacity: 0, x: 26, rotateX: 4, rotateY: -6 }}
            transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.windowBar}>
              <span />
              <span />
              <span />
              <strong>Playground · forecast path running</strong>
              <div className={styles.utilityIcons} aria-hidden="true">
                <i>Model</i>
                <i>Path</i>
                <i>Eval</i>
              </div>
            </div>
            <div className={styles.workspacePreview}>
              <div className={styles.visualPane}>
                <div className={styles.pathNode}>
                  <span>Forecast request</span>
                  <strong>Predict US Fed interest-rate change — Q3</strong>
                </div>
                <div className={styles.agentCluster} aria-label="Collaborating forecast agents">
                  <div className={styles.agentChip}>
                    <span>News signal</span>
                    <strong>Policy + market context</strong>
                  </div>
                  <div className={styles.agentChip}>
                    <span>Consensus</span>
                    <strong>FOMC + analyst views</strong>
                  </div>
                  <div className={styles.agentChip}>
                    <span>Sentiment</span>
                    <strong>Uncertainty drivers</strong>
                  </div>
                </div>
                <div className={`${styles.pathNode} ${styles.pathNodeActive}`}>
                  <span>Forecast result</span>
                  <strong>72% likely · YES</strong>
                </div>
                <div className={styles.distributionCard}>
                  <span>Probability distribution</span>
                  <div className={styles.distributionBars}>
                    <i style={{ height: '32%' }} />
                    <i style={{ height: '58%' }} />
                    <i style={{ height: '86%' }} />
                    <i style={{ height: '64%' }} />
                    <i style={{ height: '42%' }} />
                  </div>
                  <small>Agent agreement: 3 / 4</small>
                </div>
                <svg className={styles.pathLines} viewBox="0 0 100 100" role="presentation">
                  <path d="M28 20 C 38 26, 44 31, 54 36" />
                  <path d="M63 55 C 70 61, 75 67, 81 75" />
                  <path d="M42 72 C 54 74, 62 77, 75 81" />
                </svg>
              </div>
              <div className={styles.tracePane}>
                <p className={styles.traceTitle}>Reasoning trace</p>
                <div className={styles.traceStep}>
                  <span>01</span>
                  <p>Parallel agents gathered rates, policy context, and market assumptions.</p>
                </div>
                <div className={styles.traceStep}>
                  <span>02</span>
                  <p>Consensus check exposed two high-impact uncertainty drivers.</p>
                </div>
                <div className={styles.traceStep}>
                  <span>03</span>
                  <p>Saved probability range, agreement score, artifacts, and comparison metadata.</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </section>

        <section className={styles.personaSection} aria-label="Audience edges">
          <div className={styles.personaGrid}>
            {personaCards.map((card) => (
              <article className={styles.personaCard} key={card.title}>
                <div>
                  <span>{card.eyebrow}</span>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <div className={styles.signalRow} aria-label={`${card.title} signals`}>
                  {card.signals.map((signal) => (
                    <small key={signal}>{signal}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className={styles.trustSection}
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.sectionCopy}>
            <p className={styles.eyebrow}>Calibration & validation</p>
            <h2>Calibration evidence, not just confident answers.</h2>
            <p>
              XRTM keeps Brier scoring, run artifacts, and historical comparisons close to the workflow so you can
              measure forecast quality instead of trusting a black-box answer.
            </p>
          </div>
          <div className={styles.calibrationCard} aria-label="Calibration curve preview">
            <div className={styles.chartHeader}>
              <span>Observatory calibration</span>
              <strong>Tracked per run</strong>
            </div>
            <svg className={styles.calibrationChart} viewBox="0 0 420 220" role="presentation">
              <line x1="48" x2="380" y1="176" y2="176" />
              <line x1="48" x2="48" y1="28" y2="176" />
              <path className={styles.referenceLine} d="M52 172 L374 36" />
              <path className={styles.calibrationLine} d="M52 168 C 112 146, 142 122, 198 116 C 254 110, 300 72, 374 42" />
              <circle cx="52" cy="168" r="5" />
              <circle cx="198" cy="116" r="5" />
              <circle cx="374" cy="42" r="5" />
            </svg>
            <div className={styles.validationGrid}>
              <span>
                <strong>Brier score</strong>
                <small>Tracked, not guessed</small>
              </span>
              <span>
                <strong>Run artifacts</strong>
                <small>Evidence + trace retained</small>
              </span>
              <span>
                <strong>Release claims</strong>
                <small>Checked against xrtm 0.8.5</small>
              </span>
            </div>
            <p>Compare confidence to outcomes, then refine the forecast path that produced them.</p>
          </div>
        </motion.section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Choose your door</p>
            <h2>One workspace, three ways to start.</h2>
          </div>
          <div className={styles.audienceGrid}>
            {audienceCards.map((card) => (
              <Link className={styles.audienceCard} key={card.title} to={card.href}>
                <span>{card.audience}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <strong>{card.cta}</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.engineSection}>
          <div className={styles.sectionCopy}>
            <p className={styles.eyebrow}>Local-first engine</p>
            <h2>Beautiful workspace on top, robust Python framework underneath.</h2>
            <p>
              Developers still get the explicit package stack and CLI surface. The default first-success path is
              provider-free; OpenAI-compatible endpoints and coding-agent CLI contracts remain the supported runtime
              categories when you intentionally validate those paths.
            </p>
          </div>
          <div className={styles.terminalCard}>
            <code>python3.11 -m venv .venv</code>
            <code>. .venv/bin/activate</code>
            <code>pip install xrtm==0.8.5</code>
            <code>xrtm start --runs-dir runs</code>
            <code>xrtm web --runs-dir runs</code>
          </div>
        </section>
      </main>
    </Layout>
  );
}
