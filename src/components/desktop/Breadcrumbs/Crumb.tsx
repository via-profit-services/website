import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import { FormattedMessage } from 'react-intl';

import LogoRound from '~/components/desktop/Logo/LogoRound';

export type CrumbProps = CrumbChunk | CrumbLast | CrumbHome;

type CrumbChunk = {
  link: string;
  label: React.ReactNode;
  position: number;
  home?: undefined;
};

type CrumbHome = {
  home: true;
};

type CrumbLast = {
  label: React.ReactNode;
  position: number;
  home?: undefined;
};

const CrumbLI = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  & svg {
    margin: 0 0.3em;
    fill: ${({ theme }) => theme.color.text.secondary};
  }
`;

const CrumbLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.primary};
  opacity: 0.7;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.color.accent.primary};
  }
  &:visited {
    color: currentColor;
  }
`;

const CrumbLastLabel = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const CrumbChunkLabel = styled.span`
  align-items: center;
  display: flex;
  color: inherit;
  & svg {
    margin-left: 0.04em;
  }
`;

const isCrumbChunk = (props: CrumbProps): props is CrumbChunk =>
  'link' in props && 'label' in props && 'position' in props;

const isCrumbLast = (props: CrumbProps): props is CrumbLast =>
  'label' in props && 'position' in props;

const isCrumbHome = (props: CrumbProps): props is CrumbHome =>
  'home' in props && props.home;

const Crumb: React.ForwardRefRenderFunction<HTMLLIElement, CrumbProps> = (
  props,
  ref,
) => {
  if (isCrumbHome(props)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { home, ...otherProps } = props;

    return (
      <CrumbLI
        property="itemListElement"
        typeof="ListItem"
        {...otherProps}
        ref={ref}>
        <CrumbLink to="/" property="item" typeof="WebPage">
          <CrumbChunkLabel property="name">
            <LogoRound />
            <FormattedMessage
              defaultMessage="Home"
              description="Breadcrumbs. Home"
            />
          </CrumbChunkLabel>
          <meta property="position" content="1" />
        </CrumbLink>
        <ChevronRightIcon size="1em" color="currentColor" />
      </CrumbLI>
    );
  }

  if (isCrumbChunk(props)) {
    const { link, label, position, ...otherProps } = props;

    return (
      <CrumbLI
        property="itemListElement"
        typeof="ListItem"
        {...otherProps}
        ref={ref}>
        <CrumbLink to={link} property="item" typeof="WebPage">
          <CrumbChunkLabel property="name">{label}</CrumbChunkLabel>
          <meta property="position" content={String(position)} />
        </CrumbLink>
        <ChevronRightIcon size="1em" color="currentColor" />
      </CrumbLI>
    );
  }

  if (isCrumbLast(props)) {
    const { position, label, ...otherProps } = props;

    return (
      <CrumbLI
        property="itemListElement"
        typeof="ListItem"
        {...otherProps}
        ref={ref}>
        <CrumbLastLabel property="name">{label}</CrumbLastLabel>
        <meta property="position" content={String(position)} />
      </CrumbLI>
    );
  }

  return null;
};

export default React.forwardRef(Crumb);
