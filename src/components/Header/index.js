import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const history = useNavigate();

  const onSubmitSearchInput = (event) => {
    event.preventDefault();
    if (searchInput === "") {
      history("/");
    } else {
      history(`/search-results/${searchInput}`);
    }
  };

  return (
    <nav className="nav-header">
      <div className="mobile-nav-content">
        <div className="mobile-logo-container">
          <Link to="/" className="link-logo">
            <h1 className="logo">MovieDb</h1>
          </Link>
          <form
            className="mobile-search-input-container"
            onSubmit={onSubmitSearchInput}
          >
            <input
              type="search"
              className="mobile search-input"
              placeholder="Movie Name"
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
            />
            <button className="mobile-btn" type="submit">
              Search
            </button>
          </form>
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
          <form
            className="search-input-container"
            onSubmit={onSubmitSearchInput}
          >
            <input
              type="search"
              className="search-input"
              placeholder="Movie Name"
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
