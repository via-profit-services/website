import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import imagesrc from '~/../assets/images/section-main-background.png';
import bearsrc from '~/../assets/images/section-main-bear.svg';
import Strong from '~/render/desktop/components/Typography/Strong';

const Container = styled.div`
  background-image: url(${imagesrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  height: 110vh;
  min-height: 720px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const Content = styled.div`
  width: 60%;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.grid.desktop.safeFrame}px;
  padding: 0 ${({ theme }) => theme.grid.desktop.gutter / 2}px;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const BearBox = styled.div`
  background: ${({ theme }) => theme.color.gradients[3]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  width: 340px;
  height: 340px;
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 0;
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

const Pretitle = styled.div`
  color: ${({ theme }) => theme.color.text.inverse};
  font-size: 1.75rem;
  font-weight: 400;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.text.inverse};
  font-size: 3rem;
  font-weight: 400;

  ${Strong} {
    font-weight: 800;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.color.text.inverse};
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: 1rem;
`;

const SectionMain: React.FC = () => (
  <Container>
    <Inner>
      <Content>
        <Pretitle>
          <FormattedMessage
            defaultMessage="Via-profit services"
            description="Home main screen. Pretitle"
          />
        </Pretitle>
        <Title>
          <FormattedMessage
            defaultMessage="{strong} infrastructure with middlewares collection"
            description="Home main screen. Title (without strong tag"
            values={{
              strong: (
                <Strong>
                  <FormattedMessage
                    defaultMessage="GraphQL HTTP Server"
                    description="Home main screen. Strong tag of the title"
                  />
                </Strong>
              ),
            }}
          />
        </Title>
        <Text>
          <FormattedMessage
            defaultMessage="Lightweight, flexible, standalone implementation of a GraphQL HTTP (express middleware) which allows you to run an Express GraphQL server, build connections with pagination (Cursored or Limit-offset type), make your own extentions, read detailed logs, use global context with structured dataloaders and module containers, use some extra GraphQL Scalar types as DateTime, Money and so on"
            description="Home main screen. Text"
          />
        </Text>
      </Content>
      <BearBox />
    </Inner>
  </Container>
);

export default SectionMain;
