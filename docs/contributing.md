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
npm run build
npm run typecheck
npm run audit:policy
```

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
3. Update links/examples when page behavior changes
4. Include the commands you ran in the PR description
