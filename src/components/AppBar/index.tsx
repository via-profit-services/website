import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import buildUrl from '~/utils/buildUrl';
import { Context, actionSetUI } from '~/context/ui';

const AppBarContainer = styled.div`
  position: sticky;
  top: 0;
  background: #a5a5a5;
`;

const AppBarToolbar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center; 
  /* max-width: ${props => props.theme.grid.desktop.safeFrame}px; */
`;

const AppBarItem = styled(Link)`
  display: inline-flex;
  padding: 12px 12px;
  text-decoration: none;
  color: #212121;
`;


const AppBarSwitcher = styled.a`
  display: inline-flex;
  padding: 12px 12px;
  text-decoration: none;
  color: #212121;
`;

const AppBar: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();
  const { locale } = state;


  return (
    <AppBarContainer>
      <AppBarToolbar>
        <AppBarItem to={buildUrl(locale, '/')}>
          Home
        </AppBarItem>
        <AppBarItem to={buildUrl(locale, '/docs')}>
          Docs
        </AppBarItem>
        <AppBarItem to={buildUrl(locale, '/contact')}>
          Contact
        </AppBarItem>
        <AppBarSwitcher onClick={() => {
          dispatch(actionSetUI({ locale: 'en' }));
          history.push(buildUrl('en', '/'))
        }}>
          EN
        </AppBarSwitcher>
        <AppBarSwitcher onClick={() => {
          dispatch(actionSetUI({ locale: 'ru' }));
          history.push(buildUrl('ru', '/'))
        }}>
          RU
        </AppBarSwitcher>
        <AppBarItem to="/404">
          404
        </AppBarItem>
      </AppBarToolbar>
    </AppBarContainer>
  )
}

export default AppBar;