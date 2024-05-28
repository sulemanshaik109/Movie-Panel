import { Component } from "react";

import Header from "../Header";
import MovieCard from "../MovieCard";

class Upcoming extends Component {
  state = {
    upcomingMoviesList: [],
  };

  componentDidMount() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies = async () => {
    const apiUrl =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1";
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    const updatedData = fetchedData.results.map((result) => ({
      id: result.id,
      title: result.title,
      poster: result.poster_path,
      rating: result.vote_average,
    }));
    this.setState({
      upcomingMoviesList: updatedData,
    });
  };

  render() {
    const { upcomingMoviesList } = this.state;
    return (
      <>
        <Header />
        <div className="movies-container">
          <ul className="movies-list">
            {upcomingMoviesList.map((movie) => (
              <MovieCard movieData={movie} key={movie.id} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Upcoming;
