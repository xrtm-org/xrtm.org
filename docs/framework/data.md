---
title: xrtm-data
description: Data-layer summary with clear standards and ownership boundaries.
---

# xrtm-data

`xrtm-data` provides the temporal and schema foundations for the ecosystem.

:::note Page role
This page is a package-map summary. Data-layer implementation details live in
[`xrtm-org/data`](https://github.com/xrtm-org/data), while normative schema and
compatibility policy live in [`xrtm-org/governance`](https://github.com/xrtm-org/governance).
:::

## Use this package when

- you need snapshot-aware data access or replay foundations
- you care about temporal integrity and zero-leakage evaluation
- you are building lower-level data flows beneath the forecasting/runtime layers

## What it gives you

- **Vaulting:** frozen world states with integrity checks
- **Historical replay:** time-safe access to past context
- **Zero leakage enforcement:** shared `snapshot_time` foundations used across the stack

## Canonical references

- [xrtm-org/data](https://github.com/xrtm-org/data)
- [Governance schemas](https://github.com/xrtm-org/governance/tree/main/schemas)

## Ownership boundary

Change data-layer code in `data`. Change normative cross-repo schema or
compatibility rules in `governance` first.
