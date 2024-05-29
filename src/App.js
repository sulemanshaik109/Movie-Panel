import { Route, Routes } from "react-router-dom";
import { Component } from "react";

import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies/:id" element={<MovieDetails />} />
        <Route exact path="/top-rated" element={<TopRated />} />
        <Route exact path="/upcoming" element={<Upcoming />} />
      </Routes>
    );
  }
}

export default App;
