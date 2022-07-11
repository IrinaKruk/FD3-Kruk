import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './ShopBlock.css';

import ProductBlock from './ProductBlock';

class ShopBlock extends React.Component {

   static propTypes = {
      text: PropTypes.string.isRequired, // текст 
      products: PropTypes.arrayOf(
         PropTypes.shape({
            code: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            residue: PropTypes.number.isRequired,
         })
      )
   };

   state = {
      products: this.props.products,
      isSelected: null,
   };

   selectedProduct = (productCode) => {
      this.setState({ isSelected: productCode }, null);
   };

   deleteProduct = (productCode) => {
      if (confirm("Вы точно хотите удалить?")) {
         let newProductList = this.state.products.filter((animal) => animal.code !== productCode);
         this.setState({ products: newProductList }, null);
      }
   };

   render() {

      const productsCode = this.state.products.map((animal) =>
         React.createElement(ProductBlock, {
            text: animal.text,
            key: animal.code,
            productCode: animal.code,
            url: animal.url,
            price: animal.price,
            residue: animal.residue,
            delete: this.deleteProduct,
            selected: this.selectedProduct,
            isSelected: animal.code === this.state.isSelected,
         })
      );

      let tableHeader = DOM.tr({ className: 'AnimalText' },
         DOM.th(null, 'Animal name'),
         DOM.th(null, 'Url'),
         DOM.th(null, 'Price'),
         DOM.th(null, 'Residue'),
         DOM.th(null, 'Delete'),
      );


      return DOM.div({ className: 'ShopBlock' },
         DOM.div({ className: 'AnimalHeader' }, this.props.text),
         DOM.table({ className: 'Table' },
            DOM.tbody(null, tableHeader, productsCode)
         )
      );
   }
}

export default ShopBlock;