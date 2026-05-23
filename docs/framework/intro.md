---
title: Packages and architecture
description: The XRTM product shell plus the package stack underneath it.
---

# Packages and architecture

The easiest way to understand XRTM is to separate the **product shell** from
the **package stack** underneath it.

Release-pinned docs and homepage claims follow the
[Stack Versioning Policy](https://github.com/xrtm-org/governance/blob/main/policies/stack-versioning-policy.md):
`xrtm` is the product-anchor version for newcomer and WebUI release language.

## Integration taxonomy

XRTM uses two first-class integration categories:

| Category | What it means | How to read it today |
| :--- | :--- | :--- |
| **OpenAI-compatible endpoints** | Model-backed HTTP endpoints used by runtime workflows | The released advanced profile today is `--provider local-llm`; local and commercial deployments are profiles inside this same category. |
| **Coding-agent CLI contracts** | CLI-backed coding agents integrated through an explicit command contract | This is the other first-class category in the standard, separate from HTTP endpoint wiring. |

The built-in deterministic path is **not** a third runtime category. It is a
deterministic baseline mode for proving installs, CI-safe validation, and
stable compare controls.

## Start with the product shell

For most newcomers, the right first step is the top-level `xrtm` product
experience:

- run `xrtm start`
- inspect the newest canonical run artifacts with the released `latest` helpers
- open the same run in the WebUI shell (Hub at `/` and `/hub`, Start, Runs, Workflow detail, Operations, Studio at `/studio`, Playground, Observatory at `/observatory`, run detail, compare, `/workbench` compatibility, and Advanced visibility) or TUI
- move into repeatable workflows with starter profiles, compare, export, and monitor commands

See [Getting started](../getting-started) for that path.

## The package map

| Layer | Package | What it gives you today |
| :--- | :--- | :--- |
| Product shell | **`xrtm`** | Deterministic baseline first success, canonical artifacts, HTML reports, local-first WebUI shell (Hub at `/` and `/hub`, Start, Runs, Workflow detail, Operations, Studio, Playground, Observatory, run detail, compare, `/workbench` compatibility, and Advanced visibility), SQLite-backed draft state, Studio safe workflow authoring from scratch/template/clone with shared core-field plus node/edge/entry edits over the existing workflow schema and built-in node catalog, validate/run/compare, forecast-path-linked Playground trace review with honest no-trace fallback, TUI, profiles, compare/export, and local monitoring |
| Runtime | **`xrtm-forecast`** | Forecasting agents, orchestration, OpenAI-compatible endpoint integrations, and source examples |
| Evaluation | **`xrtm-eval`** | Brier scoring, calibration-focused evaluation, benchmark scorecards, and verification utilities |
| Data | **`xrtm-data`** | Schemas, temporal snapshot foundations, and benchmark corpus registry/provenance |
| Training | **`xrtm-train`** | Backtesting, replay, benchmark orchestration, and optimization loops |

## How the pieces fit

- `xrtm` is the newcomer-facing product shell, including the released bounded Hub → Studio → Playground → Observatory lane in `0.8.7`.
- `xrtm-forecast` handles the runtime and orchestration layer.
- `xrtm-eval` and `xrtm-data` provide the scoring and snapshot foundations.
- `xrtm-train` closes the loop for replay, calibration, and evaluation harnesses.

## Benchmark architecture

Benchmarking is split across the same package stack:

- `xrtm-data` owns corpus registry, provenance, licensing, and cache/import flows
- `xrtm-eval` owns scoring, calibration, and benchmark comparison math
- `xrtm-train` owns offline sweeps, replay loops, and live benchmark execution
- `xrtm` and `xrtm.org` surface reports and score views without owning the engine

## Benchmark execution lanes

XRTM uses three benchmark lanes with different ownership and goals:

1. **Offline lane:** `xrtm-data` supplies versioned corpora, `xrtm-eval` scores them, and `xrtm-train` runs repeatable sweeps for internal development.
2. **Live competition lane:** `xrtm-data` stores source contracts, `xrtm-train` handles submission/execution cadence, and `xrtm-eval` normalizes imported results.
3. **Public scoreboard lane:** `xrtm-train` and `xrtm-eval` emit the source artifacts, while `xrtm` and `xrtm.org` present them to users.

## Where to go next

- [xrtm-forecast](./forecast)
- [xrtm-eval](./eval)
- [xrtm-data](./data)
- [xrtm-train](./train)
- [Examples and proof](../examples)
