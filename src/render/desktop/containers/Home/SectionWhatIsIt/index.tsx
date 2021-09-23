import * as React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';

import H2 from '~/render/desktop/components/Typography/H2';
import H3 from '~/render/desktop/components/Typography/H3';
import Paragraph from '~/render/desktop/components/Typography/Paragraph';
import dotssrc from 'assets/images/dots-grey.svg';
import postgresqlsrc from 'assets/images/postgresql-logo.svg';

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 1rem ${props => props.theme.grid.desktop.gutter}px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 72px;
    height: 168px;
    background-image: url(${dotssrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const Card = styled.div<{ $isFirst?: boolean }>`
  margin: 0 1rem 1rem 1rem;
  border-radius: 20px;
  padding: 0 1rem 1rem;
  flex-grow: 0.3;
  flex-basis: 33.33333%;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  ${props =>
    props.$isFirst &&
    css`
      margin-left: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none;
      background-color: transparent;
    `}
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 3rem 0;
  position: relative;
`;

const PosgreSQLLogo = styled.img`
  width: 4.76rem;
  height: 4.76rem;
  float: left;
  margin-right: 0.9em;
`;

const Text = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const SectionWhatIsIt: React.FC = () => {
  const intl = useIntl();

  return (
    <Section>
      <H2>
        <FormattedMessage
          defaultMessage="What Is It"
          description="Home second screen. Header"
        />
      </H2>

      <Cards>
        <Card $isFirst={true}>
          <H3>
            <FormattedMessage
              defaultMessage="Header 3"
              description="Home second screen. First card title"
            />
          </H3>
          <Text>
            <FormattedMessage
              defaultMessage="Via Profit Services - is a lightweight, flexible, standalone implementation of a GraphQL HTTP (express middleware) which allows you to run an Express GraphQL server, build connections with pagination (Cursored or Limit-offset type), make your own extentions, read detailed logs, use global context with structured dataloaders and module containers, use some extra GraphQL Scalar types as DateTime, Money and so on"
              description="Home second screen. First card content"
            />
          </Text>
        </Card>
        <Card>
          <H3>
            <FormattedMessage
              defaultMessage="Header 3"
              description="Home second screen. Second card title"
            />
          </H3>
          <Text>
            <FormattedMessage
              defaultMessage="Via Profit Services - is a lightweight, flexible, standalone implementation of a GraphQL HTTP (express middleware) which allows you to run an Express GraphQL server, build connections with pagination (Cursored or Limit-offset type), make your own extentions, read detailed logs, use global context with structured dataloaders and module containers, use some extra GraphQL Scalar types as DateTime, Money and so on"
              description="Home second screen. Second card content"
            />
          </Text>
        </Card>
        <Card>
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
        </Card>
      </Cards>
    </Section>
  );
};

export default SectionWhatIsIt;
