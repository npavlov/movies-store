import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ numItems, total }: any) => {
  return (
    <header className="Header row">
      <Link to="/">
        <div className="Logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="ShoppingCart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items ({total}₽)
        </div>
      </Link>
    </header>
  );
};

export default Header;
