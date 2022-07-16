import React from 'react';
import PropTypes from 'prop-types';

import './ShopBlock.css';

import ProductBlock from './ProductBlock';
import ProductInfo from './ProductInfo';

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

   cbselected = (productCode) => {
      this.setState({ isSelected: productCode }, null);
   };

   cbdelete = (productCode) => {
      if (confirm("Вы точно хотите удалить?")) {
         let newProductList = this.state.products.filter((animal) => animal.code !== productCode);
         this.setState({ products: newProductList }, null);
      }
   };

   cbedit = (productCode) => {

   };

   render() {

      const productsCode = this.state.products.map((animal) =>
         <ProductBlock
            text={animal.text} key={animal.code}
            productCode={animal.code}
            url={animal.url}
            price={animal.price}
            residue={animal.residue}
            cbdelete={this.cbdelete}
            cbedit={this.cbedit}
            cbselected={this.cbselected}
            isSelected={this.state.isSelected}
         />
      );

      let tableHeader =
         <tr className='animaltext'>
            <th>Animal name</th>
            <th>Url</th>
            <th>Price</th>
            <th>Residue</th>
            <th>Edit</th>
            <th>Delete</th>
         </tr>;

      let productInfo =
         <ProductInfo
            productInfo={this.state.products}
            isSelected={this.state.isSelected}
         />

      return (
         <div className='shopblock'>
            <div className='animalheader'>
               {this.props.text}
            </div>
            <table className='table'>
               <tbody>
                  {tableHeader}
                  {productsCode}
               </tbody>
            </table>
            <div className="new"><button className='productnew' type='button'
               onClick={this.newproduct}>New product</button></div>
            {productInfo}
         </div>
      );
   }
}

export default ShopBlock;