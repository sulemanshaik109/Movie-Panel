import { Component } from "react";
import axios from "axios";

import { withRouter } from "../../components/withRouter";
import CastItem from "../../components/CastItem";
import "./index.css";

class MovieDetails extends Component {
  state = { movieData: {}, cast: [] };

  componentDidMount() {
    this.getMovieDetails();
    this.getCast();
  }

  getMovieDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const apiKey = "c45a857c193f6302f2b5061c3b85e743";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const response = await axios.get(apiUrl);
    const date = new Date(response.data.release_date);
    const updatedData = {
      title: response.data.title,
      rating: response.data.vote_average,
      runtime: response.data.runtime,
      genres: response.data.genres,
      releaseDate: date.toDateString(),
      overview: response.data.overview,
      bannerUrl: response.data.backdrop_path,
      posterUrl: response.data.poster_path,
    };
    this.setState({ movieData: updatedData });
  };

  getCast = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const apiKey = "c45a857c193f6302f2b5061c3b85e743";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
    const response = await axios.get(apiUrl);
    const updatedData = response.data.cast.map((eachData) => ({
      id: eachData.id,
      profile: eachData.profile_path,
      name: eachData.name,
      character: eachData.character,
    }));
    this.setState({ cast: updatedData });
  };

  render() {
    const { movieData, cast } = this.state;
    const {
      title,
      rating,
      runtime,
      genres,
      releaseDate,
      overview,
      bannerUrl,
      posterUrl,
    } = movieData;
    return (
      <div className="movie-data-container">
        <div className="banner-container">
          <div className="about-movie">
            <div className="movie-details">
              <img
                src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
                alt={title}
                className="poster-img"
              />
              <div className="movie-data">
                <h1 className="movie-title">{title}</h1>
                <p className="movie-rating">Rating: {rating}</p>
                <div className="runtime-and-genres">
                  <p className="runtime">{runtime} min</p>
                  <ul className="genres-list">
                    {genres &&
                      genres.map((eachGenre) => (
                        <li className="genre" key={eachGenre.id}>
                          {eachGenre.name},
                        </li>
                      ))}
                  </ul>
                </div>
                <p className="release-date">Release Date : {releaseDate}</p>
              </div>
            </div>
            <p className="overview-heading">Overview</p>
            <p className="overview">{overview}</p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${bannerUrl}`}
            alt={title}
            className="banner"
          />
        </div>
        <div className="cast-container">
          <p className="cast-heading">Cast</p>
          <ul className="cast-list">
            {cast &&
              cast.map((eachCast) => (
                <CastItem castData={eachCast} key={eachCast.id} />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetails);
