import * as React from 'react';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLHeadingElement>;

const Container = styled.div`
  font-size: 1.875rem;
  font-weight: 800;
`;

const H2Elem = styled.h2`
  display: inline-block;
  position: relative;
  font-size: inherit;
  font-weight: inherit;
  &:before {
    content: '';
    position: absolute;
    bottom: -0.18em;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.accent.secondary};
  }
`;

const H2: React.ForwardRefRenderFunction<HTMLHeadingElement, Props> = (
  props,
  ref,
) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <H2Elem>{children}</H2Elem>
    </Container>
  );
};

export default React.forwardRef(H2);
