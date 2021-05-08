/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { spawn } = require('child_process');
const chalk = require('chalk');
const manageTranslations = require('react-intl-translations-manager').default;


console.log(chalk.yellow('Clear directory...'));
spawn('yarn', 'rimraf -rf ./extracted-messages'.split(' '), { stdio: 'inherit' })
  .on('exit', (rimrafError) => {
    if (rimrafError) {
      console.log(chalk.red(rimrafError));
      process.exit(1);
    }

    console.log(chalk.yellow('Build...'));

    spawn('yarn', 'cross-env EXTRACT_INTL_MESSAGES=true yarn build:client:dev'.split(' '), { stdio: 'inherit' })
      .on('exit', async (error) => {
        if (error) {
          console.log(chalk.red(error));
          process.exit(1);
        }

        console.log(chalk.yellow('Generate translations...'));
        await manageTranslations({
          messagesDirectory: 'extracted-messages',
          translationsDirectory: 'src/translations/',
          languages: ['en'],
        });


        console.log('');
        console.log(chalk.green('Done'));
        console.log('');

      });

  })
  ;

