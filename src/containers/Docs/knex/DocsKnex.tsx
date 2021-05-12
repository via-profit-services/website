import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import Introduction from '~/containers/Docs/core/v1/introduction/Loadable';
import Api from '~/containers/Docs/core/v1/api/Loadable';
import NotFound from '~/containers/NotFound/Loadable';

const DocsCore: React.FC = () => (
  <>
    Core docs
  </>
);

export default DocsCore;
