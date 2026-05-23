---
title: xrtm-forecast
description: Runtime package overview with links to the owning repo and docs.
---

# xrtm-forecast

`xrtm-forecast` is the runtime package for probabilistic reasoning and agentic
forecast workflows.

:::note Page role
This page is a package-map summary. Runtime APIs, provider integrations, and
source examples are owned by [`xrtm-org/forecast`](https://github.com/xrtm-org/forecast).
:::

## Use this package when

- you are embedding forecasting directly in Python code or a service
- you need runtime/provider abstractions instead of the released top-level CLI path
- you want package-owned examples for agents, topologies, and runtime features

If you still need the honest released newcomer workflow first, start with
[Getting started](../getting-started) and the top-level
[`xrtm`](https://github.com/xrtm-org/xrtm) package.

## Canonical references

- [Repository README](https://github.com/xrtm-org/forecast/blob/main/README.md)
- [Docs index](https://github.com/xrtm-org/forecast/blob/main/docs/index.md)
- [Architecture overview](https://github.com/xrtm-org/forecast/blob/main/docs/architecture.md)
- [Deterministic testing guide](https://github.com/xrtm-org/forecast/blob/main/docs/provider-free-testing.md)

## Relationship to the released user path

`xrtm-forecast` supplies the runtime underneath the released `xrtm` product
shell. That means:

- released newcomer/docs claims should still start from `xrtm`
- code-first runtime work can go deeper here
- stronger improvement claims usually come from real runtime or model changes here,
  then get compared back through the released product artifact surface

## Ownership boundary

- Change runtime APIs, provider behavior, and example code in `forecast`.
- Update `xrtm.org` only when the repo map, navigation, or newcomer framing should change.
