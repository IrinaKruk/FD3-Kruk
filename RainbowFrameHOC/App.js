import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton';

let colors = require('./colors.json');;

const withRainbowFrame = (colors) => (Component) => {

   class Rainbow extends React.Component {

      render() {
         let rainbow = <Component {...this.props} />;

         for (let color of colors) {
            rainbow = <div style={{ border: `solid 4px ${color}` }}>{rainbow}</div>
         }
         return rainbow;
      }
   }
   return Rainbow;
};

let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
   <FramedDoubleButton
      caption1="я из лесу"
      caption2="мороз"
      cbPressed={num => alert(num)}>
      вышел, был сильный
   </FramedDoubleButton>
   , document.getElementById('container')
);

