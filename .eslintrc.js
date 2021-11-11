module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "plugin:import/typescript",
  ],
  plugins: ["import", "jest", "prettier", "@typescript-eslint"],
  ignorePatterns: ["dist/", "node_modules/", ".eslintrc.js"],
  env: {
    browser: "true",
  },
  globals: {
    React: true,
    JSX: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "tsconfig.json",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "node/no-extraneous-import": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        custom: {
          match: true,
          regex: "^I[A-Z]",
        },
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    camelcase: "off",
    "import/extensions": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "{type,models}",
            group: "external",
            position: "before",
          },
          {
            pattern: "~/{utils,helpers}/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "~/test-helpers/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": "error",
    "no-use-before-define": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "never",
        next: "*",
        prev: ["case", "default"],
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["multiline-const"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
    quotes: ["error", "double"],
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    semi: ["error", "never"],
    "node/no-unsupported-features/es-syntax": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.{js,jsx,ts,tsx}", "jest.setup.ts"],
      env: {
        "jest/globals": true,
      },
      rules: {},
    },
  ],
}
