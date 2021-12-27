import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/legal/cookie-policy.md';

const Main = styled.main`
  flex: 1;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

const CookiePolicy: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Cookie policy',
            description: 'Cookie policy meta title',
          })}
        </title>
      </Helmet>
      <Main>
        <section>
          <RenderMarkdown>{content}</RenderMarkdown>
        </section>
      </Main>
    </>
  );
};

export default CookiePolicy;
