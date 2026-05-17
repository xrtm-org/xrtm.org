---
title: Next release track
description: Near-term conveniences that are not yet on the released 0.8.2 surface.
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

- **Released docs** stay pinned to what ships in `xrtm==0.8.2`, because `xrtm` is the product-anchor version for top-level release claims.
- **This page** tracks near-term conveniences that are real and valuable, but not yet promoted into the public released path.
- **The roadmap** remains for longer-horizon, future, or experimental work.

For command-level details, see [`xrtm/docs/next-release-feature-track.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/next-release-feature-track.md).

## Current decisions

| Feature family | Canonical status | Release/train | Current release decision | What happens next |
| --- | --- | --- | --- | --- |
| Guided onboarding helpers (`xrtm start`, starter profile scaffolding) | **`shipped`** | Released surface | They are part of the released guided first-success path. | Keep clean-install proof and the matching onboarding docs update in lockstep. |
| Latest-run shortcuts (`latest`, `--latest`) | **`shipped`** | Released surface | They are part of the published operator ergonomics surface. | Keep released-artifact smoke covering the shortcuts. |
| CSV export on the top-level product surface | **`shipped`** | Released surface | It is part of the released export surface, with JSON still documented as the full-fidelity bundle. | Keep JSON/CSV documentation aligned with release packaging. |
| WebUI/CLI parity shell + workflow authoring | **`shipped`** | `0.8.1` | The released package now ships the local React/TypeScript WebUI shell with Overview, Start, Runs, Workflow detail, Operations, Advanced visibility, run detail, compare, and `/workbench`, plus the shared workflow-authoring layer for scratch/template/clone drafts, shared core-field edits, safe node/edge/entry changes, and shared validate/explain/run paths. Parallel-group and conditional-route editing remain thin/read-only. | Keep the public docs honest: safe workflow authoring inside the released schema and built-in node library only; no arbitrary graph, JSON, implementation, or code editing claim. |
| Interactive sandbox / playground | **`shipped`** | `0.8.2` | The released package now ships the shared playground behind both CLI and WebUI. The honest public story stays narrow: one custom question first, bounded exploratory reruns, read-only step inspection, and explicit save-back to workflow/profile. It is a safe exploratory playground, not a graph IDE or benchmark/release-evidence lane. | Keep the release wording provider-free until a dedicated playground Gate 2 proves any wider runtime promise. Preserve exploratory labeling on runs, keep tiny batches secondary and capped at 5, and do not promote commercial OpenAI-compatible support without matching clean-room proof. |
| Corpus validation workflows (`validate run`, `list-corpora`) | **`advanced/experimental`** | After corpus policy and released-stack validation mature further | These flows are real, but they depend on corpus tiers, release-gate policies, and more operator/research context than the default shipped path. | Keep them in advanced or release-engineering guidance until the corpus and compatibility story is steadier. |
| Corpus preparation UX (`validate prepare-corpus`) | **`redesign-required`** | Not on the current release train | The current command mixes cache setup, corpus policy, and preview semantics in a way that is still too internal. | Redesign the user-facing workflow before treating it as a public release promise. |
| User attribution flags (`--user`) | **`redesign-required`** | Not on the current release train | The implementation exists, but the public product still honestly describes team use as convention-based rather than built-in identity or multi-user workflow management. | Clarify semantics, storage, and privacy expectations first; then decide whether to release it as metadata, workflow labeling, or something else. |

## Freshly released in `0.8.2`: interactive sandbox

The latest coordinated release train graduated the **interactive
sandbox/playground** onto the released `xrtm 0.8.2` surface.

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

## How to read this page

- **`next-release`** does not mean “already released.” It means the feature is a good next-release candidate once validation and packaging gates pass.
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
