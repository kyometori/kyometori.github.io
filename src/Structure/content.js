import React from 'react';
import Mainpage from './pages/mainpage';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import { Switch, Route } from 'react-router-dom';

export default function Content() {
  return (
    <div id='content'>
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/:path" render={props => props.match.params.path} />
      </Switch>
    </div>
  );
}
