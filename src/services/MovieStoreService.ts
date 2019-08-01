import { IMovie, Genre } from "../Interfaces/IMovie";
import { IMovieStoreService } from "../Interfaces/IMovieStoreService";

export default class MovieStoreService implements IMovieStoreService {
  data: IMovie[] = [
    {
      id: 1,
      label: "The Terminator",
      genre: Genre.Action,
      director: "James Cameron",
      price: 200,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Terminator1984movieposter.jpg/220px-Terminator1984movieposter.jpg"
    },
    {
      id: 2,
      label: "Avatar",
      genre: Genre.Fanastics,
      director: "James Cameron",
      price: 500,
      image: "https://images-na.ssl-images-amazon.com/images/I/41kTVLeW1CL.jpg"
    }
  ];

  getMovies(): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        //reject(new Error("провал"));
      }, 2700);
    });
  }
}
