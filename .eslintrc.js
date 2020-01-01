module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": 2,
        "no-unused-vars": 0,
        "object-curly-spacing": [2, "always"],
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "keyword-spacing": 2,
        "semi": 2
    }
};