---
title: Next release track
description: Near-term source work that is not yet on the released 0.8.3 capability set.
---

# Next release track

This page exists so useful branch-only work does not sit in limbo.

:::info Page role
**Next-release lane.** This page is for real source work that is intentionally
unreleased. The command-level source of truth lives in
[`xrtm/docs/next-release-feature-track.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/next-release-feature-track.md),
the labeling/graduation rules live in the governance repo's
[Feature Status and Graduation Policy](https://github.com/xrtm-org/governance/blob/main/policies/feature-status-and-graduation-policy.md),
and cross-repo version ownership lives in the
[Stack Versioning Policy](https://github.com/xrtm-org/governance/blob/main/policies/stack-versioning-policy.md).
:::

- **Released docs** stay pinned to the `xrtm==0.8.3` capability set, because `xrtm` is the product-anchor version for top-level release claims and `0.8.3` stayed a stability/polish release rather than a capability expansion.
- **This page** tracks near-term source work that is real and valuable, but not yet promoted into the public released path.
- **The roadmap** remains for longer-horizon, future, or experimental work.

For command-level details, see [`xrtm/docs/next-release-feature-track.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/next-release-feature-track.md).

## Released in `0.8.3`

`0.8.3` shipped as a **stability and polish** release.

- It shipped bug fixes and visual/wording polish on already released surfaces.
- It made the existing local WebUI shell's trust cues clearer: version,
  local-only scope, file-backed history, and SQLite draft state.
- It did **not** add new product capability families, widen runtime promises,
  or turn shell polish into a broader WebUI/control-plane claim.

## Current decisions

| Feature family | Canonical status | Release/train | Current release decision | What happens next |
| --- | --- | --- | --- | --- |
| Unified Hub / Studio / Playground / Observatory spine | **`next-release`** | `0.8.x` UI train, practically `0.8.4` | Implemented in unreleased `xrtm` source for the pending PR/release train, but not part of the published `xrtm==0.8.3` package or release tag. The pending WebUI train has Hub at `/` and `/hub`, Studio as the primary `/studio` graph IDE, Playground graph/canvas preview plus ordered node trace and honest no-trace fallback, and `/observatory` as the run-inspection alias. `/workbench` remains compatibility. | Keep release-pinned pages on `0.8.3` until package/docs/gates move together. Gate 2 before release must prove first-run Hub, template-to-Playground, bounded Studio validate/save/run, Studio-to-Playground trace, Observatory drill-down, and the provider-free baseline. Do not market a calibration dashboard, API/webhook control plane, full persistent collaborative canvas layout, or real/commercial runtime path without matching validation. |
| WebUI shell polish and trust cues | **`shipped`** | `0.8.3` | `0.8.3` only refines the existing local shell: clearer version, local-only, file-backed-history, and SQLite draft-state cues plus the locked muted design language. No new routes, runtimes, or workflow families shipped with this row. | Keep release-pinned docs describing the same released shell/workflow surfaces; continue treating the refresh as polish and trust framing, not a new product capability. |
| Guided onboarding helpers (`xrtm start`, starter profile scaffolding) | **`shipped`** | Released surface | They are part of the released guided first-success path. | Keep clean-install proof and the matching onboarding docs update in lockstep. |
| Latest-run shortcuts (`latest`, `--latest`) | **`shipped`** | Released surface | They are part of the published operator ergonomics surface. | Keep released-artifact smoke covering the shortcuts. |
| CSV export on the top-level product surface | **`shipped`** | Released surface | It is part of the released export surface, with JSON still documented as the full-fidelity bundle. | Keep JSON/CSV documentation aligned with release packaging. |
| WebUI/CLI parity shell + workflow authoring | **`shipped`** | `0.8.1` | The released package now ships the local React/TypeScript WebUI shell with Overview, Start, Runs, Workflow detail, Operations, Advanced visibility, run detail, compare, and `/workbench`, plus the shared workflow-authoring layer for scratch/template/clone drafts, shared core-field edits, safe node/edge/entry changes, and shared validate/explain/run paths. Parallel-group and conditional-route editing remain thin/read-only. | Keep the public docs honest: safe workflow authoring inside the released schema and built-in node library only; no arbitrary graph, JSON, implementation, or code editing claim. |
| Interactive sandbox / playground | **`shipped`** | `0.8.2` baseline, unchanged in `0.8.3` | The released package ships the shared playground behind both CLI and WebUI. The honest public story stays narrow: one custom question first, bounded exploratory reruns, read-only step inspection, and explicit save-back to workflow/profile. It remains a safe exploratory playground, not a graph IDE or benchmark/release-evidence lane. | Keep the release wording provider-free until a dedicated playground Gate 2 proves any wider runtime promise. Preserve exploratory labeling on runs, keep tiny batches secondary and capped at 5, and do not promote commercial OpenAI-compatible support without matching clean-room proof. |
| Corpus validation workflows (`validate run`, `list-corpora`) | **`advanced/experimental`** | After corpus policy and released-stack validation mature further | These flows are real, but they depend on corpus tiers, release-gate policies, and more operator/research context than the default shipped path. | Keep them in advanced or release-engineering guidance until the corpus and compatibility story is steadier. |
| Corpus preparation UX (`validate prepare-corpus`) | **`redesign-required`** | Not on the current release train | The current command mixes cache setup, corpus policy, and preview semantics in a way that is still too internal. | Redesign the user-facing workflow before treating it as a public release promise. |
| User attribution flags (`--user`) | **`redesign-required`** | Not on the current release train | The implementation exists, but the public product still honestly describes team use as convention-based rather than built-in identity or multi-user workflow management. | Clarify semantics, storage, and privacy expectations first; then decide whether to release it as metadata, workflow labeling, or something else. |

## Previously released in `0.8.2`: interactive sandbox baseline

The `0.8.2` coordinated release train graduated the **interactive
sandbox/playground** onto the released surface. `0.8.3` keeps that capability
set intact and only adds stability/polish work around the broader local shell.

- **What we can say honestly now:** the released package has shared CLI/WebUI
  playground wiring, explicit exploratory labeling, read-only step inspection,
  and explicit save-back to workflow/profile.
- **What the public release claim should stay pinned to:** one custom question
  first, with any tiny follow-up batch remaining secondary and capped at 5.
- **What this is not:** a full graph IDE, benchmark runner, or release-proof
  workflow by default.
- **Runtime wording for now:** keep public playground wording provider-free until
  dedicated Gate 2 validation proves a wider real OpenAI-compatible or
  coding-agent CLI-backed playground path. Do not imply commercial/cloud support
  before that proof exists.

## Next `0.8.x` UI train: pending PR/release, not released

The next local-first WebUI spine is implemented in unreleased `xrtm` source as **Hub → Studio → Playground → Observatory**. It is not
in the published `xrtm==0.8.3` package or release tag. Treat it as a bounded
product-shell update, not a new hosted app or arbitrary workflow editor:

- **Hub:** `/` and `/hub` collect first-run, template, recent-work, readiness,
  provider-status, and entry links into one local-first home.
- **Studio:** `/studio` is the primary graph IDE over the existing XRTM workflow
  schema and built-in node catalog. It supports node dragging, palette
  click/drag-to-canvas add-node, node/edge/workflow selection, edge
  create/remove, entry setting, contextual inspection, validation, save, and run
  through Studio APIs. It is **not** arbitrary code/plugin graph editing.
- **Workbench compatibility:** `/workbench` remains available for existing links
  and workflows while product language moves to Studio.
- **Playground:** `/playground` now presents graph/canvas preview, ordered node
  trace, graph trace artifact state, executed-node highlighting, and an honest
  fallback when no graph trace artifact exists.
- **Observatory:** `/observatory` aliases the run inspector and improves
  probability/result/score/trace/export/compare review plus an uncertainty empty
  state. It does not ship a calibration dashboard, API/webhook control plane, or
  broader runtime/provider claim.

Release-pinned docs should move only after Gate 1 and release Gate 2 evidence
cover the source paths above in a fresh environment.

## How to read this page

- **`next-release`** does not mean “already released.” It means the feature is implemented or approved as a next-release candidate once validation and packaging gates pass.
- **`advanced/experimental`** means useful work that should stay out of the default newcomer or released story for now.
- **`redesign-required`** means the value is real, but the current implementation should not be treated as the final public contract.
- Release-train labels coordinate packaging, docs, and validation moves; they do **not** mean every repository publishes the same version number.

## Governance rule

Unreleased-but-desired features should always have an explicit status. They should not live only in tests, draft docs, or branch folklore.

Promotion decisions here should mirror the governance policy and the owning repo's
release evidence, not bypass them.

See also:

- [Roadmap](./roadmap)
- [Governance overview](./standard/governance)
- [Contributing](./contributing)
