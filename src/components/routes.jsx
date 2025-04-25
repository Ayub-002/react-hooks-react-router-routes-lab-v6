import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movie from "./components/Movie";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}

export default AppRoutes;
