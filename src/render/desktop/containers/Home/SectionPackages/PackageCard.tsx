import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChevronDoubleRightIcon from 'mdi-react/ChevronDoubleRightIcon';
import { FormattedMessage } from 'react-intl';

import H3 from '~/render/desktop/components/Typography/H3';

export type CardProps = {
  icon: React.ReactNode;
  header: React.ReactNode;
  content: React.ReactNode;
  link: string;
};

const Card = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  border-radius: 16px;
`;

const CardInner = styled.div`
  padding: 0 1.6em;
  flex: 1;
`;

const Line = styled.div`
  height: 10px;
  border-radius: 16px 16px 0 0;
  background: ${({ theme }) => theme.color.gradients[0]};
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.color.accent.primary};
  font-size: 1.8rem;
  & > svg {
    margin-top: 0.5em;
  }
`;

const CardLink = styled(Link)`
  display: block;
  padding: 1.6em;
  font-size: 0.9em;
  & > svg {
    color: ${({ theme }) => theme.color.grey[500]};
  }
`;

const PackageCard: React.FC<CardProps> = props => {
  const { header, content, icon, link } = props;

  return (
    <div>
      <Card>
        <Line />
        <CardInner>
          <Icon>{icon}</Icon>
          <H3>{header}</H3>
          <div>{content}</div>
        </CardInner>
        <CardLink to={link}>
          <ChevronDoubleRightIcon size="1em" color="currentColor" />
          <FormattedMessage
            defaultMessage="Package overview"
            description="Package card. Lear more link"
          />
        </CardLink>
      </Card>
    </div>
  );
};

export default PackageCard;
