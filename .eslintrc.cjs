module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: true,
      alias: {
        map: [
          ['@src', './src'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-refresh',
    'react',
    'import',
    'prettier',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': ['error', { singleQuote: true  }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'no-console': 'error',
  },
}
