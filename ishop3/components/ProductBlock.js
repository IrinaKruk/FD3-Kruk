import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './ProductBlock.css';

class ProductBlock extends React.Component {

   static propTypes = {
      text: PropTypes.string.isRequired,
      productCode: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      residue: PropTypes.number.isRequired,
      delete: PropTypes.func,
      selected: PropTypes.func,
      isSelected: PropTypes.bool,
   };

   selected = () => {
      this.props.selected(this.props.productCode);
   };

   delete = (event) => {
      this.props.delete(this.props.productCode);
      event.stopPropagation();
   };

   render() {

      let orangeAnimal = this.props.isSelected ? { backgroundColor: 'orange' } : null;


      return DOM.tr({
         className: 'product',
         style: orangeAnimal,
         onClick: this.selected,
      },
         DOM.td({ className: 'AnimalText' }, this.props.text),
         DOM.td({ className: 'Img' },
            DOM.div(null,
               DOM.img({ className: 'Img', src: this.props.url }),
            )),
         DOM.td({ className: 'AnimalPrice' }, this.props.price),
         DOM.td({ className: 'AnimalResidue' }, this.props.residue),
         DOM.td(null, DOM.button(
            { className: 'productdelete', type: 'button', value: this.props.productCode, onClick: this.delete }, 'Delete')),
      )

   }
};

export default ProductBlock;