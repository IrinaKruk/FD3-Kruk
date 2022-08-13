import React from 'react';
import { Link } from "react-router-dom";

import ShopContext from '../../context';

import Card from '../Card/Card';

function Home() {

   const { items,
      searchValue,
      onSearchInput,
      onAddItemToFavorite,
      onAddItemtoCard,
      isLoading
   } = React.useContext(ShopContext);

   return <div className='content'>
      <div>
         <h3 className='catalog'>Каталог пряжи</h3>
         <Link to='/catalog/page/1'>
            <button className='btncard favorite'>Постраничный просмотр</button>
         </Link>
         <div className='btncard search'>
            <input onChange={onSearchInput} value={searchValue} placeholder='Поиск товара' />
            <img src="./public/img/search.svg" alt="search" />
         </div>
         <div className='container__card'>

            {(items.filter((item => item.name.toLowerCase().includes(searchValue.toLowerCase()))))
               .map((item, index) => (

                  <Card
                     key={index}
                     title={item.name}
                     price={item.price}
                     imageUrl={item.imageUrl}
                     id={item.id}
                     parentId={item.parentId}
                     onLike={(obj) => onAddItemToFavorite(obj)}
                     onPlus={(obj) => onAddItemtoCard(obj)}
                     load={isLoading}
                  />

               ))
            }

         </div>
      </div>
   </div>
}

export default Home;