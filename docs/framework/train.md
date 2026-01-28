# xrtm-train: The Lab

`xrtm-train` is the orchestration and optimization layer of the xrtm ecosystem. It closes the loop by using the feedback from evaluations to improve model performance over time.

## The Simulation Loop

`xrtm-train` is the only layer permitted to run iterative simulation loops:

- **Backtesting:** Stress-testing strategies against historical snapshots.
- **Optimization:** Training models to internalize causal chains and improve their Bayesian logic.
- **Simulation:** Running large-scale simulations to explore possible future trajectories and their probabilistic outcomes.

## Hierarchical Command

As the top layer (Layer 4), `xrtm-train` can import from all other libraries (`data`, `eval`, `forecast`) to coordinate complex training and evaluation pipelines. It ensures that the entire ecosystem evolves based on the rigorous standards of forecasting intelligence.
