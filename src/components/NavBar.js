import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/about">About</NavLink>
      <br />
      <NavLink to="/discover">Discover Movies</NavLink>
      <br />
    </div>
  );
}
