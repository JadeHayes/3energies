import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './components/AboutUs';
import App from './components/App';
import Footer from './components/Footer';
import Header from './components/Header';
import Local from './components/Local';
import Testimonials from './components/Testimonials';


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
      <HashRouter>
        <div className="container-fluid">
          <Route component= {App} />
          <Switch>
            <Route exact={true} path="/" component={ Header } />
            <Route path="/about-us" component={ AboutUs } />
            <Route path="/testimonials" component={ Testimonials } />
            <Route path="/local-resources" component={ Local } />
          </Switch>
          <Footer/>
        </div>
      </HashRouter>
  );
}