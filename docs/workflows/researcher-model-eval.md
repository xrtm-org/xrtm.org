---
title: Researcher / model-eval workflow
description: The default next workflow after getting started.
---

# Researcher / model-eval workflow

This is the **first workflow after getting started**.

Use it when you want repeatable local runs, clear scoring evidence, and simple compare/export steps before you move into deeper integration work.

## What success looks like

- you can run provider-free passes repeatedly
- you can inspect the saved artifacts and generated report
- you can compare or export runs without leaving the local artifact model
- you can inspect run detail in the local WebUI shell, use Hub at `/` or `/hub`, `/start`, or `/workflows/<name>` to launch the next bounded run, use `/studio` to start from scratch/template/clone, author safe workflow changes over the released schema/node catalog, validate, run, and compare, use `/playground` for graph/canvas preview plus ordered node trace with honest no-trace fallback, and use `/observatory` for run inspection

## Recommended order

1. Finish [Getting started](../getting-started).
2. Run a slightly larger released baseline with `xrtm demo --provider mock --limit 10 --runs-dir runs`.
3. Review the latest result with `xrtm runs show latest --runs-dir runs`, `xrtm artifacts inspect --latest --runs-dir runs`, and `xrtm report html --latest --runs-dir runs`.
4. Start `xrtm web --runs-dir runs`, use Hub, `/start`, or `/runs` for history review, then open `/studio` for the guided draft flow when you want an editable UI loop. `/workbench` remains compatible for older links.
5. Once you have multiple runs, use `xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs` or `xrtm runs export latest --runs-dir runs --output export.json`.

The Studio/workbench authoring contract stays inside the released schema and
built-in node catalog: shared core workflow fields plus safe node/edge/entry
edits. Parallel-group and conditional-route editing remain thin/read-only. Do
not treat it as an arbitrary code/plugin graph editor, hosted collaborative
canvas, raw JSON editor, or implementation editor.

Treat the polished shell chrome as a trust aid—visible local/version/state
cues—not as a new runtime, control-plane, or authoring-capability claim.

## When to leave this page

- Use the [Operator runbook](./operator-runbook) when you need reusable profiles, monitoring, WebUI, or TUI operations.
- Use [Examples and proof](../examples) when you want deeper shipped examples.
- Use [Developer / integrator](./developer-integrator) when you need runtime or repo-level reference.
