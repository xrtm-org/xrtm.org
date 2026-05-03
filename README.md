# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

`xrtm.org` is the presentation layer for the XRTM ecosystem. Canonical cross-repo schemas, compatibility rules, and contributor policies live in [`xrtm-org/governance`](https://github.com/xrtm-org/governance); shipped product behavior and package-specific truth live in the owning repositories. Site content should mirror governance and product truth rather than define it.

## Contributor guide

Start with [CONTRIBUTING.md](CONTRIBUTING.md) for the GitHub-first contributor flow, or [`docs/contributing.md`](docs/contributing.md) for the rendered site copy. Both point to the same role split: `xrtm.org` owns presentation and navigation, while product/package truth stays in `xrtm`, the package repos, and `governance`.

## Toolchain

The supported local toolchain is:

- **Node:** `20.19.0` (see `.nvmrc` / `.node-version`)
- **npm:** `10.x` (bundled with the supported Node release)

This repo is **local-tooling first**. Devcontainers remain supported for contributors who prefer them, but Docker/devcontainers are not the primary workflow.

If you use `nvm`:

```bash
nvm use
```

## Installation

```bash
npm ci
```

## Local Development

```bash
npm start
npm run start:lan
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

`npm start` now binds to `127.0.0.1` by default so the vulnerable upstream
Docusaurus dev-server chain is not exposed on every network interface during
routine local work. Use `npm run start:lan` only when you intentionally need
LAN/container access for a temporary development session.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Release-gated command claims

The newcomer/operator command blocks on `xrtm.org` are validated against
`xrtm/docs/release-command-contract.json` so the site cannot drift ahead of the
published package surface. In the standard XRTM workspace layout, run:

```bash
npm run release:check
```

If your local checkout does not have a sibling `../xrtm` repo, set
`XRTM_RELEASE_CHECKER` and `XRTM_RELEASE_CONTRACT` before running the command.

## Vulnerability audit policy

Run the website audit gate after installing dependencies:

```bash
npm run audit:policy
```

The policy fails on `high` or `critical` npm audit findings and allows the current known moderate Docusaurus development-server chain to remain tracked. After the hardening pass, `npm audit` reports 19 moderate, 0 high, and 0 critical findings. The remaining findings flow through `@docusaurus/core -> webpack-dev-server -> sockjs -> uuid <14`; npm reports no direct fix without moving outside the supported upstream Docusaurus dependency chain.

We upgraded the supported Docusaurus packages to `3.10.1`, reran the audit, and confirmed the moderate findings still remain with `fixAvailable: false`. We track those moderate findings instead of force-fixing because this site ships static build output, while the affected chain is used by local Docusaurus development tooling. Forced major upgrades or overrides are allowed only when a high/critical finding appears, a moderate finding is shown to affect hosted production output or shared CI/runtime exposure, or upstream Docusaurus does not provide a timely supported fix. Any forced upgrade must include a documented rationale plus passing `npm ci`, `npm run build`, and `npm run audit:policy`.

Accepted-risk ownership for the remaining moderate chain:

- **Owner:** `xrtm.org` maintainers
- **Operational mitigation:** `npm start` binds to `127.0.0.1` by default; broader network exposure requires the explicit `npm run start:lan` opt-in.
- **Review triggers:** new Docusaurus patch/minor releases, npm advisory severity/detail changes, any request to expose the dev server beyond localhost by default, or any evidence that the chain affects CI or hosted production output.
- **Exit criteria:** remove this exception when upstream ships a supported fix or the site no longer depends on the affected Docusaurus development-server chain.
- **Cross-repo policy record:** mirror this exception in [`xrtm-org/governance`'s PR acceptance policy](https://github.com/xrtm-org/governance/blob/main/policies/pr-acceptance-policy.md) so release gating and repo-local docs stay aligned.

## Optional devcontainer support

This repo also ships `.devcontainer/devcontainer.json` for contributors who want an isolated editor environment, but that path is optional support rather than the main development story.

## Deployment

Production deploys are handled by GitHub Actions via `.github/workflows/deploy.yml`. In the current repo settings, GitHub Pages still serves the legacy `gh-pages` branch, so the workflow builds the site and publishes the generated `build/` output to `gh-pages` for you. Every push to `main` (or a manual workflow dispatch) now:

```bash
npm ci
npm run build
```

and then publishes the `build/` directory to `gh-pages`. The custom domain is kept in-repo through `static/CNAME`, so Pages deployments keep `xrtm.org` attached to the site. `npm run deploy` is intentionally disabled to avoid accidental local publishing.

### Recovery checklist

If `https://xrtm.org` starts returning a 404 again, check these in order:

1. Latest **Deploy to GitHub Pages** workflow run completed successfully.
2. Repository **Settings → Pages** still points to the `gh-pages` branch while the repo remains on the legacy Pages model.
3. The Pages custom domain is still set to `xrtm.org`, and HTTPS is enabled after validation.
4. DNS for `xrtm.org` still points at GitHub Pages; repo changes cannot repair broken DNS.
5. The published `gh-pages` content contains `index.html`, `.nojekyll`, and `CNAME` at the site root.

### Future migration note

The repo is now ready to move to the modern GitHub Pages **workflow** source as well, but that switch requires repository admin access to change the Pages publishing source. Until that happens, the branch-publish workflow above is the correct deploy path.
