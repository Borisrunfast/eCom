import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchProductById from "../hooks/useFetchProductById";
import { CartContext } from "../context/CartContext";
import "../styles/product.css"

function Product() {
  const { id } = useParams();
  const { product, loading, error } = useFetchProductById(id);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  console.log(product)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  // Calculate discount percentage if any
  let discountPercentage = 0;
  if (product.discountedPrice < product.price) {
    discountPercentage = Math.round(
      ((product.price - product.discountedPrice) / product.price) * 100
    );
  }

  // Update local quantity state
  function handleQuantityChange(e) {
    const value = parseInt(e.target.value, 10);
    // Value is at least 1
    setQuantity(value >= 1 ? value : 1);
  }

  function handleAddToCart() {
    addToCart(product, quantity);
  }

  return (
    <div className="single-product">
      <h1>{product.title}</h1>

      <img src={product.imageUrl} alt={product.title} />

      <p>{product.description}</p>

      <div className="price-wrapper">
        {product.discountedPrice < product.price ? (
          <>
            <span className="original-price">${product.price}</span>
            <span className="discounted-price">
              ${product.discountedPrice}
            </span>
            <span className="discount">-{discountPercentage}%</span>
          </>
        ) : (
          <span className="normal-price">${product.price}</span>
        )}
      </div>

      {/* Quantity input (default 1) */}
      <div className="quantity-wrapper">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* (Optional) Display reviews if your API has them */}
      {product.reviews && product.reviews.length > 0 && (
        <section className="reviews">
          <h2>Reviews</h2>
          {product.reviews.map((review) => (
            <div key={review.id} className="review">
              <strong>{review.username}:</strong>
              <p>{review.description}</p>
              <p>Rating: {review.rating}/5</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Product;
