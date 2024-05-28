import "./index.css";

const CastItem = (props) => {
  const { castData } = props;
  const { profile, name, character } = castData;

  return (
    <div className="cast-data">
      <img
        src={`https://image.tmdb.org/t/p/w500${profile}`}
        alt={name}
        className="profile"
      />
      <p className="name">{name}</p>
      <p className="character">Character : {character}</p>
    </div>
  );
};

export default CastItem;
