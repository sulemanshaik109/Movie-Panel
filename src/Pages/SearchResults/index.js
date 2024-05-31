import { Component } from "react";

import axios from "axios";
import { withRouter } from "../../components/withRouter";
import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";

class SearchResults extends Component {
  state = {
    moviesList: [],
    currentPage: 1,
    totalPages: 0,
  };

  componentDidMount() {
    this.getSearchResults();
  }

  getSearchResults = async () => {
    const { match } = this.props;
    const { params } = match;
    const { searchInput } = params;
    const { currentPage } = this.state;
    const apiKey = "c45a857c193f6302f2b5061c3b85e743";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}&page=${currentPage}`;
    const responseObject = await axios.get(apiUrl);
    const updatedData = responseObject.data.results.map((result) => ({
      id: result.id,
      title: result.title,
      poster: result.poster_path,
      rating: result.vote_average,
    }));
    this.setState({
      moviesList: updatedData,
      totalPages: responseObject.data.total_pages,
    });
  };

  handelPageClick = (pageNumber) => {
    this.setState({ currentPage: pageNumber }, this.getSearchResults);
  };

  render() {
    const { moviesList, totalPages } = this.state;
    return (
      <div className="movies-container">
        <ul className="movies-list">
          {moviesList &&
            moviesList.map((movie) => (
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

export default withRouter(SearchResults);
