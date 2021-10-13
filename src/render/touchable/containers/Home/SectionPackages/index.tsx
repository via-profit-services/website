import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H2 from '~/render/touchable/components/Typography/H2';
import Subtitle from '~/render/touchable/components/Typography/Subtitle';
import PackagesCarousel from './PackagesCarousel';

const Section = styled.section`
  background-color: ${({ theme }) => theme.color.background.secondary};
  padding-bottom: 1em;
`;

const Inner = styled.div`
  padding: ${({ theme }) => theme.grid.touchable.gutter}px;
`;

const SectionPackages: React.FC = () => (
  <Section>
    <Inner>
      <H2>
        <FormattedMessage
          defaultMessage="List of all packages"
          description="Touchable packages. Header"
        />
      </H2>
      <Subtitle>
        <FormattedMessage
          defaultMessage="We have prepared several ready-made packages that are easy to install and use"
          description="SectionPackages. Subtitle"
        />
      </Subtitle>
    </Inner>

    <PackagesCarousel />
  </Section>
);

export default SectionPackages;
