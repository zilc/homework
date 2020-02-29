import React, { Component, Fragment } from "react";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The suggestions that match user's input
      filteredSuggestions: [],
      // Whether the suggestion list is shown
      showSuggestions: false,
      // User value
      userInput: "",
      // Whether the input element was clicked
      inputClicked: false
    };
  }
}

export default Autocomplete;
