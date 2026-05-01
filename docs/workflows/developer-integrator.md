---
title: Developer / integrator workflow
description: Start from the shipped CLI path, then move into package APIs and source examples.
---

# Developer / integrator workflow

If you are building on XRTM, start by understanding the shipped product path first. The canonical run artifacts, report outputs, and local surfaces are the contracts your integrations should respect.

## Recommended order

1. Complete [Getting started](../getting-started)
2. Read [Examples and proof](../examples)
3. Use [Packages and architecture](../framework/intro) to choose the right package boundary
4. Drop into package examples and APIs only after the product flow is clear

## Package map

- **`xrtm`**: top-level product shell, CLI workflow, artifacts, WebUI, and TUI
- **`xrtm-forecast`**: runtime, providers, orchestration, and agent examples
- **`xrtm-eval`**: scoring and calibration-oriented evaluation utilities
- **`xrtm-data`**: schemas and temporal snapshot foundations
- **`xrtm-train`**: replay, calibration demos, and evaluation harnesses

## What counts as shipped vs. example

- The CLI path in [Getting started](../getting-started) is a shipped product workflow.
- The example scripts listed in [Examples and proof](../examples) are shipped source examples.
- The [Roadmap](../roadmap) is future-facing and should not be treated as a current product claim.

## Good next links

- [Packages and architecture](../framework/intro)
- [xrtm-forecast](../framework/forecast)
- [xrtm-train](../framework/train)
- [Forecast Object standard](../standard/forecast-object)
