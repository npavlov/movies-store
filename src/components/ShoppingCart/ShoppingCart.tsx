import React from "react";
import "./ShoppingCart.css";
import { ICartItem } from "../../Interfaces/ICartItem";
import { connect } from "react-redux";

import {
  movieAddedtoCart,
  movieRemovedfromCart,
  allMovieRemovedfromCart
} from "../../Actions";

interface IShoppingCartProps {
  items: ICartItem[];
  total: number;
  onIncrease: any;
  onDecrease: any;
  onDelete: any;
}

const ShoppingCart = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}: IShoppingCartProps) => {
  const renderRow = (item: ICartItem, idx: any) => {
    const { movie, quantity, total } = item;
    const { id, label } = movie;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{label}</td>
        <td>{quantity}</td>
        <td>{total}₽</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="ShoppingCart">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="Total">Total: {total}₽</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }: any) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: movieAddedtoCart,
  onDecrease: movieRemovedfromCart,
  onDelete: allMovieRemovedfromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
