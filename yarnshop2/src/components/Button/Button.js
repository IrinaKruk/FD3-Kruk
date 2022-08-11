import React from 'react';
import { Link } from "react-router-dom";

function Button({ onFavorite, onClickCard, onSearchInput, searchValue }) {
   return <div className='container__btn'>
      <div className='btncard search'>
         <input onChange={onSearchInput} value={searchValue} placeholder='Поиск товара' />
         <img src="./public/img/search.svg" alt="search" />
      </div>
      <Link to='/favorite'>
         <button onClick={onFavorite} className='btncard favorite'>
            <img src="./public/img/favorite.svg" alt="favorite" />
            Избранное
         </button>
      </Link>
      <button onClick={onClickCard} className='btncard favorite'>
         <img src="./public/img/cart.svg" alt="cart" />
         Корзина
      </button>
   </div>
}

export default Button;