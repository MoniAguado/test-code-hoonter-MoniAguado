import React from 'react';
import ReactDOM from 'react-dom';
// import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import './index.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';


ReactDOM.render
  (<HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'));
