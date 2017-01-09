//Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//CSS
require('./styles.css');

//Components
import NavBar from './nav_bar/nav_bar';
import Questions from './questions/questions';
import Assignments from './assignments/assignments';

//Routes for React-Router
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={NavBar}>
        <Route path="/questions" component={Questions}/>
        <Route path="/assignments" component={Assignments}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
