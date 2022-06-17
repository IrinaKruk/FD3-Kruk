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

   render: function () {

      let productsCode = this.props.products.map((animal) =>
         React.DOM.tr({ key: animal.code },
            React.DOM.td({ className: 'AnimalText' }, animal.text),
            React.DOM.td({ className: 'Img' },
               React.DOM.div({ key: animal.code },
                  React.DOM.img({ className: 'Img', src: animal.url }),
               )),
            React.DOM.td({ className: 'AnimalPrice' }, `Price: ${animal.price}`),
            React.DOM.td({ className: 'AnimalResidue' }, `Residue: ${animal.residue}`),
         )
      );

      return React.DOM.div({ className: 'ShopBlock' },
         React.DOM.div({ className: 'AnimalHeader' }, this.props.text),
         React.DOM.table({ className: 'Table' }, React.DOM.tbody(null, productsCode)
         )
      )
   },
});