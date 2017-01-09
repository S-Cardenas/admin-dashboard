import React from 'react';
import ReactDOM from 'react-dom';

//Load jQuery from node_modules
window.jQuery = window.$ = require('jquery');

//Store and Root Component
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
