import React from "react";
import { IMovie } from "../../Interfaces/IMovie";
import MovieListItem from "../MovieListItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withMovieStoreService } from "../HOC";
import MovieStoreService from "../../services";
import { fetchMovies, movieAddedtoCart } from "../../Actions";
import { compose } from "../../Utils";

import "./MovieListContainer.css";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const MovieList = ({
  movies,
  onAddedtoCart
}: {
  movies: IMovie[];
  onAddedtoCart: any;
}) => {
  return (
    <ul className="MovieList">
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieListItem
              movie={movie}
              onAddedToCart={() => onAddedtoCart(movie.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

interface IMovieListProps {
  movies: IMovie[];
  movieStoreService: MovieStoreService;
  loading: boolean;
  error: any;
  fetchMovies: any;
  onAddedToCart: any;
}

interface IMovieListState {
  movies: IMovie[];
}

class MovieListContainer extends React.Component<
  IMovieListProps,
  IMovieListState
> {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) return <ErrorIndicator />;

    return <MovieList movies={movies} onAddedtoCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ movieList: { movies, loading, error } }: any) => {
  return {
    movies,
    loading,
    error
  };
};

const mapDispatchToProps = (
  dispatch: any,
  { movieStoreService }: IMovieListProps
) => {
  return bindActionCreators(
    {
      fetchMovies: fetchMovies(movieStoreService),
      onAddedToCart: movieAddedtoCart
    },
    dispatch
  );
};

export default compose(
  withMovieStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MovieListContainer);
