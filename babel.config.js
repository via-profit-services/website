module.exports = {
  plugins: [
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
        minify: process.env.NODE_ENV !== 'development',
        displayName: process.env.NODE_ENV === 'development',
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
    [
      'babel-plugin-formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        removeDefaultMessage: true,
        ast: true,
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
