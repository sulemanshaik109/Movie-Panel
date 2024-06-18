import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import TopRated from "./Pages/TopRated";
import Upcoming from "./Pages/Upcoming";
import SearchResults from "./Pages/SearchResults";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies/:id" element={<MovieDetails />} />
        <Route exact path="/top-rated" element={<TopRated />} />
        <Route exact path="/upcoming" element={<Upcoming />} />
        <Route
          exact
          path="/search-results/:searchInput"
          element={<SearchResults />}
        />
      </Routes>
    </>
  );
};

export default App;
