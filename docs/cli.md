---
sidebar_position: 3
---

# CLI Reference

## `xrtm start`

Run forecasts. Requires `OPENAI_API_KEY` in your environment or `.env` file.

```bash
xrtm start
xrtm start --limit 10
xrtm start --model your-model --base-url https://your-endpoint
```

| Flag | Default | Description |
|------|---------|-------------|
| `--limit` | 5 | Questions to forecast |
| `--model` | `$OPENAI_MODEL` or `your-model` | Model ID |
| `--base-url` | `$OPENAI_BASE_URL` or `your-endpoint` | API base URL |
| `--runs-dir` | `runs/` | Output directory |

## `xrtm doctor`

Readiness check.

```bash
xrtm doctor
```

Shows: Python version, package versions, import health, runs directory status.

## `xrtm runs show`

Inspect a run.

```bash
xrtm runs show --latest
xrtm runs show <run-id>
```

## Environment Variables

Set these in `.env` or your shell:

| Variable | Purpose |
|----------|---------|
| `OPENAI_API_KEY` | API key for OpenAI-compatible endpoint |
| `OPENAI_BASE_URL` | Base URL (default: `https://your-endpoint`) |
| `OPENAI_MODEL` | Model ID (default: `your-model`) |
