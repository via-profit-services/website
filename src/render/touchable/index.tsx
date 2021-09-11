import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { Route, useParams } from 'react-router-dom';

import translationEN from '~/translations/en.json';
import translationRU from '~/translations/ru.json';
import TouchableRoutes from '~/render/touchable/routes/Routes';
import GlobalStyles from '~/themes/GlobalStyles';
import * as themes from '~/themes';
import LoadingIndicator from '~/render/touchable/components/LoadingIndicator';
import ErrorBoundary from '~/render/touchable/components/ErrorBoundary';
import { DEFAULT_LOCALE, LOCALE_VARIANTS } from '~/utils/constants';

const messagesList = {
  ru: translationRU,
  en: translationEN,
};

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
      <IntlProvider locale={locale} messages={messages}>
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

const ApplicationTouchable: React.FC = () => (
  <Route path={['/:locale', '/']} component={ApplicationInner} />
);

export default ApplicationTouchable;
