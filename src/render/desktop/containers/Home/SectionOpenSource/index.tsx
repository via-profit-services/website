import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H2 from '~/render/desktop/components/Typography/H2';
import Paragraph from '~/render/desktop/components/Typography/Paragraph';
import backgroundsrc from 'assets/images/desktop-section-open-source.jpg';

const Section = styled.section`
  background-image: url(${backgroundsrc});
  background-position: center center;
  background-size: cover;
  padding: 3rem 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.color.gradients[1]};
  }
`;

const Inner = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.grid.desktop.safeFrame}px;
  padding: 0 ${({ theme }) => theme.grid.desktop.gutter}px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.color.text.inverse};
  & h2 {
    margin-top: 0;
  }
`;

const Header = styled(H2)`
  font-size: 2.6rem;
`;

const Text = styled(Paragraph)`
  max-width: 600px;
  margin: 1.2em auto;
  font-weight: 300;
`;

const License = styled(Paragraph)`
  margin: 0 auto;
  font-weight: 800;
`;

const SectionOpenSource: React.FC = () => (
  <Section>
    <Inner>
      <Header>
        <FormattedMessage
          defaultMessage="Open Source"
          description="Section Open Source. Header"
        />
      </Header>
      <Text>
        <FormattedMessage
          defaultMessage="Fugiat laborum nulla fugiat cupidatat veniam pariatur in non. Adipisicing consectetur anim commodo excepteur incididunt."
          description="Section Open Source. Text"
        />
      </Text>
      <License>
        <FormattedMessage
          defaultMessage="MIT License"
          description="Section Open Source. License label"
        />
      </License>
    </Inner>
  </Section>
);

export default SectionOpenSource;
