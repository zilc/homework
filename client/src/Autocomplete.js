import React, { Component, Fragment } from "react";
import { debounce } from "lodash";
import { SearchIcon, MovieIcon } from "./Icons";

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
      inputClicked: false,
      fade: false
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

  onBlur = () => {
    this.checkBlur();
  };

  checkBlur() {
    if (this.state.showSuggestions === false) {
      this.setState({ inputClicked: false });
    }
  }

  //when user clicks on the grey input box
  onInputClick = () => {
    this.setState({ inputClicked: true, fade: true });
  };

  //When the input value is changed
  onChange = e => {
    this.setState({
      userInput: e.currentTarget.value
    });

    if (e.currentTarget.value.length > 2) {
      this.setState(
        {
          showSuggestions: true
        },
        this.getInfo
      );
    } else {
      this.setState({
        showSuggestions: false
      });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onInputClick,
      onBlur,
      state: {
        filteredSuggestions,
        showSuggestions,
        userInput,
        inputClicked,
        fade
      }
    } = this;
    let secondInputComponent;
    if (inputClicked) {
      secondInputComponent = (
        <div className={fade ? "fade" : ""}>
          <input
            autoFocus="autofocus"
            className="input-clicked"
            onChange={onChange}
            onBlur={onBlur}
            value={userInput}
          />
          <MovieIcon
            className="movie-icon-input"
            color="black"
            size={23}
            strokeWidth={1.5}
          ></MovieIcon>
          <label className="input-label">Enter a movie name</label>
        </div>
      );
    }

    return (
      <Fragment>
        <div className="component-container">
          <div className="input-container">
            <div className="input-container__input">
              <MovieIcon className="movie-icon" color="white"></MovieIcon>

              <div className="input-clickable" onClick={onInputClick}>
                {userInput ? userInput : "Enter movie name"}
              </div>
              {secondInputComponent}
            </div>
            <button>
              <SearchIcon
                color="#ff690f"
                size={33}
                strokeWidth={1.5}
              ></SearchIcon>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Autocomplete;
