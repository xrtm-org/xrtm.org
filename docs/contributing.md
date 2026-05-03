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
- **[`xrtm-org/governance`](https://github.com/xrtm-org/governance)**: Forecast Object schemas, compatibility rules, and contributor/review policy

If a change starts in a source-of-truth repo, land or coordinate it there first. Update `xrtm.org` afterward when the presentation layer needs to reflect the accepted result.

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
5. Include the commands you ran in the PR description
