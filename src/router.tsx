import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './components/AboutUs';
import App from './components/App';
import Intro from './components/Intro';
import WhatWeDo from './components/WhatWeDo';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component= {App} />
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/intro" component={Intro} />
          <Route path="/what-we-do" component={WhatWeDo} />
        </Switch>
      </div>
    </HashRouter>
  );
}