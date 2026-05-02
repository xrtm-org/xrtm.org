# xrtm-eval: The Judge

The `xrtm-eval` repository is the verification layer of the xrtm ecosystem. It serves as the impartial arbiter that determines the accuracy and reliability of probabilistic forecasts.

## The Scoring Engine

Unlike traditional metrics that look for semantic similarity, `xrtm-eval` focuses on mathematical rigor:

- **Brier Scores:** Measuring the mean squared error of probabilistic predictions.
- **Calibration Metrics:** Evaluating how well a model knows what it doesn't know. A well-calibrated model's predicted probabilities match the long-run actual frequencies.
- **Resolution:** Handling the time delay between a forecast and the eventual ground truth resolution.

In practical XRTM workflows, read those metrics this way:

- **Brier:** lower is better; `0.000` is perfect and about `0.250` is the balanced 50/50 binary baseline
- **ECE / calibration:** lower is better; near `0` means the confidence you state is close to the frequency that actually happened
- **Resolution:** higher means the system is separating winners from losers more sharply instead of clustering around 50%

## Pure Math Verification

As Layer 2 in the architecture, `xrtm-eval` provides pure mathematical functions to grade the output of inference engines. It depends on `xrtm-data` for snapshot comparisons but remains decoupled from the inference logic itself to prevent circular evaluation bias.
