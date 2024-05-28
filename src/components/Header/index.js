import { Link } from "react-router-dom";
import "./index.css";

const Header = (props) => {
  const { changeSearchInput, enterSearchInput, searchInput } = props;

  const onChangeSearchInput = (event) => {
    changeSearchInput(event.target.value);
  };

  const onEnterSearchInput = () => {
    enterSearchInput();
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="logo-container">
          <h1 className="logo">MovieDb</h1>
        </div>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Popular
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/top-rated" className="nav-link">
              Top Rated
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/upcoming" className="nav-link">
              Upcoming
            </Link>
          </li>
          <li className="search-input-container">
            <Link to="/search-result">
              <input
                type="search"
                className="search-input"
                placeholder="Movie Name"
                value={searchInput}
                onChange={onChangeSearchInput}
              />
            </Link>
            <button
              className="search-btn"
              type="button"
              onClick={onEnterSearchInput}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
