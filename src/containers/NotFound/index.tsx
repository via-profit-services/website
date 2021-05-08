import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { Link, Route } from 'react-router-dom';

import ContentArea from '~/components/ui/ContentArea';

const scope = 'containers.NotFound';

const NotFound: React.FC = () => {
  const intl = useIntl();

  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = 404;
        }

        return (
          <>
            <Helmet>
              <title>{intl.formatMessage({
                id: `${scope}.meta.title`,
                defaultMessage: 'Page not found',
              })}</title>
            </Helmet>
            <ContentArea>
              <h1>Oooops. 404 Not found</h1>
              <p>
                Page not found. <Link to="/">Go to Home</Link>
              </p>
            </ContentArea>
          </>
        )
      }}
    />
  )
}

export default NotFound;
