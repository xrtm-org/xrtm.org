---
title: Operator runbook
description: Local operations, profiles, artifacts, monitoring, WebUI, and TUI.
---

# XRTM Operator Runbook

This path covers the supported local-first operating workflow for the top-level XRTM product shell.

## Start from the default path

If you have not already done so, complete [Getting started](../getting-started) first. Operators should start with the same provider-free proof path as everyone else.

## Core operator loop

### Create repeatable profiles

```bash
xrtm profile create local-mock --provider mock --limit 2 --runs-dir runs
xrtm profile list
xrtm profile show local-mock
xrtm run profile local-mock
```

### Inspect artifacts and reports

```bash
xrtm artifacts inspect runs/<run-id>
xrtm report html runs/<run-id>
xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs
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

## Optional later: local-LLM mode

Use local-LLM mode only after the provider-free path above is already healthy.

```bash
export XRTM_LOCAL_LLM_BASE_URL=http://localhost:8080/v1
xrtm local-llm status
xrtm demo --provider local-llm --limit 1 --max-tokens 768 --runs-dir runs-local
```

This is the right place to validate a real local model, but it is intentionally not the first-run path.

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
