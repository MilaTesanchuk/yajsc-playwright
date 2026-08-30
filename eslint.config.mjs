// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    // Global rules (without files)
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            indent: ['error', 4],
            '@stylistic/indent': ['error', 4],
            semi: 'error'
        }
    },

    // JS/TS rules
    {
        files: ['**/*.{js,ts}'],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            stylistic.configs.recommended
        ],
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-floating-promises': 'error'
        }
    },

    // Playwright rules
    {
        files: ['tests/**'],
        extends: [playwright.configs['flat/recommended']]
    },

    // Global ignores
    {
        ignores: [
            '!node_modules/',   // розігнорити директорію
            'node_modules/*'    // але ігнорити її вміст
        ]
    }
]);
