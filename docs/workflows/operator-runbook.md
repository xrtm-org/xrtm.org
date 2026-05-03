---
title: Operator runbook
description: Local operations, profiles, artifacts, monitoring, performance smoke, and troubleshooting.
---

# XRTM Operator Runbook

This path covers the supported operating workflow for the top-level XRTM product shell once the released first event-forecasting loop is already working.

It sharpens the official **monitoring, history, and report workflow**, while also covering the released benchmark smoke command that should precede local-LLM use.

> Released `xrtm==0.3.0` intentionally keeps this page on the commands that actually ship today. New guided-start and validation flows stay on the next coordinated release track.

## Start from the default path

If you have not already done so, complete [Getting started](../getting-started) first. Operators should start with the same provider-free proof path as everyone else.

## Official proof-point coverage

1. **Provider-free first success** starts in [Getting started](../getting-started).
2. **Benchmark smoke workflow** appears below through `xrtm perf run`.
3. **Monitoring, history, and report workflow** is the main operator loop on this page.
4. **Local-LLM advanced workflow** stays optional and comes last.

## Core operator loop

### Create a repeatable profile

```bash
xrtm profile create my-local --provider mock --limit 2 --runs-dir runs
xrtm run profile my-local
```

### Inspect artifacts and reports

```bash
xrtm runs list --runs-dir runs
xrtm runs show <run-id> --runs-dir runs
xrtm artifacts inspect runs/<run-id>
xrtm report html runs/<run-id>
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export <run-id> --runs-dir runs --output export.json
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

Monitor-only views read real monitor runs. Ordinary forecast runs stay in
`xrtm runs list`, the WebUI runs table, and the TUI runs panel unless they were
created with `xrtm monitor start`.

History and report review stay on the same proof-point path:

```bash
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export <run-id> --runs-dir runs --output export.json
xrtm report html runs/<run-id>
```

Treat that compare/export surface as an operator decision loop:

- repeated mock runs are the stable default control
- unchanged compare output means your baseline is behaving as expected
- only claim improvement after a meaningful provider/model/runtime change lowers Brier/ECE without adding warnings/errors or unacceptable runtime/tokens cost
- export the winning run when you want deeper analyst review

## Benchmark smoke workflow

Use the built-in provider-free performance harness when you want a quick local regression signal without introducing provider noise:

```bash
xrtm perf run --scenario provider-free-smoke --iterations 3 --limit 1 --runs-dir runs-perf --output performance.json
xrtm web --runs-dir runs --smoke
```

`xrtm perf run` writes a structured performance report, while `xrtm web --runs-dir runs --smoke` verifies the WebUI routes without starting a long-lived server.

That benchmark is the honest released default baseline. Stronger visible
improvement proof belongs to the advanced paths where you intentionally change
model or runtime behavior.

## Validation status

The newer corpus-validation commands are not part of the published `xrtm==0.3.0` release. Until a coordinated release ships them with compatible upstream packages, keep released operator workflows on `xrtm perf run`, explicit run inspection, compare, JSON export, and monitor commands.

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
- Need a run id: use `xrtm runs list --runs-dir runs`.
- `xrtm artifacts inspect` fails on a directory: confirm it is a canonical XRTM run with `run.json` present.

## What this runbook assumes today

- local artifact-backed runs
- profile-based repeatability via `xrtm profile create`
- WebUI and TUI over the same run directories
- compare, export, and inspect commands
- monitor lifecycle commands
- performance smoke checks

## Good next links

- [Researcher / model-eval workflow](./researcher-model-eval)
- [Team workflows](./team-workflows)
- [Examples and proof](../examples)
