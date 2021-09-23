import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

export const linkStyles = css<{ $active?: boolean }>`
  margin: 0.2em 0;
  display: block;
  padding: 0.4em 1em;
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
};

const ListElementLink: React.FC<Props> = props => {
  const { children, path } = props;
  const match = useRouteMatch({
    path,
    sensitive: true,
    exact: true,
  });

  return (
    <StyledLink $active={match !== null} to={path}>
      {children}
    </StyledLink>
  );
};

export default ListElementLink;
