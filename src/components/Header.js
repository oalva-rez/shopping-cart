import React from "react";
import search from "../assets/search.png";
import account from "../assets/account.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Sensuro</h1>
      </Link>
      <div className="header--btns">
        <img src={account} alt="account" />
        <img src={search} alt="search" />
        <img src={cart} alt="cart" />
      </div>
    </header>
  );
}
