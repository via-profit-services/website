import * as React from 'react';
import styled from 'styled-components';

import Crumb, { CrumbProps } from './Crumb';

type Props = React.HTMLAttributes<HTMLOListElement> & {
  children: React.ReactElement<Omit<CrumbProps, 'position'>>[];
};

const Container = styled.ol`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  @media screen and (max-width: 600px) {
    white-space: nowrap;
    overflow-x: auto;
  }
`;

const Breadcrumbs: React.ForwardRefRenderFunction<HTMLOListElement, Props> = (
  props,
  ref,
) => {
  const { children, ...otherProps } = props;

  return (
    <Container
      vocab="https://schema.org/"
      typeof="BreadcrumbList"
      {...otherProps}
      ref={ref}>
      {children}
    </Container>
  );
};

export { Crumb };

export default React.forwardRef(Breadcrumbs);
