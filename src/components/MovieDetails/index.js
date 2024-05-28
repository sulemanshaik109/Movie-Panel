import { Component } from "react";
import { useParams } from "react-router-dom";

import Header from "../Header";
import CastItem from "../CastItem";
import "./index.css";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

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
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    const date = new Date(fetchedData.release_date);
    const updatedData = {
      title: fetchedData.title,
      rating: fetchedData.vote_average,
      runtime: fetchedData.runtime,
      genres: fetchedData.genres,
      releaseDate: date.toDateString(),
      overview: fetchedData.overview,
      bannerUrl: fetchedData.backdrop_path,
      posterUrl: fetchedData.poster_path,
    };
    this.setState({ movieData: updatedData });
  };

  getCast = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    const updatedData = fetchedData.cast.map((eachData) => ({
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
      <>
        <Header />
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
                  <ul className="runtime-and-genres">
                    <li className="runtime">{runtime} min</li>
                    {genres &&
                      genres.map((eachGenre) => (
                        <li className="genre" key={eachGenre.id}>
                          {eachGenre.name},
                        </li>
                      ))}
                  </ul>
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
      </>
    );
  }
}

export default withRouter(MovieDetails);
