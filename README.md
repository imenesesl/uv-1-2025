# TypeScript Monorepo Template

A modern TypeScript monorepo using Yarn workspaces and Turborepo for efficient package management and build orchestration.

## ✨ Features

- 📦 Yarn Workspaces for efficient package management
- ⚡ Turborepo for fast and incremental builds
- 🔷 Shared TypeScript configuration
- 🎨 Unified ESLint setup with modern config
- 🔄 Hot-reload development environment
- ✅ Strict type checking enabled
- 📁 Clean and scalable monorepo structure

## 🔧 Prerequisites

- Node.js v20.11.1 (use nvm for version management)
- Yarn v1.22.19

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone <repository-url>
cd <repository-name>
```

2. **Install dependencies**

```bash
yarn install
```

3. **Available Scripts**

```bash
# Build all packages in the monorepo
yarn build

# Start development mode with hot-reload
yarn dev

# Run ESLint across all packages
yarn lint

# Automatically fix ESLint issues
yarn lint:fix

# Run TypeScript type checking
yarn type-check
```

## 🚀 Deployment

### Staging Deployment

The staging deployment is automatically triggered when:
- Code is pushed to the `main` branch
- Manual trigger through GitHub Actions UI

The workflow:
1. Checks out the code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the application
5. Deploys to Firebase Staging environment

**Staging URL**: [stg-uv-1-2025](https://stg-uv-1-2025.web.app/)

To manually trigger a staging deployment:
1. Go to your GitHub repository
2. Navigate to "Actions" tab
3. Select "Deploy to Staging" workflow
4. Click "Run workflow"
5. Select the branch (default: main)
6. Click "Run workflow"

### Production Deployment

Production deployments are triggered by creating a release tag with a specific date-time format.

#### How to Deploy to Production:

1. Go to your GitHub repository
2. Click on "Releases" in the right sidebar
3. Click "Create a new release"
4. Create a new tag using the format: `MM-DD-YYYY-HH-MM`
   - Example: `03-14-2024-15-30` for March 14, 2024, 15:30
5. Set the release title (optional)
6. Click "Publish release"

The workflow will:
1. Validate the tag format
2. Build the application
3. Deploy to Firebase Production environment

**Production URL**: [uv-1-2025](https://uv-1-2025.web.app/)

## 🛠 Configuration Details

### TypeScript

- Target: ES2020
- Strict mode enabled
- Source maps enabled
- Common JS modules
- Shared base configuration in `@repo/config`

### ESLint

- Modern ESLint flat config
- TypeScript-specific rules
- Shared configuration via `@repo/config`
- Automatic fixing support

### Turborepo

- Optimized task running
- Caching enabled for builds
- Configured for monorepo tasks:
  - build
  - lint
  - dev
  - type-check

## 📦 Working with Packages

### Creating a New Package

1. Create a new directory in `packages/`
2. Initialize package.json:
```json
{
  "name": "@repo/your-package",
  "version": "1.0.0",
  "private": true
}
```
3. Extend shared configs:
```json
// tsconfig.json
{
  "extends": "@repo/config/typescript/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

### Using Shared Configurations

- TypeScript: Extend from `@repo/config/typescript/base.json`
- ESLint: Import from `@repo/config/eslint/base.mjs`

## 🔄 Development Workflow

1. Make changes in package source code
2. Run `yarn dev` for development with hot-reload
3. Use `yarn type-check` to verify types
4. Use `yarn lint` to ensure code quality
5. Run `yarn build` before committing

## 📝 License

ISC

## 👤 Author

imenesesl

