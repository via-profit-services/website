import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import MarkdownRender from '~/components/MarkdownRender';
import apiMarkdown from '~/docs/core/v1.1.2/api.md';

const scope = 'containers.Docs.core';

const DocsCore: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({
          id: `${scope}.meta.title`,
          defaultMessage: 'Core',
        })}</title>

      </Helmet>
      <MarkdownRender>
        {apiMarkdown}
      </MarkdownRender>
    </>
  )
}

export default DocsCore;
