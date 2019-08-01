import { ICartItem } from "../Interfaces/ICartItem";
import { IMovie } from "../Interfaces/IMovie";
import { IStore } from ".";

const updateShoppingCart = (state: IStore, action: any) => {
  if (state === undefined) {
    return { cartItems: [], orderTotal: 0 };
  }

  const { type, payload } = action;
  switch (type) {
    case "MOVIE_ADDED_TO_CART": {
      return UpdateOrder(state, payload, 1);
    }
    case "MOVIE_REMOVED_FROM_CART": {
      return UpdateOrder(state, payload, -1);
    }
    case "ALL_MOVIES_REMOVED_FROM_CART": {
      const item = state.shoppingCart.cartItems.find(
        x => x.movie.id === payload
      );
      return UpdateOrder(state, payload, -item.quantity);
    }
    default: {
      return state.shoppingCart;
    }
  }
};

const UpdateOrder = (state: IStore, movieId: number, count: number) => {
  const {
    movieList: { movies },
    shoppingCart: { cartItems }
  } = state;

  const movie = movies.find(({ id }) => id === movieId);

  if (!movie) return { ...state };

  const idx = cartItems.findIndex((x: ICartItem) => x.movie.id === movie.id);

  const item = cartItems[idx];

  let newItem = UpdateCartItem(movie, item, count);

  return {
    orderTotal: 0,
    cartItems: UpdateCartItems(cartItems, newItem, idx)
  };
};

const UpdateCartItems = (
  cartItems: ICartItem[],
  item: ICartItem,
  idx: number
) => {
  if (item.quantity === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
  }
};

const UpdateCartItem = (
  movie: IMovie,
  item: any = {},
  count: number
): ICartItem => {
  const { quantity = 0, total = 0 } = item;

  return {
    movie: movie,
    quantity: quantity + count,
    total: total + count * movie.price
  };
};

export default updateShoppingCart;
