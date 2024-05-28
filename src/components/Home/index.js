import { Component } from "react";

import Header from "../Header";
import MovieCard from "../MovieCard";
import "./index.css";

class Home extends Component {
  state = {
    allMoviesList: [],
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
      allMoviesList: updatedData,
    });
  };

  render() {
    const { allMoviesList } = this.state;
    return (
      <>
        <Header />
        <div className="movies-container">
          <ul className="movies-list">
            {allMoviesList.map((movie) => (
              <MovieCard movieData={movie} key={movie.id} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
