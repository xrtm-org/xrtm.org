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

The released `xrtm 0.7.0` surface does **not** ship built-in user management, centralized permissions, or a multi-user control plane.

## Suggested order

1. Complete [Getting started](../getting-started).
2. Use the [Researcher / model-eval workflow](./researcher-model-eval) or [Operator runbook](./operator-runbook) for the actual single-user command flow.
3. Layer team conventions on top of those released artifact-backed workflows.

## Good next links

- [Operator runbook](./operator-runbook)
- [Researcher / model-eval workflow](./researcher-model-eval)
- [Examples and proof](../examples)
