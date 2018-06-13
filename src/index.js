import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import Items from './components/Items';
import Create from './components/Create';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={Items} />
        <Route exact path='/create' component={Create} />
      </div>
  </Router>,
  document.getElementById('root')
);