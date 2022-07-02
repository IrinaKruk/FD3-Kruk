let ShopBlock = React.createClass({

   displayName: 'ShopBlock',

   propTypes: {
      text: React.PropTypes.string.isRequired, // текст 
      products: React.PropTypes.arrayOf(
         React.PropTypes.shape({
            code: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            residue: React.PropTypes.number.isRequired,
         })
      )
   },

   getInitialState: function () {
      return {
         products: this.props.products,
         isSelected: null,
      }
   },

   selectedProduct: function (productCode) {
      this.setState({ isSelected: productCode }, null);
   },

   deleteProduct: function (productCode) {
      if (confirm("Вы точно хотите удалить?")) {
         let newProductList = this.state.products.filter((animal) => animal.code !== productCode);
         this.setState({ products: newProductList }, null);
      }
   },

   render: function () {

      let productsCode = this.state.products.map((animal) =>
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

      let tableHeader = React.DOM.tr({ className: 'AnimalText' },
         React.DOM.th(null, 'Animal name'),
         React.DOM.th(null, 'Url'),
         React.DOM.th(null, 'Price'),
         React.DOM.th(null, 'Residue'),
         React.DOM.th(null, 'Delete'),
      );


      return React.DOM.div({ className: 'ShopBlock' },
         React.DOM.div({ className: 'AnimalHeader' }, this.props.text),
         React.DOM.table({ className: 'Table' },
            React.DOM.tbody(null, tableHeader, productsCode)
         )
      )
   }
});