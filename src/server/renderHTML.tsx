/* eslint-disable import/max-dependencies */
import { Request } from 'express';
import Mustache from 'mustache';
import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import UAParser from 'ua-parser-js';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { Provider as ReduxProvider } from 'react-redux';
import 'cookie-parser';
import crypto from 'crypto';

import { COOKIE_RECORD_THEME, COOKIE_RECORD_MODE } from '~/constants';
import createReduxStore from '~/redux/store';
import reduxDefaultState from '~/redux/defaultState';
import ApplicationProvider from '~/providers/ApplicationProvider';
import Cache from '~/server/Cache';

interface Req extends Request {
  cookies: {
    [COOKIE_RECORD_THEME]?: ReduxState['theme'];
    [COOKIE_RECORD_MODE]?: ReduxState['mode'];
  };
}

interface Props {
  req: Req;
}

type RenderHTMLPayload = {
  html: string;
  // context: StaticContext;
};

dotenv.config();

const resolveDevice = (
  parser: UAParser.UAParserInstance,
): ReduxState['mode'] => {
  const device = (parser.getDevice().type || '').toLowerCase();
  const os = (parser.getOS().name || '').toLowerCase();

  switch (true) {
    case ['mobile', 'tablet'].includes(device):
    case ['android', 'ios'].includes(os):
      return 'touchable';
    default:
      return 'desktop';
  }
};

const cache = new Cache();

const renderHTML = async (props: Props): Promise<RenderHTMLPayload> => {
  const { req } = props;
  const { url, headers, cookies } = req;
  const parser = new UAParser(headers['user-agent']);
  const device = resolveDevice(parser);

  const cacheKey = crypto
    .createHash('md5')
    .update(
      JSON.stringify({
        device,
        url,
        cookies,
      }),
    )
    .digest('hex');

  if (cache.has(cacheKey)) {
    return cache.get<RenderHTMLPayload>(cacheKey);
  }

  // const context: StaticContext = {
  //   statusCode: 200,
  // };

  // combine redux state with default state, detected mode and the user cookies
  const reduxPreloadedStore: ReduxState = {
    ...reduxDefaultState,
    theme: cookies?.[COOKIE_RECORD_THEME] || reduxDefaultState.theme,
    mode: cookies?.[COOKIE_RECORD_MODE] || device,
  };

  const preloadedStates: ServerToClientTransfer = {
    REDUX: reduxPreloadedStore,
  };
  const preloadedStatesBase64 = Buffer.from(
    JSON.stringify(preloadedStates),
  ).toString('base64');

  const reduxStore = createReduxStore(reduxPreloadedStore);

  const webExtractor = new ChunkExtractor({
    statsFile: path.resolve(__dirname, './public/loadable-stats.json'),
  });
  const sheet = new ServerStyleSheet();
  const htmlContent = renderToString(
    webExtractor.collectChunks(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url}>
          <ReduxProvider store={reduxStore}>
            <ApplicationProvider />
          </ReduxProvider>
        </StaticRouter>
      </StyleSheetManager>,
    ),
  );
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();

  sheet.seal();

  const templateFilename = path.resolve(
    __dirname,
    './server/templates/main.mustache',
  );
  const templateContent = fs.readFileSync(templateFilename, {
    encoding: 'utf8',
  });

  const html = Mustache.render(templateContent, {
    helmet: {
      title: helmet.title.toString(),
      base: helmet.base.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString(),
      noscript: helmet.noscript.toString(),
      style: helmet.style.toString(),
      htmlAttributes: helmet.htmlAttributes.toString(),
      bodyAttributes: helmet.bodyAttributes.toString(),
    },
    preloadedStatesBase64,
    styleTags,
    extractor: {
      scriptTags: webExtractor.getScriptTags(),
      linkTags: webExtractor.getLinkTags(),
      styleTags: webExtractor.getStyleTags(),
    },
    htmlContent,
  });

  const payload = { html };

  cache.set<RenderHTMLPayload>(cacheKey, payload, '24hours');

  return payload;
};

export default renderHTML;
