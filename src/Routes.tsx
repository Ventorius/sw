import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles/globalStyles';

import Landing from './pages/Landing';
import People from './pages/People';
import Person from './pages/Person';

const Routes: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/people">
            <People />
          </Route>

          <Route path="/people/:id">
            <Person />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
