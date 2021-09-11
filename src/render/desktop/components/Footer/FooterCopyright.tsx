import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import SafeFrame from '~/render/desktop/components/SafeFrame';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.secondary.green};
  color: ${({ theme }) => theme.color.text.primary};
  padding: 20px 0;
`;

const Inner = styled(SafeFrame)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DevLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopyright: React.FC = () => (
  <Container>
    <Inner>
      <span>
        <FormattedMessage
          defaultMessage="{year} — All right reserved"
          values={{
            year: new Date().getFullYear(),
            company: <FormattedMessage defaultMessage="Via Profit" />,
          }}
        />
      </span>
      <DevLink target="_blank" href="https://via-profit.ru">
        <FormattedMessage
          defaultMessage="Developer {developer}"
          values={{
            developer: <FormattedMessage defaultMessage="Via Profit" />,
          }}
        />
      </DevLink>
    </Inner>
  </Container>
);

export default FooterCopyright;
