/* eslint-disable quotes */
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import SessionFileStore from 'session-file-store';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import http from 'http';
import path from 'path';
import helmet from 'helmet';

// import { serverQuery } from '~/relay/artifacts/serverQuery.graphql';
import renderHTML from './renderHTML';

dotenv.config();

const bootstrap = async () => {
  // const data = await fetchQuery<serverQuery>(
  //   environment,
  //   query,
  //   {},
  // ).toPromise();

  // if (!data) {
  //   return;
  // }
  // const { pages } = data;
  // const { contentSecurityPolicy } = pages;

  const app = express();
  const publicPath = path.resolve(__dirname, './public');
  const server = http.createServer(app);
  const FileStore = SessionFileStore(session);

  app.set('trust proxy', 1);
  app.use(express.json());
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

  // app.use(
  //   helmet({
  //     contentSecurityPolicy: {
  //       directives: {
  //         ...contentSecurityPolicy,
  //         connectSrc: `${contentSecurityPolicy.connectSrc} ${process.env.GRAPHQL_ENDPOINT} ${process.env.GRAPHQL_SUBSCRIPTIONS}`,
  //       },
  //     },
  //   }),
  // );

  /**
   * Static files
   */
  app.use('/public', express.static(publicPath));

  /**
   * Route
   * Service Worker for OfflinePlugin
   */
  app.use('/sw.js', (_req, res) => {
    const filepath = path.resolve(publicPath, 'sw.js');

    if (!fs.existsSync(filepath)) {
      console.error(`Missing file in «${filepath}»`);

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
    const content = `
    User-agent: *
  `;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', content.length);
    res.end(content);
    // const filepath = path.resolve(publicPath, 'robots.txt');

    // if (!fs.existsSync(filepath)) {
    //   console.log(`Missing file in «${filepath}»`);

    //   return res.end();
    // }

    // return res.type('text/plain').send(fs.readFileSync(filepath));
  });

  /**
   * Route
   * Response application current version
   */
  app.post('/version', (_req, res) => {
    res.json({ version: process.env.WEBPACK_INJECT_APP_VERSION });
  });

  /**
   * Route
   * Response application favicon
   */
  app.use('/favicon.ico', (_req, res) => {
    const img = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mP8z7DzPwMFgHHUgFEDRg0YLgYAAHjjK4GvEeb2AAAAAElFTkSuQmCC',
      'base64',
    );
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Length', img.length);
    res.end(img);
  });

  /**
   * Route
   * Common location. Just render HTML
   */
  app.get('*', async (req, res) => {
    const { html, context } = await renderHTML({ req });

    return res.status(context.statusCode || 200).send(html);
  });

  /**
   * Route
   * 404 fallback
   */
  app.use(async (req, res) => {
    const { html } = await renderHTML({ req });

    return res.status(404).send(html);
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
