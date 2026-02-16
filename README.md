# QAE-Selenium-TypeScript

Test automation framework using **Selenium WebDriver** and **TypeScript**, with **Mocha** as the test runner.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Chrome](https://www.google.com/chrome/) (or another browser; ChromeDriver is used by default)
- ChromeDriver compatible with your Chrome version (or use a driver manager)

## Installation

1. **Clone the repository and open the project:**

```bash
git clone https://github.com/jessicasilva0/QAE-Selenium-TypeScript.git
cd QAE-Selenium-TypeScript
```

2. **Open a new terminal window in your IDE and run the command to install dependencies.:**

```bash
npm install
```

3. **Create a `.env` file in the project root with the credentials used by the login tests.**

Use `env.example.ts` as reference for the variable names and example values. The `.env` file is git-ignored and must not be committed.

```bash
email=""
password=""
```

## Running tests

**Run all tests:**

```bash
npm test
```

### Run specific tests

**Run login tests:**

```bash
npm run login
```

**Run flights-bookings:**

```bash
npm run flights-bookings
```

## Linting and Formatting

**Run the command to format code with Prettier:**

```bash
npm run format
```

Note: Linting TBD

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

TypeScript is compiled to the `dist/` folder (git-ignored). Mocha runs the compiled `.js` files.

## Technical Decisions

To meet the challenge requirements, for detailed information about the framework selection and test implementation strategies, see:

**[TECHNICAL_DECISIONS.md](TECHNICAL_DECISIONS.md)**

## Happy Testing 🖖

@autor: Jessica Silva
