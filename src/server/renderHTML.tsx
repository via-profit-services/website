import fs from 'fs';
import { ChunkExtractor } from '@loadable/server';
import { Request } from 'express';
import Mustache from 'mustache';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter, StaticContext } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import NodeCache from 'node-cache';

import mainTemplate from '~/../assets/templates/main.mustache';
import App from '~/providers/App';

interface Props {
  req: Request;
}

type RenderHTMLPayload = {
  html: string;
  context: StaticContext;
};

const htmlCache = new NodeCache({ stdTTL: 60 * 60 * 24 });

const renderHTML = (props: Props): RenderHTMLPayload => {
  const { req } = props;
  const data = htmlCache.get<RenderHTMLPayload>(req.url);

  if (data) {
    return data;
  }

  const webExtractor = new ChunkExtractor({
    statsFile: path.resolve(__dirname, './stats.json'),
  });

  const context: StaticContext = {
    statusCode: 200,
  };


  const sheet = new ServerStyleSheet();
  const jsx = webExtractor.collectChunks(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </StyleSheetManager>,
  );

  const htmlContent = renderToString(jsx);
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
    htmlContent, // Application HTML
    styleTags,
    extractor: {
      scriptTags: webExtractor.getScriptTags(),
      linkTags: webExtractor.getLinkTags(),
      styleTags: webExtractor.getStyleTags(),
    },
  });

  const payload = { context, html };

  htmlCache.set<RenderHTMLPayload>(req.url, payload);

  return payload;
};

export default renderHTML;
