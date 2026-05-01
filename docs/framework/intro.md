---
title: Packages and architecture
description: The XRTM product shell plus the package stack underneath it.
---

# Packages and architecture

The easiest way to understand XRTM is to separate the **product shell** from the **package stack** underneath it.

## Start with the product shell

For most newcomers, the right first step is the top-level `xrtm` product experience:

- run `xrtm start`
- inspect the canonical run artifacts
- open the same run in the WebUI or TUI
- move into repeatable workflows with profiles, compare, export, and monitor commands

See [Getting started](../getting-started) for that path.

## The package map

| Layer | Package | What it gives you today |
| :--- | :--- | :--- |
| Product shell | **`xrtm`** | Guided first-run path, reports, canonical artifacts, WebUI, TUI, profiles, compare/export, and local monitoring |
| Runtime | **`xrtm-forecast`** | Forecasting agents, orchestration, provider integrations, and source examples |
| Evaluation | **`xrtm-eval`** | Brier scoring, calibration-focused evaluation, and verification utilities |
| Data | **`xrtm-data`** | Schemas and temporal snapshot foundations for zero-leakage evaluation |
| Training | **`xrtm-train`** | Backtesting, replay, calibration demos, and optimization loops |

## How the pieces fit

- `xrtm` is the newcomer-facing product shell.
- `xrtm-forecast` handles the runtime and orchestration layer.
- `xrtm-eval` and `xrtm-data` provide the scoring and snapshot foundations.
- `xrtm-train` closes the loop for replay, calibration, and evaluation harnesses.

## Where to go next

- [xrtm-forecast](./forecast)
- [xrtm-eval](./eval)
- [xrtm-data](./data)
- [xrtm-train](./train)
- [Examples and proof](../examples)
