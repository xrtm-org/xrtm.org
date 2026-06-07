---
sidebar_position: 4
---

# Architecture

XRTM is a 4-layer forecasting stack plus a product shell.

## The Layers

```
Layer 4: xrtm-train      Backtesting & optimization
         ↓
Layer 3: xrtm-forecast    Runtime engine (agents, providers, topologies)
         ↓
Layer 2: xrtm-eval        Scoring (Brier, ECE, log score)
         ↓
Layer 1: xrtm-data        Schemas & question sources
```

Dependencies flow downward. A layer can import from layers below it, never from above.

## Framework vs Product

| | Framework | Product |
|---|----------|---------|
| **Packages** | data, eval, forecast, train | xrtm |
| **Audience** | Developers building custom systems | Users running forecasts |
| **Interface** | Python API | CLI |
| **Install** | `pip install xrtm-forecast` | `pip install xrtm` |

The framework provides composable building blocks. The product composes them into a turnkey CLI.

## Repository Map

| Repo | PyPI | GitHub |
|------|------|--------|
| xrtm-data | `xrtm-data` | [xrtm-org/data](https://github.com/xrtm-org/data) |
| xrtm-eval | `xrtm-eval` | [xrtm-org/eval](https://github.com/xrtm-org/eval) |
| xrtm-forecast | `xrtm-forecast` | [xrtm-org/forecast](https://github.com/xrtm-org/forecast) |
| xrtm-train | `xrtm-train` | [xrtm-org/train](https://github.com/xrtm-org/train) |
| xrtm | `xrtm` | [xrtm-org/xrtm](https://github.com/xrtm-org/xrtm) |

## Governance

Architecture standards, policies, and forecast object schemas live in [xrtm-org/governance](https://github.com/xrtm-org/governance).
