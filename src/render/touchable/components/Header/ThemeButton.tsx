import * as React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import WeatherSunnyIcon from 'mdi-react/WeatherSunnyIcon';
import WeatherNightIcon from 'mdi-react/WeatherNightIcon';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled.button`
  outline: none;
  border: 0;
  padding: 0;
  width: 2.6em;
  height: 2.6em;
  border-radius: 100%;
  display: inline-block;
  background: none;
  color: ${({ theme }) => theme.color.text.inverse};
  margin-right: ${props => props.theme.grid.touchable.gutter}px;
  line-height: 1;
  font-size: 1em;
  cursor: pointer;
`;

const ThemeButton: React.ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  props,
  ref,
) => {
  const currentTheme = useSelector<ReduxState, ReduxSelectedTheme>(
    state => state.theme,
  );
  const dispatch = useDispatch<ReduxDispatch>();
  const handleClick = () => {
    dispatch({
      type: 'theme',
      payload: currentTheme === 'dark' ? 'light' : 'dark',
    });
  };

  return (
    <Button type="button" onClick={handleClick} {...props} ref={ref}>
      {currentTheme === 'dark' && (
        <WeatherNightIcon size="1.5em" color="currentColor" />
      )}
      {currentTheme === 'light' && (
        <WeatherSunnyIcon size="1.5em" color="currentColor" />
      )}
    </Button>
  );
};

export default React.forwardRef(ThemeButton);
