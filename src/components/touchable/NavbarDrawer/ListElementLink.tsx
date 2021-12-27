import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, useMatch, useNavigate } from 'react-router-dom';

export const linkStyles = css<{ $active?: boolean }>`
  display: block;
  padding: 1em;
  text-decoration: none;
  cursor: pointer;
  transition: all 160ms ease-out;
  color: ${props =>
    props.$active
      ? props.theme.color.accent.secondary
      : props.theme.color.text.primary}!important;
  &:hover,
  &:visited {
    color: ${props =>
      props.$active
        ? props.theme.color.accent.secondary
        : props.theme.color.text.primary}!important;
  }
`;

const StyledLink = styled(Link)<{ $active?: boolean }>`
  ${linkStyles}
  ${props =>
    props.$active &&
    css`
      color: ${({ theme }) => theme.color.accent.primary};
      &:hover,
      &:visited {
        color: currentColor;
      }
    `}
`;

type Props = {
  children: React.ReactNode | React.ReactNode[];
  path: string;
  onDrawerClose: () => void;
};

const ListElementLink: React.FC<Props> = props => {
  const { children, path, onDrawerClose } = props;
  const match = useMatch({
    path,
    end: true,
  });

  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    onDrawerClose();

    navigate(e.currentTarget.getAttribute('href') || '');
  };

  return (
    <StyledLink $active={match !== null} to={path} onClick={handleClick}>
      {children}
    </StyledLink>
  );
};

export default ListElementLink;
