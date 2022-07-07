import React from "react";

export default function Cart(props) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
        {props.cart.map((item) => {
          return (
            <div className="item" key={item.item.id}>
              <img src="" alt="" />
              <div className="item-details">
                <h3>{item.item.title}</h3>
                <p>Description: {item.item.description}</p>
                <p>Size: {item.item.size ? item.item.size : "One Size"}</p>
                <p>Price: {item.item.price}</p>
                <p>x{item.quantity}</p>
              </div>
              <div className="item-price">
                {parseFloat(item.item.price * item.quantity).toFixed(2)}
              </div>
              <button
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
    </div>
  );
}
