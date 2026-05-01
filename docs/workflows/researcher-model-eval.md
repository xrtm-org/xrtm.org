---
title: Researcher / model-eval workflow
description: The primary XRTM path for repeatable local evaluation and forecast review.
---

# Researcher / model-eval workflow

This is the **primary XRTM audience path**.

Use it when you want to run repeatable local forecasting passes, inspect the exact artifacts produced by a run, compare outcomes, and keep the evaluation evidence on disk.

## Why this path exists

XRTM is most useful when you care about:

- local, inspectable forecasting workflows
- probabilistic scoring and calibration signals
- historical replay and backtest-oriented evaluation
- exports you can analyze in notebooks, spreadsheets, or custom pipelines

## Recommended flow

### 1. Prove the product path first

Complete [Getting started](../getting-started) so you have at least one run directory from `xrtm start` to inspect.

### 2. Run a larger provider-free pass

```bash
xrtm demo --provider mock --limit 10
```

Provider-free mode is still the right starting point for research and model-eval because it removes provider noise while you learn the artifact model.

### 3. Inspect, compare, and export

```bash
xrtm runs list --runs-dir runs
xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export <run-id> --runs-dir runs --output export.json
```

Use this stage to review forecast counts, scores, warnings, durations, and the underlying JSON artifacts.

### 4. Move into calibration and replay work

XRTM's package stack includes shipped examples for deeper evaluation work such as calibration demos, trace replay, and evaluation harnesses. See [Examples and proof](../examples) and [Packages and architecture](../framework/intro).

## Shipped surfaces this workflow uses

- `xrtm start`
- `xrtm demo`
- `xrtm runs list`
- `xrtm runs show latest`
- `xrtm runs compare`
- `xrtm runs export`
- `xrtm artifacts inspect`
- `xrtm profile starter`
- `xrtm report html`
- WebUI and TUI over local run artifacts

## Optional later: local-LLM evaluation

Local-LLM mode is useful once the provider-free path is already working and you specifically want to test a real local model. It is not the default first step.

Use the [operator runbook](./operator-runbook) for local-LLM health checks and operational guidance.

## Good next links

- [Operator runbook](./operator-runbook)
- [Examples and proof](../examples)
- [Packages and architecture](../framework/intro)
- [Forecast Object standard](../standard/forecast-object)
