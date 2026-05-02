# Governance overview

:::note Authoritative governance repo
`xrtm.org` summarizes governance for contributors and newcomers. The binding schemas, compatibility rules, and review policies live in [`xrtm-org/governance`](https://github.com/xrtm-org/governance).
:::

The governance repo is where XRTM keeps cross-repo rules stable while implementation repos evolve.

## What is authoritative there

- **Forecast Object schemas:** [`schemas/forecast_object_v1.1.json`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.1.json) and [`schemas/forecast_object_v1.json`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.json)
- **Compatibility rules:** [`schemas/compatibility-policy.md`](https://github.com/xrtm-org/governance/blob/main/schemas/compatibility-policy.md)
- **Review and acceptance policy:** [`policies/pr-acceptance-policy.md`](https://github.com/xrtm-org/governance/blob/main/policies/pr-acceptance-policy.md)
- **Triage and release policy:** [`policies/triage-matrix.md`](https://github.com/xrtm-org/governance/blob/main/policies/triage-matrix.md) and [`policies/release-readiness-policy.md`](https://github.com/xrtm-org/governance/blob/main/policies/release-readiness-policy.md)

## Practical change flow

1. If you want to change a schema or cross-repo compatibility rule, open it in **governance first**.
2. Once governance accepts the change, update the affected implementation repos such as [`xrtm`](https://github.com/xrtm-org/xrtm), [`forecast`](https://github.com/xrtm-org/forecast), [`eval`](https://github.com/xrtm-org/eval), [`data`](https://github.com/xrtm-org/data), or [`train`](https://github.com/xrtm-org/train).
3. Update `xrtm.org` last so the newcomer-facing explanation mirrors the accepted source of truth.

## What this site should do

- explain why the standards exist
- point contributors at the right owning repo
- summarize accepted governance decisions without becoming the only copy

## What this site should not do

- introduce new schema requirements here first
- act as the only location for contributor policy
- imply that package behavior can be changed from this repo alone
