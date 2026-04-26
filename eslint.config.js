import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

const fsdRestrictedImports = (restrictedLayers) => ({
  'no-restricted-imports': [
    'error',
    {
      patterns: restrictedLayers.map((layer) => ({
        group: [
          `@/${layer}/**`,
          `src/${layer}/**`,
          `${layer}/**`,
          `../${layer}/**`,
          `../../${layer}/**`,
          `../../../${layer}/**`,
          `../../../../${layer}/**`,
        ],
        message: `FSD: this layer cannot import from ${layer}.`,
      })),
    },
  ],
})

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['src/pages/**/*.{js,jsx}'],
    rules: fsdRestrictedImports(['app']),
  },
  {
    files: ['src/widgets/**/*.{js,jsx}'],
    rules: fsdRestrictedImports(['pages', 'app']),
  },
  {
    files: ['src/features/**/*.{js,jsx}'],
    rules: fsdRestrictedImports(['widgets', 'pages', 'app']),
  },
  {
    files: ['src/entities/**/*.{js,jsx}'],
    rules: fsdRestrictedImports(['features', 'widgets', 'pages', 'app']),
  },
  {
    files: ['src/shared/**/*.{js,jsx}'],
    rules: fsdRestrictedImports(['entities', 'features', 'widgets', 'pages', 'app']),
  },
])
