import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

export type DrawerItemProps = LinkProps & {
  label: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  onDrawerClose: () => void;
};

const ItemLink = styled(Link)<{ $active?: boolean }>`
  padding: 0.7em 1em;
  display: flex;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.color.text.primary};
  &:visited,
  &:hover {
    color: currentColor;
  }
  ${props =>
    props.$active &&
    css`
      color: ${props => props.theme.color.accent.primary}!important;
      &:visited,
      &:hover {
        color: currentColor;
      }
    `}
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.text.secondary};
  opacity: 0.8;
`;

const DrawerItem: React.FC<DrawerItemProps> = props => {
  const { active, label, icon, onDrawerClose, ...linkProps } = props;
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    onDrawerClose();

    navigate(e.currentTarget.getAttribute('href') || '');
  };

  return (
    <ItemLink onClick={handleClick} $active={active} {...linkProps}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {label}
    </ItemLink>
  );
};

export default DrawerItem;
