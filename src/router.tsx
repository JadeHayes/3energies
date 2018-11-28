import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './components/AboutUs';
import App from './components/App';
import Certificates from './components/Certificates';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Local from './components/Local';
import Rates from './components/Rates'
import Testimonials from './components/Testimonials';


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
      <HashRouter>
        <div className="container-fluid">
          <Route component= {App} />
          <Switch>
            <Route exact={true} path="/" component={ Header } />
            <Route path="/about-us" component={ AboutUs } />
            <Route path="/rates" component={ Rates } />          
            <Route path="/testimonials" component={ Testimonials } />
            <Route path="/local-resources" component={ Local } />
            <Route path="/contact-us" component={ ContactUs } /> 
            <Route path="/certificates" component={ Certificates } />          
          </Switch>
          <Footer/>
        </div>
      </HashRouter>
  );
}