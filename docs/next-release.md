---
title: Next release track
description: Near-term conveniences that exist in source or planning, but are intentionally kept off the released 0.3.0 surface.
---

# Next release track

This page exists so useful branch-only work does not sit in limbo.

- **Released docs** stay pinned to what ships in `xrtm==0.3.0`.
- **This page** tracks near-term conveniences that are real and valuable, but not yet promoted into the public released path.
- **The roadmap** remains for longer-horizon, future, or experimental work.

For command-level details, see [`xrtm/docs/next-release-feature-track.md`](https://github.com/xrtm-org/xrtm/blob/main/docs/next-release-feature-track.md).

## Current decisions

| Feature family | Status | Why it is not on the released surface yet | What happens next |
| --- | --- | --- | --- |
| Guided onboarding helpers (`xrtm start`, starter profile scaffolding) | **Promote soon** | They are current-source wrappers over the honest provider-free path, but they should graduate only with a coordinated package/docs release. | Ship with clean-install proof and the matching onboarding docs update. |
| Latest-run shortcuts (`latest`, `--latest`) | **Promote soon** | Valuable operator ergonomics, but not part of the published `0.3.0` command contract yet. | Add released-artifact smoke and then promote together with docs and contract updates. |
| CSV export on the top-level product surface | **Promote soon** | Useful and already implemented, but the released docs still promise JSON as the safe export contract today. | Keep JSON as the full-fidelity story; promote CSV once release packaging and docs move together. |
| Corpus validation workflows (`validate run`, `list-corpora`) | **Advanced longer** | These flows are real, but they depend on corpus tiers, release-gate policies, and more operator/research context than the default shipped path. | Keep them in advanced/release-engineering guidance until the corpus and compatibility story is steadier. |
| Corpus preparation UX (`validate prepare-corpus`) | **Redesign before shipping** | The current command mixes cache setup, corpus policy, and preview semantics in a way that is still too internal. | Redesign the user-facing workflow before treating it as a public release promise. |
| User attribution flags (`--user`) | **Redesign before shipping** | The implementation exists, but the public product still honestly describes team use as convention-based rather than built-in identity or multi-user workflow management. | Clarify semantics, storage, and privacy expectations first; then decide whether to release it as metadata, workflow labeling, or something else. |

## How to read this page

- **Promote soon** does not mean “already released.” It means the feature is a good next-release candidate once validation and packaging gates pass.
- **Advanced longer** means useful work that should stay out of the default newcomer/released story for now.
- **Redesign before shipping** means the value is real, but the current implementation should not be treated as the final public contract.

## Governance rule

Unreleased-but-desired features should always have an explicit status. They should not live only in tests, draft docs, or branch folklore.

See also:

- [Roadmap](./roadmap)
- [Governance overview](./standard/governance)
- [Contributing](./contributing)
