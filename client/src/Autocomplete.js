import React, { Component, Fragment } from "react";
import { debounce } from "lodash";

const apiKey = "87d395aaa72bae75df666834b8e838d3";
const hostUrl = "https://api.themoviedb.org/3";

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

  getInfo = debounce(() => {
    if (this.state.userInput.length > 2) {
      fetch(
        `${hostUrl}/search/movie?api_key=${apiKey}&language=en-US&query=
        ${this.state.userInput}`
      )
        .then(results => results.json())
        .then(results => {
          this.setState({
            filteredSuggestions: results.results
              .map(obj => ({
                title: obj.title,
                rating: obj.vote_average,
                id: obj.id,
                release_date: obj.release_date
                  ? obj.release_date.split("-")[0]
                  : "-"
              }))
              .slice(0, 8)
          });
        });
    }
  }, 150);
}

export default Autocomplete;
