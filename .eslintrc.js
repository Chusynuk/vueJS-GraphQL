module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/recommended",
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
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
            "never"
        ],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "always",
            "asyncArrow": "always"
        }],
        "skipBlankLines": false,
        "no-multiple-empty-lines": [1, { "max": 1, "maxBOF": 1, "maxEOF": 1 }],
        "array-bracket-spacing": ["error", "always"],
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "no-extra-semi": "error",
        "no-extra-parens": ["error", "all", { "returnAssign": false, "nestedBinaryExpressions": false }]
    }
};