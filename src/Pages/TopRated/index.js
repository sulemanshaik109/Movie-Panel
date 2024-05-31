import { Component } from "react";

import axios from "axios";
import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";

class TopRated extends Component {
  state = {
    topRatedMoviesList: [],
    currentPage: 1,
    totalPages: 0,
  };

  componentDidMount() {
    this.getTopRatedMovies();
  }

  getTopRatedMovies = async () => {
    const { currentPage } = this.state;
    const apiKey = "c45a857c193f6302f2b5061c3b85e743";
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`;
    const responseObject = await axios.get(apiUrl);
    const updatedData = responseObject.data.results.map((result) => ({
      id: result.id,
      title: result.title,
      poster: result.poster_path,
      rating: result.vote_average,
    }));
    this.setState({
      topRatedMoviesList: updatedData,
      totalPages: responseObject.data.total_pages,
    });
  };

  handelPageClick = (pageNumber) => {
    this.setState({ currentPage: pageNumber }, this.getTopRatedMovies);
  };

  render() {
    const { topRatedMoviesList, totalPages } = this.state;
    return (
      <div className="movies-container">
        <ul className="movies-list">
          {topRatedMoviesList &&
            topRatedMoviesList.map((movie) => (
              <MovieCard movieData={movie} key={movie.id} />
            ))}
        </ul>
        <Pagination
          totalPages={totalPages}
          handelPageClick={this.handelPageClick}
        />
      </div>
    );
  }
}

export default TopRated;
