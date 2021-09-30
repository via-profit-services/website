import * as React from 'react';
import styled, { keyframes } from 'styled-components';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
};

const rippleEffect = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

const Buttonbase = styled.button`
  padding: 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  & .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${rippleEffect} 600ms linear;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  ref,
) => {
  const { children, onClick, ...otherProps } = props;

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = event => {
    const target = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - target.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - target.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = target.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    target.appendChild(circle);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Buttonbase {...otherProps} ref={ref} onClick={clickHandler}>
      {children}
    </Buttonbase>
  );
};

export default React.forwardRef(Button);
