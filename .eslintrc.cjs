/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:css/recommended',
    'plugin:mdx/recommended',
    'plugin:markdown/recommended-legacy',
    'plugin:astro/recommended'
  ],
  "plugins": [
    "css"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
  ]
}