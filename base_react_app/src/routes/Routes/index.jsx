import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login, Home, Settings } from '../../containers';
import { LOGIN, HOME, SETTINGS } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={LOGIN} component={Login} />
    <Route exact path={HOME} component={Home} />
    <Route exact path={SETTINGS} component={Settings} />
  </Switch>
);

export default Routes;
