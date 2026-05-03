---
title: Team workflows
description: Honest team usage patterns built on current XRTM features and conventions.
---

# XRTM Team Workflows

Teams can use XRTM productively today, but they do it through **shared artifacts, profiles, JSON exports, and conventions** rather than a built-in shared control plane.

:::info Page role
**Released user workflow.** This page documents what teams can do on the current
released surface without implying unreleased identity, CSV, or control-plane
features. For possible future team features, use
[Next release track](../next-release).
:::

## What teams can do today

- standardize local workflows with named profiles
- write runs into shared directories
- attribute runs through profile names and directory conventions
- compare runs and export JSON for downstream analysis
- review HTML reports, WebUI views, and TUI views over the same artifacts

## What XRTM does not claim to ship here

- built-in user management or role-based access control
- a shared database or team dashboard
- centralized permissions, quotas, or multi-user coordination features
- built-in CSV export or CLI `--user` attribution on the released `0.3.0` surface

## Practical team pattern

### 1. Share installation and conventions

```bash
python3.11 -m venv .venv
. .venv/bin/activate
pip install xrtm==0.3.0
xrtm doctor
```

### 2. Create repeatable analyst profiles

```bash
xrtm profile create analyst-jane --provider mock --limit 10 --runs-dir runs
xrtm profile create analyst-bob --provider mock --limit 10 --runs-dir runs
```

### 3. Use shared run storage and JSON exports

```bash
xrtm run profile analyst-jane
xrtm runs export <run-id> --runs-dir runs --output exports/jane.json
```

If spreadsheet rows are required, treat them as a custom integration layer built on top of the released JSON export.

## Where this path fits

This page is for teams that want to operationalize what XRTM already ships without pretending the product has fully built-in multi-user infrastructure.

## Good next links

- [Operator runbook](./operator-runbook)
- [Researcher / model-eval workflow](./researcher-model-eval)
- [Examples and proof](../examples)
