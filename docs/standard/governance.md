# Governance overview

:::note Authoritative governance repo
`xrtm.org` summarizes governance for contributors and newcomers. The binding schemas, compatibility rules, and review policies live in [`xrtm-org/governance`](https://github.com/xrtm-org/governance).
:::

The governance repo is where XRTM keeps cross-repo rules stable while implementation repos evolve.

## Quick ownership map

| Topic | Authoritative home | Public summary on this site |
| --- | --- | --- |
| Forecast Object schemas and compatibility | `governance/schemas/` | [Forecast Object standard](./forecast-object) |
| Stack version ownership and release-train labeling | `governance/policies/stack-versioning-policy.md` | [Contributing](../contributing) and release-pinned workflow pages |
| Release labeling and feature graduation | `governance/policies/feature-status-and-graduation-policy.md` | [Next release track](../next-release) |
| Release gates and acceptance policy | `governance/policies/` | this page plus [Contributing](../contributing) |
| Shipped CLI/product behavior | `xrtm` repo | released workflow pages |

## What is authoritative there

- **Forecast Object schemas:** [`schemas/forecast_object_v1.1.json`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.1.json) and [`schemas/forecast_object_v1.json`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.json)
- **Compatibility rules:** [`schemas/compatibility-policy.md`](https://github.com/xrtm-org/governance/blob/main/schemas/compatibility-policy.md)
- **Review and acceptance policy:** [`policies/pr-acceptance-policy.md`](https://github.com/xrtm-org/governance/blob/main/policies/pr-acceptance-policy.md)
- **Triage and release policy:** [`policies/triage-matrix.md`](https://github.com/xrtm-org/governance/blob/main/policies/triage-matrix.md) and [`policies/release-readiness-policy.md`](https://github.com/xrtm-org/governance/blob/main/policies/release-readiness-policy.md)
- **Stack versioning policy:** [`policies/stack-versioning-policy.md`](https://github.com/xrtm-org/governance/blob/main/policies/stack-versioning-policy.md)
- **Cross-repo compatibility policy:** [`policies/cross-repo-compatibility-policy.md`](https://github.com/xrtm-org/governance/blob/main/policies/cross-repo-compatibility-policy.md)
- **Feature status and graduation policy:** [`policies/feature-status-and-graduation-policy.md`](https://github.com/xrtm-org/governance/blob/main/policies/feature-status-and-graduation-policy.md)

## Practical change flow

1. If you want to change a schema or cross-repo compatibility rule, open it in **governance first**.
2. Once governance accepts the change, update the affected implementation repos such as [`xrtm`](https://github.com/xrtm-org/xrtm), [`forecast`](https://github.com/xrtm-org/forecast), [`eval`](https://github.com/xrtm-org/eval), [`data`](https://github.com/xrtm-org/data), or [`train`](https://github.com/xrtm-org/train).
3. Update `xrtm.org` last so the newcomer-facing explanation mirrors the accepted source of truth.
4. When a feature exists in source but is intentionally unreleased, summarize it on the site's [Next release track](../next-release) instead of slipping it into release-pinned docs.
5. Treat release-pinned docs as published-surface mirrors. If the owning repo has not published or accepted the change yet, this site should not present it as shipped behavior.
6. For top-level “current XRTM release” claims, use the published `xrtm` package version as the anchor and cite support-package versions explicitly when they matter.

## What this site should do

- explain why the standards exist
- point contributors at the right owning repo
- summarize accepted governance decisions without becoming the only copy

## What this site should not do

- introduce new schema requirements here first
- act as the only location for contributor policy
- imply that package behavior can be changed from this repo alone
