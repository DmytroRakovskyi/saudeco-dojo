# saudeco-dojo

End-to-end (E2E) automated testing project for [saucedemo.com](https://www.saucedemo.com/) using Playwright and TypeScript.

## Project Structure

```
src/
  components/      # UI component abstractions (Header, Item, etc.)
  pages/           # Page Object Models (LoginPage, InventoryPage, etc.)
  test-data/       # Test data generators (users, customers)
  types/           # TypeScript interfaces for data models
tests/
  e2e/             # E2E test suites (purchase scenarios, etc.)
```

## Key Features

- **Playwright** for browser automation and assertions
- **TypeScript** for type safety and maintainability
- **Page Object Model** for reusable, organized test code
- **Faker** for generating random test data
- **Prettier** and **Husky** for code formatting and pre-commit hooks

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Running Tests

```sh
npx playwright test
```

### Project Scripts

- `prepare`: Sets up Husky git hooks

### Formatting

Prettier is used for code formatting. Code is automatically formatted on commit via Husky.

```sh
npx prettier --write "**/*.{ts,tsx}"
```

## Test Data

- User data: [`src/test-data/test-users.ts`](src/test-data/test-users.ts)
- Customer data: [`src/test-data/test-customers.ts`](src/test-data/test-customers.ts)

## Example Test

See [`tests/e2e/purchase.spec.ts`](tests/e2e/purchase.spec.ts) for a sample purchase flow test.

## Configuration

- Playwright config: [`playwright.config.ts`](playwright.config.ts)
- TypeScript config: [`tsconfig.json`](tsconfig.json)
- Prettier config: [`.prettierrc`](.prettierrc)
