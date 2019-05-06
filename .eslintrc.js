module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:prettier/recommended',
        'prettier/vue'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 2019,
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
      "vue/component-name-in-template-casing": ["error", "kebab-case"]
    }
};
