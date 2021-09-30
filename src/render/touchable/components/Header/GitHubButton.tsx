import * as React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import { LINK_GITHUB } from '~/utils/constants';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkElement = styled.a`
  background: none;
  outline: none;
  margin: 0;
  padding: 0.4em 0.8em 0.4em 0.6em;
  line-height: 1;
  display: flex;
  align-items: center;
  border-radius: 1em;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.inverse};
  border: 1px solid ${({ theme }) => theme.color.text.inverse};
  &:hover {
    color: currentColor;
  }
  &:visited {
    color: currentColor;
  }
`;

const Svg = styled.svg`
  color: inherit;
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
`;

const GitHubButton: React.ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  props,
  ref,
) => {
  const intl = useIntl();

  return (
    <LinkElement
      ref={ref}
      href={LINK_GITHUB}
      target="_blank"
      aria-label={intl.formatMessage({
        defaultMessage: 'Github logo link',
        description: 'Footer. «aria-label» attribute of Github logo link',
      })}
      rel="noopener noreferrer"
      {...props}>
      <Svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0C4.03 0 0 3.902 0 8.715c0 3.85 2.579 7.117 6.155 8.27.45.08.614-.19.614-.42 0-.207-.007-.755-.012-1.482-2.503.526-3.031-1.169-3.031-1.169-.41-1.007-1-1.275-1-1.275-.817-.54.062-.53.062-.53.903.062 1.378.899 1.378.899.803 1.332 2.107.947 2.62.724.082-.563.314-.947.571-1.165-1.998-.22-4.1-.968-4.1-4.307 0-.952.351-1.73.927-2.339-.093-.22-.401-1.106.089-2.306 0 0 .755-.235 2.474.893A8.909 8.909 0 0 1 9 4.214c.765.004 1.535.1 2.253.294 1.719-1.128 2.473-.893 2.473-.893.491 1.2.182 2.086.09 2.306.577.61.925 1.387.925 2.339 0 3.348-2.105 4.084-4.11 4.3.323.27.611.8.611 1.614 0 1.165-.01 2.105-.01 2.39 0 .234.162.505.618.42C15.424 15.83 18 12.564 18 8.715 18 3.902 13.97 0 9 0Z"
          fill="currentColor"
        />
      </Svg>
      GitHub
    </LinkElement>
  );
};

export default React.forwardRef(GitHubButton);
