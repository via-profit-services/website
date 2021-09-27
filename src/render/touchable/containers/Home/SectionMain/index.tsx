import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H1 from '~/render/touchable/components/Typography/H1';

const Section = styled.section``;
const Inner = styled.div`
  padding: ${({ theme }) => theme.grid.touchable.gutter}px;
`;

const SectionMain: React.FC = () => (
  <Section>
    <Inner>
      <H1>
        <FormattedMessage
          defaultMessage="Via Profit services"
          description="Section main touchable. Header"
        />
      </H1>
    </Inner>
  </Section>
);

export default SectionMain;
