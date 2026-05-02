# Forecast Object standard overview

:::note Authoritative files
This page is a reader-friendly summary. The normative contract lives in [`forecast_object_v1.1.json`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.1.json), [`forecast_object_v1.json`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.json), and [`compatibility-policy.md`](https://github.com/xrtm-org/governance/blob/main/schemas/compatibility-policy.md). Use those files for validators, compatibility reviews, and cross-repo changes.
:::

The Forecast Object is the cross-repo contract for exchanging forecasts in XRTM. `xrtm.org` explains the shape in plain language; [`xrtm-org/governance`](https://github.com/xrtm-org/governance) defines the exact field names, versions, and migration rules.

## Current canonical version

- **Current schema:** [`v1.1`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.1.json)
- **Previous schema:** [`v1`](https://github.com/xrtm-org/governance/blob/main/schemas/forecast_object_v1.json)
- **Compatibility policy:** [`schemas/compatibility-policy.md`](https://github.com/xrtm-org/governance/blob/main/schemas/compatibility-policy.md)
- **Implementation notes:** [`xrtm-org/data` concept doc](https://github.com/xrtm-org/data/blob/main/docs/concepts/forecast_object.md)

## Stable shape to keep in mind

```json
{
  "metadata": { "...": "..." },
  "question": { "...": "..." },
  "prediction": { "...": "..." }
}
```

- **`metadata`** carries forecast identity plus `created_at` and `snapshot_time`.
- **`question`** carries the forecast target and optional `resolution_criteria`.
- **`prediction`** carries the canonical probability, reasoning trace, and optional uncertainty or calibration payloads.

## Important v1.1 expectations

- `prediction.probability` is the canonical probability field.
- `prediction.reasoning_trace` is the canonical standards-facing trace shape.
- `prediction.distribution` is the preferred uncertainty surface when a parametric distribution is available.
- `prediction.confidence_interval` remains a deprecated compatibility field during the v1.x window.
- Ground-truth outcomes stay out of the Forecast Object and belong to evaluation-owned data.

## How changes should flow

1. Propose or update the schema in [`xrtm-org/governance`](https://github.com/xrtm-org/governance).
2. Check the [`compatibility policy`](https://github.com/xrtm-org/governance/blob/main/schemas/compatibility-policy.md) before renaming or removing fields.
3. Update package implementations and examples in the owning repos.
4. Refresh this site only after the authoritative change is accepted.

## Good next links

- [Why the standard exists](./intro)
- [Governance overview](./governance)
- [Packages and architecture](../framework/intro)
