import * as React from 'react';

import Header from '~/render/desktop/components/Header';
import Footer from '~/render/desktop/components/Footer';
import Meta from '~/render/desktop/components/Meta';

import SectionMain from './SectionMain';
import SectionWhatIsIt from './SectionWhatIsIt';
import SectionWhy from './SectionWhy';
import SectionPackages from './SectionPackages';

const HomePageDesktop: React.FC = () => (
  <>
    <Meta />
    <Header variant="home-page" />
    <main>
      <SectionMain />
      <SectionWhatIsIt />
      <SectionWhy />
      <SectionPackages />
    </main>
    <Footer />
  </>
);

export default HomePageDesktop;
