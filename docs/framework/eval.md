# xrtm-eval: The Judge

The `xrtm-eval` repository is the verification layer of the xrtm ecosystem. It serves as the impartial arbiter that determines the accuracy and reliability of probabilistic forecasts.

## The Scoring Engine

Unlike traditional metrics that look for semantic similarity, `xrtm-eval` focuses on mathematical rigor:

- **Brier Scores:** Measuring the mean squared error of probabilistic predictions.
- **Calibration Metrics:** Evaluating how well a model knows what it doesn't know. A well-calibrated model's predicted probabilities match the long-run actual frequencies.
- **Resolution:** Handling the time delay between a forecast and the eventual ground truth resolution.

## Pure Math Verification

As Layer 2 in the architecture, `xrtm-eval` provides pure mathematical functions to grade the output of inference engines. It depends on `xrtm-data` for snapshot comparisons but remains decoupled from the inference logic itself to prevent circular evaluation bias.
