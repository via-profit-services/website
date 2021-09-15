import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Strong from '~/render/desktop/components/Typography/Strong';
import SafeFrame from '~/render/desktop/components/SafeFrame';

const Container = styled.div`
  background-color: ${props => props.theme.color.black.primary};
  color: ${props => props.theme.color.text.inverse};
`;

const Inner = styled(SafeFrame)`
  font-size: 0.75rem;
  opacity: 0.6;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;

const FooterBottom: React.FC = () => (
  <Container>
    <Inner>
      <FormattedMessage
        defaultMessage="Copyright {year} Via Profit"
        values={{ year: new Date().getFullYear() }}
        description="Footer. Copiright string"
      />{' '}
      <Strong>
        <FormattedMessage
          defaultMessage="MIT license"
          description="Footer. License string in copiright string"
        />
      </Strong>
    </Inner>
  </Container>
);

export default FooterBottom;
