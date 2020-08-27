module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
     
        // we only want single quotes
        'quotes': ['error', 'double'],
        // we want to force semicolons
        'semi': ['error', 'always'],
        // we use 2 spaces to indent our code
        'indent': ['error', 2],
        // we want to avoid useless spaces
        'no-multi-spaces': ['error']
      
    }
};
