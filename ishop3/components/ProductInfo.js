import React from 'react';
import PropTypes from 'prop-types';

import './ProductInfo.css';

class ProductInfo extends React.Component {

   static propTypes = {
      productInfo: PropTypes.arrayOf(
         PropTypes.shape({
            text: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            residue: PropTypes.number.isRequired,
         })
      ),
      isSelected: PropTypes.number,
   };

   render() {

      return this.props.isSelected != null ? (
         <div className="cardproduct">
            <h2>{this.props.productInfo[this.props.isSelected].text}</h2>
            <p>{this.props.productInfo[this.props.isSelected].text}</p>
            <p>{this.props.productInfo[this.props.isSelected].price}</p>
         </div>
      ) : null;

   }
}

export default ProductInfo;