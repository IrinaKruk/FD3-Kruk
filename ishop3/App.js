import React from 'react';
import ReactDOM from 'react-dom';

import ShopBlock from './components/ShopBlock';

let shopText = 'Shop "Animal" ';
let shopArr = require('./animal.json');

ReactDOM.render(
   React.createElement(ShopBlock, { text: shopText, products: shopArr }),
   document.getElementById('ishop')
);

