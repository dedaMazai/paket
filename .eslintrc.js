module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        quotes: ['error', 'single'],
        'arrow-body-style': [0, 'as-needed'],
        'react/jsx-indent': [0, 'tab'],
        'react/jsx-indent-props': [0, 'tab'],
        'react/no-array-index-key': 'off',
        indent: [0, 'tab'],
        'no-tabs': 0,
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'quote-props': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['function-declaration', 'arrow-function'],
                unnamedComponents: 'arrow-function',
            },
        ],
        'no-shadow': 'off',
        'import/extensions': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'import/no-extraneous-dependencies': 'off',
        'lines-between-class-members': 'off',
        'react/no-unused-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'no-underscore-dangle': 'off',
        'react/button-has-type': 'off',
        'no-return-await': 'off',
        'max-len': [
            'error',
            {
                ignoreComments: true,
                ignoreStrings: true,
                code: 180,
            },
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'no-plusplus': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        camelcase: 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};
