import * as React from 'react';
import styled from 'styled-components';
import { Link, LinkProps, useHistory } from 'react-router-dom';

export type DrawerItemProps = LinkProps & {
  label: React.ReactNode;
  icon?: React.ReactNode;
  onDrawerClose: () => void;
};

const ItemLink = styled(Link)`
  padding: 0.7em 1em;
  display: flex;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.textSecondary};
  opacity: 0.8;
`;

const DrawerItem: React.FC<DrawerItemProps> = props => {
  const { label, icon, onDrawerClose, ...linkProps } = props;
  const history = useHistory();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    onDrawerClose();

    history.push(e.currentTarget.getAttribute('href') || '');
  };

  return (
    <ItemLink onClick={handleClick} {...linkProps}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {label}
    </ItemLink>
  );
};

export default DrawerItem;
