import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import RenderMarkdown from '~/components/desktop/RenderMarkdown';
import content from '~content/legal/privacy-policy.md';

const Main = styled.main`
  flex: 1;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
`;

const PrivacyPolicy: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Privacy policy',
            description: 'Privacy policy meta title',
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

export default PrivacyPolicy;
