module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort'],
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
    ] /* pas utiliser d accolage si pas necessaire */,
    'func-style': 'error' /* faire function fleché */,
    'no-restricted-syntax': [
      'error',
      'VariableDeclaration[kind!="var"]',
    ] /* utiliser var pa let const */,
    'object-shorthand': 'error' /* rendre plus court les objets */,
    'simple-import-sort/imports':
      'error' /* import doivent etre dans l ordre */,
    'no-empty-function': 'error',
    'no-undef': 'error' /* si pas defini variable */,
  },
};
