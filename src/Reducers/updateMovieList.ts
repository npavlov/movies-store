import { IStore } from ".";

const updateMovieList = (state: IStore, action: any) => {
  if (state === undefined) {
    return { movies: [], loading: true, error: null };
  }

  const { type, payload } = action;
  switch (type) {
    case "FETCH_MOVIE_SUCCESS":
      return {
        movies: payload,
        loading: false,
        error: null
      };

    case "FETCH_MOVIE_REQUEST":
      return {
        movies: [],
        loading: true,
        error: null
      };

    case "FETCH_MOVIE_FAILURE":
      return {
        movies: [],
        error: payload,
        loading: false
      };
    default: {
      return state.movieList;
    }
  }
};

export default updateMovieList;
