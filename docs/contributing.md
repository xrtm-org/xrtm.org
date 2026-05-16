# Contributing to xrtm.org

This repository contains the public XRTM site built with Docusaurus.

## Development model

This repo is **local-tooling first**:

- use the pinned Node toolchain from `.nvmrc` / `.node-version`
- install dependencies with `npm ci`
- validate with the standard npm scripts

Devcontainers remain supported for contributors who want them, but Docker/devcontainers are **not** the primary workflow.

## Supported toolchain

- **Node:** `20.19.0`
- **npm:** `10.x`

If you use `nvm`:

```bash
nvm use
```

## Local setup

```bash
npm ci
npm run build
```

## Main commands

```bash
npm start
npm run start:lan
npm run build
npm run typecheck
npm run audit:policy
```

`npm start` is localhost-only by default. Use `npm run start:lan` only when you
explicitly need to expose the dev server to a container, VM, or LAN peer.

## Where changes belong

- **`xrtm.org`**: newcomer-facing docs, navigation, repo maps, and cross-repo pointers
- **[`xrtm-org/xrtm`](https://github.com/xrtm-org/xrtm)**: shipped CLI flows, run-artifact behavior, WebUI/TUI, and product docs
- **[`xrtm-org/forecast`](https://github.com/xrtm-org/forecast), [`xrtm-org/eval`](https://github.com/xrtm-org/eval), [`xrtm-org/data`](https://github.com/xrtm-org/data), [`xrtm-org/train`](https://github.com/xrtm-org/train)**: package APIs, example code, and implementation truth
- **[`xrtm-org/governance`](https://github.com/xrtm-org/governance)**: Forecast Object schemas, compatibility rules, stack versioning, and contributor/review policy

If a change starts in a source-of-truth repo, land or coordinate it there first. Update `xrtm.org` afterward when the presentation layer needs to reflect the accepted result.

## Released vs next-release docs

Keep the public docs surfaces distinct:

- **Released path**: `getting-started`, `examples`, and the release-pinned workflow pages stay on the currently published package surface.
- **Next-release path**: branch-only conveniences with clear short-term value belong on [Next release track](./next-release) and in the owning repo's next-release document.
- **Roadmap path**: longer-horizon or genuinely experimental work belongs on [Roadmap](./roadmap).

Do not move current-source conveniences into release-pinned pages until the owning repo updates the published package, release contract, and validation evidence together.

When a release-pinned page says “current XRTM release,” anchor that claim to the
published `xrtm` package version. Support-package versions may differ, and
release-train labels are coordination metadata rather than forced shared version
numbers. Use the governance
[Stack Versioning Policy](https://github.com/xrtm-org/governance/blob/main/policies/stack-versioning-policy.md)
when version ownership or train labeling is part of the change.

## Canonical routing after the runtime/release refresh

- [Docs home](./) for the public newcomer/workflow map
- [Getting started](./getting-started) and the workflow pages for release-pinned
  product behavior
- [Why the standard exists](./standard/intro) when you need the shared
  provider/runtime taxonomy and standards context
- [Next release track](./next-release) for branch-only additions that are real
  but not yet released
- [Roadmap](./roadmap) for longer-horizon or exploratory material

Use this quick classification when editing pages:

| Page class | What may appear there | Minimum validation |
| --- | --- | --- |
| Release-pinned | Only published commands, versions, and behavior already validated against the current release contract | `npm run release:check`, `npm run typecheck`, `npm run audit:policy`, `npm run build` |
| Next-release | Explicitly labeled branch-only work that already has an owning-repo feature record | `npm run typecheck`, `npm run build` |
| Roadmap / repo map | Future or conceptual material with no claim that it ships today | `npm run build` |

If a doc change affects the public product story, note the owning repo and accepted source-of-truth change in the PR. `xrtm.org` mirrors accepted behavior; it does not invent release promises.

## Documentation IA rule of thumb

| If you are changing... | Update first | Why |
| --- | --- | --- |
| newcomer navigation, repo map, or cross-links | `xrtm.org` | this repo owns the presentation layer |
| shipped CLI/product behavior or package APIs | owning implementation repo | behavior and examples belong with the code |
| unreleased-but-real next-release status | owning repo + [Next release track](./next-release) | keep feature status explicit without polluting released docs |
| schema, compatibility, or graduation policy | `governance` | policy and standards must stay authoritative there |

## What to validate before opening a PR

At minimum:

```bash
npm run build
```

Use these when relevant:

```bash
npm run typecheck
npm run audit:policy
```

## Optional devcontainer support

If you prefer an isolated editor environment, this repo also ships `.devcontainer/devcontainer.json`.

That path is optional support only; the canonical contributor path is still the local Node toolchain above.

## PR guidance

1. Branch from `main`
2. Keep documentation and navigation changes tightly scoped
3. Mirror accepted product/governance changes here instead of redefining them here
4. Update links/examples when page behavior changes
5. If a page is release-pinned, include the owning package version or contract it mirrors; use the published `xrtm` version for top-level XRTM release claims
6. Include the commands you ran in the PR description
