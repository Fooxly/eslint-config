# Fooxly ESLint Configuration

## Getting Started

### Install

Add our ESLint configuration and the Prettier plugin to your project:

#### Using Yarn

```bash
yarn add -D @fooxly/eslint-config eslint-plugin-prettier prettier
```

### Setup

#### `.eslintrc`

Create a `.eslintrc` file in the root of your project with the following content:

```json
{
    "root": true,
    "extends": [
        "@fooxly/eslint-config"
    ]
}
```

And be sure to check out our other ESLint configurations
if your project uses other technologies like React, for example:

**Note**: Always import `"@fooxly/eslint-config"` last to override any conflicting rules.

```json
{
    ...
    "extends": [
        "@fooxly/eslint-config-react",
        "@fooxly/eslint-config"
    ]
}
```

#### `.prettierrc`

Create a `.prettierrc` file in the root of your project with our compatible Prettier configuration:

```json
{
    "printWidth": 110,
    "tabWidth": 4,
    "singleQuote": true,
    "quoteProps": "consistent",
    "jsxSingleQuote": true,
    "trailingComma": "all"
}
```

#### `package.json`

Add the following scripts to easily validate your code:

```json
{
    "scripts": {
        ...
        "lint": "eslint --ext ts,tsx src scripts",
        "lint-fix": "yarn lint --fix",
        ...
    }
}
```
