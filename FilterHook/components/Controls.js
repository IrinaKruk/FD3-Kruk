import React, { useState } from 'react';

export default props => {

   const [words, setWords] = useState(props);

   const [isSort, setSort] = useState(false);

   const [searchLetters, setSearchLetters] = useState('');

   const [effectiveArr, setEffectiveArr] = useState(props);

   function sortAlphabetically(event) {
      setSort(event.target.checked);
   }

   function sortWords(event) {
      setSearchLetters(event.target.value);

   }

   function sortArr() {

      let arr = words.concat();
      let searchLetters = searchLetters;
      let sort = isSort;

      if (sort) {
         arr = arr.sort();
      }

      if (searchLetters) {
         arr = arr.filter((word) => {
            if (word.includes(searchLetters)) {
               return word;
            }
         });
      }
      setEffectiveArr(arr);
   }


   return (
      <div>
         <input type='checkbox'
            checked={isSort}
            onChange={sortAlphabetically}>
         </input>

         <input type='text'
            value={setSearchLetters}
            onChange={sortArr({ searchLetters: event.target.value })}>
         </input>

         <button onClick={sortArr({ isSort: false, searchLetters: "" })}></button>
      </div >
   );
}
