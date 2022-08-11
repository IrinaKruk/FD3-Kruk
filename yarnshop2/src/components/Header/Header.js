import React from 'react';
import { Link } from "react-router-dom";

function Header() {
   return (

      <header>
         <div className="container__basic">
            <div>
               <img src="./public/img/phone.svg" alt="Phone" />
               <span>  +7 (924) 765 28 20</span>
            </div>
            <div>
               <img src="./public/img/vector.svg" alt="Vector" />
               <span>  г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”</span>
            </div>
            <div>
               <img src="./public/img/time.svg" alt="Time" />
               <span>  Ежедневно с 10:00 до 19:00</span>
            </div>
         </div>
         <Link to='/'>
            <div className='mainfoto'>
               <div className='mainfoto__container'>
                  <img height={200} className="foto" src="./public/img/yarn.png" alt="Foto" />
                  <img className="hobby" src="./public/img/hobby.png" alt="Hobby" />
               </div>
            </div>
         </Link>
      </header >

   )
}

export default Header;