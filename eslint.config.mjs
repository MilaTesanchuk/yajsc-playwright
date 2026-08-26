// @ts-check

import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default defineConfig([
    {
        files: ['**/*.{js,ts}'],
        extends: [js.configs.recommended, tseslint.configs.recommended],
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-floating-promises': 'error'
        }
    },
    {
        files: ['tests/**'],
        extends: [playwright.configs['flat/recommended']]
    },
    {
        ignores: [
            "!node_modules/", // unignore `node_modules/` directory
            "node_modules/*", // ignore its content
        ],
    }
]);