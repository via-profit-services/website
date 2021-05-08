import React, { useContext } from 'react';
import { IntlProvider, ReactIntlErrorCode, IntlConfig } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import ErrorBoundary from '~/components/ui/ErrorBoundary';
import Meta from '~/components/Meta';
import Routes from '~/routes/Routes';
import * as messagesList from '~/translations';
import * as themes from '~/themes';
import GlobalStyles from '~/themes/GlobalStyles';
import { Context } from '~/context/ui';
import AppBar from '~/components/AppBar';

export const AppInner: React.FC = () => {
  const { state } = useContext(Context);
  const { locale, theme } = state;
  const currentTheme: DefaultTheme = themes[theme];
  const messages = messagesList[locale];
  const intlOnError: IntlConfig['onError'] = (err) => {
    if (
      err.code === ReactIntlErrorCode.MISSING_TRANSLATION
      || err.code === ReactIntlErrorCode.FORMAT_ERROR
      ) {
      return;
    }

    console.error(err);
  }

  return (
    <>
      <IntlProvider
        locale={locale}
        messages={messages}
        onError={intlOnError}
      >
        <Meta />
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          <ErrorBoundary>
            <AppBar />
            <Routes />
          </ErrorBoundary>
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};

export default AppInner;
