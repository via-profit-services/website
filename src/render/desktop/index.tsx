import * as React from 'react';
import { IntlProvider, MissingTranslationError } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';

import { DEFAULT_LOCALE } from '~/utils/constants';
import translationEN from '~/translations/en.json';
import DesktopRoutes from '~/render/desktop/routes/Routes';
import GlobalStyles from '~/themes/GlobalStyles';
import * as themes from '~/themes';
import LoadingIndicator from '~/render/desktop/components/LoadingIndicator';
import ErrorBoundary from '~/render/desktop/components/ErrorBoundary';

const messagesList = {
  en: translationEN,
};

const ApplicationDesktop: React.FC = () => {
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
            <DesktopRoutes />
          </React.Suspense>
        </ThemeProvider>
      </IntlProvider>
    </ErrorBoundary>
  );
};

export default ApplicationDesktop;
