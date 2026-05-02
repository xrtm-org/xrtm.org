---
title: Packages and architecture
description: The XRTM product shell plus the package stack underneath it.
---

# Packages and architecture

The easiest way to understand XRTM is to separate the **product shell** from the **package stack** underneath it.

:::note Source of truth boundaries
This section is a repo map, not the canonical package manual. Change shipped CLI behavior in [`xrtm-org/xrtm`](https://github.com/xrtm-org/xrtm), change package APIs or examples in the owning package repo, and change schemas or compatibility rules in [`xrtm-org/governance`](https://github.com/xrtm-org/governance).
:::

## Start with the product shell

For most newcomers, the right first step is the top-level `xrtm` product experience on the released `0.3.0` surface:

- run `xrtm demo --provider mock --limit 1 --runs-dir runs`
- inspect the created run with `xrtm runs list`, `xrtm runs show <run-id> --runs-dir runs`, `xrtm artifacts inspect runs/<run-id>`, and `xrtm report html runs/<run-id>`
- open the same run in the WebUI or TUI
- move into repeatable workflows with profiles, compare/export, and monitor commands

See [Getting started](../getting-started) for that path.

## The package map

| Layer | Package | What it gives you today |
| :--- | :--- | :--- |
| Product shell | **[`xrtm`](https://github.com/xrtm-org/xrtm)** | Provider-free demo path, reports, canonical artifacts, WebUI, TUI, profiles, compare/export, and local monitoring |
| Runtime | **[`xrtm-forecast`](https://github.com/xrtm-org/forecast)** | Forecasting agents, orchestration, provider integrations, and source examples |
| Evaluation | **[`xrtm-eval`](https://github.com/xrtm-org/eval)** | Brier scoring, calibration-focused evaluation, and verification utilities |
| Data | **[`xrtm-data`](https://github.com/xrtm-org/data)** | Schemas and temporal snapshot foundations for zero-leakage evaluation |
| Training | **[`xrtm-train`](https://github.com/xrtm-org/train)** | Backtesting, replay, calibration demos, and optimization loops |

## How the pieces fit

- `xrtm` is the newcomer-facing product shell.
- `xrtm-forecast` handles the runtime and orchestration layer.
- `xrtm-eval` and `xrtm-data` provide the scoring and snapshot foundations.
- `xrtm-train` closes the loop for replay, calibration, and evaluation harnesses.

## When to update this site vs a sibling repo

- Update **`xrtm.org`** for newcomer framing, navigation, and cross-repo pointers.
- Update the **owning repo** for shipped behavior, package APIs, example code, or release notes.
- Update **governance first** for schema or compatibility policy changes, then mirror the accepted outcome here if newcomers need the summary.

## Where to go next

- [xrtm-forecast](./forecast)
- [xrtm-eval](./eval)
- [xrtm-data](./data)
- [xrtm-train](./train)
- [Examples and proof](../examples)
