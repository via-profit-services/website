import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H2 from '~/render/touchable/components/Typography/H2';
import Paragraph from '~/render/touchable/components/Typography/Paragraph';
import circlessrc from '~/../assets/images/circles.svg';

const Section = styled.section`
  position: relative;
`;

const Inner = styled.div`
  padding: 0 ${({ theme }) => theme.grid.touchable.gutter}px;
  margin: 0 auto;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    top: -2rem;
    width: 60%;
    height: 100%;
    background-image: url(${circlessrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const TextWrapper = styled.div`
  margin-top: 1rem;
`;

const SectionTypescript: React.FC = () => (
  <Section>
    <Inner>
      <H2>
        <FormattedMessage
          defaultMessage="TypeScript support"
          description="Section Typescript. Header"
        />
      </H2>
      <TextWrapper>
        <Paragraph>
          <FormattedMessage
            defaultMessage="Proident eiusmod consequat proident ipsum. Non labore ullamco tempor mollit mollit dolore ipsum exercitation occaecat reprehenderit."
            description="Section Typescript. Paragraph 1"
          />
        </Paragraph>
        <Paragraph>
          <FormattedMessage
            defaultMessage="Proident eiusmod anim enim ea exercitation proident. Mollit mollit dolore reprehenderit exercitation laborum eu amet dolor mollit exercitation labore Lorem exercitation. Reprehenderit qui laborum dolor cillum et velit proident esse aliqua."
            description="Section Typescript. Paragraph 2"
          />
        </Paragraph>
      </TextWrapper>
    </Inner>
  </Section>
);

export default SectionTypescript;
