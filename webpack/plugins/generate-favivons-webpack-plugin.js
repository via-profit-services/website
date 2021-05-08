/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const favicons = require('favicons');
const path = require('path');

class GenerateFavIconsPlugin {
  config = {
    templateSource: '',
    templateOutput: '',
    source: '',
    manifestDir: '',
    iconsDir: '',
    faviconsConfig: {},
  }

  constructor(config) {
    this.config = config;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('GenerateFavIconsPlugin', (compilation, callback) => {
      const {
        source, templateOutput, templateSource, manifestDir, iconsDir, faviconsCOnfig,
      } = this.config;
      favicons(source, faviconsCOnfig, (error, response) => {
        if (error) {
          callback(error);
        }

        const tags = response.html.map((tag) => {
          if (tag.match(/rel="manifest"/)) {
            return '<link rel="manifest" href="/manifest.webmanifest">';
          }
          return tag;
        });
        const html = fs.readFileSync(templateSource, 'utf8')
          .replace(/<\/head>/gmi, `  ${tags.join('\n  ')}\n</head>`);
        fs.writeFileSync(templateOutput, html, {
          encoding: 'utf8',
        });

        fs.mkdirSync(manifestDir, { recursive: true });
        response.files.forEach(({ name, contents }) => {
          fs.writeFileSync(path.join(manifestDir, name), contents, { encoding: 'utf8' });
        });

        fs.mkdirSync(iconsDir, { recursive: true });
        response.images.forEach(({ name, contents }) => {
          fs.writeFileSync(path.join(iconsDir, name), contents, { encoding: 'utf8' });
        });

        callback();
      });
    });
  }
}

module.exports = GenerateFavIconsPlugin;
