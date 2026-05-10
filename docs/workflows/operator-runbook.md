---
title: Operator runbook
description: Local operations, profiles, artifacts, monitoring, WebUI, and TUI.
---

# XRTM Operator Runbook

This path covers the supported local-first operating workflow for the top-level
XRTM product shell.

## Start from the default path

If you have not already done so, complete [Getting started](../getting-started)
first. Operators should start with the same provider-free proof path as
everyone else.

## Core operator loop

### Create the lightest repeatable profile

```bash
xrtm profile starter my-local --runs-dir runs
xrtm profile show my-local
xrtm run profile my-local
```

This keeps the workflow on the same released guided-start path while creating a
reusable local profile under `.xrtm/profiles/`.

### Create fully custom profiles when needed

```bash
xrtm profile create local-mock --provider mock --limit 2 --runs-dir runs
xrtm profile list
xrtm profile show local-mock
xrtm run profile local-mock
```

### Inspect artifacts, history, and reports

```bash
xrtm runs list --runs-dir runs
xrtm runs show latest --runs-dir runs
xrtm artifacts inspect --latest --runs-dir runs
xrtm report html --latest --runs-dir runs
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
xrtm runs export latest --runs-dir runs --output export.json
xrtm runs export latest --runs-dir runs --output export.csv --format csv
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

`xrtm monitor list` can include idle zero-watch placeholder entries alongside
real monitor runs. Treat nonzero watch counts and active monitor statuses as the
meaningful monitor signal.

## Optional later: local-LLM mode

Use local-LLM mode only after the provider-free path above is already healthy.

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm local-llm status
xrtm demo --provider local-llm --limit 1 --max-tokens 768 --runs-dir runs-local
```

This is the right place to validate a real local model, but it is intentionally
not the first-run path.

## What this runbook assumes today

- local artifact-backed runs
- profile-based repeatability
- WebUI and TUI over the same run directories
- compare, export, and inspect commands
- monitor lifecycle commands

## Good next links

- [Researcher / model-eval workflow](./researcher-model-eval)
- [Team workflows](./team-workflows)
- [Examples and proof](../examples)
