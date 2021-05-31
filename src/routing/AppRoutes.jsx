import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from '../pages/login/Login';
import Products from '../pages/products/Products';
import Header from '../components/header/header.component';


import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <div>
      <Header />
    <Switch>
      <Route path={AppRoute.home} exact component={Products} />
      {/* <Route path={AppRoute.login} component={Login} /> */}

      <Redirect to={AppRoute.home} />
    </Switch>
    </div>
  );
};
