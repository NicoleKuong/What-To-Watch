import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("");
  const [results, set_results] = useState([]);
  const search = async () => {
    console.log("Start searching for:", searchText);
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);
    console.log("text", typeof queryParam);
    // Option B: use the `axios` library like we did on Tuesday
    const movies = await axios.get(
      `https://omdbapi.com/?apikey=2ca7e9df&s=${queryParam}`
    );
    // console.log("Success!", movies.data);
    const resultArray = movies.data.Search;
    // console.log("result", resultArray);
    set_results(resultArray);
  };
  console.log("results", results);
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {!results && <p>Searching...</p>}
      {results &&
        results.map((result, index) => {
          return (
            <div key={index}>
              <Link to={`/discover/${result.imdbID}`}>
                <p>{result.Title}</p>
              </Link>
              <img src={result.Poster} alt="movie image" />
            </div>
          );
        })}
    </div>
  );
}
