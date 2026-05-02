---
title: Researcher / model-eval workflow
description: Repeatable evaluation path for serious event-forecasting work.
---

# Researcher / model-eval workflow

This workflow is the clearest home for the released **benchmark smoke plus compare/export review** path.

Use it when you want to run repeatable event-forecasting passes, inspect the exact artifacts produced by a run, compare outcomes, and keep the evaluation evidence on disk.

## Why this path exists

XRTM becomes especially useful when you care about:

- local, inspectable forecasting workflows
- probabilistic scoring and calibration signals
- historical replay and backtest-oriented evaluation
- exports you can analyze in notebooks or custom pipelines

## Recommended flow

### 1. Prove the product path first

Complete [Getting started](../getting-started) so you have at least one run directory from the released provider-free demo to inspect.

### 2. Generate deterministic benchmark evidence

```bash
xrtm perf run --scenario provider-free-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json
```

Provider-free mode is still the right starting point for research and model-eval because it removes provider noise while you learn the artifact model and gather reproducible evidence.

### 3. Inspect, compare, and export

```bash
xrtm runs list --runs-dir runs
xrtm runs show <run-id> --runs-dir runs
xrtm artifacts inspect runs/<run-id>
xrtm report html runs/<run-id>
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export <run-id> --runs-dir runs --output export.json
```

Use this stage to review forecast counts, scores, warnings, durations, and the underlying JSON artifacts.

### 4. Validation status on the released surface

The newer `xrtm validate ...` workflow visible in current source work is not part of the published `xrtm==0.3.0` release. Until a coordinated release ships it with compatible upstream packages, keep release-pinned research docs on `xrtm perf`, explicit run inspection, comparison, and JSON export.

### 5. Move into calibration and replay work

XRTM's package stack includes shipped examples for deeper evaluation work such as calibration demos, trace replay, and evaluation harnesses. See [Examples and proof](../examples) and [Packages and architecture](../framework/intro).

## Shipped surfaces this workflow uses

- `xrtm demo`
- `xrtm perf run`
- `xrtm runs list`
- `xrtm runs show`
- `xrtm runs compare`
- `xrtm runs export`
- `xrtm artifacts inspect`
- `xrtm profile create`
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
