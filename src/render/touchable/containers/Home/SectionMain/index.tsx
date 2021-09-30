import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import CheckIcon from 'mdi-react/CheckIcon';

import H1 from '~/render/touchable/components/Typography/H1';
import imagesrc from '~/../assets/images/touchable-section-main.jpg';
import bearsrc from '~/../assets/images/section-main-bear.svg';

const Container = styled.section`
  position: relative;
  z-index: 0;
  height: 480px;
  display: flex;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: absolute;
  background-image: url(${imagesrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${({ theme }) => theme.color.gradients[1]};
  }
`;

const BearBox = styled.div`
  background: ${({ theme }) => theme.color.gradients[3]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  width: 240px;
  height: 240px;
  border-radius: 100%;
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translate(0, -50%);
  &:before {
    content: '';
    position: absolute;
    background-image: url(${bearsrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    left: 50%;
    top: 50%;
    width: 76%;
    height: 76%;
    transform: translate(-50%, -50%);
  }
`;

const Inner = styled.div`
  position: relative;
  width: 60%;
  padding: ${({ theme }) => theme.grid.touchable.gutter}px;
  color: ${({ theme }) => theme.color.text.inverse};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Icon = styled(CheckIcon)``;

const SectionMain: React.FC = () => (
  <Container>
    <Background />
    <BearBox />
    <Inner>
      <H1>
        <FormattedMessage
          defaultMessage="GraphQL Server"
          description="Section main touchable. Header"
        />
      </H1>

      <List>
        <li>
          <Icon size="1rem" color="currentColor" />
          <FormattedMessage
            defaultMessage="Lightweight"
            description="Section main touchable. List element one"
          />
        </li>
        <li>
          <Icon size="1rem" color="currentColor" />
          <FormattedMessage
            defaultMessage="Flexible"
            description="Section main touchable. List element two"
          />
        </li>
        <li>
          <Icon size="1rem" color="currentColor" />
          <FormattedMessage
            defaultMessage="standalone"
            description="Section main touchable. List element three"
          />
        </li>
        <li>
          <Icon size="1rem" color="currentColor" />
          <FormattedMessage
            defaultMessage="Middlewares"
            description="Section main touchable. List element four"
          />
        </li>
      </List>
    </Inner>
  </Container>
);

export default SectionMain;
