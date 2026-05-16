---
title: Developer / integrator workflow
description: A thin router to the product, runtime, and governance owners.
---

# Developer / integrator workflow

If you are building on XRTM, treat `xrtm.org` as a **router**, not the canonical API manual.

## Start in the right place

- **Product workflow and artifact contract**: start with the [`xrtm` README](https://github.com/xrtm-org/xrtm) and [Getting started](../getting-started). The current released product shell is `xrtm 0.7.0`, including the `/workbench` path for clone, constrained safe edit, validate, run, and compare.
- **Runtime and provider integration reference**: use the [`xrtm-forecast` repo](https://github.com/xrtm-org/forecast) and its [docs index](https://github.com/xrtm-org/forecast/blob/main/docs/index.md). The current released runtime package is `xrtm-forecast 0.6.10`.
- **Governance and release policy**: use [`xrtm-org/governance`](https://github.com/xrtm-org/governance).

## Recommended order

1. Complete [Getting started](../getting-started).
2. Read [Examples and proof](../examples) if you need shipped examples before integrating.
3. Treat workbench safe edits as limited to `questions.limit`, the report toggle, and supported aggregate weights; do not build integrations on arbitrary graph, JSON, or code editing claims.
4. Move to the owning repo only after the released product path is clear.
