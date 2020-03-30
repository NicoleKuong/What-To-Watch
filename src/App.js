import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import DiscoverMoviesPage from "./pages/DiscoverMoviePage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/discover/:imdb_id" component={MoviePage} />
        <Route exact path="/discover" component={DiscoverMoviesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
