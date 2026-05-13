import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const routeLinks = [
  {
    title: 'Model evaluation',
    href: '/docs/workflows/researcher-model-eval',
    description: 'Compare runs, inspect evidence, and review model behavior.',
  },
  {
    title: 'Run operations',
    href: '/docs/workflows/operator-runbook',
    description: 'Monitor saved runs, artifacts, and operational follow-up.',
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
      description="A calm entry point to the released XRTM path: get a real run, inspect it, and continue into evaluation, operations, or integration work."
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
            <p className={styles.eyebrow}>Released today</p>
            <h1 className={styles.title}>
              Forecast events with evidence you can review.
            </h1>
            <p className={styles.lead}>
              XRTM gives you a clean starting point: get a real run on disk, inspect what
              happened, and continue with the workflow that fits your role.
            </p>
            <p className={styles.support}>
              Start with the published guide, run <code>xrtm start</code>, then open the
              saved run in the WebUI or TUI before you go deeper.
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
              Continue into the route that matches what you want to do next.
            </p>
          </motion.div>

          <motion.aside
            animate={{ opacity: 1, x: 0 }}
            className={styles.storyCard}
            initial={{ opacity: 0, x: 24 }}
            transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.storyEyebrow}>Released first step</p>
            <div className={styles.storyCommand}>
              <code>xrtm start</code>
            </div>
            <ul className={styles.storyList}>
              <li>Install the released package.</li>
              <li>Run the guided first path.</li>
              <li>Review the saved run in the WebUI or TUI.</li>
            </ul>
            <p className={styles.storyFootnote}>
              From there, move into model evaluation, operations, or integration work.
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
