import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import H3 from '~/components/both/Typography/H3';
import Paragraph from '~/components/both/Typography/Paragraph';

const WITH_TRIGGER = 690;

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  visibility: hidden;
  z-index: ${({ theme }) => theme.zIndex.modal};
  @media all and (max-width: ${WITH_TRIGGER}px) {
    visibility: visible;
  }
`;

const BackDrop = styled.div`
  transition: opacity 240ms ease-out;
  background-color: ${({ theme }) => theme.color.black.primary};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  @media all and (max-width: ${WITH_TRIGGER}px) {
    visibility: visible;
    opacity: 0.5;
  }
`;

const Inner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column;
  transition: opacity 240ms ease-out;
  background-color: ${({ theme }) => theme.color.background.secondary};
  border-radius: 26px;
  width: 480px;
  max-width: 80vw;
  max-height: 80wh;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 17px 29px rgb(24 0 43 / 41%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  @media all and (max-width: ${WITH_TRIGGER}px) {
    visibility: visible;
    opacity: 1;
  }
`;

const Title = styled(H3)`
  margin: 0;
  padding: 1rem 1.4rem;
  background-color: ${({ theme }) => theme.color.accent.primary};
  color: ${({ theme }) => theme.color.text.inverse};
`;

const Description = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text.primary};
  padding: 0 1.4rem;
`;

const Subtext = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 0.8em;
  font-weight: 300;
  padding: 0 1.4rem;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.color.accent.primary};
  margin-top: 20px;
  padding: 1.4em;
  outline: none;
  border: none;
  background: none;
`;

const DeviceInformer: React.FC = () => {
  const dispatch = useDispatch<ReduxDispatch>();
  const handleGoToMobile = () => {
    dispatch({ type: 'mode', payload: 'touchable' });
  };

  return (
    <Container>
      <Inner>
        <Title>
          <FormattedMessage defaultMessage="Strange window size" />
        </Title>

        <Description>
          <FormattedMessage defaultMessage="You should use the mobile version to view the site" />
        </Description>

        <Subtext>
          <FormattedMessage defaultMessage="With this size of your browser window, it will be impossible to use the site" />
        </Subtext>

        <Button onClick={handleGoToMobile}>
          <FormattedMessage defaultMessage="Switch to mobile version" />
        </Button>
      </Inner>
      <BackDrop />
    </Container>
  );
};

export default DeviceInformer;
