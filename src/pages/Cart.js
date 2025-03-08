import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate total cost
  const total = cartItems.reduce((acc, item) => {
    const productPrice = item.discountedPrice < item.price
      ? item.discountedPrice
      : item.price;
    return acc + productPrice * item.quantity;
  }, 0);

  // If empty
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
        <Link to="/">Go back to products</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price (Each)</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const productPrice = item.discountedPrice < item.price
              ? item.discountedPrice
              : item.price;
            const itemSubtotal = productPrice * item.quantity;

            return (
              <tr key={item.id}>
                {/* Use data-label on each cell for mobile */}
                <td data-label="Product">{item.title}</td>
                <td data-label="Price">${productPrice}</td>
                <td data-label="Quantity">{item.quantity}</td>
                <td data-label="Subtotal">${itemSubtotal.toFixed(2)}</td>
                <td data-label="">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <div className="cart-actions">
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
