---
title: Examples and proof
description: Shipped workflows and source examples you can verify today.
---

# Examples and proof

This page is intentionally product-and-proof-first. Everything below is either a shipped CLI workflow or a source example that exists today. Future work belongs on the [roadmap](./roadmap).

:::note Ownership and proof
This page helps you find verifiable examples without making `xrtm.org` the owner of them. The newcomer CLI flow ships from [`xrtm-org/xrtm`](https://github.com/xrtm-org/xrtm), package example code ships from the repo that contains it, and schema or policy changes that affect those examples start in [`xrtm-org/governance`](https://github.com/xrtm-org/governance).
:::

## The shipped newcomer workflow

If you only do one thing, do this first:

```bash
xrtm start
xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs
xrtm web --runs-dir runs
```

That flow is the core proof that XRTM works as a local-first forecasting and model-eval workbench today. The commands are surfaced here for newcomers, but the behavior, flags, and artifact contracts are owned by [`xrtm-org/xrtm`](https://github.com/xrtm-org/xrtm).

## What the product ships today

- provider-free guided start mode
- canonical run artifacts under `runs/<run-id>/`
- scored outputs including `eval.json`, `run_summary.json`, and `report.html`
- local WebUI and TUI backed by the same run artifacts
- run history, compare, search, and export commands
- profile-based repeatable workflows
- local monitoring lifecycle commands

## Examples by owning repo

These examples are real shipped source assets, but they are **examples**, not the default first-run product path. When example code changes, update the repo that owns the file and refresh this page only when the navigation or framing should change.

### `xrtm-forecast` (`xrtm-org/forecast`)

Useful example entry points include:

- `examples/kit/minimal_agent/run_minimal_agent.py`
- `examples/providers/provider_free_analyst/run_provider_free_analyst.py` *(deterministic no-key path via the top-level `xrtm` package)*
- `examples/kit/local_analyst/run_local_analyst.py` *(optional local-LLM path)*
- `examples/kit/pipelines/forecasting_analyst/run_forecasting_analyst.py`
- `examples/kit/topologies/debate_demo/run_debate_demo.py`
- `examples/kit/features/discovery/run_discovery.py`
- `examples/kit/features/streaming_demo/run_streaming_demo.py`
- `examples/kit/topologies/consensus_demo/run_consensus_demo.py`

See the repo: [`xrtm-org/forecast`](https://github.com/xrtm-org/forecast).

### `xrtm-train` (`xrtm-org/train`)

Useful example entry points live in the external [`xrtm-org/train`](https://github.com/xrtm-org/train) repo:

- [Calibration demo](https://github.com/xrtm-org/train/blob/main/examples/kit/run_calibration_demo.py)
- [Trace replay](https://github.com/xrtm-org/train/blob/main/examples/kit/run_trace_replay.py)
- [Evaluation harness](https://github.com/xrtm-org/train/blob/main/examples/kit/run_evaluation_harness.py)

## How to read examples honestly

- **Product workflow first**: start with [Getting started](./getting-started).
- **Workflow docs second**: use the [researcher](./workflows/researcher-model-eval) and [operator](./workflows/operator-runbook) paths for supported journeys.
- **Examples third**: reach for package scripts when you want to learn internals, extend the system, or study a narrower capability.
- **Roadmap separate**: if something is only planned or experimental, it should not be treated as a hero claim.

## Good next links

- [Getting started](./getting-started)
- [Researcher / model-eval workflow](./workflows/researcher-model-eval)
- [Packages and architecture](./framework/intro)
- [Roadmap](./roadmap)
