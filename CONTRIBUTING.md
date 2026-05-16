# Contributing to xrtm.org

`xrtm.org` is the presentation layer for the XRTM stack. It should make the ecosystem easier to navigate without becoming the source of truth for package behavior, schemas, or policy.

For the rendered site copy of this guidance, see [`docs/contributing.md`](docs/contributing.md).

## Quick setup

```bash
nvm use
npm ci
```

## Standard checks

Run the normal site gate for release-pinned work:

```bash
npm run release:check
npm run typecheck
npm run audit:policy
npm run build
```

## Start with the right repo

| If you are changing... | Start here | Why |
| --- | --- | --- |
| newcomer-facing docs, repo maps, navigation, or presentation-layer cross-links | `xrtm.org` | this repo owns the public presentation layer |
| released CLI/product behavior or package-specific docs | [`xrtm`](https://github.com/xrtm-org/xrtm) or the owning package repo | implementation truth belongs with the code |
| schemas, compatibility rules, or contributor/review policy | [`governance`](https://github.com/xrtm-org/governance) | shared standards belong there |
| runtime APIs, providers, and library examples | [`forecast`](https://github.com/xrtm-org/forecast) or the owning package repo | package behavior should not be redefined here |

## Page classification

- **Release-pinned**: only published commands, versions, and behavior already validated against the release contract.
- **Next-release**: branch-only work with explicit labels and an owning-repo feature record.
- **Roadmap / repo map**: future or conceptual material with no claim that it ships today.

## Version ownership

When a page says “current XRTM release,” anchor that claim to the published `xrtm`
package version. Support-package versions may differ and release-train labels are
coordination metadata, not forced shared version numbers. Use the governance
[Stack Versioning Policy](https://github.com/xrtm-org/governance/blob/main/policies/stack-versioning-policy.md)
for those decisions.

## PR expectations

1. Keep navigation and content changes tightly scoped.
2. Mirror accepted product/governance changes here rather than inventing release promises here.
3. Include the commands you ran in the PR description.
