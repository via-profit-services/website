import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Strong from '~/render/desktop/components/Typography/Strong';
import Logo from '~/render/desktop/components/Logo/LogoInline';

const Container = styled.div`
  background: ${props => props.theme.color.gradients[0]};
  color: ${props => props.theme.color.text.inverse};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.grid.desktop.safeFrame}px;
  padding: 0 ${props => props.theme.grid.desktop.gutter}px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

const StyledLogo = styled(Logo)`
  color: ${props => props.theme.color.text.inverse};
  height: 1.5rem;
`;

const Label = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  width: 50%;
  text-align: right;
  color: ${props => props.theme.color.text.inverse};
`;

const LabelBold = styled(Strong)`
  font-weight: 800;
`;

const FooterTop: React.FC = () => (
  <Container>
    <Inner>
      <StyledLogo />
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

export default FooterTop;
