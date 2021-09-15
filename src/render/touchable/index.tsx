import * as React from 'react';
import { IntlProvider, MissingTranslationError } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';

import translationEN from '~/translations/en.json';
import TouchableRoutes from '~/render/touchable/routes/Routes';
import GlobalStyles from '~/themes/GlobalStyles';
import * as themes from '~/themes';
import LoadingIndicator from '~/render/touchable/components/LoadingIndicator';
import ErrorBoundary from '~/render/touchable/components/ErrorBoundary';
import { DEFAULT_LOCALE } from '~/utils/constants';

const messagesList = {
  en: translationEN,
};

const ApplicationTouchable: React.FC = () => {
  const theme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );

  const currentTheme: DefaultTheme = themes[theme] || themes.standardLight;

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
          <React.Suspense fallback={<LoadingIndicator />}>
            <TouchableRoutes />
          </React.Suspense>
        </ThemeProvider>
      </IntlProvider>
    </ErrorBoundary>
  );
};

export default ApplicationTouchable;
