import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Shop from './components/Shop/Shop';
import './components/Shop/Shop.css';

ReactDOM.render(
   <Router>
      <Shop />
   </Router>
   ,
   document.getElementById('root'),
);

