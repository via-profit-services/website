import * as React from 'react';
import { IntlProvider, ReactIntlErrorCode, IntlConfig } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';

import TouchableRoutes from '~/render/touchable/routes/Routes';
import GlobalStyles from '~/themes/GlobalStyles';
import * as themes from '~/themes';
import * as messagesList from '~/translations';
import LoadingIndicator from '~/render/touchable/components/LoadingIndicator';
import ErrorBoundary from '~/render/touchable/components/ErrorBoundary';

const intlOnError: IntlConfig['onError'] = err => {
  if (
    err.code === ReactIntlErrorCode.MISSING_TRANSLATION ||
    err.code === ReactIntlErrorCode.FORMAT_ERROR
  ) {
    return;
  }

  console.error(err);
};

const ApplicationTouchable: React.FC = () => {
  // const location = useLocation();
  const locale = 'ru';
  const theme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );
  const currentTheme: DefaultTheme = themes[theme] || themes.standardLight;
  const messages = React.useMemo(
    () => messagesList[locale] || messagesList.ru,
    [locale],
  );

  return (
    <ErrorBoundary>
      <IntlProvider locale={locale} messages={messages} onError={intlOnError}>
        <ThemeProvider theme={currentTheme}>
          <>
            <GlobalStyles />
            <React.Suspense fallback={<LoadingIndicator />}>
              <TouchableRoutes />
            </React.Suspense>
          </>
        </ThemeProvider>
      </IntlProvider>
    </ErrorBoundary>
  );
};

export default ApplicationTouchable;
