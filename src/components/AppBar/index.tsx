import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import buildUrl from '~/utils/buildUrl';
import { UIContext, actionSetUI } from '~/context/ui';
import ThemeButton from './ThemeButton';


const Logo = styled.div`
  width: 200px;
  height: 40px;
  background: red;
  border-radius: 16px;
`;



const Menu = styled.div`
  background: ${props => props.theme.color.appBar.background};
  color: ${props => props.theme.color.appBar.color};
  z-index: ${props => props.theme.zIndex.appBar};
  position: sticky;
  top: 0;
`;


const Toolbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center; 
  max-width: ${props => props.theme.grid.safeFrame}px;
`;

const Item = styled(Link)`
  display: inline-flex;
  padding: 12px 12px;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;


const Switcher = styled.a`
  display: inline-flex;
  padding: 12px 12px;
  text-decoration: none;
  color: inherit;
`;

const AppBar: React.FC = () => {
  const { state, dispatch } = useContext(UIContext);
  const history = useHistory();
  const { locale } = state;


  return (
    <>
      <div>
        <Logo />
      </div>
      <Menu>
        <Toolbar>
          <Item to={buildUrl(locale, '/')}>
            Home
          </Item>
          <Item to={buildUrl(locale, '/docs')}>
            Docs
          </Item>
          <Item to={buildUrl(locale, '/contact')}>
            Contact
          </Item>
          <Switcher onClick={() => {
            dispatch(actionSetUI({ locale: 'en' }));
            history.push(buildUrl('en', '/'))
          }}>
            EN
          </Switcher>
          <Switcher onClick={() => {
            dispatch(actionSetUI({ locale: 'ru' }));
            history.push(buildUrl('ru', '/'))
          }}>
            RU
          </Switcher>
          <Item to="/404">
            404
          </Item>
          <ThemeButton />
        </Toolbar>
      </Menu>
    </>
  )
}

export default AppBar;