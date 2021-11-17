import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';

import Strong from '~/components/both/Typography/Strong';
import Logo from '~/components/touchable/Logo/LogoInline';

const Container = styled.footer`
  background: ${props => props.theme.color.gradients[0]};
  color: ${props => props.theme.color.text.inverse};
`;

const Inner = styled.div`
  padding: 0 ${props => props.theme.grid.touchable.gutter}px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

const StyledLogo = styled(Logo)`
  color: ${props => props.theme.color.text.inverse};
  height: 1.5rem;
`;

const Label = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  width: 50%;
  text-align: right;
  color: ${props => props.theme.color.text.inverse};
`;

const LabelBold = styled(Strong)`
  font-weight: 800;
`;

const Footer: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <Inner>
        <StyledLogo
          aria-label={intl.formatMessage({
            defaultMessage: 'Via Profit company logo',
            description: 'Footer. «aria-label» attribute of company logo',
          })}
        />
        <Label>
          <LabelBold>
            <FormattedMessage
              defaultMessage="Open source"
              description="Footer. «Open source project» label («Open source» segment)"
            />
          </LabelBold>{' '}
          <FormattedMessage
            defaultMessage="project"
            description="Footer. «project» segment of «Open source project» label"
          />
        </Label>
      </Inner>
    </Container>
  );
};

export default Footer;
