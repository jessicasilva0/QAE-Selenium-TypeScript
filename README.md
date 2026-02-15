# QAE-Selenium-TypeScript

Test automation framework using **Selenium WebDriver** and **TypeScript**, with **Mocha** as the test runner.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Chrome](https://www.google.com/chrome/) (or another browser; ChromeDriver is used by default)
- ChromeDriver compatible with your Chrome version (or use a driver manager)

## Installation

```bash
git clone https://github.com/jessicasilva0/QAE-Selenium-TypeScript.git
cd QAE-Selenium-TypeScript
npm install
```

## Project structure

```
├── tests/
│   ├── fixtures/
│   ├── pages/
│   ├── specs/
│   └── utils/
│       └── base-url.ts
├── tsconfig.json
└── package.json
```

- **tests/fixtures/**: Contains test setup and teardown configurations, including WebDriver initialization and shared hooks.
- **tests/pages/**: Contains Page Object Models (POM) representing the application's pages and interactions.
- **tests/specs/**: Contains the actual test files (specifications) testing various features.
- **tests/utils/**: Contains helper functions
- **tsconfig.json**: TypeScript compiler configuration.
- **package.json**: Manages project dependencies and scripts.

### Environment variables

Create a `.env` file in the project root with the credentials used by the login tests. Use `env.example.ts` as reference for the variable names and example values. The `.env` file is git-ignored and must not be committed.

TypeScript is compiled to the `dist/` folder (git-ignored). Mocha runs the compiled `.js` files.

## Running tests

```bash
npm test
```

### Run specific tests

```bash
npm run login
npm run flights-bookings
```

## Linting and Formatting

Format code:

```bash
npm run format
```

Note: Linting TBD

Tests use a shared Chrome WebDriver instance created in the fixture’s `before` hook and closed in the `after` hook.

## Happy Testing 🖖

@autor: Jessica Silva
