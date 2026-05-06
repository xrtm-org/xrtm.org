---
title: Researcher / model-eval workflow
description: Repeatable evaluation path for serious event-forecasting work.
---

# Researcher / model-eval workflow

This workflow is the clearest home for the released **benchmark, compare, export, and learn** path.

:::info Page role
**Released user workflow.** Keep this page on commands that ship today. For
current-source conveniences that are not released yet, use
[Next release track](../next-release). For deeper package-level research APIs,
use [Developer / integrator workflow](./developer-integrator).
:::

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

### 5. One honest improvement workflow

Use this control → candidate → compare loop:

1. **Control:** run the released provider-free path first and, if needed, repeat it on the same question set. Repeated mock runs should stay effectively unchanged.
2. **Learn the gate:** use compare output to learn which metrics matter before you make any stronger claim.
3. **Introduce one meaningful change:** move to an advanced path such as a real local model, a runtime-level prompt/configuration change, or calibration/replay work from the package layer.
4. **Compare on the same question set:** only compare runs that are answering the same questions.
5. **Decide and export:** keep the candidate only if quality improved enough to justify its runtime/tokens cost, then export it for deeper review.

This is honest precisely because the default provider-free path is deterministic.
The repeated mock run is your control, not your improvement proof.

### 6. How to turn compare output into an action

| Compare result | What it means | What to do next |
| :--- | :--- | :--- |
| Mock vs mock is unchanged | Your control is stable, which is what you want from the released default path. | Keep the baseline and try one meaningful change before claiming improvement. |
| Brier/ECE improve and warnings/errors stay clean | The candidate may be genuinely better. | Export the run, review question-level differences, and consider promoting it. |
| Scores improve but runtime/tokens jump sharply | Quality improved, but the cost may not be worth it. | Keep it as an experiment until the cost is acceptable. |
| Scores regress or warnings/errors appear | The change hurt quality or robustness. | Revert, retune, or inspect the per-question deltas before trying again. |

### 7. Validation status on the released surface

The newer corpus-validation workflow visible in current source work is not part of the published `xrtm==0.3.1` release. Until a later coordinated release ships it with compatible upstream packages, keep release-pinned research docs on `xrtm perf run`, explicit run inspection, comparison, and JSON/CSV export.

### 8. Move into calibration and replay work

XRTM's package stack includes shipped examples for deeper evaluation work such as calibration demos, trace replay, and evaluation harnesses. See [Examples and proof](../examples) and [Packages and architecture](../framework/intro).

Those deeper paths are where stronger "improved over time" proofs should live.
They involve a real system change rather than repeated runs of the deterministic
default baseline.

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
