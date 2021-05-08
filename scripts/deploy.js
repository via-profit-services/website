/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const dotenv = require('dotenv');
const shell = require('shelljs');

let pid = 0;

dotenv.config();

const host = process.env.DEPLOY_HOST;
const user = process.env.DEPLOY_USER;
const sourceDistDir = process.env.DEPLOY_SOURC_DIR;
const destinationDistDir = process.env.DEPLOY_DESTINATION_DIR;
const execScript = process.env.DEPLOY_EXEC_SCRIPT;

if (!host || !user || !sourceDistDir || !destinationDistDir || !execScript) {
  shell.echo(chalk.red('Failed prepare to deploy. Check the «.env.prod» file'));
}

shell.echo(chalk.magenta(`
======================
       DEPLOY
======================
`));

if (!shell.which('rsync')) {
  shell.echo(chalk.red('Please install the rsync package on your OS'));
  shell.exit(1);
}

shell.echo(chalk.green('Remote directories was created successfully'));
shell.echo(chalk.yellow('Copy files...'));

const mkdir = shell.exec(`
ssh ${user}@${host} <<'ENDSSH'
mkdir -p ${destinationDistDir};
ENDSSH
`, { silent: true }).code;

if (mkdir !== 0) {
  shell.echo(chalk.red('Failed to create remote directory'));
  shell.exit(1);
}

const copyRes = shell.exec(
  `rsync --progress --human-readable --recursive ${sourceDistDir}/* ${user}@${host}:${destinationDistDir}`,
  { silent: false },
).code;

if (copyRes !== 0) {
  shell.echo(chalk.red('Failed to copy files to remote server'));
  shell.exit(1);
}

shell.echo(chalk.yellow('Clear cache...'));
shell.exec(`
ssh ${user}@${host} <<'ENDSSH'
rm -rf ${destinationDistDir}/server/cache;
ENDSSH
`, { silent: true });

shell.echo(chalk.yellow('Restart daemon...'));

const info = shell.exec(`
ssh ${user}@${host} <<'ENDSSH'
lsof -i:${process.env.PORT} | grep node
ENDSSH
`, { silent: true }).stdout;

const m = String(info).match(/node[\s]+([0-9]+)/gmi);
if (m && m.length) {
  pid = m[0].replace(/[^0-9]+/mi, '');

  if (!pid) {
    shell.echo(chalk.red('Failed to get node PID'));
    shell.exit(1);
  }
}

// Restart
const start = shell.exec(`
ssh ${user}@${host} <<'ENDSSH'
${pid ? `kill -9 ${pid}` : ''}
cd ${destinationDistDir}
node ${execScript} > /dev/null &
ENDSSH
`, { silent: true }).code;

if (start !== 0) {
  shell.echo(chalk.red('Failed to Start daemon'));
  shell.exit(1);
}

shell.echo(chalk.green(`

Deploy Succussfully finished
`));
