---
title: Developer / integrator workflow
description: Choose the right package boundary and canonical reference after the released product path is clear.
---

# Developer / integrator workflow

If you are building on XRTM, start by understanding the shipped product path first. The canonical run artifacts, report outputs, and local surfaces are the contracts your integrations should respect.

:::info Page role
**Developer reference entry.** This page helps you choose the right repo and
source of truth. `xrtm.org` is a repo map, not the canonical API manual.
:::

## Quick chooser

| Need | Start here | Canonical owner |
| --- | --- | --- |
| released CLI workflow, artifact contract, WebUI/TUI, profile/monitor flows | [`xrtm`](https://github.com/xrtm-org/xrtm) + [Getting started](../getting-started) | `xrtm` repo |
| Python APIs that ship with the product shell | [`xrtm/docs/python-api-reference.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/python-api-reference.md) | `xrtm` repo |
| forecasting runtime APIs, provider integrations, agent examples | [`xrtm-forecast`](https://github.com/xrtm-org/forecast) + [forecast docs index](https://github.com/xrtm-org/forecast/blob/main/docs/index.md) | `forecast` repo |
| schema compatibility, release labeling, graduation policy | [`xrtm-org/governance`](https://github.com/xrtm-org/governance) | `governance` repo |

## Recommended order

1. Complete [Getting started](../getting-started)
2. Read [Examples and proof](../examples)
3. Use [Packages and architecture](../framework/intro) to choose the right package boundary
4. Drop into the owning repo's examples and APIs only after the product flow is clear

## Package map

- **`xrtm`**: top-level product shell, CLI workflow, artifacts, WebUI, and TUI
- **`xrtm-forecast`**: runtime, providers, orchestration, and agent examples
- **`xrtm-eval`**: scoring and calibration-oriented evaluation utilities
- **`xrtm-data`**: schemas and temporal snapshot foundations
- **`xrtm-train`**: replay, calibration demos, and evaluation harnesses

## Canonical references by layer

| Layer | Repo | Best entry point |
| --- | --- | --- |
| Product shell | [`xrtm`](https://github.com/xrtm-org/xrtm) | [`README.md`](https://github.com/xrtm-org/xrtm/blob/main/README.md), [`docs/getting-started.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/getting-started.md), [`docs/python-api-reference.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/python-api-reference.md) |
| Runtime | [`forecast`](https://github.com/xrtm-org/forecast) | [`README.md`](https://github.com/xrtm-org/forecast/blob/main/README.md), [`docs/index.md`](https://github.com/xrtm-org/forecast/blob/main/docs/index.md) |
| Governance | [`governance`](https://github.com/xrtm-org/governance) | [`README.md`](https://github.com/xrtm-org/governance/blob/main/README.md), policy files under `policies/` |

## What counts as shipped vs. example

- The CLI path in [Getting started](../getting-started) is a shipped product workflow.
- The example scripts listed in [Examples and proof](../examples) are shipped source examples.
- The [Next release track](../next-release) is the right home for real branch work that should not be presented as released yet.
- The [Roadmap](../roadmap) is future-facing and should not be treated as a current product claim.

## Good next links

- [Packages and architecture](../framework/intro)
- [xrtm-forecast](../framework/forecast)
- [xrtm-train](../framework/train)
- [Forecast Object standard](../standard/forecast-object)
