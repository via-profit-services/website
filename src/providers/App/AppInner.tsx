import React, { useContext } from 'react';
import { IntlProvider, ReactIntlErrorCode, IntlConfig } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { UIStore, UIContext } from '~/context/ui';
import ErrorBoundary from '~/components/ui/ErrorBoundary';
import Meta from '~/components/Meta';
import Routes from '~/routes/Routes';
import * as messagesList from '~/translations';
import * as themes from '~/themes';
import GlobalStyles from '~/themes/GlobalStyles';
import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';



type AppInnerProps = {
  locale: UIStore['locale'];
}

const AppInner: React.FC<AppInnerProps> = (props) => {
  const { locale } = props;
  const { state } = useContext(UIContext);
  const { theme } = state;
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
    <IntlProvider
      locale={locale}
      messages={messages}
      onError={intlOnError}
    >
      <ThemeProvider theme={currentTheme}>
        <Meta />
        <GlobalStyles />
        <ErrorBoundary>
          <AppBar />
          <Routes />
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </IntlProvider>
  )
}


export default AppInner;
