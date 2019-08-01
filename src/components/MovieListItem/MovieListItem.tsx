import React from "react";
import { IMovie } from "../../Interfaces/IMovie";
import "./MovieListItem.css";
import { Genre } from "../../Interfaces/IMovie";

interface IMovieListItem {
  movie: IMovie;
  onAddedToCart: any;
}

const MovieListItem = ({ movie, onAddedToCart }: IMovieListItem) => {
  const { label, genre, director, price, image } = movie;
  return (
    <div className="MovieListItem">
      <div className="MovieCover">
        <img src={image} alt="cover" />
      </div>
      <div className="MovieDetails">
        <span className="MovieTitle">{label}</span>
        <div className="MoviePrice">{price}₽</div>
        <div className="MovieDirector">{director}</div>
        <div className="MovieGenre">{Genre[genre]}</div>
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MovieListItem;
