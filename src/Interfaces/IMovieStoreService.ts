import { IMovie } from "./IMovie";

export interface IMovieStoreService {
  getMovies(): Promise<IMovie[]>;
}
