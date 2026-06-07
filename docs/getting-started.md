---
sidebar_position: 1
---

# Getting Started

XRTM runs event-forecasting workflows. Install it and run your first forecast in 30 seconds.

## Install

```bash
pip install xrtm
```

Requires Python 3.11 or later.

## Your First Forecast

```bash
xrtm demo
```

This runs 2 deterministic forecasts (no API keys) and writes results to `runs/`. View the latest:

```bash
xrtm runs show --latest
```

## With a Real LLM

Set your API key and run with any OpenAI-compatible endpoint:

```bash
export OPENAI_API_KEY="sk-..."
xrtm start --provider openai --model deepseek-v4-pro --base-url https://api.deepseek.com --limit 5
```

Or use a `.env` file:

```
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.deepseek.com
OPENAI_MODEL=deepseek-v4-pro
```

```bash
xrtm start --provider openai --limit 5
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

## Check Readiness

```bash
xrtm doctor
```

Shows Python version, package versions, and import health.

## Next Steps

- [Framework](/docs/framework) — use the Python API directly
- [CLI Reference](/docs/cli) — all commands and flags
- [Architecture](/docs/architecture) — how the layers fit together
