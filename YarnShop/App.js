import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Shop from './src/components/Shop/Shop';
import './src/components/Shop/Shop.css';

ReactDOM.render(
   <Router>
      <Shop />
   </Router>
   ,
   document.getElementById('container'),
);

