/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // ⚠️ Keep "prettier" last to avoid conflicts with other configs ⚠️
  extends: [
    "eslint:recommended",
    "plugin:storybook/recommended",
    "plugin:md/recommended",
    "prettier",
  ],

  plugins: ["prettier"],
  rules: {
    "md/remark": [
      "warn",
      {
        // This object corresponds to object you would export in .remarkrc file
        plugins: [
          "preset-lint-markdown-style-guide",
          "frontmatter",
          "remark-lint-alphabetize-lists",
        ],
      },
    ],
  },

  overrides: [
    // markdown
    {
      files: ["*.md"],
      parser: "markdown-eslint-parser",
      rules: {
        "prettier/prettier": [
          "error",
          // Important to force prettier to use "markdown" parser - otherwise it wouldn't be able to parse *.md files.
          // You also can configure other options supported by prettier here - "prose-wrap" is
          // particularly useful for *.md files
          { parser: "markdown" },
        ],
      },
    },

    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
        "import/resolver": {
          typescript: {},
        },
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
    },

    // Node
    {
      files: [".eslintrc.cjs", "server.ts"],
      env: {
        node: true,
      },
    },
  ],
};
