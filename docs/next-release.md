---
title: Next release track
description: Future source work that is not yet on the released 0.8.8 capability set.
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

- **Released docs** now target the `xrtm==0.8.8` capability set for the
  release-promotion branch.
- **This page** tracks future source work that is real and valuable, but not yet
  promoted into the public released path.
- **The roadmap** remains for longer-horizon, future, or experimental work.

For command-level details, see [`xrtm/docs/next-release-feature-track.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/next-release-feature-track.md).

## Released in `0.8.8`

`0.8.8` keeps the bounded local Hub → Studio → Playground → Observatory
product spine on the deterministic baseline.

- **Hub:** `/` and `/hub` collect first-run, template, recent-work, readiness,
  provider-status, and entry links into one local-first home.
- **Studio:** `/studio` is the primary forecast path IDE over the existing XRTM workflow
  schema and built-in node catalog. It supports safe node/edge/workflow
  selection, local node dragging, palette click/drag-to-canvas add-node, edge
  create/remove, entry setting, contextual inspection, validation, save, and run
  through Studio APIs.
- **Playground:** `/playground` presents forecast-path/canvas preview, ordered node
  trace, execution trace artifact state, executed-node highlighting, and an honest
  fallback when no execution trace artifact exists.
- **Observatory:** `/observatory` aliases the run inspector for probability,
  result, score, trace, export, and compare review.
- **Workbench compatibility:** `/workbench` remains available for existing
  links and workflows while product language moves to Studio.

The released claim stays deliberately bounded: no calibration dashboard, no
API/webhook control plane, no arbitrary code/plugin forecast-path editor, no full
persistent collaborative canvas layout, and no commercial runtime claim without
separate validation.

## Current source-tip future-release candidates

The current source tip now also includes a more complete local product train
that is intentionally **not** yet part of the released 0.8.8 claim set:

- **Studio:** focused three-panel IDE with palette, dominant forecast path canvas,
  contextual inspector, validation, run, and version snapshot controls in one
  forecasting-native surface
- **Playground:** stronger left-controls / center-forecast-path / right-trace workspace
  with contextual result and run-detail handoff
- **Observatory:** calibration curve, uncertainty histogram, Brier score trend,
  workflow score tables, version score tables, and searchable version-backed run
  provenance
- **Batch Runner:** local workflow-version selection, parsed-row table preview,
  staged/deterministic execution, cancel/retry/export, and row links back into
  Observatory
- **Versions:** immutable snapshot creation, diff, rollback, default selection,
  recent-run provenance, and Studio snapshot handoff
- **API / Webhooks:** local API Control, version execution routes, signed
  lifecycle delivery, retry logs, and local token-behavior guidance

These are real source-visible capabilities. They still stay in the
future-release lane until package/docs/gates promote them together.

## Current decisions

| Feature family | Canonical status | Release/train | Current release decision | What happens next |
| --- | --- | --- | --- | --- |
| Unified Hub / Studio / Playground / Observatory spine | **`shipped`** | `0.8.8` | Promoted to the released docs/site surface for the release-promotion branch. The public claim is local-first, deterministic by default, and bounded to the existing workflow schema and built-in node catalog. | Keep Gate 1 checks clean for this branch and require release Gate 2 before publication: first-run Hub, template-to-Playground, bounded Studio validate/save/run, Studio-to-Playground trace, Observatory drill-down, and deterministic baseline. |
| WebUI shell polish and trust cues | **`shipped`** | carried forward in `0.8.8` | Version, local-only scope, file-backed history, SQLite draft-state cues, and the locked muted design language remain part of the released shell. | Continue treating these as trust framing, not a hosted app or control-plane claim. |
| Guided onboarding helpers (`xrtm start`, starter profile scaffolding) | **`shipped`** | Released surface | They are part of the released guided first-success path. | Keep clean-install proof and matching onboarding docs in lockstep. |
| Latest-run shortcuts (`latest`, `--latest`) | **`shipped`** | Released surface | They are part of the published operator ergonomics surface. | Keep released-artifact smoke covering the shortcuts. |
| CSV export on the top-level product surface | **`shipped`** | Released surface | It is part of the released export surface, with JSON still documented as the full-fidelity bundle. | Keep JSON/CSV documentation aligned with release packaging. |
| WebUI/CLI parity shell + workflow authoring | **`shipped`** | `0.8.1` baseline plus `0.8.8` Studio route | The released package ships the local React/TypeScript WebUI shell with Hub, Start, Runs, Workflow detail, Operations, Studio, Playground, Observatory, run detail, compare, Advanced visibility, `/workbench` compatibility, plus the shared workflow-authoring layer for scratch/template/clone drafts, shared core-field edits, safe node/edge/entry changes, and shared validate/explain/run paths. | Keep the public docs honest: safe workflow authoring inside the released schema and built-in node library only; no arbitrary code/plugin forecast-path editing, raw JSON/implementation editing, or collaborative canvas claim. |
| Interactive sandbox / playground | **`shipped`** | `0.8.2` baseline plus `0.8.8` forecast-path-linked UI | The released package ships the shared playground behind both CLI and WebUI: one custom question first, bounded exploratory reruns, forecast-path/canvas preview, ordered node trace, honest no-trace fallback, and explicit save-back to workflow/profile. | Keep the release wording deterministic until dedicated playground Gate 2 proves any wider runtime promise. Preserve exploratory labeling, keep tiny batches secondary and capped at 5, and do not promote commercial OpenAI-compatible support without matching clean-room proof. |
| Corpus validation workflows (`validate run`, `list-corpora`) | **`advanced/experimental`** | After corpus policy and released-stack validation mature further | These flows are real, but they depend on corpus tiers, release-gate policies, and more operator/research context than the default shipped path. | Keep them in advanced or release-engineering guidance until the corpus and compatibility story is steadier. |
| Corpus preparation UX (`validate prepare-corpus`) | **`redesign-required`** | Not on the current release train | The current command mixes cache setup, corpus policy, and preview semantics in a way that is still too internal. | Redesign the user-facing workflow before treating it as a public release promise. |
| User attribution flags (`--user`) | **`redesign-required`** | Not on the current release train | The implementation exists, but the public product still honestly describes team use as convention-based rather than built-in identity or multi-user workflow management. | Clarify semantics, storage, and privacy expectations before deciding whether to release it as metadata, workflow labeling, or team workflow state. |

## How to read this page

- **`shipped`** means already part of the current release-pinned surface.
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
