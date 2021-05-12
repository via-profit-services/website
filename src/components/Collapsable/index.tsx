import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

export type CollapsableProps = {
  children: React.ReactNode;
  expanded: boolean;
};

const Container = styled.div<{ height: number | 'auto'; speed: number }>`
  overflow: hidden;
  will-change: height;
  transition: ${props => `height ${props.speed}s cubic-bezier(0, 0, 0.2, 1) 0ms`};
  height: ${props => props.height === 'auto' ? 'auto' : `${props.height}px`};
`;

const Inner = styled.div<{ visibility: 'hidden' | 'visible' }>`
  overflow: auto;
  visibility: ${props => props.visibility};
`;

const speedDivider = 1000;
const minAnimationDuration = 0.3;
const maxAnimationDuration = 1;

const Collapsable: React.FC<CollapsableProps> = (props) => {
  const { children, expanded } = props;
  const [ height, setHeight ] = useState<number | 'auto'>(expanded ? 'auto' : 0);
  const [ speed, setSpeed ] = useState(0);
  const [ visibility, setVisibility ] = useState<'hidden' | 'visible'>(expanded ? 'visible' : 'hidden');
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (innerRef?.current && expanded) {
      const contentHeight = innerRef.current.scrollHeight;
      const time = contentHeight / speedDivider;
      const animation = time < minAnimationDuration
        ? minAnimationDuration
        : time > maxAnimationDuration
        ? maxAnimationDuration
        : time;
      setSpeed(animation);
      setHeight(contentHeight);
      setVisibility('visible');
    }

    if (innerRef?.current && !expanded) {
      setHeight(0);
      setTimeout(() => {
        setVisibility('hidden');
      }, speed * speedDivider);
    }
  }, [children, expanded]);

  return (
    <Container
      height={height}
      speed={speed}
    >
      <Inner ref={innerRef} visibility={visibility}>
        {children}
      </Inner>
    </Container>
  )
}

export default Collapsable;
