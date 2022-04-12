module.exports = {
    extends: [
        'react-app',
        'react-app/jest'
    ],
    rules: { 
        semi: 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single'],
        'require-await': 'error'
    },
    ignorePatterns: [
        'node_modules/',
        'src/serviceWorker.ts',
        'template/src/serviceWorker.ts',
        'src/assets/statics/'
    ]
};