const path = require('path')

module.exports = {
    "extends": [
        "react-app",
        "airbnb"
    ],
    "settings": {
        "import/resolver": {
          node: { paths: [path.resolve('./src')] }
        },
    },
    "rules": {
        "jsx-a11y/href-no-hash": 0,
        "no-use-before-define": "off",
        "no-confusing-arrow": "off",
        "no-console": "off",
        "import/no-webpack-loader-syntax": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "max-len": "off",
        "react/forbid-prop-types": "off",
        "react/prop-types": "off",
        "no-class-assign": "off",
        "global-require": "off",
        "jsx-a11/alt-text": "off",
        "spaced-comment": "off",
        "class-methods-use-this": "off",
        "react/jsx-filename-extension": 0,
    }
};