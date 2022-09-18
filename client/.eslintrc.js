module.exports = {
  parserOptions: {
    'project': './tsconfig.json'
  },
  'extends': ['next/core-web-vitals', '../.eslintrc.js'],
  overrides: [
    {
      files: ['*.tsx'],
      'rules': {
        'no-undef': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-console': 'off'
      },
      parser: '@typescript-eslint/parser'
    }
  ]
};
