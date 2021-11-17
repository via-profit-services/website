import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H2 from '~/components/both/Typography/H2';
import Paragraph from '~/components/both/Typography/Paragraph';
import dotssrc from '~/../assets/images/dots-grey.svg';
import circlessrc from '~/../assets/images/circles.svg';
import tslogosrc from '~/../assets/images/typescript-logo.svg';

const Section = styled.section`
  padding: 2rem 0;
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.grid.desktop.safeFrame}px;
  padding: 0 ${({ theme }) => theme.grid.desktop.gutter}px;
  margin: 0 auto;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: -50px;
    width: 72px;
    height: 168px;
    background-image: url(${dotssrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
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

const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 680px) {
    display: none;
  }
`;

const TypescriptLogo = styled.div`
  background-image: url(${tslogosrc});
  background-color: ${({ theme }) => theme.color.background.secondary};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 130px;
  height: 130px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  opacity: 0.9;
`;

const TextWrapper = styled.div`
  margin-top: 1rem;
`;

const SectionTypescript: React.FC = () => (
  <Section>
    <Inner>
      <LeftSide>
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
      </LeftSide>
      <RightSide>
        <TypescriptLogo />
      </RightSide>
    </Inner>
  </Section>
);

export default SectionTypescript;
