import * as React from 'react';
import styled from 'styled-components';

import SectionPackages from './SectionPackages';
import SectionMain from './SectionMain';
import SectionWhy from './SectionWhy';
import SectionOpenSource from './SectionOpenSource';
import SectionTypescript from './SectionTypescript';

const Main = styled.main`
  margin-top: -51px;
  position: relative;
`;

const HomePageDesktop: React.FC = () => (
  <>
    <Main>
      <SectionMain />
      <SectionPackages />
      <SectionWhy />
      <SectionOpenSource />
      <SectionTypescript />
    </Main>
  </>
);

export default HomePageDesktop;
