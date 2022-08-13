import React from 'react';

//import ShopContext from '../../context';
import styled, { keyframes } from 'styled-components';
import { fadeInRightBig } from 'react-animations';

const fadeInRightBigAnimation = keyframes`${fadeInRightBig}`;

const FadeInRightBigAnimationDiv = styled.div`
  animation: 0.5s ${fadeInRightBigAnimation};
`;

function Drawer({ onClose, onRemoveItemsInCart, items = [] }) {

   const total = items.reduce((sum, obj) => obj.price + sum, 0);

   return (
      <FadeInRightBigAnimationDiv>
         <div className='overlay'>

            <div className='drawer'>

               <div className='btnclose'>
                  <b>
                     Моя Корзина
                  </b>
                  <img onClick={onClose}
                     width={15}
                     height={15}
                     src="./public/img/btn-close.png" alt="Close" />
               </div>
               <p></p>

               {items.length > 0 ? (
                  <div>
                     <div className='items'>
                        {items.map((obj, index) => (
                           <div key={index}
                              className='cart__item'>
                              <img width={70}
                                 height={70}
                                 src={obj.imageUrl}
                                 alt="Foto" />
                              <span>{obj.name}</span>
                              <b>{obj.price} руб.</b>
                              <img onClick={() => onRemoveItemsInCart(obj.id)}
                                 className='remove'
                                 width={17}
                                 height={15}
                                 src="./public/img/empty.png"
                                 alt="Remove cart" />
                           </div>
                        ))}
                     </div>
                     <div className='total'>
                        <div className='totalitem'>
                           <span>Итого</span>
                           <b>{total} руб</b>
                        </div>
                        <button>
                           Оформить заказ
                        </button>
                     </div>
                  </div>
               ) : (
                  <div className='empty'>
                     <p className='empty__cart'>Корзина пустая</p>
                     <p className='empty__add'>Добавьте какой-нибудь товар в корзину!</p>
                     <button onClick={onClose}>
                        Вернуться назад
                     </button>
                  </div>
               )
               }

            </div>

         </div>
      </FadeInRightBigAnimationDiv>
   )
}

export default Drawer;