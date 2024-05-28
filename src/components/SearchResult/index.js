import { Component } from "react";

import Header from "../Header";
import MovieCard from "../MovieCard";

class SearchResult extends Component {
  state = {
    searchedMoviesList: [],
    searchInput: "",
  };

  componentDidMount() {
    this.getSearchedMovies();
  }

  getSearchedMovies = async () => {
    const { searchInput } = this.state;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchInput}&page=1`;
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    const updatedData = fetchedData.results.map((result) => ({
      id: result.id,
      title: result.title,
      poster: result.poster_path,
      rating: result.vote_average,
    }));
    this.setState({
      searchedMoviesList: updatedData,
    });
  };

  changeSearchInput = (searchInput) => {
    this.setState({ searchInput });
  };

  enterSearchInput = () => {
    this.getSearchedMovies();
  };

  render() {
    const { searchedMoviesList } = this.state;
    return (
      <>
        <Header
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
        />
        <div className="movies-container">
          <ul className="movies-list">
            {searchedMoviesList.map((movie) => (
              <MovieCard movieData={movie} key={movie.id} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default SearchResult;
