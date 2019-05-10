# CI/CD Boilerplate
Bolierplate for CI pipeline without using any frameworks CLI. It uses Google Cloud Build and deploys to Google Cloud Storage

## Getting Started

**Please make sure you are using at least node.js v10 and npm version 6**

Clone the repository

```bash
git clone https://github.com/sallamx99/ci-cd
```
Install dependencies with exact dependency tree

```bash
npm ci
```
Check available scripts in `package.json` and run them by executing
```bash
npm run <script name>
```
Example for running e2e tests
```bash
npm run test:e2e
```
To run the pipeline
```bash
npm run build
```
To generate a bundle
```bash
npm run bundle
```
The npm scripts tested to be working on Linux. Contributions are welcome

## Google Cloud Build
The CI used is Google Cloud Build and it is configured in `cloudbuild.yaml`
