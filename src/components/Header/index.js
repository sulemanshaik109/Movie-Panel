import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const Header = (props) => {
  const { changeSearchInput, enterSearchInput, searchInput } = props;

  const onChangeSearchInput = (event) => {
    changeSearchInput(event.target.value);
  };

  const onClickingEnter = (event) => {
    if (event.key === "Enter") {
      enterSearchInput();
    }
  };

  const onEnterSearchInput = () => {
    enterSearchInput();
  };

  return (
    <nav className="nav-header">
      <div className="mobile-nav-content">
        <div className="mobile-logo-container">
          <Link to="/" className="link-logo">
            <h1 className="logo">MovieDb</h1>
          </Link>
          <div className="mobile-search-input-container">
            <input
              type="search"
              className="mobile search-input"
              placeholder="Movie Name"
              value={searchInput}
              onChange={onChangeSearchInput}
            />
            <button
              className="mobile-btn"
              type="button"
              onClick={onEnterSearchInput}
            >
              <FaSearch color={"#ffffff"} />
            </button>
          </div>
        </div>
        <ul className="nav-mobile-menu">
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
        </ul>
      </div>
      <div className="desktop-nav-content">
        <Link to="/" className="link-logo">
          <h1 className="logo">MovieDb</h1>
        </Link>
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
            <input
              type="search"
              className="search-input"
              placeholder="Movie Name"
              value={searchInput}
              onChange={onChangeSearchInput}
              onKeyDown={onClickingEnter}
            />
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
