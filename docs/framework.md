---
sidebar_position: 2
---

# Framework

XRTM is built on a 4-layer framework. Each layer is an independent Python package. Use them directly to build custom forecasting systems.

## Packages

| Package | Version | Role | Install |
|---------|---------|------|---------|
| `xrtm-data` | 0.3.0 | Schemas & question sources | `pip install xrtm-data` |
| `xrtm-eval` | 0.3.0 | Scoring (Brier, ECE, log) | `pip install xrtm-eval` |
| `xrtm-forecast` | 0.7.0 | Runtime engine | `pip install xrtm-forecast` |
| `xrtm-train` | 0.3.0 | Backtesting & optimization | `pip install xrtm-train` |

## Quick Examples

### Load Questions

```python
from xrtm.data.corpora import load_real_binary_questions
questions = load_real_binary_questions(limit=5)

from xrtm.data.providers.online import PolymarketSource
markets = await PolymarketSource().fetch_questions(limit=10)
```

### Score Forecasts

```python
from xrtm.eval import BrierScoreEvaluator, summarize_binary_forecasts

evaluator = BrierScoreEvaluator()
brier = evaluator.score(probability=0.7, ground_truth="yes")

predictions = [(0.7, "yes"), (0.3, "no"), (0.9, "yes")]
summary = summarize_binary_forecasts(predictions)
# {'brier_score': 0.0467, 'ece': 0.1333, 'log_score': 0.1625}
```

### Run Forecasts

```python
from xrtm.forecast.kit.agents.specialists.analyst import ForecastingAnalyst
from xrtm.forecast.core.config.inference import OpenAIConfig
from xrtm.forecast.providers.inference.factory import ModelFactory

config = OpenAIConfig(
    model_id="your-model",
    base_url="https://your-endpoint",
    api_key="sk-...",
)
provider = ModelFactory.get_provider(config)
analyst = ForecastingAnalyst(model=provider)
forecast = await analyst.run(question)
```

### Provider Support

OpenAI-compatible only. Any endpoint that speaks the OpenAI Chat Completions API works: any endpoint that speaks the OpenAI Chat Completions API.

### Agents

- **ForecastingAnalyst** — Structured probabilistic forecasts with causal reasoning traces
- **LLMAgent** — Provider-backed agent with tool retrieval
- **RoutingAgent** — FAST/SMART tiered routing

### Topologies

Composable multi-agent patterns:

- **RecursiveConsensus** — Parallel analysts → aggregate → supervisor loop
- **create_debate_graph()** — Pro/Con/Judge debate
- **create_fanout_graph()** — Fan-out to parallel workers

### Backtesting

```python
from xrtm.train import Backtester, BacktestRunner
```

## Dependencies

Each package is intentionally lean:

- `xrtm-data`: pydantic, scipy
- `xrtm-eval`: pydantic
- `xrtm-forecast`: pydantic, openai, aiohttp, sqlalchemy (cache), numpy, freezegun, rich
- `xrtm-train`: pydantic + the three framework packages above

[Architecture →](/docs/architecture)
