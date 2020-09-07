module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "comma-dangle": ["error", "never"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/display-name": 0,
    "no-extra-parens": "error",
    "no-unexpected-multiline": "error",
    "default-case": "error",
    "no-case-declarations": 0,
    "no-else-return": "error",
    "no-shadow": ["error", { "hoist": "functions" }],
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "never"],
    "brace-style": "error",
    "camelcase": "error",
    "comma-dangle": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "jsx-quotes": ["error", "prefer-single"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "new-cap": ["error", { "newIsCap": true }],
    "no-lonely-if": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error"
  }
};
