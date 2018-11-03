import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './components/AboutUs';
import App from './components/App';
import Footer from './components/Footer';
import Header from './components/Header';
import WhatWeDo from './components/WhatWeDo';


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
      <HashRouter>
        <div className="container-fluid">
          <Route component= {App} />
          <Switch>
            <Route exact={true} path="/" component={Header} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/what-we-do" component={WhatWeDo} />
          </Switch>
          <Footer/>
        </div>
      </HashRouter>
  );
}