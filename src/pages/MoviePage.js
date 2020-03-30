import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const route_parameters = useParams();
  const imdb_id = route_parameters.imdb_id;
  const [movieData, set_movieData] = useState({});
  console.log("render", route_parameters);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://omdbapi.com/?apikey=2ca7e9df&i=${imdb_id}`
      );
      console.log("data", res);
      set_movieData(res.data);
    }
    fetchData();
  }, [imdb_id]);
  console.log("movie??", movieData.Title);
  return (
    <div>
      <p>{movieData.Title}</p>
      <img src={movieData.Poster} alt="movie image" />
      <p>{movieData.Plot}</p>
    </div>
  );
}
