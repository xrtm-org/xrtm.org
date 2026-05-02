---
title: Operator runbook
description: Local operations, profiles, artifacts, monitoring, performance smoke, and troubleshooting.
---

# XRTM Operator Runbook

This path covers the supported operating workflow for the top-level XRTM
product shell once the first event-forecasting loop is already working.

It sharpens the official **monitoring, history, and report workflow**, while also covering the benchmark/validation commands that should precede local-LLM use.

## Start from the default path

If you have not already done so, complete [Getting started](../getting-started) first. Operators should start with the same provider-free proof path as everyone else.

## Official proof-point coverage

1. **Provider-free first success** starts in [Getting started](../getting-started).
2. **Benchmark and validation workflow** appears below through `xrtm perf run` and `xrtm validate run`.
3. **Monitoring, history, and report workflow** is the main operator loop on this page.
4. **Local-LLM advanced workflow** stays optional and comes last.

## Core operator loop

### Scaffold the lightest repeatable profile

```bash
xrtm profile starter my-local --runs-dir runs
xrtm run profile my-local
```

Use `profile starter` right after `xrtm start` when you want the lightest reusable local scaffold. It creates `.xrtm/profiles/<name>.json`, keeps the workflow on the same mock-provider path, and ensures the target runs directory exists.

### Create fully custom profiles when needed

```bash
xrtm profile create local-mock --provider mock --limit 2 --runs-dir runs
xrtm profile list
xrtm profile show local-mock
xrtm run profile local-mock
```

### Inspect artifacts and reports

```bash
xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export latest --runs-dir runs --output latest-run.json
```

### Browse the same runs in browser or terminal

```bash
xrtm web --runs-dir runs
xrtm tui --runs-dir runs
```

### Use local monitoring and retention tools

```bash
xrtm monitor start --provider mock --limit 2 --runs-dir runs
xrtm monitor list --runs-dir runs
xrtm artifacts cleanup --runs-dir runs --keep 50
```

History and report review stay on the same proof-point path:

```bash
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export latest --runs-dir runs --output latest-run.json
xrtm report html --latest --runs-dir runs
```

## Benchmark and validation workflow

Use the built-in provider-free performance harness when you want a quick local regression signal without introducing provider noise:

```bash
xrtm perf run --scenario provider-free-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json
xrtm web --runs-dir runs --smoke
```

`xrtm perf run` writes a structured performance report, while `xrtm web --smoke` verifies the WebUI routes without starting a long-lived server.

## Use validation for larger corpus sweeps

When you need more than a quick smoke test, move into the validation surface:

```bash
xrtm validate list-corpora
xrtm validate run --provider mock --limit 10 --iterations 2 --runs-dir runs-validation
```

The default validation path stays on the safe provider-free route and uses the bundled Tier 1 corpus. Switch to local-LLM validation only after `xrtm local-llm status` is healthy.

## Optional later: local-LLM mode

Use local-LLM mode only after the provider-free path above is already healthy.

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm local-llm status
xrtm demo --provider local-llm --limit 1 --max-tokens 768 --runs-dir runs-local
```

This is the right place to validate a real local model, but it is intentionally not the first-run path.

## Troubleshooting cues

- `xrtm` install fails on Python 3.13: use Python 3.11 or 3.12.
- `xrtm local-llm status` fails: treat it as a local endpoint/server issue first, then retry the local-LLM flow.
- `xrtm artifacts inspect` fails on a directory: confirm it is a canonical XRTM run with `run.json` present.

## What this runbook assumes today

- local artifact-backed runs
- profile-based repeatability
- WebUI and TUI over the same run directories
- compare, export, and inspect commands
- monitor lifecycle commands
- performance smoke and validation commands

## Good next links

- [Researcher / model-eval workflow](./researcher-model-eval)
- [Team workflows](./team-workflows)
- [Examples and proof](../examples)
