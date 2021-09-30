import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

export const linkStyles = css<{ $active?: boolean }>`
  margin: 0.2em 0;
  display: block;
  padding: 0.8em 1em;
  text-decoration: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 160ms ease-out;
  color: ${props =>
    props.$active
      ? props.theme.color.accent.secondary
      : props.theme.color.text.primary}!important;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey[200]};
  }
`;

const StyledLink = styled(Link)<{ $active?: boolean }>`
  ${linkStyles}
  ${props =>
    props.$active &&
    css`
      background-color: ${({ theme }) => theme.color.grey[200]};
      color: ${({ theme }) => theme.color.accent.primary};
    `}
`;

type Props = {
  children: React.ReactNode | React.ReactNode[];
  path: string;
  onDrawerClose: () => void;
};

const ListElementLink: React.FC<Props> = props => {
  const { children, path, onDrawerClose } = props;
  const match = useRouteMatch({
    path,
    sensitive: true,
    exact: true,
  });

  const history = useHistory();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    onDrawerClose();

    history.push(e.currentTarget.getAttribute('href') || '');
  };

  return (
    <StyledLink $active={match !== null} to={path} onClick={handleClick}>
      {children}
    </StyledLink>
  );
};

export default ListElementLink;
