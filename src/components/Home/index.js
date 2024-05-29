import { Component } from "react";

import Header from "../Header";
import MovieCard from "../MovieCard";
import "./index.css";

class Home extends Component {
  state = {
    moviesList: [],
    searchInput: "",
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies = async () => {
    const apiUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1";
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    const updatedData = fetchedData.results.map((result) => ({
      id: result.id,
      title: result.title,
      poster: result.poster_path,
      rating: result.vote_average,
    }));
    this.setState({
      moviesList: updatedData,
    });
  };

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
      moviesList: updatedData,
    });
  };

  changeSearchInput = (searchInput) => {
    this.setState({ searchInput });
  };

  enterSearchInput = () => {
    this.getSearchedMovies();
  };

  render() {
    const { moviesList } = this.state;
    return (
      <>
        <Header
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
        />
        <div className="movies-container">
          <ul className="movies-list">
            {moviesList.map((movie) => (
              <MovieCard movieData={movie} key={movie.id} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
