import React from "react";
import MovieList from "../MovieListContainer";
import ShoppingCart from "../ShoppingCart";

const HomePage = () => {
  return (
    <div>
      <MovieList />
      <ShoppingCart />
    </div>
  );
};

export default HomePage;
