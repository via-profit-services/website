import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import MarkdownRender from '~/components/MarkdownRender';
import content from '~/docs/core/v1.1.2/introduction.md';
import badgeImage from '~/../assets/images/via-profit-services-cover.png';

const scope = 'containers.Docs.core.introduction';

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
        {content}
      </MarkdownRender>
    </>
  )
}

export default DocsCore;
