const fs = require('fs');

class NginxWebpackPlugin {
  config = {
    source: '',
    output: '',
    replacements: {
      '<PORT>': process.env.PORT,
    },
  };

  constructor(config) {
    Object.entries(config).forEach(([key, value]) => {
      this.config[key] = value;
    });
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('NginxWebpackPlugin', (compilation, callback) => {
      const { source, output, replacements } = this.config;
      let nginxTemplate = fs.readFileSync(source, 'utf8');
      Object.entries(replacements).forEach(([regExp, value]) => {
        nginxTemplate = nginxTemplate.replace(new RegExp(regExp, 'gmi'), value);
      });

      fs.writeFileSync(output, nginxTemplate, {
        encoding: 'utf8',
      });
      callback();
    });
  }
}

module.exports = NginxWebpackPlugin;
