import * as React from 'react';
import styled from 'styled-components';
import SwipableViews from 'react-swipeable-views';
import CloseIcon from 'mdi-react/CloseIcon';
import { useIntl, FormattedMessage } from 'react-intl';
import { useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();

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
              active={pathname === '/'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Home',
                description: 'Main menu. Home link',
              })}
            />
            <DrawerItem
              to="/docs"
              active={pathname.match(/^\/docs/) !== null}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Documentation',
                description: 'Main menu. Docs link',
              })}
            />
            <DrawerItem
              to="/examples"
              active={pathname.match(/^\/examples/) !== null}
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
              active={pathname === '/packages/core'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Core',
                description: 'Main menu. Package core link',
              })}
            />
            <DrawerItem
              to="/packages/knex"
              active={pathname === '/packages/knex'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Knex',
                description: 'Main menu. Package knex link',
              })}
            />
            <DrawerItem
              to="/packages/subscriptions"
              active={pathname === '/packages/subscriptions'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Subscriptions',
                description: 'Main menu. Package subscriptions link',
              })}
            />
            <DrawerItem
              to="/packages/accounts"
              active={pathname === '/packages/accounts'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Accounts',
                description: 'Main menu. Package accounts link',
              })}
            />
            <DrawerItem
              to="/packages/dataloader"
              active={pathname === '/packages/dataloader'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Dataloader',
                description: 'Main menu. Package dataloader link',
              })}
            />
            <DrawerItem
              to="/packages/files"
              active={pathname === '/packages/files'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Files',
                description: 'Main menu. Package files link',
              })}
            />
            <DrawerItem
              to="/packages/geography"
              active={pathname === '/packages/geography'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Geography',
                description: 'Main menu. Package geography link',
              })}
            />
            <DrawerItem
              to="/packages/messages"
              active={pathname === '/packages/messages'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Messages',
                description: 'Main menu. Package messages link',
              })}
            />
            <DrawerItem
              to="/packages/permissions"
              active={pathname === '/packages/permissions'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Permissions',
                description: 'Main menu. Package permissions link',
              })}
            />
            <DrawerItem
              to="/packages/phones"
              active={pathname === '/packages/phones'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Phones',
                description: 'Main menu. Package phones link',
              })}
            />
            <DrawerItem
              to="/packages/redis"
              active={pathname === '/packages/redis'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Redis',
                description: 'Main menu. Package redis link',
              })}
            />
            <DrawerItem
              to="/packages/settings"
              active={pathname === '/packages/settings'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Settings',
                description: 'Main menu. Package settings link',
              })}
            />
            <DrawerItem
              to="/packages/sms"
              active={pathname === '/packages/sms'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'SMS',
                description: 'Main menu. Package sms link',
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
              active={pathname === '/legal/privacy'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Privacy Policy',
                description: 'Main menu. Package Privacy Policy link',
              })}
            />
            <DrawerItem
              to="/legal/terms"
              active={pathname === '/legal/terms'}
              onDrawerClose={onClose}
              label={intl.formatMessage({
                defaultMessage: 'Terms',
                description: 'Main menu. Package Terms link',
              })}
            />
            <DrawerItem
              to="/legal/cookie"
              active={pathname === '/legal/cookie'}
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