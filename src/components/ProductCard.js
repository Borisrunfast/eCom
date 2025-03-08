import React from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css"; 

function ProductCard({ product }) {
  const {
    id,
    title,
    imageUrl,
    price,
    discountedPrice,
    description,
  } = product;

  // Calculate discount percentage
  let discountPercentage = 0;
  if (discountedPrice < price) {
    discountPercentage = Math.round(
      ((price - discountedPrice) / price) * 100
    );
  }

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </Link>

      <div className="price">
        {discountedPrice < price ? (
          <>
            <span className="original-price">${price}</span>
            <span className="discounted-price">${discountedPrice}</span>
            <span className="discount">-{discountPercentage}%</span>
          </>
        ) : (
          <span className="normal-price">${price}</span>
        )}
      </div>

      <p className="short-description">
        {description?.substring(0, 50)}...
      </p>
    </div>
  );
}

export default ProductCard;
