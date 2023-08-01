module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", "public", "node_modules", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
  plugins: ["react-refresh"],
  rules: {
    //
    // eslint-plugin-react-refresh
    //
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    //
    // eslint-plugin-react
    //
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      rules: {
        // Allow CJS until ESM support improves
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
