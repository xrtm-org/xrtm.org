---
title: Operator runbook
description: The lightweight route for local profiles, run history, and artifact operations.
---

# XRTM Operator Runbook

Use this page after [Getting started](../getting-started) when you need a repeatable local operating loop.

## What this route covers

- reusable profiles with `xrtm profile starter my-local --runs-dir runs` or `xrtm profile create local-mock --provider mock --limit 2 --runs-dir runs`
- profile execution with `xrtm run profile my-local` or `xrtm run profile local-mock`
- run inspection with `xrtm runs list --runs-dir runs`, `xrtm runs show latest --runs-dir runs`, `xrtm artifacts inspect --latest --runs-dir runs`, and `xrtm report html --latest --runs-dir runs`
- local views with `xrtm web --runs-dir runs` and `xrtm tui --runs-dir runs`
- the released local WebUI shell (`/`, `/start`, `/runs`, `/workflows/<name>`, `/operations`, `/workbench`, `/playground`) for overview, run review, workflow launch, operator controls, guided draft flow, compare, and the bounded exploratory sandbox
- maintenance with `xrtm monitor start --provider mock --limit 2 --runs-dir runs`, `xrtm monitor list --runs-dir runs`, and `xrtm artifacts cleanup --runs-dir runs --keep 50`

## What this page does not try to do

This is still a released local-first route, not a separate platform or control plane. Start on the provider-free baseline, then add more operational structure only when the basic artifact workflow is already healthy.

The WebUI stays local-only: a React/TypeScript shell talks to the local Python
API, reusable workflows stay on disk, profiles stay under `.xrtm/profiles`, and
draft values plus validation/compare resume state stay in SQLite on your
machine. The shell chrome keeps those trust cues explicit instead of implying a
hosted control plane or broader capability set.

Use `/start` for quickstart or named workflow runs, `/operations` for profile,
monitor, artifact, and cleanup actions, `/workbench` when you specifically need
the safe workflow-authoring draft flow, and `/playground` for the bounded
exploratory sandbox: one custom question first, read-only step inspection, and
explicit save-back on the provider-free release baseline. Workbench authoring
covers scratch/template/clone creation, shared core workflow fields, and safe
node/edge/entry edits inside the built-in node catalog. Parallel-group and
conditional-route editing remain thin/read-only, and the surface does not
expose arbitrary graph, JSON, implementation, or code editing.

## Good next links

- [Researcher / model-eval workflow](./researcher-model-eval)
- [Team workflows](./team-workflows)
- [Examples and proof](../examples)
