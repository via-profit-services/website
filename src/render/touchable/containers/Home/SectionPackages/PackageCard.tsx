import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import LinkIcon from 'mdi-react/ChevronRightIcon';

import H3 from '~/render/desktop/components/Typography/H3';

export type CardProps = {
  icon: React.ReactNode;
  header: React.ReactNode;
  content: React.ReactNode;
  link: string;
};

const Card = styled.div`
  display: flex;
  position: relative;
  padding: ${({ theme }) => theme.grid.touchable.gutter}px;
`;

const CardInner = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  border-radius: 22px;
  position: relative;
  display: flex;
  flex-flow: column;
`;

const CardHeader = styled.div`
  color: ${({ theme }) => theme.color.text.inverse};
  background: ${({ theme }) => theme.color.gradients[0]};
  border-radius: 20px 20px 0 0;
  padding: 1.2em 2em 1.2em 4em;
  position: relative;
  & > h3 {
    margin: 0;
  }
`;
const CardContent = styled.div`
  padding: 1em 3em 0 2em;
`;

const Icon = styled.span`
  display: inline-flex;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: 0.2em;
  position: absolute;
  left: -1rem;
  top: -1rem;
  font-size: 3em;
  color: ${({ theme }) => theme.color.accent.primary};
`;

const CardLink = styled(Link)`
  position: relative;
  margin: 1em 0.5em 0.5em 0;
  font-size: 0.9em;
  display: inline-flex;
  align-self: flex-end;
  border-radius: 60px;
  text-decoration: none;
  background: ${({ theme }) => theme.color.gradients[1]};
  width: auto;
  & > svg {
    margin-left: 0.5em;
  }
`;

const LinkInner = styled.span`
  flex: 1;
  background: ${({ theme }) => theme.color.text.inverse};
  margin: 0.2em;
  padding: 1em;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const PackageCard: React.FC<CardProps> = props => {
  const { header, content, icon, link } = props;

  return (
    <Card>
      <CardInner>
        <CardHeader>
          <Icon>{icon}</Icon>
          <H3>{header}</H3>
        </CardHeader>
        <CardContent>
          <Content>{content}</Content>
        </CardContent>
        <CardLink to={link}>
          <LinkInner>
            <FormattedMessage
              defaultMessage="Package overview"
              description="Touchable package card. Link"
            />
            <LinkIcon size="1em" />
          </LinkInner>
        </CardLink>
      </CardInner>
    </Card>
  );
};

export default PackageCard;
