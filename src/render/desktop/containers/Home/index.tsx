import * as React from 'react';

import AppBar from '~/render/desktop/components/AppBar';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';

import SectionMain from './SectionMain';
import SectionWhatIsIt from './SectionWhatIsIt';

const HomePageDesktop: React.FC = () => (
  <>
    <Meta />
    <AppBar />
    <SectionMain />
    <SectionWhatIsIt />
    <Footer />
  </>
);

export default HomePageDesktop;
