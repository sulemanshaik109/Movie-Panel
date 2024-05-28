import { Link } from "react-router-dom";

import "./index.css";

const MovieCard = (props) => {
  const { movieData } = props;
  const { id, title, poster, rating } = movieData;

  return (
    <li className="movie-item">
      <Link to={`/movies/${id}`} className="link-item">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
          className="movie-poster"
        />
        <h1 className="title">{title}</h1>
        <p className="rating">Rating: {rating}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
