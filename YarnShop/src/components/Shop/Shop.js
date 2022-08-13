import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

import ShopContext from '../../context';

import Home from '../Home/Home';
import Favorite from '../Favorite/Favorite';
import Pageone from '../Pageone/Pageone';
import Pagetwo from '../Pagetwo/Pagetwo';
import Pagethree from '../Pagethree/Pagethree';

import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';

function Shop() {

   const [cardOpen, setCardOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [items, setItems] = useState([]);
   const [favoriteItems, setFavoriteItems] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {

      axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/cart').then((result) => {
         setCartItems(result.data);
         console.log(result.data);
         setIsLoading(false);
      });

      axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/favorite').then((result) => {
         setFavoriteItems(result.data);
      });

      axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/items').then((result) => {
         setItems(result.data);
         console.log(result.data);
      });

   }, []);

   const onAddItemtoCard = async (obj) => {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
         setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
         await axios.delete(`https://62ece9f2818ab252b60569c2.mockapi.io/cart/${findItem.id}`);
      } else {
         setCartItems((prev) => [...prev, obj]);
         const { data } = await axios.post('https://62ece9f2818ab252b60569c2.mockapi.io/cart', obj);
         setCartItems((prev) =>
            prev.map((item) => {
               if (item.parentId === data.parentId) {
                  return {
                     ...item,
                     id: data.id,
                  };
               }
               return item;
            }),
         );
      }
   };

   const onAddItemToFavorite = async (obj) => {
      if (favoriteItems.find(favoriteObj => Number(favoriteObj.id) === Number(obj.id))) {
         await axios.delete(`https://62ece9f2818ab252b60569c2.mockapi.io/favorite/${obj.id}`);
         setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
         const { data } = await axios.post('https://62ece9f2818ab252b60569c2.mockapi.io/favorite', obj);
         setFavoriteItems(prev => [...prev, data]);
      }
   };

   const onSearchInput = (event) => {
      setSearchValue(event.target.value);
   };

   const onRemoveItemsInCart = async (id) => {
      console.log(id);
      await axios.delete(`https://62ece9f2818ab252b60569c2.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
   };

   const isItemAdd = (id) => {
      return cartItems.some((obj) => Number(obj.parentId) === Number(id));
   }


   return (
      <ShopContext.Provider value={{
         items,
         cartItems,
         favoriteItems,
         isItemAdd,
         onAddItemToFavorite,
         onAddItemtoCard,
         setCardOpen,
         setCartItems,
         searchValue,
         onSearchInput,
         isLoading,
         onRemoveItemsInCart
      }}>
         <div className="wrapper">

            {cardOpen && <Drawer items={cartItems}
               onClose={() => setCardOpen(false)}
               onRemoveItemsInCart={onRemoveItemsInCart}
               cardOpen={cardOpen}
            />}

            <Header onClickCard={() => setCardOpen(true)} />
            <Switch>
               <Route path='/' exact>
                  <Home />
               </Route>
               <Route path='/favorite' exact>
                  <Favorite />
               </Route>
               <Route path='/catalog/page/1' exact>
                  <Pageone />
               </Route>
               <Route path='/catalog/page/2' exact>
                  <Pagetwo />
               </Route>
               <Route path='/catalog/page/3' exact>
                  <Pagethree />
               </Route>
            </Switch>

         </div>
      </ShopContext.Provider>
   )
}

export default Shop;



