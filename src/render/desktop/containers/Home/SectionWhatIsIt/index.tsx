import * as React from 'react';
import styled, { css } from 'styled-components';

import H2 from '~/render/desktop/components/Typography/H2';
import H3 from '~/render/desktop/components/Typography/H3';
import Paragraph from '~/render/desktop/components/Typography/Paragraph';

const Section = styled.section`
  margin: 0 auto;
  margin-top: 3rem;
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter / 2}px;
`;

const Card = styled.div<{ $isFirst?: boolean }>`
  margin: 0 1rem 1rem 1rem;
  border-radius: 20px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[2]};
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
`;

const Text = styled(Paragraph)``;

const SectionWhatIsIt: React.FC = () => (
  <Section>
    <H2>Lorem ipsum</H2>

    <Cards>
      <Card $isFirst={true}>
        <H3>Header 3</H3>
        <Text>
          Via Profit Services - is a lightweight, flexible, standalone
          implementation of a GraphQL HTTP (express middleware) which allows you
          to run an Express GraphQL server, build connections with pagination
          (Cursored or Limit-offset type), make your own extentions, read
          detailed logs, use global context with structured dataloaders and
          module containers, use some extra GraphQL Scalar types as DateTime,
          Money and so on
        </Text>
      </Card>
      <Card>
        <H3>Header 3</H3>
        <Text>
          Via Profit Services - is a lightweight, flexible, standalone
          implementation of a GraphQL HTTP (express middleware) which allows you
          to run an Express GraphQL server, build connections with pagination
          (Cursored or Limit-offset type), make your own extentions, read
          detailed logs, use global context with structured dataloaders and
          module containers, use some extra GraphQL Scalar types as DateTime,
          Money and so on
        </Text>
      </Card>
      <Card>
        <H3>Header 3</H3>
        <Text>
          Via Profit Services - is a lightweight, flexible, standalone
          implementation of a GraphQL HTTP (express middleware) which allows you
          to run an Express GraphQL server, build connections with pagination
          (Cursored or Limit-offset type), make your own extentions, read
          detailed logs, use global context with structured dataloaders and
          module containers, use some extra GraphQL Scalar types as DateTime,
          Money and so on
        </Text>
      </Card>
    </Cards>
  </Section>
);

export default SectionWhatIsIt;
