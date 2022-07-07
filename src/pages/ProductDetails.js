import { React, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(() =>
    props.products.filter((prod) => Number(prod.id) === Number(id))
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="content">
      <div className="product">
        <div className="image">
          <img src={product[0].image} alt="" />
        </div>
        <div className="details">
          <h2>{product[0].title}</h2>
          <h3>${product[0].price}</h3>
          <p>{product[0].description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            voluptate neque harum. Quam facere accusamus exercitationem in
            quidem mollitia eligendi porro eos voluptates iure incidunt,
            laudantium sed harum omnis quasi?
          </p>
          <div className="qty">
            <div className="qty">
              <button
                className="qty-count qty-count--minus"
                data-action="minus"
                onClick={() => {
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
                }}
              >
                -
              </button>
              <input
                className="product-qty"
                type="number"
                name="product-qty"
                min="0"
                max="10"
                value={quantity}
                readOnly
              />
              <button
                className="qty-count qty-count--add"
                data-action="add"
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                props.updateCart(product[0], quantity);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
