---
title: Developer / integrator workflow
description: A thin router to the product, runtime, and governance owners.
---

# Developer / integrator workflow

If you are building on XRTM, treat `xrtm.org` as a **router**, not the canonical API manual.

## Start in the right place

- **Product workflow and artifact contract**: start with the [`xrtm` README](https://github.com/xrtm-org/xrtm) and [Getting started](../getting-started). The public capability set is the released `xrtm 0.8.3` shell: Start, Workflow detail, Operations, `/workbench`, and `/playground` for the bounded exploratory sandbox. The `0.8.3` docs refresh stays about shell polish and trust cues, not new capability families.
- **Runtime and provider integration reference**: use the [`xrtm-forecast` repo](https://github.com/xrtm-org/forecast) and its [docs index](https://github.com/xrtm-org/forecast/blob/main/docs/index.md). The current released runtime package is `xrtm-forecast 0.6.10`.
- **Governance and release policy**: use [`xrtm-org/governance`](https://github.com/xrtm-org/governance).

## Recommended order

1. Complete [Getting started](../getting-started).
2. Read [Examples and proof](../examples) if you need shipped examples before integrating.
3. Treat workbench authoring as limited to the released schema and node library: shared core workflow fields plus safe node/edge/entry edits. Parallel-group and conditional-route editing are still thin/read-only; refreshed shell wording does not widen that boundary into arbitrary graph, JSON, or code editing claims.
4. Move to the owning repo only after the released product path is clear.
