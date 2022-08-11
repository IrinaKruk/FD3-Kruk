import React, { useState } from 'react';

import Controls from './components/Controls';
import List from './components/List';

import './Filter.css';

export default props => {

   //const [words, setWords] = useState(props);

   //const [isSort, setSort] = useState(false);

   //const [searchLetters, setReset] = useState('');

   return (
      <div>
         <Controls />
         <List />
      </div>
   );
}






