let ProductBlock = React.createClass({

   displayName: 'ProductBlock',

   propTypes: {
      text: React.PropTypes.string.isRequired,
      code: React.PropTypes.number.isRequired,
      productCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      residue: React.PropTypes.number.isRequired,
      delete: React.PropTypes.func,
      selected: React.PropTypes.func,
      isSelected: React.PropTypes.bool,
   },

   selected: function () {
      this.props.selected(this.props.productCode);
   },

   delete: function (event) {
      this.props.delete(this.props.productCode);
      event.stopPropagation();
   },

   render: function () {

      let orangeAnimal = this.props.isSelected ? { backgroundColor: 'orange' } : null;


      return React.DOM.tr({
         className: 'product',
         style: orangeAnimal,
         onClick: this.selected,
      },
         React.DOM.td({ className: 'AnimalText' }, this.props.text),
         React.DOM.td({ className: 'Img' },
            React.DOM.div(null,
               React.DOM.img({ className: 'Img', src: this.props.url }),
            )),
         React.DOM.td({ className: 'AnimalPrice' }, this.props.price),
         React.DOM.td({ className: 'AnimalResidue' }, this.props.residue),
         React.DOM.td(null, React.DOM.button(
            { className: 'productdelete', type: 'button', value: this.props.productCode, onClick: this.delete }, 'Delete')),
      )


   },
});