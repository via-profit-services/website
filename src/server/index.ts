import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import http from 'http';
import path from 'path';

import renderHTML from './renderHTML';

const app = express();
const publicPath = path.resolve(__dirname, '../public');
console.log('publicPath', publicPath)

dotenv.config();

const server = http.createServer(app);

const corsDefaultPolicy = [
    '\'self\'',
    '\'unsafe-inline\'',
    'ws:',
    'wss:',
    'data:',
    'blob:',
    ...(process.env.CORS_ORIGIN_LIST || '').split(' '),
  ]

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: corsDefaultPolicy,
      workerSrc: corsDefaultPolicy,
      scriptSrc: corsDefaultPolicy,
      styleSrc: corsDefaultPolicy,
      imgSrc: corsDefaultPolicy,
      fontSrc: corsDefaultPolicy,
    },
  },
}));

// Static content (images, fonts, etc.)
app.use('/public', express.static(publicPath));

/**
 * Route
 * Service Worker for OfflinePlugin
 */
app.get('/sw.js', (_req, res) => {
  const filepath = path.resolve(publicPath, 'sw.js');

  if (!fs.existsSync(filepath)) {
    console.log(`Missing file in «${filepath}»`);

    return res.end();
  }

  return res
    .set({ 'Content-Type': 'application/javascript; charset=utf-8' })
    .send(fs.readFileSync(filepath));

});

/**
 * Route
 * Block Google, Bing, Yandex crawlers at simple robots.txt file
 */
app.get('/robots.txt', (_req, res) => {
  const filepath = path.resolve(publicPath, 'robots.txt');

  if (!fs.existsSync(filepath)) {
    console.log(`Missing file in «${filepath}»`);

    return res.end();
  }

  return res
    .type('text/plain')
    .send(fs.readFileSync(filepath));
});

/**
 * Route
 * Response application current version
 */
app.use('/version', (_req, res) => {
  res.json({ version: process.env.WEBPACK_INJECT_APP_VERSION });
});

/**
 * Route
 * Common location. Just render HTML
 */
app.use('/', async (req, res) => {
  const { html, context } = renderHTML({ req });
  
  return res
    .status(context.statusCode || 200)
    .send(html);
});

// Start the http server to serve HTML page
server.listen(Number(process.env.SERVER_PORT), process.env.SERVER_HOSTNAME, () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(
      `\nServer was started at http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`,
    );
  }
});
