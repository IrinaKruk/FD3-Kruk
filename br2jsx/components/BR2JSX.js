import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

   static propTypes = {
      text: PropTypes.string.isRequired,
   };

   render() {

      let currtext = this.props.text.split(/<br *\/?>/);
      let result = [];

      for (let i = 0; i < currtext.length; i++) {

         if (i) {
            result.push(<br />);
         }
         result.push(currtext[i]);
      }
      return <div>{result}</div>;
   }
};

export default BR2JSX;
