import React from "react";
import search from "../../assets/search.png";
import account from "../../assets/account.png";
import cart from "../../assets/cart.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Link to="/">
        <h1>Sensuro</h1>
      </Link>
      <div className="header--btns">
        <img src={account} alt="account" />
        <img src={search} alt="search" />
        <div className="cart-container">
          <img src={cart} alt="cart" onClick={() => navigate("/cart")} />
          <div className="cart-count">{props.cart.length}</div>
        </div>
      </div>
    </header>
  );
}