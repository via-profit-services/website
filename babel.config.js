/* eslint-disable no-template-curly-in-string */
const babelConfig = {
  plugins: [
    'react-hot-loader/babel',
    '@loadable/babel-plugin',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [
      'babel-plugin-styled-components',
      {
        minify: true,
        displayName: false,
        pure: true,
        ssr: true,
      },
    ],
    [
      '@babel/plugin-transform-typescript',
      {
        allowNamespaces: true,
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/typescript',
  ],
};


if (process.env.EXTRACT_INTL_MESSAGES) {
  babelConfig.plugins.push(['react-intl', {
    messagesDir: './extracted-messages',
    extractSourceLocation: true,
    extractFromFormatMessageCall: true,
  }]);
}

module.exports = babelConfig;