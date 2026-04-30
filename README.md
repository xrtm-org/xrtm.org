# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
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

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
