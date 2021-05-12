import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import MarkdownRender from '~/components/MarkdownRender';
import content from '~/docs/core/v1.1.2/middlewares.md';

const scope = 'containers.Docs.core.DocsCoreMiddlewares';

const DocsCoreMiddlewares: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Core middlewares',
        })}</title>

      </Helmet>
      <MarkdownRender>
        {content}
      </MarkdownRender>
    </>
  )
}

export default DocsCoreMiddlewares;
