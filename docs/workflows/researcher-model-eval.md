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
- you can inspect run detail in the WebUI shell, use `/start` or `/workflows/<name>` to launch the next bounded run, and use `/workbench` to start from scratch/template/clone, author safe workflow changes, validate, run, and compare

## Recommended order

1. Finish [Getting started](../getting-started).
2. Run a slightly larger released baseline with `xrtm demo --provider mock --limit 10 --runs-dir runs`.
3. Review the latest result with `xrtm runs show latest --runs-dir runs`, `xrtm artifacts inspect --latest --runs-dir runs`, and `xrtm report html --latest --runs-dir runs`.
4. Start `xrtm web --runs-dir runs`, use `/start` for a bounded next run or `/runs` for history review, then open `/workbench` for the guided draft flow when you want an editable UI loop.
5. Once you have multiple runs, use `xrtm runs compare <run-id-a> <run-id-b> --runs-dir runs` or `xrtm runs export latest --runs-dir runs --output export.json`.

The workbench authoring contract stays inside the released schema and built-in
node catalog: shared core workflow fields plus safe node/edge/entry edits.
Parallel-group and conditional-route editing remain thin/read-only. Do not
treat it as an arbitrary graph, JSON, implementation, or code editor.

## When to leave this page

- Use the [Operator runbook](./operator-runbook) when you need reusable profiles, monitoring, WebUI, or TUI operations.
- Use [Examples and proof](../examples) when you want deeper shipped examples.
- Use [Developer / integrator](./developer-integrator) when you need runtime or repo-level reference.
