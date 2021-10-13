import * as React from 'react';
import styled from 'styled-components';
import SwipableViews from 'react-swipeable-views';
import CloseIcon from 'mdi-react/CloseIcon';
import { useIntl, FormattedMessage } from 'react-intl';

import DrawerItem from './DrawerItem';

export type AppDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const DrawerContainer = styled.div<{ $visibility: boolean }>`
  position: fixed;
  z-index: ${props => props.theme.zIndex.mobileMenu};
  visibility: ${props => (props.$visibility ? 'visible' : 'hidden')};
  top: 0;
  height: 100vh;
  width: 100%;
  transition: all 240ms ease-out;
  background-color: ${props =>
    props.$visibility ? 'rgba(0, 0, 0, 0.68)' : 'transparent'};
`;

const DrawerInner = styled.div`
  background-color: ${props => props.theme.color.background.secondary};
  height: 100vh;
  width: 80%;
  display: flex;
  flex-flow: column;
`;

const DrawerNav = styled.nav`
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
`;

const DrawerFallback = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  box-shadow: ${props => props.theme.shadows[0]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
  padding: 1em;
`;

const SeparatorTitle = styled.div`
  font-size: 0.9rem;
  padding: 1em;
  margin-top: 1em;
  color: ${({ theme }) => theme.color.text.secondary};
`;

const CloseButton = styled.button`
  outline: none;
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 3.5em;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.text.primary};
`;

const AppDrawer: React.FC<AppDrawerProps> = props => {
  const intl = useIntl();
  const { open, onClose } = props;
  const [visibility, setVisibility] = React.useState(open);
  const [activeIndex, setActiveIndex] = React.useState(open ? 0 : 1);

  React.useEffect(() => {
    setVisibility(open);
    setActiveIndex(open ? 0 : 1);
    window.document.body.style.overflow = open ? 'hidden' : 'visible';
  }, [open]);

  return (
    <DrawerContainer $visibility={visibility}>
      <SwipableViews
        index={activeIndex}
        onChangeIndex={index => setActiveIndex(index)}
        onTransitionEnd={() => {
          if (activeIndex === 1) {
            onClose();
          }
        }}>
        <DrawerInner>
          <Header>
            <Title>
              <FormattedMessage
                defaultMessage="Main menu"
                description="Main sidebar title"
              />
            </Title>
            <CloseButton
              type="button"
              onClick={() => onClose()}
              aria-label={intl.formatMessage({
                defaultMessage: 'Close docs menu',
                description:
                  'Main menu. «aria-label» attribute of close button',
              })}>
              <CloseIcon size="1em" color="currentColor" />
            </CloseButton>
          </Header>

          <DrawerNav>
            <DrawerItem
              to="/"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Home',
                description: 'Main menu. Home link',
              })}
            />
            <DrawerItem
              to="/docs"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Documentation',
                description: 'Main menu. Docs link',
              })}
            />
            <DrawerItem
              to="/examples"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Examples',
                description: 'Main menu. Examples link',
              })}
            />
            <SeparatorTitle>
              <FormattedMessage
                defaultMessage="Packages"
                description="Main sidebar. Packages title"
              />
            </SeparatorTitle>
            <DrawerItem
              to="/packages/core"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Core',
                description: 'Main menu. Package core link',
              })}
            />
            <DrawerItem
              to="/packages/knex"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Knex',
                description: 'Main menu. Package knex link',
              })}
            />
            <DrawerItem
              to="/packages/subscriptions"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Subscriptions',
                description: 'Main menu. Package subscriptions link',
              })}
            />

            <SeparatorTitle>
              <FormattedMessage
                defaultMessage="Legal"
                description="Main sidebar. Legal title"
              />
            </SeparatorTitle>
            <DrawerItem
              to="/legal/privacy"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Privacy Policy',
                description: 'Main menu. Package Privacy Policy link',
              })}
            />
            <DrawerItem
              to="/legal/terms"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Terms',
                description: 'Main menu. Package Terms link',
              })}
            />
            <DrawerItem
              to="/legal/cookie"
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Cookie policy',
                description: 'Main menu. Package Cookie policy link',
              })}
            />
          </DrawerNav>
        </DrawerInner>
        <DrawerFallback />
      </SwipableViews>
    </DrawerContainer>
  );
};

export default AppDrawer;
