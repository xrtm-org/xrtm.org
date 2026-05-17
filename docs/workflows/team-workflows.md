---
title: Team workflows
description: Honest shared-usage patterns on the released XRTM surface.
---

# XRTM Team Workflows

Teams can use XRTM today through **shared run directories, exports, reports, and conventions**.

## What teams can do today

- standardize on shared profile conventions from the [Operator runbook](./operator-runbook)
- keep runs in agreed directories and review the same saved artifacts
- export JSON or CSV for downstream analysis with `xrtm runs export latest --runs-dir runs --output export.json`
- share HTML reports, WebUI `/workbench` views, and TUI views over the same run evidence

## What this page does not claim

The released `xrtm 0.8.3` surface does **not** ship built-in user management, centralized permissions, or a multi-user control plane.

## Released sandbox note

The released `0.8.3` surface includes a playground/sandbox lane. Treat it
as **exploratory** only: one custom question first, optional tiny follow-up
batches of at most 5, read-only step inspection, and explicit save-back to
workflow/profile. Keep those runs distinct from benchmark or release evidence by
default, and follow the [Next release track](../next-release) for the current
public contract.

## Suggested order

1. Complete [Getting started](../getting-started).
2. Use the [Researcher / model-eval workflow](./researcher-model-eval) or [Operator runbook](./operator-runbook) for the actual single-user command flow.
3. Layer team conventions on top of those released artifact-backed workflows.

## Good next links

- [Operator runbook](./operator-runbook)
- [Researcher / model-eval workflow](./researcher-model-eval)
- [Examples and proof](../examples)
