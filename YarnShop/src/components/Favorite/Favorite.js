import React from 'react';
import ShopContext from '../../context';
import Card from '../Card/Card';

import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;

const BounceInAnimationDiv = styled.div`
  animation: 1.2s ${bounceInAnimation};
`;

function Favorite() {

   const { favoriteItems,
      onAddItemToFavorite
   } = React.useContext(ShopContext);

   return (
      <div className='content'>
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
                           onLike={onAddItemToFavorite}
                        />
                     ))}
               </div>
            ) : (
               <BounceInAnimationDiv>
                  <div className='empty'>
                     <p className='empty__cart'>Избранных товаров нет!</p>
                     <p className='empty__add'>Добавьте какой-нибудь товар в избранное!</p>
                  </div>
               </BounceInAnimationDiv>
            )}
         </div>
      </div>)
}

export default Favorite;