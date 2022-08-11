import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

import Home from '../Home/Home.jsx';
import Favorite from '../Favorite/Favorite.jsx';
import Pageone from '../Pageone/Pageone.jsx';
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';

function Shop() {

   const [cardOpen, setCardOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);


   const onRemoveItemsInCart = (id) => {
      //console.log(id);
      axios.delete(`https://62ece9f2818ab252b60569c2.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
   };

   return <div className="wrapper">
      {cardOpen && <Drawer items={cartItems}
         onClose={() => setCardOpen(false)}
         onRemove={onRemoveItemsInCart} />}

      <Header />
      <Router>
         <Route path='/' exact>
            <Home setCartItems={setCartItems} setCardOpen={setCardOpen} />
         </Route>
         <Route path='/favorite' exact>
            <Favorite setCartItems={setCartItems} setCardOpen={setCardOpen} />
         </Route>
         <Route path='/catalog/1' exact>
            <Pageone setCartItems={setCartItems} setCardOpen={setCardOpen} />
         </Route>
      </Router>

   </div>
}

export default Shop;



