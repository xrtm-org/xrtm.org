---
title: Developer / integrator workflow
description: A thin router to the product, runtime, and governance owners.
---

# Developer / integrator workflow

If you are building on XRTM, treat `xrtm.org` as a **router**, not the canonical API manual.

## Start in the right place

- **Product workflow and artifact contract**: start with the [`xrtm` README](https://github.com/xrtm-org/xrtm) and [Getting started](../getting-started). The public capability set is the released `xrtm 0.9.0` shell: Hub at `/` and `/hub`, Start, Workflow detail, Operations, Studio at `/studio` as a bounded forecast path IDE over the existing workflow schema and built-in node catalog, `/playground` for forecast-path/canvas preview plus ordered node trace with an honest no-trace fallback, `/observatory` for run inspection, and `/workbench` compatibility.
- **Runtime and provider integration reference**: use the [`xrtm-forecast` repo](https://github.com/xrtm-org/forecast) and its [docs index](https://github.com/xrtm-org/forecast/blob/main/docs/index.md). The current released runtime package is `xrtm-forecast 0.6.11`.
- **Governance and release policy**: use [`xrtm-org/governance`](https://github.com/xrtm-org/governance).

## Recommended order

1. Complete [Getting started](../getting-started).
2. Read [Examples and proof](../examples) if you need shipped examples before integrating.
3. Treat Studio and workbench-compatibility authoring as limited to the released schema and node library: shared core workflow fields plus safe node/edge/entry edits. Parallel-group and conditional-route editing are still thin/read-only; released shell wording does not widen that boundary into arbitrary code/plugin forecast-path editing, API/webhook control-plane, or collaborative canvas claims.
4. Move to the owning repo only after the released product path is clear.
