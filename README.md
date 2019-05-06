# CI/CD without frameworks CLI

This is an example of CI pipeline without using any frameworks CLI. We are deploying to a google cloud bucket

## Getting Started
Clone the repository

```bash
git clone https://github.com/sallamx99/ci-cd-examples
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
To run the pipeline and generate a bundle run
```bash
npm run build
```
The npm scripts tested to be working on Linux. If you have issues running the commands on other operating systems please report it.

## Google Cloud Build
The CI used is Google Cloud Build and it is configured in `cloudbuild.yaml`
