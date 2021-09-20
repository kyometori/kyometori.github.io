import React from 'react';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import { Switch, Route } from 'react-router-dom';

export default function Content() {
  return (
    <div id='content'>
      <Switch>
        <Route exact path="/">
          <h1>WIP</h1>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/:path" render={props => props.match.params.path} />
      </Switch>
    </div>
  );
}
