module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx'
      ],
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmafeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
