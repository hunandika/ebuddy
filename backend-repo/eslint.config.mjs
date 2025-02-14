import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.es2024 } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { ignores: ['dist', 'node_modules'] },
    {
        rules: {
            'no-unused-vars': 'error',
            'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
            'no-console': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
    eslintConfigPrettier,
]
