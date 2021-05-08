/* eslint-disable import/max-dependencies */
/* eslint-disable import/no-extraneous-dependencies */
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

import App from '~/providers/App';

interface IProps {
  req: Request;
}

const renderHTML = (props: IProps) => {
  const { req } = props;
  const statsFile = path.resolve(__dirname, '../public/loadable-stats.json');
  const templateFilePath = path.resolve(__dirname, './templates/');

  const webExtractor = new ChunkExtractor({
    statsFile,
    entrypoints: ['index']
    // entrypoints: process.env.NODE_ENV === 'development' ? ['index'] : ['main'],
    // entrypoints: 'index',
    // publicPath: '/public/',
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
  const commonTemplate = fs.readFileSync(path.join(templateFilePath, 'main.mustache'), 'utf8');
  const countersTemplate = fs.readFileSync(path.join(templateFilePath, 'counters.mustache'), 'utf8');
  const styleTags = sheet.getStyleTags();
  sheet.seal();

  const counters = Mustache.render(countersTemplate, {});

  const html = Mustache.render(commonTemplate, {
    counters,
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

  return {
    html,
    context,
  };
};

export default renderHTML;
