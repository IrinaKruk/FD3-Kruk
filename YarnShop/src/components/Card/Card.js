import React, { useState } from 'react';
import ContentLoader from "react-content-loader";

function Card({
   id,
   title,
   price,
   imageUrl,
   onLike,
   onPlus,
   favorited = false,
   add = false,
   isLoading = false
}) {

   const [isAdded, setIsAdded] = useState(add);
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
         {
            isLoading ? <ContentLoader
               speed={5}
               width={220}
               height={420}
               viewBox="0 0 220 360"
               backgroundColor="#f3f3f3"
               foregroundColor="#ecebeb"
            >
               <rect x="1" y="-2" rx="9" ry="9" width="200" height="150" />
               <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
               <rect x="20" y="180" rx="9" ry="9" width="160" height="35" />
               <rect x="30" y="66" rx="0" ry="0" width="1" height="0" />
               <rect x="75" y="245" rx="9" ry="9" width="50" height="20" />
               <rect x="7" y="295" rx="9" ry="9" width="185" height="50" />
            </ContentLoader> :
               (
                  <div>
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
      </div>
   )
}

export default Card;