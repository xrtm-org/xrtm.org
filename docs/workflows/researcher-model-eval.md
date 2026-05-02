---
title: Researcher / model-eval workflow
description: Repeatable evaluation path for serious event-forecasting work.
---

# Researcher / model-eval workflow

This workflow is the clearest home for the released **benchmark, compare, export, and learn** path.

Use it when you want to run repeatable event-forecasting passes, inspect the exact artifacts produced by a run, compare outcomes, interpret the metrics honestly, and keep the evaluation evidence on disk.

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

What this benchmark proves:

- the workflow is fast and repeatable on the same machine
- `runs-perf/<run-id>/run_summary.json` captures the scored summary used by compare/export
- you now have a control run before trying a different provider or configuration

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

### 4. How to read the released metrics

| Signal | Where to look | How to interpret it |
| :--- | :--- | :--- |
| **Brier score** | `run_summary.json`, `eval.json`, compare output | Lower is better. `0.000` is perfect. Around `0.250` is roughly the balanced 50/50 binary baseline. |
| **ECE** | `run_summary.json`, compare output | Lower is better. Near `0` means your stated confidence matches observed frequency more closely. |
| **Warnings / errors** | `run_summary.json`, compare output | These should stay at `0` on a healthy run. |
| **Duration / tokens** | `run_summary.json`, compare output | The cost side of a quality change. Improvements that double runtime should earn that cost. |
| **Exported forecast rows** | `export.json` and downstream analysis | Use exports for notebook/spreadsheet review after compare identifies the run worth keeping. |

### 5. The released compare → learn loop

The honest released loop today is:

1. Run a provider-free benchmark or demo pass to establish a baseline.
2. Change one thing that could matter: provider, local model, or prompt/configuration in your workflow.
3. Re-run and use `xrtm runs compare` to check whether Brier/ECE improved without introducing warnings, errors, or unacceptable runtime/tokens.
4. Export the winning run for deeper analyst review.

That is a real measurement loop even though the default provider-free path is intentionally deterministic. The deterministic baseline exists to make later changes legible.

### 6. Validation status on the released surface

The newer corpus-validation workflow visible in current source work is not part of the published `xrtm==0.3.0` release. Until a coordinated release ships it with compatible upstream packages, keep release-pinned research docs on `xrtm perf run`, explicit run inspection, comparison, and JSON export.

### 7. Move into calibration and replay work

XRTM's package stack includes shipped examples for deeper evaluation work such as calibration demos, trace replay, and evaluation harnesses. See [Examples and proof](../examples) and [Packages and architecture](../framework/intro).

## Shipped surfaces this workflow uses

- `xrtm demo --provider mock --limit 1 --runs-dir runs`
- `xrtm perf run --scenario provider-free-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json`
- `xrtm runs list`
- `xrtm runs show <run-id> --runs-dir runs`
- `xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs`
- `xrtm runs export <run-id> --runs-dir runs --output export.json`
- `xrtm artifacts inspect runs/<run-id>`
- `xrtm profile create my-local --provider mock --limit 2 --runs-dir runs`
- `xrtm report html runs/<run-id>`
- WebUI and TUI over local run artifacts

## Optional later: local-LLM evaluation

Local-LLM mode is useful once the provider-free path is already working and you specifically want to test a real local model. It is not the default first step.

Use the [operator runbook](./operator-runbook) for local-LLM health checks and operational guidance.

## Good next links

- [Operator runbook](./operator-runbook)
- [Examples and proof](../examples)
- [Packages and architecture](../framework/intro)
- [Forecast Object standard](../standard/forecast-object)
