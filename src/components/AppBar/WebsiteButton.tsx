import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import ViaProfitIcon from '~/components/icons/via-profit';
import { VIAPROFIT_URL } from '~/utils/constants';


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

const scope = 'components.AppBar.WebsiteButton';

const WebsiteButton: React.FC = () => (
  <Button
    target="_blank"
    href={VIAPROFIT_URL}
  >
    <ViaProfitIcon />
    <Label>
      <FormattedMessage
        id={`${scope}.label`}
        defaultMessage="Via Profit"
      />
    </Label>
  </Button>
)

export default WebsiteButton;
