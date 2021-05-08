import React, { useContext } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { IntlProvider, ReactIntlErrorCode, IntlConfig } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import UIContext ,{ Store } from '~/context/ui';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '~/utils/constants';
// import AppBar from '~/components/AppBar';
import AppInner from './AppInner';
import ErrorBoundary from '~/components/ui/ErrorBoundary';
import Meta from '~/components/Meta';
import Routes from '~/routes/Routes';
import * as messagesList from '~/translations';
import * as themes from '~/themes';
import GlobalStyles from '~/themes/GlobalStyles';
import { Context } from '~/context/ui';
import AppBar from '~/components/AppBar';
import Docs from '~/containers/Docs/Loadable';
import Contact from '~/containers/Contact/Loadable';
import MainPage from '~/containers/MainPage/Loadable';

const Inner: React.FC<{locale: Store['locale']}> = (props) => {
  const { locale } = props;
  const { state } = useContext(Context);
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
    <UIContext initialState={{ locale }}>
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
            <Switch>
              <Route strict path={['/ru/docs', '/docs']} component={Docs} />
              <Route strict path={['/ru/contact', '/contact']} component={Contact} />
              <Route strict exact path={['/ru', '/']} component={MainPage} />
            </Switch>
          </ErrorBoundary>
        </ThemeProvider>
      </IntlProvider>
    </UIContext>
  )
}


export const App: React.FC = () => {
  // const { pathname } = useLocation();
  // const lang = pathname.split('/')[1];
  // const locale = SUPPORTED_LOCALES.includes(lang)
  //   ? lang as Store['locale']
  //   : DEFAULT_LOCALE;

  // return (
  //   <UIContext initialState={{ locale }}>
  //     <AppInner />
  //   </UIContext>
  // )


  return (
    <Switch>
      <Route strict path="/ru" render={() => <Inner locale="ru" />} />
      <Route strict path="/" render={() => <Inner locale="en" />} />
    </Switch>
  )
}

export default App;
