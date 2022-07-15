import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

   static propTypes = {
      colors: PropTypes.array.isRequired,
   };

   render() {
      let rainbow = this.props.children;

      for (let color of this.props.colors) {
         rainbow = (
            <div style={{ border: `solid 4px ${color}` }}>{rainbow}</div>
         );
      }
      return rainbow;
   }
}

export default RainbowFrame;
