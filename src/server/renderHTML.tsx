/* eslint-disable import/max-dependencies */
import { Request } from 'express';
import Mustache from 'mustache';
import React from 'react';
import loadable from '@loadable/component';
import { ChunkExtractor } from '@loadable/server';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter, StaticContext } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import UAParser from 'ua-parser-js';
import NodeCache from 'node-cache';
import path from 'path';
import dotenv from 'dotenv';
import { Provider as ReduxProvider } from 'react-redux';

import { COOKIE_RECORD_THEME } from '~/utils/constants';
import createReduxStore from '~/redux/store';
import mainTemplate from '~/../assets/templates/main.mustache';
import reduxDefaultState from '~/redux/defaultState';

const ApplicationDesktop = loadable(
  () => import('~/render/desktop/providers/ApplicationDesktop'),
);
const ApplicationTouchable = loadable(
  () => import('~/render/touchable/providers/ApplicationTouchable'),
);

interface Props {
  req: Request;
}

type RenderHTMLPayload = {
  html: string;
  context: StaticContext;
};

dotenv.config();
const htmlCache = new NodeCache({ stdTTL: 60 * 60 * 24 });

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

type CookieRecords = {
  [COOKIE_RECORD_THEME]?: ReduxState['theme'];
};

const renderHTML = async (props: Props): Promise<RenderHTMLPayload> => {
  const { req } = props;
  const { url, headers, cookies } = req;
  const parser = new UAParser(headers['user-agent']);
  const device = resolveDevice(parser);
  const cacheKey = `${device}:${url}`;
  const data = htmlCache.get<RenderHTMLPayload>(cacheKey);

  if (data) {
    // return data;
  }

  const context: StaticContext = {
    statusCode: 200,
  };

  // combine redux state with default state, detected mode and the user cookies
  const reduxPreloadedStore: ReduxState = {
    ...reduxDefaultState,
    theme:
      (cookies as CookieRecords)?.[COOKIE_RECORD_THEME] ||
      reduxDefaultState.theme,
    mode: device,
  };

  const preloadedStates: ServerToClientTransfer = {
    REDUX: reduxPreloadedStore,
    ENVIRONMENT: {
      GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
      SUBSCRIPTION_ENDPOINT: process.env.GRAPHQL_SUBSCRIPTIONS,
    },
  };
  const preloadedStatesBase64 = Buffer.from(
    JSON.stringify(preloadedStates),
  ).toString('base64');

  const reduxStore = createReduxStore(reduxPreloadedStore);

  const webExtractor = new ChunkExtractor({
    statsFile: path.resolve(__dirname, './stats.json'),
  });
  const sheet = new ServerStyleSheet();
  const htmlContent = renderToString(
    webExtractor.collectChunks(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url} context={context}>
          <ReduxProvider store={reduxStore}>
            <React.Suspense fallback={null}>
              {device === 'desktop' && <ApplicationDesktop />}
              {device === 'touchable' && <ApplicationTouchable />}
            </React.Suspense>
          </ReduxProvider>
        </StaticRouter>
      </StyleSheetManager>,
    ),
  );
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();

  sheet.seal();

  const html = Mustache.render(mainTemplate, {
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
    htmlContent: htmlContent.replace(/\n|\t/g, ' ').replace(/\s{1,}/g, ' '),
  });

  const payload = { context, html };

  htmlCache.set<RenderHTMLPayload>(cacheKey, payload);

  return payload;
};

export default renderHTML;
