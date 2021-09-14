import * as React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import DayIcon from 'mdi-react/WeatherSunnyIcon';
import NightIcon from 'mdi-react/WeatherNightIcon';

const Button = styled.button`
  outline: none;
  border: 0;
  width: auto;
  height: auto;
  color: ${props => props.theme.color.textPrimary};
  background: none;
  padding: 6px;
  font-size: 1em;
  cursor: pointer;
`;

const ThemeButton: React.FC = () => {
  const currentTheme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );
  const dispatch = useDispatch<ReduxDispatch>();
  const handleClick = () => {
    dispatch({
      type: 'theme',
      payload:
        currentTheme === 'standardDark' ? 'standardLight' : 'standardDark',
    });
  };

  return (
    <Button onClick={handleClick}>
      {currentTheme === 'standardDark' && (
        <NightIcon size="1em" color="currentColor" />
      )}
      {currentTheme === 'standardLight' && (
        <DayIcon size="1em" color="currentColor" />
      )}
    </Button>
  );
};

export default ThemeButton;
