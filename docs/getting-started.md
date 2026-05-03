---
title: Getting started
description: Make your first forecast run, inspect the evidence, and open the WebUI or TUI.
---

# Getting Started with XRTM

XRTM is AI for event forecasting. This is the shortest honest path to first
success on the released `xrtm==0.3.0` surface.

You will run the released provider-free demo, inspect the generated artifacts, and
browse the results. The default path uses the built-in mock provider, so you do
**not** need API keys or a local model server.

> This page is intentionally pinned to the commands that ship in `xrtm==0.3.0`.
> Newer guided-start and validation commands in current source work are not part
> of the released onboarding path yet.

## 1. Install

```bash
python3.11 -m venv .venv
. .venv/bin/activate
pip install xrtm==0.3.0
```

**Supported Python versions:** `>=3.11,<3.13`

## 2. Run the guided first command

```bash
xrtm demo --provider mock --limit 1 --runs-dir runs
```

This released first-success path stays provider-free: no API keys, no hosted service, and no local model server required.

On success, `xrtm demo` prints the run directory it created under `runs/<run-id>/`.
Treat that output as proof that XRTM completed a full local run and wrote the canonical evidence to disk.

This provider-free first run:

- loads bundled questions locally
- generates deterministic forecasts without API calls
- evaluates the run with built-in scoring
- writes a complete run directory under `runs/`

## 3. Inspect the run artifacts

```bash
xrtm runs list --runs-dir runs
xrtm runs show <run-id> --runs-dir runs
xrtm artifacts inspect runs/<run-id>
xrtm report html runs/<run-id>
```

Replace `<run-id>` with the id printed by `xrtm demo` or the one shown by `xrtm runs list`.

`xrtm artifacts inspect` prints the canonical artifact inventory with on-disk locations, so you can verify exactly what the first run wrote.

The run directory contains the same evidence used by higher-level views:

```text
runs/<run-id>/
  run.json
  questions.jsonl
  forecasts.jsonl
  eval.json
  train.json
  provider.json
  events.jsonl
  run_summary.json
  report.html
  logs/
```

`monitor.json` is only written for monitor runs created with `xrtm monitor start`;
ordinary forecast runs stay in run views instead of monitor views.

## 4. Browse the results

Launch the local WebUI:

```bash
xrtm web --runs-dir runs
```

Open `http://127.0.0.1:8765` in your browser.

If you prefer the terminal, launch the TUI instead:

```bash
xrtm tui --runs-dir runs
```

## 5. What you just proved

You completed the first XRTM event-forecasting loop:

1. **Forecast run**: ran a forecasting workflow without external providers
2. **Scored evidence**: verified the run and its outputs on disk
3. **Review surface**: opened the same run through WebUI or TUI

That is the core product path for newcomers.

## Official proof-point workflows

After the first run, these four released workflows expand the same event-forecasting
loop:

### 1. Provider-free first success

```bash
xrtm demo --provider mock --limit 1 --runs-dir runs
xrtm runs list --runs-dir runs
xrtm runs show <run-id> --runs-dir runs
xrtm artifacts inspect runs/<run-id>
xrtm report html runs/<run-id>
xrtm web --runs-dir runs
```

### 2. Benchmark smoke workflow

```bash
xrtm perf run --scenario provider-free-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json
```

Treat this as the released quality baseline:

- `performance.json` records reproducible runtime evidence
- the paired `runs-perf/<run-id>/run_summary.json` contains Brier and ECE from the same scored surface as normal runs
- provider-free repeats should stay stable; later provider/model changes should earn any score or latency movement they introduce

### 3. Monitoring, history, and report workflow

```bash
xrtm profile create my-local --provider mock --limit 2 --runs-dir runs
xrtm run profile my-local
xrtm monitor start --provider mock --limit 2 --runs-dir runs
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export <run-id> --runs-dir runs --output export.json
```

Use `xrtm runs compare` as your released compare gate:

- **Brier / ECE:** lower is better
- **warnings / errors:** operational regressions
- **duration / tokens:** efficiency cost of a change
- compare is most believable when the runs answer the same question set

### 4. Local-LLM advanced workflow

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm local-llm status
xrtm demo --provider local-llm --limit 1 --max-tokens 768 --runs-dir runs-local
```

Only switch to local-LLM mode after the provider-free path above is working.

## Good next steps

### Run a slightly larger local pass

```bash
xrtm demo --provider mock --limit 10 --runs-dir runs
```

### Scaffold a reusable local profile

```bash
xrtm profile create my-local --provider mock --limit 2 --runs-dir runs
xrtm run profile my-local
```

This creates `.xrtm/profiles/my-local.json`, ensures the local `runs/` workspace exists, and keeps the workflow on the same mock-provider path you just proved.

### Pick the guide that matches your role

- **Researcher / model-eval**: use the [researcher workflow](./workflows/researcher-model-eval) for released benchmark smoke, score interpretation, compare/export review, and the concrete compare → learn loop.
- **Operator**: continue with the [operator runbook](./workflows/operator-runbook) for the monitoring/history/report workflow, profiles, performance checks, and troubleshooting.
- **Team**: read [team workflows](./workflows/team-workflows) for realistic multi-user patterns and current limitations.
- **Developer / integrator**: use the [developer workflow](./workflows/developer-integrator) and the [packages overview](./framework/intro) to move from product usage into APIs and examples.

## Advanced and optional: local LLM mode

Only switch to `--provider local-llm` after the provider-free path above is working.

Use local-LLM mode when you specifically need to evaluate a real local model and you already have a local OpenAI-compatible endpoint available.

Typical prerequisites:

- a running local inference server such as llama.cpp, Ollama, or LocalAI
- downloaded model weights
- enough CPU/GPU resources for the model you chose
- willingness to trade the 5-minute quick start for a slower, more complex setup

Minimal verification flow:

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm local-llm status
xrtm demo --provider local-llm --limit 1 --max-tokens 768 --runs-dir runs-local
```

For deeper setup and troubleshooting, use the [operator runbook](./workflows/operator-runbook).

## Quick troubleshooting

### `xrtm: command not found`

Activate the virtual environment first:

```bash
. .venv/bin/activate
```

### Installation fails on Python 3.13

This is expected. XRTM currently supports Python `>=3.11,<3.13`.

### Need the run id again?

```bash
xrtm runs list --runs-dir runs
```

### `xrtm doctor` shows package information only

That is expected in the released `0.3.0` CLI. Use it to verify package versions and imports, then run the provider-free demo path above.

### Local-LLM health check fails

Go back to the provider-free path, confirm the main install works, then use the [operator runbook](./workflows/operator-runbook) to debug your local endpoint.
