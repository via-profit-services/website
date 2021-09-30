import * as React from 'react';

import styled from 'styled-components';

import ButtonBase from '~/render/touchable/components/ButtonBase';
import NavbarDrawer from './index';

const Button = styled(ButtonBase)`
  position: fixed;
  bottom: 2rem;
  right: ${({ theme }) => theme.grid.touchable.gutter}px;
  display: flex;
  justify-content: flex-end;
  z-index: ${({ theme }) => theme.zIndex.mobileMenu};
  width: 2em;
  height: 2em;
  background: red;
`;

const NavbarButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Nav</Button>
      <NavbarDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default NavbarButton;
