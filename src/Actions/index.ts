import { IMovie } from "../Interfaces/IMovie";
import { IMovieStoreService } from "../Interfaces/IMovieStoreService";

const moviesLoaded = (newMovies: IMovie[]) => {
  return {
    type: "FETCH_MOVIE_SUCCESS",
    payload: newMovies
  };
};

const moviesRequested = () => {
  return {
    type: "FETCH_MOVIE_REQUEST"
  };
};

const moviesError = (error: any) => {
  console.log(error);
  return {
    type: "FETCH_MOVIE_FAILURE",
    payload: error
  };
};

const movieAddedtoCart = (movieId: number) => {
  console.log(movieId);
  return {
    type: "MOVIE_ADDED_TO_CART",
    payload: movieId
  };
};

const movieRemovedfromCart = (movieId: number) => {
  return {
    type: "MOVIE_REMOVED_FROM_CART",
    payload: movieId
  };
};
const allMovieRemovedfromCart = (movieId: number) => {
  return {
    type: "ALL_MOVIES_REMOVED_FROM_CART",
    payload: movieId
  };
};

const fetchMoviesOld = (
  disptach: any,
  movieStoreService: IMovieStoreService
) => () => {
  disptach(moviesRequested());
  movieStoreService
    .getMovies()
    .then(data => {
      disptach(moviesLoaded(data));
    })
    .catch(err => {
      console.log(moviesError);
      disptach(moviesError(err));
    });
};

const fetchMovies = (movieStoreService: IMovieStoreService) => () => (
  dispatch: any,
  getState: any
) => {
  console.log(getState);
  const ttt = getState();
  console.log(ttt);
  dispatch(moviesRequested());
  movieStoreService
    .getMovies()
    .then(data => {
      dispatch(moviesLoaded(data));
    })
    .catch(err => {
      console.log(moviesError);
      dispatch(moviesError(err));
    });
};

export {
  fetchMovies,
  movieAddedtoCart,
  movieRemovedfromCart,
  allMovieRemovedfromCart
};
