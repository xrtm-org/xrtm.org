# The Power of Standards

> If you are new to XRTM, start with [Getting started](../getting-started) first. Come here once you are exporting forecasts, integrating tools, or comparing systems.

:::note Authoritative standard files
This section is a plain-language guide. The normative Forecast Object schemas and compatibility policy live in [`xrtm-org/governance`](https://github.com/xrtm-org/governance/tree/main/schemas), with implementation notes in [`xrtm-org/data`](https://github.com/xrtm-org/data/blob/main/docs/concepts/forecast_object.md).
:::

Standards are the bedrock of interoperability. In the fragmented world of AI systems, **xrtm** establishes a strict contract for how intelligence is shared, evaluated, and improved.

## Why We Need a Standard

Without a shared standard:
*   **Evaluation is Impossible:** You cannot compare AI systems if they output different formats.
*   **Collaboration is Friction:** Tools cannot chain together if they don't speak the same language.
*   **Progress is Stalled:** We spend time writing parsers instead of improving intelligence.

The **Forecast Object Standard** is our answer. It is a rigorous, schema-enforced JSON structure that guarantees every prediction comes with a timestamp, a reasoning trace, and calibrated probabilities. When you need a machine-checked answer, validate against the governance JSON schema instead of treating this page as the canonical contract.

## Interoperability

By adhering to this standard, any tool in the xrtm ecosystem can talk to any other. You can swap out the inference engine (`xrtm-forecast`) for your own custom model, and as long as it outputs a valid Forecast Object, `xrtm-eval` can score it instantly.
