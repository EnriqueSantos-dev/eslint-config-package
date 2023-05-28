module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "tailwindcss"],
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    tailwindcss: {
      calles: ["className", "tw", "cn", "clsx"],
    },
  },
};
