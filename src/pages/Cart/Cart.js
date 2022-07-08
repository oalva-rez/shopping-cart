import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  function getCartTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      console.log(item);
      let itemTotal = item.item.price * item.quantity;
      total += itemTotal;
    });
    return parseFloat(total).toFixed(2);
  }

  return props.cart.length > 0 ? (
    <div className="cart">
      <h1 className="cart-heading">Cart</h1>
      <div className="cart-items">
        {props.cart.map((item) => {
          return (
            <div className="item" key={item.item.id}>
              <img src={item.item.image} alt="" />
              <div className="item-details">
                <h3>{item.item.title}</h3>
                <p className="cart-desc">
                  <span className="bold">Description:</span>{" "}
                  {item.item.description}
                </p>
                <p>
                  <span className="bold">Size:</span>{" "}
                  {item.item.size ? item.item.size : "One Size"}
                </p>
                <p>
                  <span className="bold">Price:</span> ${item.item.price}
                </p>
                <p>
                  <span className="bold">Qty: </span>
                  {item.quantity}
                </p>
              </div>
              <div className="item-price">
                ${parseFloat(item.item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="remove-button"
                onClick={() => {
                  props.deleteItem(item.item.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart-total">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  ) : (
    <div className="cart-empty">
      <h1 className="cart-heading">Cart</h1>
      <h2 className="empty-msg">
        Your cart is currently empty.{" "}
        <Link to="/products" data-testid="keep-shopping-link">
          keep shopping.
        </Link>
      </h2>
    </div>
  );
}
