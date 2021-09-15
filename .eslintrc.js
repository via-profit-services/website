module.exports = {
  extends: ['@via-profit-services/eslint-config/react'],
  rules: {
    'import/extensions': [
      'warn',
      {
        mustache: 'always',
        md: 'always',
        json: 'always',
        woff2: 'always',
        png: 'always',
        svg: 'always',
      },
    ],
  },
};
