import * as React from 'react';
import styled from 'styled-components';

import SectionWhatsIsIt from './SectionWhatsIsIt';
import SectionPackages from './SectionPackages';
import SectionMain from './SectionMain';
import SectionWhy from './SectionWhy';
import SectionOpenSource from './SectionOpenSource';
import SectionTypescript from './SectionTypescript';

const Main = styled.main`
  margin-top: -3.4rem;
  padding-bottom: 1rem;
  position: relative;
  flex: 1;
`;

const HomeTouchable: React.FC = () => (
  <>
    <Main>
      <SectionMain />
      <SectionWhatsIsIt />
      <SectionWhy />
      <SectionPackages />
      <SectionOpenSource />
      <SectionTypescript />
    </Main>
  </>
);

export default HomeTouchable;
