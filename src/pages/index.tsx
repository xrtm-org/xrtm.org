import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const canvasNodes = [
  { label: 'Hub', detail: '/ and /hub', x: 8, y: 19 },
  { label: 'Studio', detail: 'bounded graph IDE', x: 38, y: 10 },
  { label: 'Playground', detail: 'trace preview', x: 66, y: 25 },
  { label: 'Observatory', detail: 'run inspector', x: 34, y: 51 },
  { label: 'Workbench', detail: 'compatibility', x: 72, y: 60 },
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
      description="A polished entry point to the released XRTM 0.8.4 guide and local Hub, Studio, Playground, and Observatory shell."
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
            <p className={styles.eyebrow}>Published 0.8.4 path</p>
            <h1 className={styles.title}>
              Forecasting work, made inspectable.
            </h1>
            <p className={styles.lead}>
              XRTM turns local event-forecasting runs into artifacts you can open,
              review, and compare without turning the first session into a platform
              migration.
            </p>
            <p className={styles.support}>
              The published docs stay pinned to <strong>xrtm 0.8.4</strong>:
              start with the guide, choose a CLI-led or WebUI-led first-success
              path, inspect the saved run, then use the local WebUI shell:
              Hub at <code>/</code> and <code>/hub</code>, Studio at{' '}
              <code>/studio</code>, Playground, Observatory at{' '}
              <code>/observatory</code>, Operations, run detail, compare, and
              <code>/workbench</code> compatibility.
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
            aria-label="XRTM 0.8.4 released Hub, Studio, Playground, and Observatory shell"
            className={styles.workbenchCard}
            initial={{ opacity: 0, x: 24 }}
            transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.previewHeader}>
              <p className={styles.storyEyebrow}>Published in 0.8.4</p>
              <span className={styles.previewPill}>Hub · Studio · Playground · Observatory</span>
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
              <span>Released 0.8.4 scope</span>
              <div className={styles.editRows}>
                <span>Hub first-run and templates</span>
                <span>Studio bounded graph authoring</span>
                <span>Playground trace and Observatory inspection</span>
              </div>
            </div>
            <p className={styles.storyFootnote}>
              The released WebUI is a React/TypeScript app shell backed by the
              local Python API and SQLite app-state. Studio is a bounded graph
              IDE over the existing workflow schema and built-in node catalog;
              Playground adds graph/canvas preview, ordered node trace, and an
              honest no-trace fallback; Observatory is the run inspector.
              The baseline stays provider-free, <code>/workbench</code> remains
              compatibility, and this is not a calibration dashboard,
              API/webhook control plane, arbitrary code/plugin graph editor,
              or full persistent collaborative canvas.
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
