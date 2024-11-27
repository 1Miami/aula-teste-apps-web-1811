const globals = require("globals");
const pluginJs = require("@eslint/js");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files:['**/*.js'],
    rules: {
      "semi": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "no-var": "error",
      "curly": "error",
      "indent": ["error", 2],
      "no-unreachable": "error",
      "no-console": "warn",
      "quotes": ["error", "double"],
      "space-before-function-paren": ["error", "always"],
      "no-unused-vars": ["error"],
      "no-empty-function": ["error"],
      "prefer-arrow-callback": ["error"],
      "no-magic-numbers": ["error", { "ignore": [0, 1] }],
      "no-duplicate-imports": ["error"],
      "consistent-return": ["error"],
      "array-callback-return": ["error"],
      "no-new-wrappers": ["error"],
      "no-prototype-builtins": ["error"],
      "no-trailing-spaces": ["error"],
      "camelcase": ["error", { "properties": "never" }],
      "comma-dangle": ["error", "always-multiline"],
      "max-len": ["error", { "code": 100 }],
      "no-else-return": ["error"],
      "no-shadow": ["error"],
      "prefer-const": ["error"],
      "no-param-reassign": ["error"],
      "object-shorthand": ["error", "always"],
      "wrap-iife": ["error", "any"],
      "prefer-template": ["error"],
    },
  },
];
