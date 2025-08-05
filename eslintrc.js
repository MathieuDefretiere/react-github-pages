module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Tu peux ajouter ou ajuster des règles ici
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
