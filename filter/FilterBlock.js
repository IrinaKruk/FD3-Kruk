let FilterBlock = React.createClass({

   displayName: 'FilterBlock',

   propTypes: {
      words: React.PropTypes.array.isRequired,
   },

   getInitialState: function () {
      return {
         effectiveArr: this.props.words,
         isSort: false,
         searchLetters: "",
      };
   },

   sortWords: function (event) {
      this.setState({ searchLetters: event.target.value }, this.sortArr);
   },

   sortAlphabetically: function (event) {
      this.setState({ isSort: event.target.checked }, this.sortArr);
   },

   reset: function () {
      this.setState({ isSort: false, searchLetters: "" }, this.sortArr);
   },

   sortArr: function () {

      let arr = this.props.words.concat();
      let searchLetters = this.state.searchLetters;
      let sort = this.state.isSort;

      if (sort) {
         arr = arr.sort();
      }

      if (searchLetters) {
         arr = arr.filter((word) => {
            if (word.includes(searchLetters)) {
               return word;
            }
         });
      }

      this.setState({ effectiveArr: arr }, null);
   },


   render: function () {

      let checkInput = React.DOM.input({
         type: "checkbox", checked: this.state.isSort, onChange: this.sortAlphabetically,
      });

      let sortInput = React.DOM.input({
         value: this.state.searchLetters, onChange: this.sortWords,
      });

      let resetButton = React.DOM.button({ onClick: this.reset }, "Cброс"
      );

      let text = React.DOM.div({ className: 'text' },
         this.state.effectiveArr.join("\n")
      );

      return React.DOM.div({ className: "filter" },
         checkInput, sortInput, resetButton, text,
      );
   },
});