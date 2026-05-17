import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const canvasNodes = [
  { label: 'Overview', detail: 'resume next step', x: 8, y: 19 },
  { label: 'Runs', detail: 'canonical history', x: 38, y: 10 },
  { label: 'Draft', detail: 'SQLite app state', x: 66, y: 25 },
  { label: 'Authoring', detail: 'safe graph edits', x: 34, y: 51 },
  { label: 'Compare', detail: 'baseline delta', x: 72, y: 60 },
];

const routeLinks = [
  {
    title: 'Model evaluation',
    href: '/docs/workflows/researcher-model-eval',
    description: 'Compare runs, inspect evidence, and understand model behavior.',
  },
  {
    title: 'Run operations',
    href: '/docs/workflows/operator-runbook',
    description: 'Keep saved runs, artifacts, and follow-up decisions organized.',
  },
  {
    title: 'Integrations',
    href: '/docs/workflows/developer-integrator',
    description: 'Bring xrtm into services, tools, and team workflows.',
  },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="AI for event forecasting"
      description="A polished entry point to the released XRTM 0.8.3 guide, local WebUI shell, and bounded playground."
    >
      <main className={styles.page}>
        <div aria-hidden="true" className={styles.backdrop}>
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
            className={styles.copyColumn}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.eyebrow}>Published 0.8.3 path</p>
            <h1 className={styles.title}>
              Forecasting work, made inspectable.
            </h1>
            <p className={styles.lead}>
              XRTM turns local event-forecasting runs into artifacts you can open,
              review, and compare without turning the first session into a platform
              migration.
            </p>
            <p className={styles.support}>
              The published docs stay pinned to <strong>xrtm 0.8.3</strong>:
              start with the guide, choose a CLI-led or WebUI-led first-success
              path, inspect the saved run, then use the local WebUI shell
              (Overview, Start, Runs, Workflow detail, Operations, Workbench,
              Playground) for released safe workflow authoring inside the
              product schema/node library, the bounded exploratory sandbox, operator
              controls, linked run-detail or compare views, and clearer
              version/local-state trust cues.
            </p>
            <div className={styles.actions}>
              <Link className={`button button--primary button--lg ${styles.primaryButton}`} to="/docs/getting-started">
                Start with the guide
              </Link>
              <Link
                className={`button button--secondary button--lg ${styles.secondaryButton}`}
                to="https://github.com/xrtm-org/xrtm"
              >
                View GitHub
              </Link>
            </div>
            <p className={styles.routeIntro}>
              Then choose the path that matches the kind of review you need.
            </p>
          </motion.div>

          <motion.aside
            animate={{ opacity: 1, x: 0 }}
            aria-label="XRTM 0.8.3 released WebUI shell and playground"
            className={styles.workbenchCard}
            initial={{ opacity: 0, x: 24 }}
            transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.previewHeader}>
              <p className={styles.storyEyebrow}>Published in 0.8.3</p>
              <span className={styles.previewPill}>local WebUI shell + playground</span>
            </div>
            <div className={styles.canvasPreview}>
              <svg className={styles.canvasLines} viewBox="0 0 100 74" role="presentation">
                <path d="M20 28 C 31 20, 32 18, 38 19" />
                <path d="M49 20 C 58 21, 60 26, 66 34" />
                <path d="M45 60 C 53 61, 61 62, 72 67" />
                <path d="M74 37 C 76 45, 76 51, 78 60" />
              </svg>
              {canvasNodes.map((node, index) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.canvasNode}
                  initial={{ opacity: 0, y: 8 }}
                  key={node.label}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>{node.label}</span>
                  <small>{node.detail}</small>
                </motion.div>
              ))}
            </div>
            <div className={styles.safeEditPanel}>
                <span>Released 0.8.3 scope</span>
                <div className={styles.editRows}>
                  <span>scratch/template/clone</span>
                  <span>playground question-first</span>
                  <span>explicit save-back</span>
                </div>
              </div>
              <p className={styles.storyFootnote}>
                The released WebUI is a React/TypeScript app shell backed by the
                local Python API and SQLite app-state, with clearer
                version/local-only/history trust cues: safe workflow authoring
                from scratch/template/clone, core-field plus node/edge/entry
                edits, validate, run, compare, and `/playground` for one custom
                question first, read-only step inspection, and explicit
                save-back on the provider-free release baseline. Parallel-group
                and conditional-route editing remain thin, and this is not
                arbitrary graph, JSON, or code editing.
              </p>
          </motion.aside>
        </section>

        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className={styles.routeGrid}
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {routeLinks.map((route) => (
            <Link className={styles.routeCard} key={route.title} to={route.href}>
              <span className={styles.routeLabel}>{route.title}</span>
              <span className={styles.routeDescription}>{route.description}</span>
              <span className={styles.routeArrow}>Explore</span>
            </Link>
          ))}
        </motion.section>
      </main>
    </Layout>
  );
}
