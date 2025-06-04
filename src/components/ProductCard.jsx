import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const{addToCart}  = useCart()


  return (
    <>
      <div className="col" key={product.id}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={product.image}
            className="card-img-top h-50 w-50 m-auto"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title.slice(0, 30)}</h5>
            <p className="card-text">{product.description.slice(0, 60)}</p>
            <p className="card-text">₹ {product.price}</p>
            <Link to="#" className="btn btn-primary" onClick={() => addToCart(product)}>
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
