import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

let arr = require('./arr.json');

ReactDOM.render(
   <Filter words={arr} />
   , document.getElementById('container')
);

