# xrtm-data: The Time Machine

The `xrtm-data` repository provides the foundational infrastructure for temporal integrity within the xrtm ecosystem. It is responsible for freeze-framing the world state at specific points in time.

## The Snapshot Protocol

To prevent "future leakage," where a model inadvertently learns from data that shouldn't have been available at the moment of prediction, `xrtm-data` implements strict snapshotting.

- **Vaulting:** Frozen world states are stored with cryptographic hashes to ensure they haven't been modified.
- **Historical Replay:** Enables the system to re-run history as if it were happening "now," providing a safe environment for backtesting and evaluation.
- **Zero Leakage Enforcement:** Provides the `snapshot_time` used by the entire ecosystem to filter search results and memory retrieval.

## Role in the Ecosystem

`xrtm-data` is the base layer (Layer 1) of the dependency hierarchy. It defines the schemas and data loaders used by all other components. It has **zero** dependencies on other xrtm modules, ensuring a clean and unidirectional flow of information.
