import React, { useState } from 'react';
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

   //React.useEffect(() => {
   //   async function fetchData() {

   //      const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
   //         axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/cart'),
   //         axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/favorite'),
   //         axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/items'),
   //      ]);

   //      setIsLoading(false);
   //      setCartItems(cartResponse.data);
   //      setFavoriteItems(favoritesResponse.data);
   //      setItems(itemsResponse.data);

   //   }
   //   fetchData();
   //}, []);

   React.useEffect(() => {

      axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/cart').then((result) => {
         setCartItems(result.data);
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

   const onAddItemtoCard = (obj) => {
      axios.post('https://62ece9f2818ab252b60569c2.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj]);
   };

   const onAddItemToFavorite = (obj) => {
      if (favoriteItems.find(favoriteObj => favoriteObj.id == obj.id)) {
         axios.delete(`https://62ece9f2818ab252b60569c2.mockapi.io/favorite/${obj.id}`);
         setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
         axios.post('https://62ece9f2818ab252b60569c2.mockapi.io/favorite', obj);
         setFavoriteItems(prev => [...prev, obj]);
      }
   };

   const onSearchInput = (event) => {
      setSearchValue(event.target.value);
   };

   const onRemoveItemsInCart = (id) => {
      //console.log(id);
      axios.delete(`https://62ece9f2818ab252b60569c2.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
   };

   const isItemAdd = (id) => {
      return cartItems.some((obj) => Number(obj.id) === Number(id));
   }


   return (
      <ShopContext.Provider value={{
         items,
         cartItems,
         favoriteItems,
         isItemAdded,
         onAddItemToFavorite,
         onAddItemtoCard,
         setCardOpen,
         setCartItems,
      }}>
         <div className="wrapper">
            {cardOpen && <Drawer items={cartItems}
               onClose={() => setCardOpen(false)}
               onRemove={onRemoveItemsInCart} />}

            <Header onClickCard={() => setCardOpen(true)} />

            <Switch>
               <Route path='/' exact>
                  <Home items={items}
                     cartItems={cartItems}
                     onSearchInput={onSearchInput}
                     searchValue={searchValue}
                     onAddItemToFavorite={onAddItemToFavorite}
                     onAddItemtoCard={onAddItemtoCard}
                     setCartItems={setCartItems}
                     setCardOpen={setCardOpen}
                     isLoading={isLoading} />
               </Route>
               <Route path='/favorite' exact>
                  <Favorite onAddItemToFavorite={onAddItemToFavorite} />
               </Route>
               <Route path='/catalog/page/1' exact>
                  <Pageone items={items}
                     onSearchInput={onSearchInput}
                     searchValue={searchValue}
                     onAddItemToFavorite={onAddItemToFavorite}
                     onAddItemtoCard={onAddItemtoCard}
                     setCartItems={setCartItems}
                     setCardOpen={setCardOpen} />
               </Route>
               <Route path='/catalog/page/2' exact>
                  <Pagetwo items={items}
                     onSearchInput={onSearchInput}
                     searchValue={searchValue}
                     onAddItemToFavorite={onAddItemToFavorite}
                     onAddItemtoCard={onAddItemtoCard}
                     setCartItems={setCartItems}
                     setCardOpen={setCardOpen} />
               </Route>
               <Route path='/catalog/page/3' exact>
                  <Pagethree items={items}
                     onSearchInput={onSearchInput}
                     searchValue={searchValue}
                     onAddItemToFavorite={onAddItemToFavorite}
                     onAddItemtoCard={onAddItemtoCard}
                     setCartItems={setCartItems}
                     setCardOpen={setCardOpen} />
               </Route>
            </Switch>

         </div>
      </ShopContext.Provider>
   )
}

export default Shop;



