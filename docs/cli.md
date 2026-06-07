---
sidebar_position: 3
---

# CLI Reference

## `xrtm start`

Run forecasts. Deterministic by default (no API keys). Use `--provider` for real LLMs.

```bash
xrtm start                          # deterministic
xrtm start --limit 10               # 10 questions
xrtm start --provider openai        # OPENAI_API_KEY from env
xrtm start --provider openai --model gpt-4o --base-url https://api.openai.com/v1
```

| Flag | Default | Description |
|------|---------|-------------|
| `--limit` | 5 | Questions to forecast |
| `--provider` | deterministic | `openai` or `openai-compatible` |
| `--model` | auto | Model ID |
| `--base-url` | auto | API base URL |
| `--runs-dir` | `runs/` | Output directory |

## `xrtm demo`

Quick 2-question deterministic demo.

```bash
xrtm demo
xrtm demo --limit 5
```

## `xrtm doctor`

Readiness check.

```bash
xrtm doctor
```

Shows: Python version, package versions, import health, runs directory status.

## `xrtm runs show`

Inspect a run.

```bash
xrtm runs show --latest              # most recent run
xrtm runs show 20260607T010836Z-abc  # specific run ID
```

## `xrtm providers`

List available providers.

```bash
xrtm providers
#   deterministic  — Deterministic baseline (no API key)
#   openai         — OpenAI-compatible endpoint (any model)
```

## Environment Variables

Set these in `.env` or your shell:

| Variable | Purpose |
|----------|---------|
| `OPENAI_API_KEY` | API key for OpenAI-compatible endpoint |
| `OPENAI_BASE_URL` | Base URL (default: `https://api.openai.com/v1`) |
| `OPENAI_MODEL` | Model ID (default: `gpt-4o-mini`) |
| `TAVILY_API_KEY` | Tavily search API key (for web search in framework) |
| `METACULUS_API_KEY` | Metaculus API key (for question source) |
