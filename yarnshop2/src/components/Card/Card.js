import React, { useState } from 'react';


function Card({ id, title,
   price, imageUrl, onLike, onPlus, favorited = false }) {

   const [isAdded, setIsAdded] = useState(false);
   const [isFavorite, setIsFavorite] = useState(favorited);

   const onclickPlus = () => {
      onPlus({
         id, title,
         price, imageUrl
      });
      setIsAdded(!isAdded);
   };

   const onClickLike = () => {
      onLike({
         id, title,
         price, imageUrl
      });
      setIsFavorite(!isFavorite);
   };

   //React.useEffect(() => {
   //   console.log('Переменная изменилась');
   //}, [isAdded]);


   return (

      <div className='card'>

         <div className='like'>
            <img onClick={onClickLike} src={isFavorite ? "./public/img/heart like.png" : "./public/img/heart unlike.png"} alt="heart" />
         </div>

         <img width={150} height={150} src={imageUrl} alt="card" />
         <p>{title}</p>
         <div>
            <b>{price} руб.</b>
         </div>

         <button className={isAdded ? 'btncard__added' : 'btncard'} onClick={onclickPlus}>
            <img src="./public/img/cart.svg" alt="cart" />
            <span>{isAdded ? 'В корзине' : 'В корзину'}</span>
         </button>

      </div>
   )
}

export default Card;