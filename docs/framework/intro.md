---
title: Packages and architecture
description: The XRTM product shell plus the package stack underneath it.
---

# Packages and architecture

The easiest way to understand XRTM is to separate the **product shell** from
the **package stack** underneath it.

## Start with the product shell

For most newcomers, the right first step is the top-level `xrtm` product
experience:

- run `xrtm start`
- inspect the newest canonical run artifacts with the released `latest` helpers
- open the same run in the WebUI or TUI
- move into repeatable workflows with starter profiles, compare, export, and monitor commands

See [Getting started](../getting-started) for that path.

## The package map

| Layer | Package | What it gives you today |
| :--- | :--- | :--- |
| Product shell | **`xrtm`** | Provider-free first success, canonical artifacts, HTML reports, WebUI, TUI, profiles, compare/export, and local monitoring |
| Runtime | **`xrtm-forecast`** | Forecasting agents, orchestration, provider integrations, and source examples |
| Evaluation | **`xrtm-eval`** | Brier scoring, calibration-focused evaluation, benchmark scorecards, and verification utilities |
| Data | **`xrtm-data`** | Schemas, temporal snapshot foundations, and benchmark corpus registry/provenance |
| Training | **`xrtm-train`** | Backtesting, replay, benchmark orchestration, and optimization loops |

## How the pieces fit

- `xrtm` is the newcomer-facing product shell.
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
