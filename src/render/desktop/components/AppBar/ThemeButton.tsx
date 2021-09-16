import * as React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled.button`
  outline: none;
  border: 0;
  width: auto;
  height: auto;
  color: ${props => props.theme.color.text.inverse};
  background: ${props => props.theme.color.accent.primary};
  padding: 0.3em 0.7em 0.3em 0.4em;
  line-height: 1;
  border-radius: 1.5em;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: inset ${({ theme }) => theme.shadows[1]};
`;

const Pointer = styled.span`
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.text.inverse};
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
      <Pointer />
      <Label>Light</Label>
    </Button>
  );
};

export default React.forwardRef(ThemeButton);
