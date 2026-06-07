---
sidebar_position: 1
---

# Getting Started

XRTM runs event-forecasting workflows. You'll need an API key for any OpenAI-compatible endpoint.

## Install

```bash
pip install xrtm
```

Requires Python 3.11+.

## Get an API Key

XRTM works with any provider that speaks the OpenAI Chat Completions API. Sign up for one and get an API key.

Create a `.env` file in your working directory:

```
OPENAI_API_KEY=sk-your-key-here
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4o-mini
```

The base URL and model default to OpenAI's API — change them for other providers.

## Run a Forecast

```bash
xrtm start
```

This loads questions from the built-in corpus, runs forecasts through your provider, scores them, and writes artifacts. You should see something like:

```
┌─────────────────────────────────┐
│        Forecast Complete        │
│ ─────────────────────────────── │
│  5 forecasts  ·  Brier 0.089   │
│  Duration 12.4s                 │
│  Artifacts → runs/20260607T...  │
└─────────────────────────────────┘
```

Override defaults with flags:

```bash
xrtm start --model your-model --base-url https://your-endpoint --limit 10
```

## Inspect Results

```bash
xrtm runs show --latest
```

## What Each Run Produces

Every run writes these artifacts to `runs/<run-id>/`:

| File | Contents |
|------|----------|
| `run.json` | Metadata and status |
| `forecasts.jsonl` | Probabilities and reasoning traces |
| `eval.json` | Brier score, ECE, log score |
| `train.json` | Backtest/training summary |
| `report.html` | Human-readable report |

## Check Your Setup

```bash
xrtm doctor
```

Shows Python version, package versions, and import health.

## Next Steps

- [Framework](/docs/framework) — use the Python API directly
- [CLI Reference](/docs/cli) — all commands and flags
- [Architecture](/docs/architecture) — how the layers fit together
