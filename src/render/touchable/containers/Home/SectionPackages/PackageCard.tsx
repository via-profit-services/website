import * as React from 'react';
import styled from 'styled-components';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';

import H3 from '~/render/desktop/components/Typography/H3';

type Props = {
  icon: React.ReactNode;
  header: React.ReactNode;
  content: React.ReactNode;
  link: string;
};

const Card = styled.div`
  margin-bottom: 2rem;
  display: flex;
  position: relative;
`;

const CardInner = styled.div`
  padding-left: 4.4em;
  padding-right: 3em;
  margin-left: 3rem;
  margin-right: 2rem;
  flex: 1;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3.5rem;
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: ${({ theme }) => theme.color.accent.secondary};
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.color.accent.primary};
  font-size: 3rem;
  display: inline-flex;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: 0.3em;
  position: absolute;
  left: -2rem;
  & > svg {
    width: 1em;
    height: 1em;
  }
`;

const IconRight = styled.div`
  display: inline-flex;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: 0.5em;
  position: absolute;
  right: -1rem;
`;

const CardContent = styled.div``;
// const CardLink = styled(Link)`
//   display: block;
//   padding: 1.6em;
//   font-size: 0.9em;
//   & > svg {
//     color: ${({ theme }) => theme.color.grey[500]};
//   }
// `;

const Content = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const PackageCard: React.FC<Props> = props => {
  const { header, content, icon, link } = props;

  return (
    <Card>
      <CardInner>
        <Icon>{icon}</Icon>
        <CardContent>
          <H3>{header}</H3>
          <Content>{content}</Content>
        </CardContent>
        <IconRight>
          <ChevronRightIcon fontSize="1em" color="currentColor" />
        </IconRight>
      </CardInner>
    </Card>
  );
};

export default PackageCard;
