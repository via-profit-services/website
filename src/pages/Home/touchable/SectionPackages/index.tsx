import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import ChevronDoubleRightIcon from 'mdi-react/ChevronDoubleRightIcon';

import H2 from '~/components/both/Typography/H2';
import Subtitle from '~/components/both/Typography/Subtitle';
import PackagesCarousel from './PackagesCarousel';

const Section = styled.section`
  background-color: ${({ theme }) => theme.color.background.secondary};
  padding-bottom: 1em;
`;

const Inner = styled.div`
  padding: ${({ theme }) => theme.grid.touchable.gutter}px;
`;

const MoreLinkContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
`;

const MoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1em 2em;
  color: ${({ theme }) => theme.color.text.secondary};
  border: 1px solid currentColor;
  border-radius: 36px;
  text-decoration: none;
  & > svg {
    margin-left: 0.2em;
  }
  &:visited {
    color: currentColor;
  }
  &:hover {
    color: ${({ theme }) => theme.color.accent.secondary};
  }
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

    <MoreLinkContainer>
      <MoreLink to="/packages">
        <FormattedMessage
          defaultMessage="See more packages"
          description="SectionPackages. Link to packages page"
        />
        <ChevronDoubleRightIcon size="1em" color="currentColor" />
      </MoreLink>
    </MoreLinkContainer>
  </Section>
);

export default SectionPackages;
