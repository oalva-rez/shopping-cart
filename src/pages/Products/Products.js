import React from "react";
import { Link } from "react-router-dom";

export default function Catalog(props) {
  return (
    <div className="products">
      <h1 className="products-heading">All Products</h1>
      <div className="items">
        {props.products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/products/${product.id}`} data-testid="product-link">
              <img src={product.image} alt={product.name} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
