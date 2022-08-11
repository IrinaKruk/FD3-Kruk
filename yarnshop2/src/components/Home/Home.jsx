import React, { useState } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import Button from '../Button/Button';

function Home({ setCartItems, setCardOpen }) {

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
   }, []);

   const onAddItemtoCard = (obj) => {
      axios.post('https://62ece9f2818ab252b60569c2.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj]);
   };

   const onAddItemToFavorite = (obj) => {
      axios.post('https://62ece9f2818ab252b60569c2.mockapi.io/favorite', obj);
      setFavoriteItems(prev => [...prev, obj]);
   };

   const onSearchInput = (event) => {
      setSearchValue(event.target.value);
   };

   return <div className='content'>
      <Button onClickCard={onClickCard} onSearchInput={onSearchInput} searchValue={searchValue} />
      <div>
         <h3 className='catalog'>Каталог пряжи</h3>
         <p>Постраничный просмотр</p>
         <div className='container__card'>
            {items
               .filter((item => item.name.toLowerCase().includes(searchValue)))
               .map((item, index) => (
                  <Card
                     key={index}
                     title={item.name}
                     price={item.price}
                     imageUrl={item.imageUrl}
                     id={item.id}
                     onLike={(obj) => onAddItemToFavorite(obj)}
                     onPlus={(obj) => onAddItemtoCard(obj)}
                  />
               ))}
         </div>
      </div>
   </div>
}

export default Home;