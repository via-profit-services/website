import React, { useContext } from 'react';
import styled from 'styled-components';
import DarkThemeIcon from 'mdi-react/WeatherNightIcon';
import LightThemeIcon from 'mdi-react/WeatherSunnyIcon';

import { UIContext, actionSetUI } from '~/context/ui';


const Button = styled.a`
  border: none;
  outline: 0;
  background: none;
  margin: 0;
  color: inherit;
  cursor: pointer;
`;

const ThemeButton: React.FC = () => {
  const { state, dispatch } = useContext(UIContext);
  const { theme } = state;

  const handleChangeTheme: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(actionSetUI({
      theme: newTheme,
    }));
  }

  return (
    <Button
      href="#theme-button"
      onClick={handleChangeTheme}
    >
      {theme === 'light' && <LightThemeIcon />}
      {theme === 'dark' && <DarkThemeIcon />}
    </Button>
  )
}

export default ThemeButton;
