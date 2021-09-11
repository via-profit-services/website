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
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/styles',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'mui-styles',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/core/colors',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'mui-core-colors',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/core',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'core',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/icons',
        libraryDirectory: 'esm',
        camel2DashComponentName: false,
      },
      'icons',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
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
