module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  env: {node: true, es6: true, jest: true},
  plugins: [
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', {
      trailingComma: 'es5',
      'singleQuote': true,
    }],
    'no-console': 'off', // just use console :P
  },
}