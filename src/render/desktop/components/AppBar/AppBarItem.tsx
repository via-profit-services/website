import * as React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

const ItemContainer = styled(Link)`
  display: inline-flex;
  padding: 12px 12px;
  text-decoration: none;
  color: ${props => props.theme.color.text.primary};
`;

export type AppBarItemProps = LinkProps & {
  children: React.ReactNode;
};

const AppBarItem: React.FC<AppBarItemProps> = props => {
  const { children, ...linkProps } = props;

  return <ItemContainer {...linkProps}>{children}</ItemContainer>;
};

export default AppBarItem;
