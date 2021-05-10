import React, { useContext } from 'react';
import styled from 'styled-components';
import DarkThemeIcon from 'mdi-react/WeatherNightIcon';
import LightThemeIcon from 'mdi-react/WeatherSunnyIcon';

import { UIContext, actionSetUI } from '~/context/ui';


const Button = styled.button`
  border: none;
  outline: 0;
  background: none;
  padding: 0;
  margin: 0;
  color: inherit;
`;

const ThemeButton: React.FC = () => {
  const { state, dispatch } = useContext(UIContext);
  const { theme } = state;

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(actionSetUI({
      theme: newTheme,
    }));
  }

  return (
    <Button
      onClick={handleChangeTheme}
    >
      {theme === 'light' && <LightThemeIcon />}
      {theme === 'dark' && <DarkThemeIcon />}
    </Button>
  )
}

export default ThemeButton;
