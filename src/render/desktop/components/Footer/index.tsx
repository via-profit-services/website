import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Strong from '~/render/desktop/components/Typography/Strong';
import SafeFrame from '~/render/desktop/components/SafeFrame';
import Logo from '~/render/desktop/components/Logo/LogoInline';

// const Footer

const FooterTop = styled.div`
  background: ${props => props.theme.color.gradients[0]};
  color: ${props => props.theme.color.text.inverse};
`;

const StyledLogo = styled(Logo)`
  color: ${props => props.theme.color.text.inverse};
  height: 1.5rem;
`;

const FooterTopInner = styled(SafeFrame)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

const FooterOSLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  width: 50%;
  text-align: right;
  color: ${props => props.theme.color.text.inverse};
`;

const OSLabelBold = styled(Strong)`
  font-weight: 800;
`;

const FooterMiddle = styled.div`
  background-color: ${props => props.theme.color.black.primary};
  color: ${props => props.theme.color.text.inverse};
`;

const FooterBottom = styled.div`
  background-color: ${props => props.theme.color.black.primary};
  color: ${props => props.theme.color.text.inverse};
`;

const FooterMiddleInner = styled(SafeFrame)``;
const FooterBottomInner = styled(SafeFrame)`
  font-size: 0.75rem;
  opacity: 0.6;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;

const Footer: React.FC = () => (
  <footer>
    <FooterTop>
      <FooterTopInner>
        <StyledLogo />
        <FooterOSLabel>
          <OSLabelBold>
            <FormattedMessage
              defaultMessage="Open source"
              description="Footer. «Open source project» label («Open source» segment)"
            />
          </OSLabelBold>{' '}
          <FormattedMessage
            defaultMessage="project"
            description="Footer. «project» segment of «Open source project» label"
          />
        </FooterOSLabel>
      </FooterTopInner>
    </FooterTop>
    <FooterMiddle>
      <FooterMiddleInner></FooterMiddleInner>
    </FooterMiddle>
    <FooterBottom>
      <FooterBottomInner>
        <FormattedMessage
          defaultMessage="Copyright {year} Via Profit"
          values={{ year: new Date().getFullYear() }}
          description="Footer. Copiright string"
        />{' '}
        <Strong>
          <FormattedMessage
            defaultMessage="MIT license"
            description="Footer. License string in copiright string"
          />
        </Strong>
      </FooterBottomInner>
    </FooterBottom>
  </footer>
);

export default Footer;
