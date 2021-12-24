import * as React from 'react';
import { IntlProvider, MissingTranslationError } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';

import { DEFAULT_LOCALE } from '~/constants';
import translationEN from '~/translations/en.json';
import RootRouter from '~/routes/RootRouter';
import GlobalStyles from '~/themes/GlobalStyles';
import * as themes from '~/themes';
import ErrorBoundary from '~/components/desktop/ErrorBoundary';

const messagesList = {
  en: translationEN,
};

const ApplicationProvider: React.FC = () => {
  const theme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );

  const currentTheme: DefaultTheme = themes[theme] || themes.light;

  return (
    <ErrorBoundary>
      <IntlProvider
        locale={DEFAULT_LOCALE}
        messages={messagesList[DEFAULT_LOCALE]}
        onError={err => {
          if (err instanceof MissingTranslationError) {
            return false;
          }

          return err;
        }}>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          <RootRouter />
        </ThemeProvider>
      </IntlProvider>
    </ErrorBoundary>
  );
};

export default ApplicationProvider;
