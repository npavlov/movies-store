import { ICartItem } from "../Interfaces/ICartItem";
import { IMovie } from "../Interfaces/IMovie";
import updateMovieList from "./updateMovieList";
import updateShoppingCart from "./updateShoppingCart";

export interface IMovieList {
  movies: IMovie[];
  loading: boolean;
  error: any;
}

export interface IShoppingCart {
  cartItems: ICartItem[];
  orderTotal: number;
}

export interface IStore {
  movieList: IMovieList;
  shoppingCart: IShoppingCart;
}

const reducer = (state: IStore, action: any) => {
  return {
    movieList: updateMovieList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
