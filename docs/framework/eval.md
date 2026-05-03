---
title: xrtm-eval
description: Evaluation-layer summary with clear ownership boundaries.
---

# xrtm-eval

`xrtm-eval` is the verification layer of the XRTM ecosystem.

:::note Page role
This page is a package-map summary. Evaluation code and package-level truth live
in [`xrtm-org/eval`](https://github.com/xrtm-org/eval).
:::

## Use this package when

- you need scoring or calibration utilities directly in code
- you want the evaluation layer separated from runtime/inference concerns
- you are interpreting Brier, ECE, and related forecast-quality signals

## What it gives you

- **Brier scoring:** lower is better; `0.000` is perfect and about `0.250` is the balanced 50/50 binary baseline
- **ECE / calibration:** lower is better; near `0` means stated confidence matches realized frequency more closely
- **Resolution handling:** scoring logic that respects the gap between a forecast and its eventual outcome

## Canonical reference

- [xrtm-org/eval](https://github.com/xrtm-org/eval)

## Ownership boundary

Update evaluation logic and package docs in `eval`. Use `xrtm.org` only to keep
the ecosystem map understandable for newcomers and integrators.
