import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

import Header from '~/components/desktop/Header';
import Footer from '~/components/desktop/Footer';
import Meta from '~/components/both/Meta';
import ScrollTopButton from '~/components/desktop/ScrollTopButton';

import SectionMain from './SectionMain';
import SectionWhatIsIt from './SectionWhatIsIt';
import SectionWhy from './SectionWhy';
import SectionPackages from './SectionPackages';
import SectionOpenSource from './SectionOpenSource';
import SectionTypescript from './SectionTypescript';

const Main = styled.main`
  margin-top: -3.188rem;
  position: relative;
`;

const HomeDesktop: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <SectionMain />
      <SectionWhatIsIt />
      <SectionWhy />
      <SectionPackages />
      <SectionOpenSource />
      <SectionTypescript />
    </>
  );
};

export default HomeDesktop;
