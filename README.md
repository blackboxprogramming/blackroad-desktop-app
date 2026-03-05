[![CI - Build & Test](https://github.com/blackboxprogramming/blackroad-desktop-app/actions/workflows/ci.yml/badge.svg)](https://github.com/blackboxprogramming/blackroad-desktop-app/actions/workflows/ci.yml)
[![Auto Deploy](https://github.com/blackboxprogramming/blackroad-desktop-app/actions/workflows/auto-deploy.yml/badge.svg)](https://github.com/blackboxprogramming/blackroad-desktop-app/actions/workflows/auto-deploy.yml)
[![Security Scan](https://github.com/blackboxprogramming/blackroad-desktop-app/actions/workflows/security-scan.yml/badge.svg)](https://github.com/blackboxprogramming/blackroad-desktop-app/actions/workflows/security-scan.yml)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

# BlackRoad Desktop App

Cross-platform desktop application built with Electron for macOS, Windows, and Linux.

## Features

- **System Tray** - Always accessible from the system tray
- **Live Dashboard** - Real-time deployment metrics and analytics
- **Notifications** - Native OS notifications for deployments and alerts
- **Dark Mode** - Built-in dark theme
- **Offline Mode** - Full functionality when offline
- **Quick Deploy** - One-click deployment from the desktop

## Prerequisites

- [Node.js](https://nodejs.org/) v20 LTS
- npm (included with Node.js)

## Development

```bash
# Install dependencies
npm ci

# Start in development mode
npm start
```

## Build

```bash
# macOS
npm run build:mac

# Windows
npm run build:win

# Linux
npm run build:linux
```

## Project Structure

```
blackroad-desktop-app/
  .github/
    workflows/
      ci.yml              # Build & test on all platforms
      auto-deploy.yml     # Deploy to Cloudflare Workers + Railway
      security-scan.yml   # CodeQL + dependency scanning
      self-healing.yml    # Health monitoring + auto-recovery
      automerge.yml       # Auto-merge Dependabot PRs
    dependabot.yml        # Automated dependency updates
  workers/
    src/index.js          # Cloudflare Worker health monitor
    wrangler.toml         # Worker configuration
  main.js                 # Electron main process
  index.html              # Renderer UI
  package.json            # Dependencies (pinned versions)
  LICENSE                 # Proprietary license
```

## Infrastructure

| Service | Purpose | Status |
|---------|---------|--------|
| **GitHub Actions** | CI/CD, security scanning, self-healing | Active |
| **Cloudflare Workers** | Health monitoring, status API | Active |
| **Railway** | Backend deployment target | Configured |
| **Dependabot** | Automated dependency updates | Active |

## Workflows

All GitHub Actions are pinned to specific commit hashes for supply-chain security.

- **CI** (`ci.yml`) - Builds and tests on Ubuntu, macOS, and Windows
- **Auto Deploy** (`auto-deploy.yml`) - Deploys Cloudflare Workers and Railway services on push to main
- **Security Scan** (`security-scan.yml`) - CodeQL analysis and npm audit on every push and PR
- **Self-Healing** (`self-healing.yml`) - Monitors deployment health every 30 minutes, auto-creates issues on failure
- **Automerge** (`automerge.yml`) - Auto-approves and merges Dependabot patch/minor updates

## Cloudflare Worker Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check endpoint |
| `GET /api/status` | Service status overview |
| `GET /` | Worker info and available endpoints |

## Tech Stack

- **Desktop**: Electron 28.1.4
- **HTTP Client**: Axios 1.7.9
- **Storage**: electron-store 8.1.0
- **Edge**: Cloudflare Workers
- **CI/CD**: GitHub Actions
- **Monitoring**: Self-healing workflows + Cloudflare cron triggers

## Required Secrets

Configure these in GitHub repository settings:

| Secret | Service | Purpose |
|--------|---------|---------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare | Worker deployment |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare | Account identifier |
| `RAILWAY_TOKEN` | Railway | Backend deployment |
| `DEPLOY_URL` | Self-healing | Health check target URL |

---

## License & Copyright

**Copyright (c) 2024-2026 BlackRoad OS, Inc. All Rights Reserved.**

**CEO:** Alexa Amundson

**PROPRIETARY AND CONFIDENTIAL**

This software is the proprietary property of BlackRoad OS, Inc. and is **NOT open source**. It is **NOT for commercial resale**.

### Usage Restrictions

- Permitted: Testing, evaluation, and educational purposes
- Prohibited: Commercial use, resale, or redistribution without written permission

### Enterprise Scale

Designed to support:
- 30,000 AI Agents
- 30,000 Human Employees
- One Operator: Alexa Amundson (CEO)

### Contact

For commercial licensing inquiries:
- **Email:** blackroad.systems@gmail.com
- **Organization:** BlackRoad OS, Inc.

See [LICENSE](LICENSE) for complete terms.
