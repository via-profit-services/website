import * as React from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: 'contained' | 'outlined' | 'icon';
  children: React.ReactNode;
};

interface StyledProps {
  isMobile?: boolean;
}

const StyledButtonContained = styled.button<StyledProps>`
  border-radius: 50px;
  text-decoration: none;
  padding: 1em 2.6em;
  cursor: pointer;
  font-size: 1rem;
  border: 0;
  outline: none;
  transition: all 160ms ease-out;
  color: red;
  border: 0.125em solid red;
  background: red;
  &:hover {
    background: red;
    border-color: red;
  }
  &:active {
    background: red;
    border-color: red;
  }
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      border-color: red;
      color: red;
      &:hover {
        border-color: red;
        color: red;
      }
    `}
`;

const StyledButtonOutlined = styled.button<StyledProps>`
  border-radius: 50px;
  padding: 1em 2.6em;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  border: 0;
  outline: none;
  transition: all 160ms ease-out;
  background: none;
  color: red;
  border: 0.125em solid red;

  &:hover {
    border-color: red;
    color: red;
  }
  &:active {
    border-color: red;
    color: red;
  }
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: red;
      border-color: red;
      &:hover {
        background: red;
        border-color: red;
      }
    `}
`;

const StyledButtonIcon = styled.button<StyledProps>`
  border-radius: 100%;
  padding: 0.5em;
  width: auto;
  height: auto;
  font-size: 1em;
  line-height: 0;
  cursor: pointer;
  border: 0;
  outline: none;
  transition: all 160ms ease-out;
  background: none;

  &:hover {
    background: red;
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: red;
      color: red;
      &:hover {
        background: red;
        color: red;
      }
    `}
`;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  _,
) => {
  const { variant, ...otherProps } = props;

  switch (variant) {
    case 'icon':
      return <StyledButtonIcon {...otherProps} />;

    case 'outlined':
      return <StyledButtonOutlined {...otherProps} />;

    case 'contained':
    default:
      return <StyledButtonContained {...otherProps} />;
  }
};

export default React.forwardRef(Button);
