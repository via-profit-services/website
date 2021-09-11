import * as React from 'react';
import { IntlProvider, ReactIntlErrorCode, IntlConfig } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route, useParams } from 'react-router-dom';

import DesktopRoutes from '~/render/desktop/routes/Routes';
import GlobalStyles from '~/themes/GlobalStyles';
import * as themes from '~/themes';
import * as messagesList from '~/translations';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import ErrorBoundary from '~/render/desktop/components/ErrorBoundary';
import { DEFAULT_LOCALE, LOCALE_VARIANTS } from '~/utils/constants';

const intlOnError: IntlConfig['onError'] = err => {
  if (
    err.code === ReactIntlErrorCode.MISSING_TRANSLATION ||
    err.code === ReactIntlErrorCode.FORMAT_ERROR
  ) {
    return;
  }

  console.error(err);
};

const ApplicationDesktop: React.FC = () => (
  <Route path={['/:locale', '/']} component={ApplicationInner} />
);

const ApplicationInner: React.FC = () => {
  const params = useParams<{ locale?: string }>();
  const theme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );

  const locale =
    params?.locale && LOCALE_VARIANTS.includes(params.locale)
      ? params.locale
      : DEFAULT_LOCALE;

  const currentTheme: DefaultTheme = themes[theme] || themes.standardLight;
  const messages = React.useMemo(
    () => messagesList[locale] || messagesList[DEFAULT_LOCALE],
    [locale],
  );

  return (
    <ErrorBoundary>
      <IntlProvider locale={locale} messages={messages} onError={intlOnError}>
        <ThemeProvider theme={currentTheme}>
          <>
            <Helmet
              defaultTitle="Via Profit Services"
              titleTemplate="%s — Via Profit Services">
              <html lang={locale} />
              <meta charSet="utf-8" />
              <meta
                name="description"
                content="Via Profit services documentation"
              />
              <meta name="author" content="Via Profit" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Helmet>
            <GlobalStyles />
            <React.Suspense fallback={<LoadingIndicator />}>
              <DesktopRoutes />
            </React.Suspense>
          </>
        </ThemeProvider>
      </IntlProvider>
    </ErrorBoundary>
  );
};

export default ApplicationDesktop;
