/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const glob = require('glob');
const path = require('path');

class InjectCssWebpackPlugin {
  pattern = '';

  publicPath = '';

  templateFile = '';

  constructor(config) {
    this.cssSourcePath = config.sourcePath;
    this.publicPath = config.publicPath;
    this.templateFile = config.templateFile;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('InjectCssWebpackPlugin', (compilation, callback) => {
      const files = glob.sync(this.cssSourcePath);
      const tags = [];
      files.forEach((filename) => {
        const tag = `<link rel="stylesheet" href="${this.publicPath}/${path.basename(filename)}" />`;
        tags.push(tag);
      });

      if (tags.length) {
        const html = fs.readFileSync(this.templateFile, 'utf8')
          .replace(/<\/head>/gmi, `  ${tags.join('\n  ')}\n</head>`);
        fs.writeFileSync(this.templateFile, html, {
          encoding: 'utf8',
        });
      }
      callback();
    });
  }
}

module.exports = InjectCssWebpackPlugin;
