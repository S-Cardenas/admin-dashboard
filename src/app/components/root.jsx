//Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//Components
import NavBar from './nav_bar/nav_bar';

//CSS
require('./styles.css');

//Routes for React-Router
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={NavBar}>


      </Route>
    </Router>
  </Provider>
);

export default Root;
