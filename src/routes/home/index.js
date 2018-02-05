import React from 'react';
import { Route } from 'react-router-dom';
import Bundle from '../../components/Bundle';
import Loading from '../../components/Loading';
import Home from 'bundle-loader?lazy!./containers/Home';

const home = (
  <Route
    key="home"
    exact
    path="/"
    render={() => <Bundle load={Home}>{(Comp) => Comp ? <Comp /> : <Loading visible={true} />}</Bundle>} />
);

export default home;
