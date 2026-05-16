---
title: Getting started
description: Install the released package, run the guided first command, inspect artifacts, and open the WebUI shell or TUI.
---

# Getting Started with XRTM

This is the shortest honest path to first success with XRTM.

You will run the released health-check plus guided first-success path, inspect
the generated artifacts, and browse the results in the WebUI shell or TUI. The
default path uses the built-in deterministic provider-free smoke/baseline mode,
so you do **not** need API keys or a local model server.

> Release-gated command note: the command blocks in this guide are validated
> against `xrtm/docs/release-command-contract.json` so the public site cannot
> drift ahead of the latest published `xrtm` package surface.

Version ownership for that released surface follows the
[Stack Versioning Policy](https://github.com/xrtm-org/governance/blob/main/policies/stack-versioning-policy.md):
`xrtm` is the product-anchor version for newcomer and WebUI claims.

XRTM's first-class integration categories are **OpenAI-compatible endpoints**
and **coding-agent CLI contracts**. Local and commercial deployments are
profiles inside those categories. The mock path in this guide is a
provider-free smoke/baseline mode, not a third runtime family.

## 1. Install

```bash
python3.11 -m venv .venv
. .venv/bin/activate
pip install xrtm==0.8.0
```

This install brings in the full released forecasting stack, so the first
dependency download is heavier than a toy CLI quickstart.

**Supported Python versions:** `>=3.11,<3.13`

## 2. Choose your first-success interface

```bash
xrtm start
```

**CLI-led first success**

`xrtm start` is the released health check plus guided first run. It verifies
imports, runs the deterministic provider-free smoke/baseline workflow, confirms
the key artifacts, and prints exact next commands with the run id and report
path.

**WebUI-led first success**

```bash
xrtm web --runs-dir runs
```

Open `http://127.0.0.1:8765/start` and use **Run quickstart**. That Start page
uses the same shared product launch service as `xrtm start`, plus the same
doctor and provider-status data that the CLI surfaces.

## 3. Inspect the run artifacts

The run directory contains the same evidence used by higher-level views:

```bash
xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs
```

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

`monitor.json` is optional monitor state. Real monitor runs populate it with
watches and thresholds, while some profile-driven runs may carry an idle
placeholder. Use `xrtm monitor list` status and watch counts to distinguish
active monitors from ordinary runs.

## 4. Browse the WebUI shell and safely edit in Workbench

Launch the local WebUI:

```bash
xrtm web --runs-dir runs
```

Open `http://127.0.0.1:8765/` in your browser first. In `xrtm==0.8.0`, the
released WebUI is a local React/TypeScript app shell backed by a Python JSON
API and local SQLite app-state. It gives you Overview, Start, Runs, Workflow
detail, Operations, run detail, compare, Advanced visibility, and the
`/workbench` draft flow in one shell.

With the default local workspace layout, reusable workflows stay in
`.xrtm/workflows` while draft values, validation snapshots, compare cache, and
resume state stay in `.xrtm/webui/app-state.db`.

Use `http://127.0.0.1:8765/start` for quickstart or named workflow runs,
`http://127.0.0.1:8765/operations` for profiles, monitor lifecycle, artifact
inventory, and cleanup preview/confirm, and
`http://127.0.0.1:8765/workbench` when you want the released edit flow:

1. cloning an existing workflow/run setup into an editable draft
2. making constrained safe edits
3. validating the edited draft before execution
4. running the validated draft
5. comparing the new run against the baseline evidence

Safe edit is intentionally narrow. It covers `questions.limit`, the report
toggle, and supported aggregate-weight controls. It is **not** arbitrary graph,
JSON, or code editing.

Use Overview, Start, Runs, or Operations when you need the released review and
operator surfaces; switch to `/workbench` only when you want the guided draft
flow.

If you prefer the terminal, launch the TUI instead:

```bash
xrtm tui --runs-dir runs
```

## 5. What you just proved

You completed the first published XRTM event-forecasting loop:

1. **Health check**: verified the installed stack and local readiness
2. **Forecast run**: ran a provider-free smoke/baseline workflow without external endpoints or CLI contracts
3. **Scored evidence**: verified the newest run and its outputs on disk
4. **Review surface**: opened the same local app shell through Overview, Start, Runs, Workflow detail, Operations, run detail, compare, the `/workbench` safe-edit path, or TUI

That is the core product path for newcomers today.

It is also intentionally modest: the default provider-free smoke/baseline run proves that
XRTM can create scored, inspectable evidence and teach you how to review it.
It does **not** by itself prove visible forecast-quality improvement over time,
because the released provider-free smoke/baseline mode is deterministic and
should remain stable.

## Official proof-point workflows

After the first run, these release-gated workflows expand the same
event-forecasting loop:

### 1. Provider-free smoke/baseline first success

```bash
xrtm start
xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs
xrtm web --runs-dir runs
```

### 2. Benchmark and performance workflow

```bash
xrtm perf run --scenario provider-free-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json
xrtm web --runs-dir runs --smoke
```

Use this workflow when you want deterministic benchmark evidence and a quick
WebUI route smoke without introducing provider noise.

Treat it as the released evaluation baseline:

- `performance.json` captures repeatable runtime evidence
- the paired `runs-perf/<run-id>/run_summary.json` carries scored run metrics such as Brier and ECE
- on the provider-free path, repeated runs should stay stable enough to act as a control before you change endpoint/model settings
- if the compare output is effectively unchanged across repeated provider-free control runs, that is the expected control behavior

### 3. Monitoring, history, and export workflow

```bash
xrtm profile starter my-local --runs-dir runs
xrtm run profile my-local
xrtm monitor start --provider mock --limit 2 --runs-dir runs
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export latest --runs-dir runs --output export.json
xrtm runs export latest --runs-dir runs --output export.csv --format csv
```

When you compare two runs, read the output like an evaluation gate:

- **Brier / ECE:** lower is better
- **warnings / errors:** should stay at zero
- **duration / tokens:** efficiency cost of a change
- use compare only after the two runs are meant to answer the same question set
- unchanged provider-free control compares mean the baseline is stable; introduce a real endpoint/model/runtime change before claiming improvement
- improved scores with similar operational health are promotion candidates; regressions or large runtime jumps should be investigated or rejected

You can also open `/workbench` from the WebUI to clone a baseline, apply the
same safe-edit limits (`questions.limit`, report toggle, supported aggregate
weights), validate, run, and compare without claiming arbitrary graph or code
editing.

### 4. OpenAI-compatible endpoint advanced workflow (local profile)

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm local-llm status
xrtm demo --provider local-llm --limit 1 --max-tokens 768 --runs-dir runs-local
```

Only switch to the local OpenAI-compatible endpoint profile after the
provider-free smoke/baseline path above is working.

Commands that are still on the next coordinated release train—corpus-validation
flows and user-attribution flags—stay off this guide until the release
contract moves forward.

## Good next steps

### Run a slightly larger local pass

```bash
xrtm demo --provider mock --limit 10 --runs-dir runs
```

### Create a reusable local profile

```bash
xrtm profile starter my-local --runs-dir runs
xrtm profile show my-local
xrtm run profile my-local
```

Run these profile commands from a writable workspace. If your current
directory is read-only, pass `--profiles-dir /writable/path`.

This writes `.xrtm/profiles/my-local.json` and keeps the workflow on the same
provider-free smoke/baseline path you just proved.

### Pick the guide that matches your role

- **Researcher / model-eval**: stay on the provider-free smoke/baseline path, then use the [researcher workflow](./workflows/researcher-model-eval) for the honest control → candidate → compare decision loop and the clearly labeled advanced paths.
- **Operator**: continue with the [operator runbook](./workflows/operator-runbook) for monitoring, profiles, performance checks, exports, and troubleshooting.
- **Team**: read [team workflows](./workflows/team-workflows) for realistic multi-user patterns and current limitations.
- **Developer / integrator**: use the [developer workflow](./workflows/developer-integrator) and the [packages overview](./framework/intro) to move from product usage into APIs and examples.

## Advanced and optional: local LLM mode

Only switch to `--provider local-llm` after the provider-free smoke/baseline
path above is working.

Use local-LLM mode when you specifically need to evaluate a real local
OpenAI-compatible endpoint profile rather than the provider-free baseline.
Local and commercial endpoint deployments are profiles in the same runtime
category; this released guide only validates the local profile.

Typical prerequisites:
- a running local inference server such as llama.cpp, Ollama, or LocalAI
- downloaded model weights
- enough CPU/GPU resources for the model you chose
- willingness to trade the quick start for a slower, more complex setup

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

### `xrtm start` reports warnings

Check the warning text first. Optional components may be missing even when the
default provider-free smoke/baseline path is fine.

### Local-LLM health check fails

Go back to the provider-free smoke/baseline path, confirm the main install
works, then use the [operator runbook](./workflows/operator-runbook) to debug
your local endpoint.
