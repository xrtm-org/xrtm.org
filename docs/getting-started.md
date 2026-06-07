---
title: Getting started
description: Install the released package, run the guided first command, inspect artifacts, and open the local WebUI Hub, Studio, Playground, Observatory, or TUI.
---

# Getting Started with XRTM

This is the shortest honest path to first success with XRTM.

You will run the released health-check plus guided first-success path, inspect
the generated artifacts, and browse the results in the local WebUI Hub, Studio,
Playground, Observatory, or TUI. The default path uses the built-in
deterministic baseline mode, so you do **not** need API keys
or a local model server.

> Release-gated command note: the command blocks in this guide are validated
> against `scripts/release-command-contract.json` so the public site cannot
> drift ahead of the latest published `xrtm` package surface.

Version ownership for that released surface follows the
[Stack Versioning Policy](https://github.com/xrtm-org/governance/blob/main/policies/stack-versioning-policy.md):
`xrtm` is the product-anchor version for newcomer and WebUI claims.

The `0.9.0` release keeps the bounded local Hub → Studio → Playground →
Observatory product spine. It keeps the default release baseline deterministic
and does not claim a calibration dashboard, API/webhook control plane,
arbitrary code/plugin forecast-path editor, full persistent collaborative canvas layout,
or commercial runtime path without separate validation.

If you are running **source tip** rather than the published package, see
[Next release track](./next-release) for the source-visible local Batch Runner,
Version snapshots, API Control, signed webhook delivery, richer Observatory
analytics, and the more focused Studio/Playground surfaces that are implemented
in source but not yet part of the public released claim set.

XRTM's first-class integration categories are **OpenAI-compatible endpoints**
and **coding-agent CLI contracts**. Local and commercial deployments are
profiles inside those categories. The deterministic path in this guide is a
deterministic baseline mode, not a third runtime family.

## 1. Install

```bash
python3.11 -m venv .venv
. .venv/bin/activate
pip install xrtm==0.9.0
```

This install brings in the full released forecasting stack, so the first
dependency download is heavier than a toy CLI quickstart.

**Supported Python versions:** `>=3.11,<3.14`

## 2. Choose your first-success interface

```bash
xrtm start
```

**CLI-led first success**

`xrtm start` is the released health check plus guided first run. It verifies
imports, runs the deterministic baseline workflow, confirms
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

## 4. Browse the WebUI Hub, Studio, Playground, and Observatory

Launch the local WebUI:

```bash
xrtm web --runs-dir runs
```

Open `http://127.0.0.1:8765/` in your browser first. The released WebUI is a
local React/TypeScript app shell backed by a Python JSON API and local SQLite
app-state. The shell keeps its version, local-only scope, file-backed history,
and SQLite draft-state cues visible up front while still giving you Hub at `/`
and `/hub`, Start, Runs, Workflow detail, Operations, Studio at `/studio`,
Playground, Observatory at `/observatory`, run detail, compare, Advanced
visibility, and `/workbench` compatibility in one local cockpit.

With the default local workspace layout, reusable workflows stay in
`.xrtm/workflows` while draft values, validation snapshots, compare cache, and
resume state stay in `.xrtm/webui/app-state.db`.

Use `http://127.0.0.1:8765/` or `http://127.0.0.1:8765/hub` for the Hub,
`http://127.0.0.1:8765/start` for quickstart or named workflow runs,
`http://127.0.0.1:8765/operations` for profiles, monitor lifecycle, artifact
inventory, and cleanup preview/confirm, and
`http://127.0.0.1:8765/studio` when you want the released authoring flow:

1. starting from scratch, a released starter template, or a clone
2. authoring shared workflow fields plus safe forecast-path changes inside the released
   workflow schema and built-in node catalog
3. validating and saving the authored draft before execution
4. running the validated draft
5. tracing it through Playground and inspecting evidence in Observatory

Studio is a bounded forecast path IDE over the existing workflow schema and built-in
node catalog. It supports local node dragging, palette click/drag-to-canvas
add-node, node/edge/workflow selection, edge create/remove, entry setting,
contextual inspection, and validate/save/run through the Studio APIs.
`/workbench` remains a compatibility route for existing links. Parallel-group
and conditional-route editing remain thin/read-only. Studio is **not** an
arbitrary code/plugin forecast-path editor, generic diagramming app, raw JSON editor, or
hosted collaboration canvas.

The same shared authoring layer also powers `xrtm workflow create ...` and
`xrtm workflow edit ...` for terminal-led workflows.

The released package also includes the bounded forecast-path-linked Playground lane. Open
`http://127.0.0.1:8765/playground` from the same local shell when you want one
custom question first, optional tiny follow-up batches capped at 5, forecast-path/canvas
preview, ordered node trace, executed-node highlighting, an honest fallback when
no execution trace artifact exists, and explicit save-back to workflow/profile only.
Keep those runs exploratory and separate from benchmark or release evidence by
default, and keep the released runtime wording deterministic unless wider
validation is published separately.

```bash
xrtm playground --workflow demo-deterministic --question "Will the released 0.9.0 playground stay exploratory?" --workflows-dir .xrtm/workflows --runs-dir runs
```

That released Playground command uses the deterministic baseline path and the
same shared sandbox contract as the WebUI route.

Use Hub, Start, Runs, Operations, or Observatory when you need the released
review and operator surfaces; switch to `/studio` when you want the guided
workflow-authoring flow. Existing `/workbench` links remain compatible.

If you prefer the terminal, launch the TUI instead:

```bash
xrtm tui --runs-dir runs
```

## 5. What you just proved

You completed the first published XRTM event-forecasting loop:

1. **Health check**: verified the installed stack and local readiness
2. **Forecast run**: ran a deterministic baseline workflow without external endpoints or CLI contracts
3. **Scored evidence**: verified the newest run and its outputs on disk
4. **Review surface**: opened the same local forecasting cockpit—with visible version/local-state trust cues—through Hub, Start, Runs, Workflow detail, Operations, Studio, Playground, Observatory, run detail, compare, `/workbench` compatibility, or TUI

That is the core product path for newcomers today.

It is also intentionally modest: the default deterministic baseline run proves that
XRTM can create scored, inspectable evidence and teach you how to review it.
It does **not** by itself prove visible forecast-quality improvement over time,
because the released deterministic baseline mode is deterministic and
should remain stable.

## Official proof-point workflows

After the first run, these release-gated workflows expand the same
event-forecasting loop:

### 1. Deterministic baseline first success

```bash
xrtm start
xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs
xrtm web --runs-dir runs
```

### 2. Benchmark and performance workflow

```bash
xrtm perf run --scenario deterministic-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json
xrtm web --runs-dir runs --smoke
```

Use this workflow when you want deterministic benchmark evidence and a quick
WebUI route smoke without introducing provider noise.

Treat it as the released evaluation baseline:

- `performance.json` captures repeatable runtime evidence
- the paired `runs-perf/<run-id>/run_summary.json` carries scored run metrics such as Brier and ECE
- on the deterministic path, repeated runs should stay stable enough to act as a control before you change endpoint/model settings
- if the compare output is effectively unchanged across repeated deterministic control runs, that is the expected control behavior

### 3. Monitoring, history, and export workflow

```bash
xrtm profile starter my-local --runs-dir runs
xrtm run profile my-local
xrtm monitor start --provider deterministic --limit 2 --runs-dir runs
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export latest --runs-dir runs --output export.json
xrtm runs export latest --runs-dir runs --output export.csv --format csv
```

When you compare two runs, read the output like an evaluation gate:

- **Brier / ECE:** lower is better
- **warnings / errors:** should stay at zero
- **duration / tokens:** efficiency cost of a change
- use compare only after the two runs are meant to answer the same question set
- unchanged deterministic control compares mean the baseline is stable; introduce a real endpoint/model/runtime change before claiming improvement
- improved scores with similar operational health are promotion candidates; regressions or large runtime jumps should be investigated or rejected

You can also open `/studio` from the WebUI to start from scratch/template/clone,
author shared core workflow fields plus safe node/edge/entry changes, validate,
run, and compare without claiming arbitrary code/plugin forecast-path editing or a full
persistent collaborative canvas layout. `/workbench` remains a compatibility
route for existing links.

### 4. OpenAI-compatible endpoint advanced workflow (local profile)

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm openai-compatible status
xrtm demo  --limit 1 --max-tokens 768 --runs-dir runs-local
```

Only switch to the local OpenAI-compatible endpoint profile after the
deterministic baseline path above is working.

Commands that are still on the next coordinated release train—corpus-validation
flows and user-attribution flags—stay off this guide until the release
contract moves forward.

## Good next steps

### Run a slightly larger local pass

```bash
xrtm demo --provider deterministic --limit 10 --runs-dir runs
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
deterministic baseline path you just proved.

### Pick the guide that matches your role

- **Researcher / model-eval**: stay on the deterministic baseline path, then use the [researcher workflow](./workflows/researcher-model-eval) for the honest control → candidate → compare decision loop and the clearly labeled advanced paths.
- **Operator**: continue with the [operator runbook](./workflows/operator-runbook) for monitoring, profiles, performance checks, exports, and troubleshooting.
- **Team**: read [team workflows](./workflows/team-workflows) for realistic multi-user patterns and current limitations.
- **Developer / integrator**: use the [developer workflow](./workflows/developer-integrator) and the [packages overview](./framework/intro) to move from product usage into APIs and examples.

## Advanced and optional: local LLM mode

Only switch to `` after the deterministic baseline
path above is working.

Use local-LLM mode when you specifically need to evaluate a real local
OpenAI-compatible endpoint profile rather than the deterministic baseline.
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
xrtm openai-compatible status
xrtm demo  --limit 1 --max-tokens 768 --runs-dir runs-local
```

For deeper setup and troubleshooting, use the [operator runbook](./workflows/operator-runbook).

## Quick troubleshooting

### `xrtm: command not found`

Activate the virtual environment first:

```bash
. .venv/bin/activate
```

### Installation fails on Python 3.14

This is expected. XRTM currently supports Python `>=3.11,<3.14`.

### `xrtm start` reports warnings

Check the warning text first. Optional components may be missing even when the
default deterministic baseline path is fine.

### Local-LLM health check fails

Go back to the deterministic baseline path, confirm the main install
works, then use the [operator runbook](./workflows/operator-runbook) to debug
your local endpoint.
