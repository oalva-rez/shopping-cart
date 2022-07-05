import React from "react";
import search from "../assets/search.png";
import account from "../assets/account.png";
import cart from "../assets/cart.png";

export default function Header() {
  return (
    <header className="header">
      <h1>Sensuro</h1>
      <div className="header--btns">
        <img src={account} alt="account" />
        <img src={search} alt="search" />
        <img src={cart} alt="cart" />
      </div>
    </header>
  );
}
