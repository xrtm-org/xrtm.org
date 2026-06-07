---
sidebar_position: 1
---

# Getting Started

XRTM runs event-forecasting workflows. You'll need an API key for an OpenAI-compatible endpoint.

## Install

```bash
pip install xrtm
```

Requires Python 3.11 or later.

## Set Up Your API Key

```bash
export OPENAI_API_KEY="sk-..."
```

Or create a `.env` file:

```
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://your-endpoint
OPENAI_MODEL=your-model
```

## Run Your First Forecast

```bash
xrtm start
```

Uses `OPENAI_API_KEY` from your environment. Override defaults:

```bash
xrtm start --model your-model --base-url https://your-endpoint --limit 10
```

## What You Get

Each run produces these artifacts in `runs/<run-id>/`:

| File | Contents |
|------|----------|
| `run.json` | Run metadata and status |
| `forecasts.jsonl` | Forecast outputs with probabilities and reasoning traces |
| `eval.json` | Brier score, ECE, log score |
| `train.json` | Backtest/training summary |
| `report.html` | Human-readable report |

## Inspect Results

```bash
xrtm runs show --latest
```

## Check Readiness

```bash
xrtm doctor
```

## Next Steps

- [Framework](/docs/framework) — use the Python API directly
- [CLI Reference](/docs/cli) — all commands and flags
- [Architecture](/docs/architecture) — how the layers fit together
