module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
};
