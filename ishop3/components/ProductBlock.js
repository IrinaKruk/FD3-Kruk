import React from 'react';
import PropTypes from 'prop-types';

import './ProductBlock.css';

class ProductBlock extends React.Component {

   static propTypes = {
      text: PropTypes.string.isRequired,
      productCode: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      residue: PropTypes.number.isRequired,
      cbdelete: PropTypes.func,
      cbedit: PropTypes.func,
      cbselected: PropTypes.func,
      isSelected: PropTypes.number,
   };

   isSelected = () => {
      this.props.cbselected(this.props.productCode);
   };

   delete = (event) => {
      this.props.cbdelete(this.props.productCode);
      event.stopPropagation();
   };

   edit = (event) => {
      this.props.cbedit(this.props.productCode);
      event.stopPropagation();
   };

   render() {

      return (
         <tr className={this.props.isSelected == this.props.productCode ?
            "product select" : "product"
         }
            onClick={this.isSelected} >
            <td className="animaltext">{this.props.text}</td>
            <td className="img" >
               <div>
                  <img className="img" src={this.props.url} />
               </div>
            </td>
            <td className="animalprice">{this.props.price}</td>
            <td className="animalresidue">{this.props.residue}</td>
            <td>
               <button className='productdelete' type='button'
                  value={this.props.productCode} onClick={this.edit}>Edit</button>
            </td>
            <td>
               <button className='productdelete' type='button'
                  value={this.props.productCode} onClick={this.delete}>Delete</button>
            </td>
         </tr>
      )

   }
}

export default ProductBlock;