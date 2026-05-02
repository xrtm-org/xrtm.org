---
title: Examples and proof
description: Shipped workflows and source examples you can verify today.
---

# Examples and proof

This page is intentionally product-and-proof-first. Everything below is either a shipped CLI workflow or a source example that exists today. Future work belongs on the [roadmap](./roadmap).

:::note Ownership and proof
This page helps you find verifiable examples without making `xrtm.org` the owner of them. The newcomer CLI flow ships from [`xrtm-org/xrtm`](https://github.com/xrtm-org/xrtm), package example code ships from the repo that contains it, and schema or policy changes that affect those examples start in [`xrtm-org/governance`](https://github.com/xrtm-org/governance).
:::

## Official proof-point workflows

The story is simple: XRTM is AI for event forecasting. These workflows and
examples are the shipped proof behind that claim on the released `0.3.0` surface:

1. **Provider-free first success**
2. **Benchmark smoke workflow**
3. **Monitoring, history, and report workflow**
4. **Local-LLM advanced workflow**

### 1. Provider-free first success

If you only do one thing, do this first:

```bash
xrtm demo --provider mock --limit 1 --runs-dir runs
xrtm runs list --runs-dir runs
xrtm runs show <run-id> --runs-dir runs
xrtm artifacts inspect runs/<run-id>
xrtm report html runs/<run-id>
xrtm web --runs-dir runs
```

That flow is the core proof that XRTM works today as a repeatable
event-forecasting system. The commands are surfaced here for newcomers, but the
behavior, flags, and artifact contracts are owned by
[`xrtm-org/xrtm`](https://github.com/xrtm-org/xrtm).

### 2. Benchmark smoke workflow

```bash
xrtm perf run --scenario provider-free-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json
```

### 3. Monitoring, history, and report workflow

```bash
xrtm profile create my-local --provider mock --limit 2 --runs-dir runs
xrtm run profile my-local
xrtm monitor start --provider mock --limit 2 --runs-dir runs
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export <run-id> --runs-dir runs --output export.json
```

### 4. Local-LLM advanced workflow

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm local-llm status
xrtm demo --provider local-llm --limit 1 --max-tokens 768 --runs-dir runs-local
```

## What the product ships today

- provider-free demo mode via `xrtm demo --provider mock --limit 1 --runs-dir runs`
- provider-free benchmark smoke via `xrtm perf run`
- canonical run artifacts under `runs/<run-id>/`
- scored outputs including `eval.json`, `run_summary.json`, and `report.html`
- local WebUI and TUI backed by the same run artifacts
- run history, compare, search, and JSON export commands
- profile-based repeatable workflows via `xrtm profile create`
- local monitoring lifecycle commands
- optional local-LLM health and demo commands

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
- [Operator runbook](./workflows/operator-runbook)
- [Packages and architecture](./framework/intro)
- [Roadmap](./roadmap)
