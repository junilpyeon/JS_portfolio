module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard", "prettier"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'indent': 'off',
        "semi": [
            "error",
            "always"
        ],
        "no-trailing-spaces": 0,
        "keyword-spacing": 0,
        "no-unused-vars": 1,
        "no-multiple-empty-lines": 0,
        "space-before-function-paren": 0,
        "eol-last": 0
    }
};
