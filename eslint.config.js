import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/', 'docs/'] },
  { files: ['**/*.cjs'], languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
];
