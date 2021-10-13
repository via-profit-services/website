import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from 'mdi-react/MenuIcon';
import { useIntl } from 'react-intl';

import NavbarDrawer from './index';

const Button = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.grid.touchable.gutter}px;
  right: ${({ theme }) => theme.grid.touchable.gutter}px;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background: ${({ theme }) => theme.color.gradients[0]};
  color: ${({ theme }) => theme.color.text.primary};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

const Inner = styled.span`
  margin: 0.2em;
  flex: 1;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  font-size: 1.2rem;
  background: ${({ theme }) => theme.color.background.secondary};
`;

const NavbarButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const intl = useIntl();

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={intl.formatMessage({
          defaultMessage: 'Close main menu',
          description: 'Main menu. «aria-label» attribute',
        })}>
        <Inner>
          <MenuIcon size="1em" color="currentColor" />
        </Inner>
      </Button>
      <NavbarDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default NavbarButton;
