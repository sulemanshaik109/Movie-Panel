import { Component } from "react";

import axios from "axios";
import MovieCard from "../../components/MovieCard";

class TopRated extends Component {
  state = {
    topRatedMoviesList: [],
    currentPage: 1,
    itemsPerPage: 8,
  };

  componentDidMount() {
    this.getTopRatedMovies();
  }

  getTopRatedMovies = async () => {
    const apiKey = "c45a857c193f6302f2b5061c3b85e743";
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    const response = await axios.get(apiUrl);
    const updatedData = response.data.results.map((result) => ({
      id: result.id,
      title: result.title,
      poster: result.poster_path,
      rating: result.vote_average,
    }));
    this.setState({
      topRatedMoviesList: updatedData,
    });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage > 1 ? prevState.currentPage - 1 : 1,
    }));
  };

  handleNextClick = () => {
    const { topRatedMoviesList, itemsPerPage } = this.state;
    if (topRatedMoviesList) {
      const pageCount = Math.ceil(topRatedMoviesList.length / itemsPerPage);
      this.setState((prevState) => ({
        currentPage:
          prevState.currentPage !== pageCount
            ? prevState.currentPage + 1
            : pageCount,
      }));
    }
  };

  render() {
    const { topRatedMoviesList, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    if (topRatedMoviesList) {
      const currentItems = topRatedMoviesList.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      const pageCount = Math.ceil(topRatedMoviesList.length / itemsPerPage);

      return (
        <div className="movies-container">
          <ul className="movies-list">
            {currentItems &&
              currentItems.map((movie) => (
                <MovieCard movieData={movie} key={movie.id} />
              ))}
          </ul>
          <ul className="pagination-container">
            <li>
              <button
                className={`page-control-btn ${
                  currentPage === 1 && "disabled-btn"
                }`}
                onClick={this.handlePrevClick}
                disabled={currentPage === 1}
              >
                &le; Prev
              </button>
            </li>
            {Array.from({ length: pageCount }, (item, index) => (
              <li key={index}>
                <a
                  className={`page-number ${
                    index + 1 === currentPage && "active"
                  }`}
                  onClick={() => this.handlePageChange(index + 1)}
                  href="!#"
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <button
                className={`page-control-btn ${
                  currentPage === pageCount && "disabled-btn"
                }`}
                onClick={this.handleNextClick}
                disabled={currentPage === pageCount}
              >
                Next &ge;
              </button>
            </li>
          </ul>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default TopRated;
