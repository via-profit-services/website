import * as React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import WeatherSunnyIcon from 'mdi-react/WeatherSunnyIcon';
import WeatherNightIcon from 'mdi-react/WeatherNightIcon';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled.button`
  outline: none;
  border: 0;
  width: auto;
  height: auto;
  background-color: ${({ theme }) => theme.color.accent.secondary};
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.color.text.inverse : theme.color.grey[500]};
  padding: 0.3em 0.7em 0.3em 0.4em;
  line-height: 1;
  border-radius: 1.5em;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Pointer = styled.span`
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 100%;
  color: inherit;
`;

const Label = styled.span`
  display: block;
  margin-left: 0.3em;
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
      <Pointer>
        {currentTheme === 'dark' && (
          <WeatherNightIcon size="1em" color="currentColor" />
        )}
        {currentTheme === 'light' && (
          <WeatherSunnyIcon size="1em" color="currentColor" />
        )}
      </Pointer>
      <Label>
        {currentTheme === 'dark' && (
          <FormattedMessage
            defaultMessage="Dark"
            description="Header. Theme button in dark theme"
          />
        )}
        {currentTheme === 'light' && (
          <FormattedMessage
            defaultMessage="Light"
            description="Header. Theme button in light theme"
          />
        )}
      </Label>
    </Button>
  );
};

export default React.forwardRef(ThemeButton);
