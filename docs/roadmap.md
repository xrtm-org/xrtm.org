# Roadmap

:::info Page role
**Future-facing lane.** Use this page for planned or experimental work. If you
want the shipped path today, start with [Getting started](./getting-started). If
you want near-term unreleased work with explicit graduation status, use
[Next release track](./next-release).
:::

**Goal**: Make XRTM the standard local workbench for forecasting and model evaluation with scientific rigor.

---

## Strategic pillars

| Pillar | Focus | Audience | Status lens |
| :--- | :--- | :--- | :--- |
| **Core physics** | Validity, math, time | Researchers, model-eval teams | Shipped foundation first |
| **Research grade** | Auditability, advanced workflows | Operators, labs, teams | Mixed shipped + in progress |
| **Experimental** | Frontier capabilities | Exploratory users | Not a homepage claim |

---

## Released and shipping now

| Feature | Description | Status |
| :--- | :--- | :--- |
| **Chronos Protocol** | Enforced time cutoffs to prevent look-ahead bias during backtests. | **DONE** |
| **Calibration Engine** | Platt scaling and Brier-score-oriented evaluation. | **DONE** |
| **Sentinel Protocol** | Forecast trajectory tracking over time. | **DONE** |
| **Recursive Consensus** | Supervisor-led disagreement refinement loops. | **DONE** |
| **Truth Protocol** | Tamper-evident reasoning traces and audit packaging. | **DONE** |
| **Dossier Generator** | Audit-ready research reporting outputs. | **DONE** |
| **Local product spine** | Hub at `/` and `/hub`, Studio at `/studio`, graph-linked Playground, Observatory run inspection, and `/workbench` compatibility on the provider-free baseline. | **DONE in 0.8.4** |

## In progress

| Feature | Description | Status |
| :--- | :--- | :--- |
| **Epistemic Security** | Source verification and anti-manipulation work. | In Progress |

## Experimental or future

| Feature | Description | Status |
| :--- | :--- | :--- |
| **Causal Reasoning** | Formal DAG generation beyond current text-first reasoning traces. | Experimental |
| **Prompt Compiler** | Automated Brier-driven prompt optimization. | Experimental |
| **Centaur Workbench** | Human-in-the-loop collaboration patterns beyond today's convention-based team workflows; not a claim of a persistent collaborative canvas. | Concept |
| **ABM Simulation** | Agent-based market dynamics and liquidity analysis. | Experimental |

## Contribution guidance

1. **Highest impact**: harden time-safe evaluation and adapter coverage
2. **Next**: improve shipped researcher and operator workflows
3. **Later**: experimental work only if you are prepared to maintain it
