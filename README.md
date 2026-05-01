# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Vulnerability audit policy

Run the website audit gate after installing dependencies:

```bash
npm run audit:policy
```

The policy fails on `high` or `critical` npm audit findings and allows the current known moderate Docusaurus development-server chain to remain tracked. After the hardening pass, `npm audit` reports 19 moderate, 0 high, and 0 critical findings. The remaining findings flow through `@docusaurus/core -> webpack-dev-server -> sockjs -> uuid <14`; npm reports no direct fix without moving outside the supported upstream Docusaurus dependency chain.

We track those moderate findings instead of force-fixing because this site ships static build output, while the affected chain is used by local Docusaurus development tooling. Forced major upgrades or overrides are allowed only when a high/critical finding appears, a moderate finding is shown to affect hosted production output or shared CI/runtime exposure, or upstream Docusaurus does not provide a timely supported fix. Any forced upgrade must include a documented rationale plus passing `npm install`, `npm run build`, and `npm run audit:policy`.

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
