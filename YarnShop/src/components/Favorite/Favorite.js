import React from 'react';

import Card from '../Card/Card';

function Favorite({ favoriteItems, onAddItemToFavorite }) {

   return <div className='content'>
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
            <div className='empty'>
               <p className='empty__cart'>Избранных товаров нет!</p>
               <p className='empty__add'>Добавьте какой-нибудь товар в избранное!</p>

            </div>
         )}
      </div>
   </div>
}

export default Favorite;