module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    // we only want double quotes
    quotes: ["error", "double"],
    // we want to force semicolons
    semi: ["error", "always"],
    // we use 2 spaces to indent our code
    indent: ["error", 2],
    // we want to avoid useless spaces
    "react/prop-types": "off", // Since we do not use prop-types

    "react/require-default-props": "off", // Since we do not use prop-types
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-for": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "no-multi-spaces": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", "tsx", "ts"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
