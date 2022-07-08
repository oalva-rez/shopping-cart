import React from "react";
import search from "../../assets/search.png";
import account from "../../assets/account.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/" data-testid="home-link">
        <h1>Sensuro</h1>
      </Link>
      <div className="header--btns">
        <img src={account} alt="account" />
        <img src={search} alt="search" />
        <Link className="cart-container" to="/cart" data-testid="cart-link">
          <img src={cart} alt="cart" />
          <div className="cart-count">{props.cart.length}</div>
        </Link>
      </div>
    </header>
  );
}
