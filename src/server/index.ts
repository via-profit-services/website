/* eslint-disable quotes */
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import SessionFileStore from 'session-file-store';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import fs from 'fs';
import http from 'http';
import path from 'path';
import helmet from 'helmet';

import renderHTML from './renderHTML';

dotenv.config();

const bootstrap = async () => {
  const app = express();
  const publicPath = path.resolve(__dirname, './public');
  const server = http.createServer(app);
  const FileStore = SessionFileStore(session);

  app.set('trust proxy', 1);
  app.use(express.json());
  app.use(compression());
  app.use(cookieParser('8affbbd1-6138-49f1-b6db-e3f986128b8a'));
  app.use(
    session({
      secret: 'd22945df-60a1-4d7e-ad97-619cbd070b59',
      name: 'Via Profit App',
      resave: true,
      saveUninitialized: false, // need to be a false
      store: new FileStore({
        path: path.resolve(__dirname, './sessions'),
        ttl: 3600,
      }),
      cookie: {
        httpOnly: true,
        path: '/',
        secure: 'auto',
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      },
    }),
  );

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: "'self' https://www.google-analytics.com",
          styleSrc: "'self' 'unsafe-inline' https://yastatic.net",
          workerSrc: "'self'",
          fontSrc: "'self'",
          scriptSrcElem:
            "'self' 'unsafe-inline' https://www.youtube.com https://www.youtube.com/iframe_api https://mc.yandex.ru",
          scriptSrc:
            "'self' 'unsafe-inline' https://www.youtube.com https://mc.yandex.ru https://yandex.ru https://yastatic.net https://www.google-analytics.com",
          imgSrc:
            "'self' https://mc.yandex.ru https://www.google-analytics.com www.google-analytics.com https://stats.g.doubleclick.net https://github.com https://camo.githubusercontent.com https://img.shields.io",
          connectSrc:
            "'self' https://mc.yandex.com https://mc.webvisor.org https://mc.yandex.ru https://www.google-analytics.com www.google-analytics.com https://stats.g.doubleclick.net",
          frameSrc:
            'https://youtube.com https://www.youtube.com blob: https://mc.yandex.ru https://mc.yandex.md https://mc.yandex.net',
          childSrc: 'blob: https://mc.yandex.ru',
        },
      },
    }),
  );

  /**
   * Static files
   */
  app.use('/public', express.static(publicPath));

  /**
   * Route
   * Service Worker
   */
  app.use('/service-worker.js', (_req, res) => {
    const filepath = path.resolve(publicPath, 'js/service-worker.js');

    if (!fs.existsSync(filepath)) {
      console.error(`Missing file in «${filepath}»`);

      return res.end();
    }

    return res.sendFile(filepath);
  });

  /**
   * Route
   * Block Google, Bing, Yandex crawlers at simple robots.txt file
   */
  app.get('/robots.txt', (_req, res) => {
    const filepath = path.resolve(publicPath, '../robots.txt');

    if (!fs.existsSync(filepath)) {
      console.error(`Missing robots.txt file in «${filepath}»`);

      return res.end();
    }

    return res.sendFile(filepath);
  });

  /**
   * Route
   * Response application favicon
   */
  app.use('/favicon.ico', (_req, res) => {
    const filepath = path.resolve(publicPath, './assets/favicon.ico');

    if (!fs.existsSync(filepath)) {
      console.error(`Missing favicon.ico file in «${filepath}»`);

      return res.end();
    }

    return res.sendFile(filepath);
  });

  /**
   * Route
   * Common location. Just render HTML
   */
  app.get('*', async (req, res) => {
    const { html, context } = await renderHTML({ req });

    return res
      .status(context.statusCode || 200)
      .set({ 'Content-Type': 'text/html; charset=utf-8' })
      .send(html);
  });

  /**
   * Route
   * 404 fallback
   */
  app.use(async (req, res) => {
    const { html } = await renderHTML({ req });

    return res
      .status(404)
      .set({ 'Content-Type': 'text/html; charset=utf-8' })
      .send(html);
  });

  // Start the http server to serve HTML page
  server.listen(
    Number(process.env.SERVER_PORT),
    process.env.SERVER_HOSTNAME,
    () => {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(
          `\nServer was started at http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`,
        );
      }
    },
  );
};

bootstrap();
