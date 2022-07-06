import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Catalog(props) {
  function displayProducts() {
    return props.products.map((product) => (
      <div className="product" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </Link>
      </div>
    ));
  }

  return (
    <div className="products">
      <div className="items">{displayProducts()}</div>
    </div>
  );
}
