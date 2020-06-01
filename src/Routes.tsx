import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles/globalStyles';

import Landing from './pages/Landing';
import Starships from './pages/Starships';
import Starship from './pages/Starship';

const Routes: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/starships">
            <Starships />
          </Route>

          <Route path="/starships/:id">
            <Starship />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
