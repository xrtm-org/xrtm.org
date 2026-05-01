---
title: Getting started
description: Run the provider-free demo, inspect artifacts, and open the WebUI or TUI.
---

# Getting Started with XRTM

This is the shortest honest path to first success with XRTM.

You will run a complete local demo, inspect the generated artifacts, and browse the results. The default path uses the built-in mock provider, so you do **not** need API keys or a local model server.

## 1. Install

```bash
python3.11 -m venv .venv
. .venv/bin/activate
pip install xrtm==0.3.0
```

**Supported Python versions:** `>=3.11,<3.13`

## 2. Verify the installation

```bash
xrtm doctor
```

You should see the core stack available and ready.

## 3. Run your first local demo

```bash
xrtm demo --provider mock --limit 2
```

This provider-free demo:

- loads bundled questions locally
- generates deterministic forecasts without API calls
- evaluates the run with built-in scoring
- writes a complete run directory under `runs/`

## 4. Inspect the run artifacts

First, list the runs that exist locally:

```bash
xrtm runs list
```

Then inspect the run you just created:

```bash
xrtm runs show <run-id>
xrtm artifacts inspect runs/<run-id>
xrtm report html runs/<run-id>
```

Replace `<run-id>` with the ID shown by `xrtm runs list`.

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
  monitor.json
  report.html
  logs/
```

## 5. Browse the results

Launch the local WebUI:

```bash
xrtm web --runs-dir runs
```

Open `http://127.0.0.1:8765` in your browser.

If you prefer the terminal, launch the TUI instead:

```bash
xrtm tui --runs-dir runs
```

## What you just proved

You completed the default XRTM story:

1. **Local demo**: ran a forecasting workflow without external providers
2. **Artifact inspection**: verified the run and its scored outputs on disk
3. **Browser or terminal view**: opened the same run through WebUI or TUI

That is the core product path for newcomers.

## Good next steps

### Run a slightly larger local pass

```bash
xrtm demo --provider mock --limit 10
```

### Save a reusable profile

```bash
xrtm profile create my-local --provider mock --limit 5
xrtm run profile my-local
```

### Pick the guide that matches your role

- **Researcher / model-eval**: use the [researcher workflow](./workflows/researcher-model-eval) for repeatable comparisons, metrics, and exports.
- **Operator**: continue with the [operator runbook](./workflows/operator-runbook) for profiles, monitoring, performance checks, and troubleshooting.
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
xrtm demo --provider local-llm --limit 1 --max-tokens 768
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

### `xrtm doctor` shows warnings

Check the warning text first. Optional components may be missing even when the default local demo path is fine.

### Local-LLM health check fails

Go back to the provider-free path, confirm the main install works, then use the [operator runbook](./workflows/operator-runbook) to debug your local endpoint.
