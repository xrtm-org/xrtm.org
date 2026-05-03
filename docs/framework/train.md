---
title: xrtm-train
description: Training-layer summary with clear role and ownership boundaries.
---

# xrtm-train

`xrtm-train` is the optimization and replay layer of the XRTM ecosystem.

:::note Page role
This page is a package-map summary. Training workflows, replay harnesses, and
optimization code live in [`xrtm-org/train`](https://github.com/xrtm-org/train).
:::

## Use this package when

- you are doing replay, calibration, or backtesting work beyond the default product shell
- you want to test candidate changes against historical or controlled evaluation loops
- you need the deeper improvement path after learning the released compare/export surface

## What it gives you

- **Backtesting:** stress-test strategies against historical snapshots
- **Optimization:** training/calibration loops that can actually change system behavior
- **Simulation:** large-scale experiment workflows above the lower package layers

## Canonical reference

- [xrtm-org/train](https://github.com/xrtm-org/train)

## Ownership boundary

Package-level optimization and replay guidance belongs in `train`. Use
`xrtm.org` to explain where that work sits relative to the released product path.
