import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { Switch, Route, useParams } from 'react-router-dom';
import loadable from '@loadable/component';

import { DEFAULT_LOCALE } from '~/utils/constants';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';

const Home = loadable(() => import('~/render/desktop/containers/Home'), {
  fallback: <LoadingIndicator />,
});

const Docs = loadable(() => import('~/render/desktop/containers/Docs'), {
  fallback: <LoadingIndicator />,
});

const Fallback = loadable(
  () => import('~/render/desktop/containers/Fallback'),
  {
    fallback: <LoadingIndicator />,
  },
);

const Routes: React.FC = () => {
  const intl = useIntl();
  const { locale } = useParams<{ locale?: string }>();

  return (
    <>
      <Helmet
        defaultTitle={intl.formatMessage({
          defaultMessage: 'Via Profit Services',
          description: 'Helmet «defaultTitle» param',
        })}
        titleTemplate={intl.formatMessage({
          defaultMessage: '%s — Via Profit Services',
          description: 'Helmet «titleTemplate» param',
        })}>
        <html lang={locale || DEFAULT_LOCALE} />
        <meta charSet="utf-8" />
        <meta name="author" content="Via Profit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Switch>
        <Route path={['/:locale/docs', '/docs']} component={Docs} />
        <Route path={['/:locale', '/']} component={Home} />
        <Route component={Fallback} />
      </Switch>
    </>
  );
};

export default Routes;
