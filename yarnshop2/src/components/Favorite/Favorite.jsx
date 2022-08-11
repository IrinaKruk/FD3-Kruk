import React, { Component, useState } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import Button from '../Button/Button';

function Favorite({ setCartItems, setCardOpen, onClose }) {

   const [items, setItems] = useState([]);
   const [favoriteItems, setFavoriteItems] = useState([]);
   const [searchValue, setSearchValue] = useState('');

   const onClickCard = () => setCardOpen(true);

   React.useEffect(() => {
      axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/items').then((result) => {
         setItems(result.data);
      });
      axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/cart').then((result) => {
         setCartItems(result.data);
      });
      axios.get('https://62ece9f2818ab252b60569c2.mockapi.io/favorite').then((result) => {
         setFavoriteItems(result.data);
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

   return <div className='content'>
      <Button onFavorite={onAddItemToFavorite} onClickCard={onClickCard} onSearchInput={onSearchInput} searchValue={searchValue} />
      <div>
         <h3 className='catalog'>Мои закладки</h3>

         {favoriteItems.length > 0 ? (
            <div className='container__card'>
               {favoriteItems
                  .map((item, index) => (
                     <Card
                        key={index}
                        id={item.id}
                        title={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        favorited={true}
                        onLike={(obj) => onAddItemToFavorite(obj)}
                        onPlus={(obj) => onAddItemtoCard(obj)}
                     />
                  ))}
            </div>
         ) : (
            <div className='empty'>
               <p className='empty__cart'>Избранных товаров нет!</p>
               <p className='empty__add'>Добавьте какой-нибудь товар в избранное!</p>
            </div>
         )}
      </div>
   </div>
}

export default Favorite;