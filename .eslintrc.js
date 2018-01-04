module.exports = {
  "extends": "standard",
  "rules": {
    "comma-dangle": [2, "always-multiline"],
    "indent": [2, 2, {
      "CallExpression": { "arguments": 2 },
      "FunctionDeclaration": { "parameters": 2 },
      "FunctionExpression": { "parameters": 2 },
      "MemberExpression": 2,
      "SwitchCase": 1,
    }],
    "no-multi-spaces": [2, { "ignoreEOLComments": true }],
    "no-multiple-empty-lines": [1, { "max": 2 }],
    "require-jsdoc": [1],
    "semi": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "valid-jsdoc": [1],
  },
};
