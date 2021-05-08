import React, { forwardRef, memo } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: 'contained' | 'outlined' | 'icon';
  children: React.ReactNode;
}

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
  color: ${props => props.theme.color.primary.white};
  border: 0.125em solid ${props => props.theme.color.primary.blue};
  background: ${props => props.theme.color.primary.blue};
  &:hover {
    background: ${props => props.theme.color.primary.lightBlue};
    border-color: ${props => props.theme.color.primary.lightBlue};
  }
  &:active {
    background: ${props => props.theme.color.primary.darkBlue};
    border-color: ${props => props.theme.color.primary.darkBlue};
  }
  ${props => props.disabled && css`
    cursor: not-allowed;
    border-color: ${props => props.theme.color.primary.gray};
    color: ${props => props.theme.color.primary.gray};
    &:hover {
      border-color: ${props => props.theme.color.primary.gray};
      color: ${props => props.theme.color.primary.gray};
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
  color: ${props => props.theme.color.primary.white};
  border: 0.125em solid ${props => props.theme.color.primary.white};

  &:hover {
    border-color: ${props => props.theme.color.primary.lightBlue};
    color: ${props => props.theme.color.primary.lightBlue};
  }
  &:active {
    border-color: ${props => props.theme.color.primary.darkBlue};
    color: ${props => props.theme.color.primary.darkBlue};
  }
  ${props => props.disabled && css`
    cursor: not-allowed;
    background: ${props => props.theme.color.primary.gray};
    border-color: ${props => props.theme.color.primary.gray};
    &:hover {
      background: ${props => props.theme.color.primary.gray};
      border-color: ${props => props.theme.color.primary.gray};
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
    background: ${props => props.theme.color.hover};
  }
  
  ${props => props.disabled && css`
    cursor: not-allowed;
    background: ${props => props.theme.color.primary.gray};
    color: ${props => props.theme.color.primary.darkGray};
    &:hover {
      background: ${props => props.theme.color.primary.gray};
      color: ${props => props.theme.color.primary.darkGray};
    }
  `}
`;

type ButtonInnerProps = ButtonProps & StyledProps;

const Button: React.RefForwardingComponent<HTMLButtonElement, ButtonProps> = (props, _) => {
  const { variant, ...otherProps } = props;

  switch (variant) {
    case 'icon':
      return <StyledButtonIcon {...otherProps} />;

    case 'outlined':
      return <StyledButtonOutlined {...otherProps} />;

    case 'contained':
      default:
        return <StyledButtonContained {...otherProps} />
  }
}

export default memo(forwardRef(Button));
