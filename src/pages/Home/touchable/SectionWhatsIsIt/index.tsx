import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';

import Paragraph from '~/components/touchable/Typography/Paragraph';
import H2 from '~/components/touchable/Typography/H2';
import H3 from '~/components/touchable/Typography/H3';
import postgresqlsrc from '~assets/images/postgresql-logo.svg';

const Container = styled.section`
  background: ${({ theme }) => theme.color.background.secondary};
  padding: 0 ${({ theme }) => theme.grid.touchable.gutter}px;
  padding-bottom: 6.25rem;
  border-radius: 40px 40px 0 0;
  position: relative;
  z-index: 1;
  margin-top: -61px;
`;

const Text = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const PosgreSQLLogo = styled.img`
  width: 4.76rem;
  height: 4.76rem;
  float: left;
  margin-right: 0.9em;
`;

const SectionWhatsIsIt: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <H2>
        <FormattedMessage
          defaultMessage="What Is It"
          description="Home second screen. Header"
        />
      </H2>

      <Text>
        <FormattedMessage
          defaultMessage="Via Profit Services - is a lightweight, flexible, standalone implementation of a GraphQL HTTP (express middleware) which allows you to run an Express GraphQL server, build connections with pagination (Cursored or Limit-offset type), make your own extentions, read detailed logs, use global context with structured dataloaders and module containers, use some extra GraphQL Scalar types as DateTime, Money and so on"
          description="Home second screen. First card content"
        />
      </Text>

      <H3>
        <FormattedMessage
          defaultMessage="PostgreSQL"
          description="Home second screen. Third card title"
        />
      </H3>
      <Text>
        <FormattedMessage
          defaultMessage="{image}Via Profit Services - is a lightweight, flexible, standalone implementation of a GraphQL HTTP (express middleware) which allows you to run an Express GraphQL server, build connections with pagination (Cursored or Limit-offset type), make your own extentions, read detailed logs, use global context with structured dataloaders and module containers, use some extra GraphQL Scalar types as DateTime, Money and so on"
          description="Home second screen. Third card content"
          values={{
            image: (
              <PosgreSQLLogo
                src={postgresqlsrc}
                alt={intl.formatMessage({
                  defaultMessage: 'PostgreSQL logo',
                  description: 'Home second screen. Alt of postgreSQL logo',
                })}
              />
            ),
          }}
        />
      </Text>
    </Container>
  );
};

export default SectionWhatsIsIt;
