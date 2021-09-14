import * as React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

const ItemContainer = styled(Link)`
  display: inline-flex;
  padding: 1rem 0.8rem;
  text-decoration: none;
  color: ${props => props.theme.color.textPrimary};
`;

export type AppBarItemProps = LinkProps & {
  children: React.ReactNode;
};

const AppBarItem: React.FC<AppBarItemProps> = props => {
  const { children, ...linkProps } = props;

  return <ItemContainer {...linkProps}>{children}</ItemContainer>;
};

export default AppBarItem;
