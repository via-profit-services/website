import React from 'react';
import styled from 'styled-components';
import GithubIcon from 'mdi-react/GithubIcon';
import { FormattedMessage } from 'react-intl';

import { GITHUB_URL } from '~/utils/constants';


const Button = styled.a`
  border: none;
  outline: 0;
  background: none;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.49);
  border-radius: 16px;
  padding: 0.1em 0.4em 0.1em 0.2em;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

const Label = styled.span`
  margin-left: 10px;
  font-weight: 200;
`;

const scope = 'components.AppBar.GithubButton';

const GithubButton: React.FC = () => (
  <Button
    target="_blank"
    href={GITHUB_URL}
  >
    <GithubIcon />
    <Label>
      <FormattedMessage
        id={`${scope}.label`}
        defaultMessage="Github"
      />
    </Label>
  </Button>
)

export default GithubButton;
