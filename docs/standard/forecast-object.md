# The Forecast Object Standard (v1)

The Forecast Object is the universal data contract for probabilistic predictions in the xrtm ecosystem. Every prediction—whether from an LLM agent, a statistical model, or a human expert—must conform to this schema to ensure interoperability, auditability, and temporal integrity.

## Schema Overview

The Forecast Object consists of three required sections: **Metadata**, **Question**, and **Prediction**.

```json
{
  "metadata": { ... },
  "question": { ... },
  "prediction": { ... }
}
```

---

## Metadata

Operational and contextual information for the forecast record.

| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `id` | `string` | ✓ | Unique identifier for this specific forecast instance. |
| `created_at` | `datetime` | ✓ | ISO 8601 timestamp when the forecast was generated. |
| `snapshot_time` | `datetime` | ✓ | **Zero Leakage:** The specific "Time T" at which the world state was frozen. No data after this timestamp should have been available to the model. |
| `source_version` | `string` | | Version of the inference engine or model used. |
| `tags` | `string[]` | | Logical tags for categorization (e.g., "macro-economics", "geopolitical"). |

---

## Question

The subject of the forecast.

| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `id` | `string` | ✓ | Unique identifier for the underlying question. |
| `title` | `string` | ✓ | The core question or statement being forecasted. |
| `description` | `string` | | Detailed context, background, and specific definitions. |
| `resolution_criteria` | `string` | | Explicit, non-ambiguous rules for how ground truth will be determined. |

---

## Prediction

The probabilistic output and justification.

| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `probability` | `number` | ✓ | Assigned probability of the primary outcome (0.0 to 1.0). |
| `confidence_interval` | `object` | | Range at a specified confidence level (e.g., 5th/95th percentiles). Contains `low`, `high`, and `level` (default 0.9). |
| `reasoning_trace` | `object` | ✓ | Bayesian-style sequence of assumptions and causal logic. |

### Reasoning Trace

| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `narrative` | `string` | ✓ | Comprehensive argument supporting the forecast. |
| `causal_graph` | `object` | | Structured Mental Model with `nodes` and `edges` representing causal logic. |

### Calibration Metrics

| Field | Type | Description |
| :--- | :--- | :--- |
| `expected_brier_score` | `number` | Expected Brier score for this prediction. |
| `self_calibration_score` | `number` | Model's own estimate of calibration on this domain. |

---

## Example

```json
{
  "metadata": {
    "id": "fc_001",
    "created_at": "2026-01-15T10:30:00Z",
    "snapshot_time": "2026-01-15T00:00:00Z",
    "source_version": "xrtm-forecast@0.6.0"
  },
  "question": {
    "id": "q_fed_rate",
    "title": "Will the Fed cut rates in Q1 2026?",
    "resolution_criteria": "Resolved YES if the FOMC announces a rate cut before April 1, 2026."
  },
  "prediction": {
    "probability": 0.65,
    "confidence_interval": { "low": 0.55, "high": 0.75, "level": 0.9 },
    "reasoning_trace": {
      "narrative": "Based on inflation trends and labor market data..."
    }
  }
}
```
